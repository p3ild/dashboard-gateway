import { getCoreMetaStateByPath } from '@core/stateManage/metadataState';
import { parallel } from 'async';
import { flatten } from 'lodash';
import { listingRowByOuGroup, sumMultiRow } from '../../common/ui/RowRender';
import { getApprovalConfig } from '../../common/utils/approval';
import { DATASET, ORG_GROUP } from '../constant';
import { getPickerStateByPath } from '@core/stateManage/corePickerState';

export const getDataCommon = async (props) => {
    props = {
        ...props,
        // dx: props,
        DEFAULT_COL_LENGTH: props.defaultCol,
        listColumnConfig: props.listColumnConfig,
        approvalUtils: getCoreMetaStateByPath('networkUtils.ApprovalUtils')
    };

    let orgFlatMap = getPickerStateByPath('orgFlatMap')
    let reqProvinces = Object.values(orgFlatMap).filter(e => e.organisationUnitGroups.some(x => x.id == 'mH8ggZyC39Z')).map(e => {
        return {
            orgUnitGroup: [
                // ORG_GROUP.TINH_DVHC,
                ORG_GROUP.TW_CSYT_TW,
                // ORG_GROUP.TW_YT_NGANH,
            ],
            orgUnit: e.id,
            includeTotalRow: [" -- ", <p>{e.name}</p>],
        }
    });

    ;await parallel(
        [
            ...reqProvinces.map((reqProps, idx) => {
                return cb => listingRowByOuGroup({
                    ...props,
                    ...reqProps
                }).then(res => {
                    reqProvinces[idx] = {
                        ...reqProvinces[idx],
                        ...res
                    };
                    cb(null, res)
                })
            })
        ]

    )

    let listRowPublicHealth = flatten(reqProvinces.map(e => e.listRow));

    let rowTotalPublicHealth = sumMultiRow({
        ...props,
        listRow: reqProvinces.map(e => e.listRow[0]),
        includeTotalRow: ["", <p>CSYT TW</p>]
    })

    let listRow = [
        rowTotalPublicHealth,
        ...listRowPublicHealth,
    ]

    return {
        dataByRow: listRow
    }
}