import { parallel } from 'async';
import { getDisableColDataObject, listingRowByOuGroup, sumMultiRow } from '../../common/ui/RowRender';
import { DATASET, ORG_GROUP } from '../constant';
import { flatten } from 'lodash';
import { getCoreMetaStateByPath } from '@core/stateManage/metadataState';

export const getDataCommon = async (props) => {
    props = {
        ...props,
        // dx: props,
        DEFAULT_COL_LENGTH: props.defaultCol,
        listColumnConfig: props.listColumnConfig,
        approvalUtils: getCoreMetaStateByPath('networkUtils.ApprovalUtils')
    };

    let reqProvinceGroup = [
        {
            includeTotalRow: ["", <p>TỔNG SỐ</p>],
            orgUnitGroup: [
                ORG_GROUP.XA_DVHC,
                ORG_GROUP.XA_PHONG_KHAM,
            ]
        },
    ];



    let dataOrgGroupSet = await parallel(
        [
            ...[
                ...reqProvinceGroup,
                // ...reqPyt
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
                                    let rowKcb = e + '$$kcb';
                                    let rowYtdp = e + '$$ytdp';
                                    newData.metaData.items[rowKcb] = { name: `${newData.metaData.items[e]?.name}$$kcb$$Hoạt động khám chữa bệnh` };
                                    newData.metaData.items[rowYtdp] = { name: `${newData.metaData.items[e]?.name}$$ytdp$$Hoạt động Y tế dự phòng, YTCC` };
                                    return [
                                        e,
                                        rowKcb,
                                        rowYtdp
                                    ]

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

    let listRow = [
        ...listRowPublicHealth,
    ]

    return {
        dataByRow: listRow
    }
}