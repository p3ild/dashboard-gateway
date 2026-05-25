import { parallel } from 'async';
import { getDisableColDataObject, listingRowByOuGroup, sumMultiRow } from '../../common/ui/RowRender';
import { DATASET, ORG_GROUP } from '../constant';
import { flatten } from 'lodash';
import { getCoreMetaStateByPath } from '@core/stateManage/metadataState';
import { APPROVAL_ROW_TYPE } from '@core/network/ApprovalUtils';
import { getApprovalConfig } from '../../common/utils/approval';
import { getPickerStateByPath } from '@core/stateManage/corePickerState';

export const getDataCommon = async (props) => {
    props = {
        ...props,
        // dx: props,
        DEFAULT_COL_LENGTH: props.defaultCol,
        listColumnConfig: props.listColumnConfig,
        approvalUtils: getCoreMetaStateByPath('networkUtils.ApprovalUtils')
    };

    let table = props.table;

    let reqCommonProvinceIndicator = [
        {
            includeTotalRow: ["", <p>Toàn tỉnh</p>],
            isCommonSection: true,
            sortOrgUnits: (data) => {
                if (!data) return [];
                return data;
            }
        }
    ];
    let reqProvinceGroup = [
        {
            orgUnitGroup: [
                ORG_GROUP.TINH_CSYT_CONG,
            ],
            includeTotalRow: ["I", <p>Tuyến tỉnh</p>],
        },
        {
            orgUnitGroup: [
                ORG_GROUP.XA_DVHC,
            ],
            includeTotalRow: ["II", <p>Tuyến xã</p>],
        },
    ];

    let orgFlatMap = getPickerStateByPath('orgFlatMap');

    let dataOrgGroupSet = await parallel(
        [
            ...[
                ...reqCommonProvinceIndicator,
                ...reqProvinceGroup,
            ]
                .map((reqProps, idx) => {
                    return cb => listingRowByOuGroup({
                        ...props,
                        ...reqProps,
                        overrideDataAnalytics: (props) => {
                            let oldData = props.apiData;
                            let newData = { ...oldData }

                            newData.metaData.dimensions.ou = flatten(
                                newData.metaData.dimensions.ou.map(e => {


                                    let isCommonSection = reqProps.isCommonSection;
                                    if (isCommonSection) {
                                        const table1 = [

                                            { key: 'commonSections1', rowSectionIndex: 0, name: "Hoạt động Khám chữa bệnh" },
                                            { key: 'commonSections2', rowSectionIndex: 1, name: "Hoạt động Y tế dự phòng, YTCC" },
                                            { key: 'commonSections3', rowSectionIndex: 2, name: "Vốn NSNN" },
                                            { key: 'commonSections4', rowSectionIndex: 3, name: "Vốn trái phiếu Chính phủ" },
                                            { key: 'commonSections5', rowSectionIndex: 4, name: "Vốn ODA" },
                                            { key: 'commonSections6', rowSectionIndex: 5, name: "CTMT Đầu tư phát triển hệ thống tổ chức y tế địa phương" },
                                            { key: 'commonSections7', rowSectionIndex: 6, name: "Vốn Chương trình MTYT Dân số Quốc gia" },
                                        ];
                                        const table2 = [
                                            { key: 'commonSections1', rowSectionIndex: 0, name: "Hoạt động Khám chữa bệnh" },
                                            { key: 'commonSections2', rowSectionIndex: 1, name: "Hoạt động Y tế dự phòng, YTCC" },
                                            { key: 'commonSections3', rowSectionIndex: 2, name: "Vốn NSNN" },
                                            { key: 'commonSections4', rowSectionIndex: 3, name: "Vốn trái phiếu Chính phủ" },
                                            { key: 'commonSections5', rowSectionIndex: 4, name: "Vốn ODA" },
                                            { key: 'commonSections6', rowSectionIndex: 5, name: "CTMT Đầu tư phát triển hệ thống tổ chức y tế địa phương" },
                                            { key: 'commonSections7', rowSectionIndex: 6, name: "Vốn Chương trình MTYT Dân số Quốc gia" },
                                        ]
                                        let listSection = table == 1 ? table1 : table2;

                                        let newRows = listSection.map(section => {
                                            let rowId = e + '$$' + section.key;
                                            newData.metaData.items[rowId] = {
                                                name: `${newData.metaData.items[e]?.name}$$${section.key}$$${section.name}`,
                                                rowSectionIndex: section.rowSectionIndex
                                            };
                                            return rowId;
                                        });

                                        return newRows;
                                    } else {
                                        let isGroupIgnore = [
                                            ORG_GROUP.TINH_SYT,
                                            ORG_GROUP.TINH_CDC
                                        ].some(x => orgFlatMap[e].organisationUnitGroups.some(y => y.id === x));

                                        if (isGroupIgnore) return undefined;

                                        let rowKcb = e + '$$kcb';
                                        let rowYtdp = e + '$$ytdp';
                                        newData.metaData.items[rowKcb] = { name: `${newData.metaData.items[e]?.name}$$kcb$$Hoạt động khám chữa bệnh` };
                                        newData.metaData.items[rowYtdp] = { name: `${newData.metaData.items[e]?.name}$$ytdp$$Hoạt động Y tế dự phòng, YTCC` };
                                        return [
                                            e,
                                            rowKcb,
                                            rowYtdp
                                        ]
                                    }

                                }).filter(e => e)
                            );

                            return newData;
                        }
                    }).then(res => {
                        reqProvinceGroup[idx] = {
                            ...reqProvinceGroup[idx],
                            ...res
                        };
                        cb(null, res)
                    })
                }),
        ]

    )

    let listRowPublicHealth = flatten(reqProvinceGroup.map(e => e.listRow));

    let rowTotalPublicHealth = sumMultiRow({
        ...props,
        listRow: [
            ...reqProvinceGroup.map(e => e.listRow[0]),
        ],
        includeTotalRow: ["", <p>Tổng số</p>]
    })

    let listRow = [
        rowTotalPublicHealth,
        ...listRowPublicHealth,
    ]

    return {
        dataByRow: listRow
    }
}