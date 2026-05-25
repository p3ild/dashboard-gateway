import { getCoreMetaStateByPath } from '@core/stateManage/metadataState';
import { getPickerStateByPath } from '@core/stateManage/corePickerState';
import { parallel } from 'async';
import { flatten } from 'lodash';
import { getDisableColDataObject, listingRowByOuGroup, sumMultiRow } from '../../common/ui/RowRender';
import { getApprovalConfig } from '../../common/utils/approval';
import { getOrgParentIDByChildOuGroup } from '../../common/utils/orgBuilder';
import { DATASET, ORG_GROUP } from '../constant';

export const getDataCommon = async (props) => {
    props = {
        ...props,
        // dx: props,
        DEFAULT_COL_LENGTH: props.defaultCol,
        listColumnConfig: props.listColumnConfig,
        approvalUtils: getCoreMetaStateByPath('networkUtils.ApprovalUtils')
    };

    let colDisable = [2, 3, 7, 8]

    let orgFullFlatMap = getPickerStateByPath('orgFullFlatMap');
    let orgFullArray = Object.values(orgFullFlatMap);

    let reqPublicHealthGroup = [
        {
            orgUnitGroupQueryTarget: [
                ORG_GROUP.TW_CSYT_KLN,
            ],
            orgUnit: getOrgParentIDByChildOuGroup({ orgFullArray, orgUnit: props.orgUnit, ouAggregateLevel: 3, ouChildGroup: [ORG_GROUP.TW_CSYT_KLN] }),
            includeTotalRow: ["I", <p>Cấp TW, Y tế ngành</p>],
            ...getApprovalConfig({ ...props, ds: DATASET.B12_NCD, approvalKey: 'TW' })
        },
        {
            orgUnitGroupQueryTarget: [
                ORG_GROUP.TINH_CSYT_CONG_KLN
            ],
            orgUnit: getOrgParentIDByChildOuGroup({ orgFullArray, orgUnit: props.orgUnit, ouAggregateLevel: 3, ouChildGroup: [ORG_GROUP.TINH_CSYT_CONG_KLN] }),
            includeTotalRow: ["II", <p>Cấp tỉnh</p>],
            ...getApprovalConfig({ ...props, ds: DATASET.B12_NCD, approvalKey: 'TINH' })
        },
        {
            orgUnitGroupQueryTarget: [
                ORG_GROUP.XA_DVHC
            ],
            orgUnit: getOrgParentIDByChildOuGroup({ orgFullArray, orgUnit: props.orgUnit, ouAggregateLevel: 3, ouChildGroup: [ORG_GROUP.XA_DVHC] }),
            includeTotalRow: ["III", <p>Cấp xã</p>],
            ...getApprovalConfig({ ...props, ds: DATASET.B12_NCD_TYT, approvalKey: 'XA' })
        }
    ];

    let reqPrivateHealthGroup = [
        {
            orgUnitGroupQueryTarget: [
                ORG_GROUP.TINH_YTTN_KLN
            ],
            orgUnit: getOrgParentIDByChildOuGroup({ orgFullArray, orgUnit: props.orgUnit, ouAggregateLevel: 3, ouChildGroup: [ORG_GROUP.TINH_YTTN_KLN] }),
            includeTotalRow: ["B", <p>Y tế tư nhân</p>],
            ...getApprovalConfig({ ...props, ds: DATASET.B12_NCD, approvalKey: 'TN' })
        }
    ]


    let dataOrgGroupSet = await parallel(
        [
            ...reqPublicHealthGroup.map((reqProps, idx) => {
                return cb => listingRowByOuGroup({
                    ...props,
                    ...reqProps
                }).then(res => {
                    let isIncludeXa = (reqProps.orgUnitGroup || reqProps.orgUnitGroupQueryTarget || []).some(x => x == ORG_GROUP.XA_DVHC)
                    !isIncludeXa && colDisable.forEach(colDisable => res.listRow.map(e => {
                        e[colDisable] = getDisableColDataObject();
                        return e
                    }))
                    reqPublicHealthGroup[idx] = {
                        ...reqPublicHealthGroup[idx],
                        ...res
                    };
                    cb(null, res)
                })
            }),
            ...reqPrivateHealthGroup.map((reqProps, idx) => {
                return cb => listingRowByOuGroup({
                    ...props,
                    ...reqProps
                }).then(res => {
                    colDisable.forEach(colDisable => res.listRow.map(e => {
                        e[colDisable] = getDisableColDataObject();
                        return e
                    }))
                    reqPrivateHealthGroup[idx] = {
                        ...reqPrivateHealthGroup[idx],
                        ...res
                    };
                    cb(null, res)
                })
            }),
        ]

    )

    let listRowPublicHealth = flatten(reqPublicHealthGroup.map(e => e.listRow));
    let listRowPrivateHealth = flatten(reqPrivateHealthGroup.map(e => e.listRow));

    let rowTotalPublicHealth = sumMultiRow({
        ...props,
        listRow: reqPublicHealthGroup.map(e => e.listRow[0]),
        includeTotalRow: ["A", <p>Y tế công</p>]
    })
    // rowTotalPublicHealth[0].className = 'sticky-row-1';

    let rowTotalAll = sumMultiRow({
        ...props,
        listRow: [
            rowTotalPublicHealth,
            listRowPrivateHealth[0]
        ],
        includeTotalRow: ["", <p>Tổng số</p>]
    })
    // rowTotalAll[0].className = 'sticky-row-0';

    let listRow = [
        rowTotalAll,
        rowTotalPublicHealth,
        ...listRowPublicHealth,
        ...listRowPrivateHealth
    ]

    return {
        dataByRow: listRow
    }
}