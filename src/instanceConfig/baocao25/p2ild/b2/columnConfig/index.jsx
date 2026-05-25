import { APPROVAL_ROW_TYPE, APPROVAL_TYPE, ButtonApproval } from "@core/network/ApprovalUtils";
import { numToLocaleString } from "@core/utils/stringutils";
import { getValueDE } from "../../common/DataValueUtils";
import { getDisableColDataObject, ListColumnConfigBuilder } from "../../common/ui/RowRender";
import { getPickerStateByPath } from "@core/stateManage/corePickerState";

export const getListColumnConfig_table1 = ({ }) => {
    let stt = 0;
    return ListColumnConfigBuilder({
        listColumnConfig: [
            {
                key: "stt",
                label: 'STT',
                isApprovalColumn: true,
                excelOpts: {
                    "data-a-wrap": "true",
                    "data-a-h": "center",
                    "data-a-v": "center",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { orgUnit, period, approvalConfig } = props;
                    let { approvalKey, approvalVisible, approvalType, ds } = approvalConfig || {};
                    let [orgName, code, typeName] = props.orgName.split('$$');
                    let CHILD_COUNT = 3;
                    let stt = props.orgIdx + 1
                        - (props.orgIdx % CHILD_COUNT == 0 ? props.orgIdx / CHILD_COUNT : 0) * 2;
                    let value = typeName ? "" : stt;

                    return {
                        view: <div className="flex flex-row w-full items-center justify-center" >
                            {(
                                approvalConfig && ![APPROVAL_ROW_TYPE.PARENT].includes(approvalVisible || approvalConfig?.approvalRowType) && approvalKey
                            )
                                ? <ButtonApproval {
                                    ...{
                                        title: value,
                                        dsID: ds[0],
                                        orgID: orgUnit,
                                        approvalKey,
                                        period,
                                        approvalType: approvalType || APPROVAL_TYPE.APPROVE
                                    }
                                } />
                                : value
                            }
                        </div>
                    }
                }
            },
            {
                key: "orgName",
                colDataClassName: '!text-left !text-nowrap ',
                width: '100px !important',
                excelOpts: {
                    "data-a-wrap": "true",
                },
                render: (props) => {
                    let [orgName, code, typeName] = props.orgName.split('$$')
                    return {
                        view: typeName ? typeName : props.orgName
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_all: ["uMmm9GZneMR.AMARAl67O0W"]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_all: ["uMmm9GZneMR.je3ZoC0J1J2"]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_all: ["uMmm9GZneMR.W3J7OtuzmSr"]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_all: ["uMmm9GZneMR.Ky9vKtpkbsi"]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['rjWwV8cqhAZ'],
                        de_ytdp: ['LL7qpUiC3hZ'],
                        deCommonSections: [
                            "rjWwV8cqhAZ",// "Hoạt động Khám chữa bệnh" },
                            "LL7qpUiC3hZ",// "Hoạt động Y tế dự phòng, YTCC" },
                            "gRZXAKZqsI2",// "Vốn NSNN" },
                            "LB4icEqQcBz",// "Vốn trái phiếu Chính phủ" },
                            "HwxH4QdA38Z",// "Vốn ODA" },
                            "vaqbQLjRzFU",// "CTMT Đầu tư phát triển hệ thống tổ chức y tế địa phương" },
                            "CiRnJNg2uht"// "Vốn Chương trình MTYT Dân số Quốc gia" },
                        ]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['OQBOipGcNOK'],
                        de_ytdp: ['DXgyPsmNqyK']

                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['Ff7B08GIU5z.L8pQx55Qgli'],
                        de_ytdp: ['Ff7B08GIU5z.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['HcKlezEKswk.L8pQx55Qgli'],
                        de_ytdp: ['HcKlezEKswk.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['n2yWJTs36lZ.L8pQx55Qgli'],
                        de_ytdp: ['n2yWJTs36lZ.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['YwZDwgKpNoD.L8pQx55Qgli'],
                        de_ytdp: ['YwZDwgKpNoD.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['AXPRYRVmtKV.L8pQx55Qgli'],
                        de_ytdp: ['AXPRYRVmtKV.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['rO33E6B0ZWO'],
                        de_ytdp: ['Unq2JxoZ08H']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['hDGQf04ot5x.L8pQx55Qgli'],
                        de_ytdp: ['hDGQf04ot5x.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['itAHBgwcw7w.L8pQx55Qgli'],
                        de_ytdp: ['itAHBgwcw7w.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['wNLX1JVg5aB.L8pQx55Qgli'],
                        de_ytdp: ['wNLX1JVg5aB.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['gSMOBV405ZL.L8pQx55Qgli'],
                        de_ytdp: ['gSMOBV405ZL.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['a99Sg2Rye5x.L8pQx55Qgli'],
                        de_ytdp: ['a99Sg2Rye5x.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },

        ].filter(e => e).map((e, colIdx) => {
            if (!e.width) {
                e.colClassName = e.colClassName || (e.colClassName + ' w-[2vw]')
            }

            return e
        })
    });
}

export const getListColumnConfig_table2 = ({ }) => {
    let stt = 0;
    return ListColumnConfigBuilder({
        listColumnConfig: [
            {
                key: "stt",
                label: 'STT',
                isApprovalColumn: true,
                excelOpts: {
                    "data-a-wrap": "true",
                    "data-a-h": "center",
                    "data-a-v": "center",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { orgUnit, period, approvalConfig } = props;
                    let { approvalKey, approvalVisible, approvalType, ds } = approvalConfig || {};
                    let [orgName, code, typeName] = props.orgName.split('$$');
                    let CHILD_COUNT = 3;
                    let stt = props.orgIdx + 1
                        - (props.orgIdx % CHILD_COUNT == 0 ? props.orgIdx / CHILD_COUNT : 0) * 2;
                    let value = typeName ? "" : stt;

                    return {
                        view: <div className="flex flex-row w-full items-center justify-center" >
                            {(
                                approvalConfig && ![APPROVAL_ROW_TYPE.PARENT].includes(approvalVisible || approvalConfig?.approvalRowType) && approvalKey
                            )
                                ? <ButtonApproval {
                                    ...{
                                        title: value,
                                        dsID: ds[0],
                                        orgID: orgUnit,
                                        approvalKey,
                                        period,
                                        approvalType: approvalType || APPROVAL_TYPE.APPROVE
                                    }
                                } />
                                : value
                            }
                        </div>
                    }
                }
            },
            {
                key: "orgName",
                colDataClassName: '!text-left !text-nowrap ',
                width: '100px !important',
                excelOpts: {
                    "data-a-wrap": "true",
                },
                render: (props) => {
                    let [orgName, code, typeName] = props.orgName.split('$$')
                    return {
                        view: typeName ? typeName : props.orgName
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['qt7P3z8zfHr'],
                        de_ytdp: ['iE3PisJv4UD'],
                        deCommonSections: [
                            "qt7P3z8zfHr",// "Hoạt động Khám chữa bệnh" },
                            "iE3PisJv4UD",// "Hoạt động Y tế dự phòng, YTCC" },
                            "KvEabpoOSg9",// "Vốn NSNN" },
                            "mfgZYc70QJt",// "Vốn trái phiếu Chính phủ" },
                            "tdDj4SwRbsa",// "Vốn ODA" },
                            "jvbYfNRzR71",// "CTMT Đầu tư phát triển hệ thống tổ chức y tế địa phương" },
                            "gQ7nKrrS1pY"// "Vốn Chương trình MTYT Dân số Quốc gia" },
                        ]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['heFbKPFOAYX.L8pQx55Qgli'],
                        de_ytdp: ['heFbKPFOAYX.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['VUujYXiLcQo.L8pQx55Qgli'],
                        de_ytdp: ['VUujYXiLcQo.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['RrIm3S7jizc.L8pQx55Qgli'],
                        de_ytdp: ['RrIm3S7jizc.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['teZ9uzWsdC8.L8pQx55Qgli'],
                        de_ytdp: ['teZ9uzWsdC8.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['IAEwNuqpwJ6.L8pQx55Qgli'],
                        de_ytdp: ['IAEwNuqpwJ6.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['RyVb0zCOSm5.L8pQx55Qgli'],
                        de_ytdp: ['RyVb0zCOSm5.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['glJjiwPA4nz.L8pQx55Qgli'],
                        de_ytdp: ['glJjiwPA4nz.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['i4GretwfRCc.L8pQx55Qgli'],
                        de_ytdp: ['i4GretwfRCc.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['PJ3NRljqpdC'],
                        de_ytdp: ['ak98gs8nPyq'],
                        deCommonSections: [
                            "PJ3NRljqpdC",// "Hoạt động Khám chữa bệnh" },
                            "ak98gs8nPyq",// "Hoạt động Y tế dự phòng, YTCC" },
                            "Iq9PbFjI2Er",// "Vốn NSNN" },
                            "i9Romp8nKO6",// "Vốn trái phiếu Chính phủ" },
                            "GDbl4yjFBKj",// "Vốn ODA" },
                            "r4UMSzuRgnq",// "CTMT Đầu tư phát triển hệ thống tổ chức y tế địa phương" },
                            "NgkxN4EhaRE"// "Vốn Chương trình MTYT Dân số Quốc gia" },
                        ]
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['LbJkh0Bhfdj.L8pQx55Qgli'],
                        de_ytdp: ['LbJkh0Bhfdj.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['JHh30oApLHO.L8pQx55Qgli'],
                        de_ytdp: ['JHh30oApLHO.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['q8Vt5iqopMh.L8pQx55Qgli'],
                        de_ytdp: ['q8Vt5iqopMh.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['gzQmDaPEAOt.L8pQx55Qgli'],
                        de_ytdp: ['gzQmDaPEAOt.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['bX0BZBY87ey.L8pQx55Qgli'],
                        de_ytdp: ['bX0BZBY87ey.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
            {
                key: "3",
                colDataClassName: '!text-right',
                excelOpts: {
                    "data-a-wrap": "true",
                    // "data-t":'n'
                },
                render: (props) => {
                    let { de, org, orgDetail, disableCell, customValue } = defineDeByOrg({
                        ...props,
                        de_kcb: ['eT2Ghp7Dhhj.L8pQx55Qgli'],
                        de_ytdp: ['eT2Ghp7Dhhj.E1n8AO47ANx']
                    })

                    if (disableCell) return getDisableColDataObject();
                    let value = getValueDE({
                        jsonDhis: props.apiData,
                        org,
                        de
                    }) + "";
                    return {
                        value: customValue || value,
                        view: numToLocaleString(value)
                    }
                }
            },
        ].filter(e => e).map((e, colIdx) => {
            if (!e.width) {
                e.colClassName = e.colClassName || (e.colClassName + ' w-[2vw]')
            }

            return e
        })
    });
}

function defineDeByOrg(props) {
    let {
        de_kcb,
        de_ytdp,
        de_all,
        isCommonSection
    } = props
    let [orgName, type] = props.orgName.split('$$');
    let org = props.orgUnit.split('$$')[0];
    let orgFlatMap = getPickerStateByPath('orgFlatMap');
    let orgDetail = orgFlatMap[org]
    let de = [];
    let colIndex = props.colIndex;
    let table = props.table;
    let disableCells = table == 1 ? [2, 3, 4, 5] : [];
    let deCommonSections = props.deCommonSections;
    let rowSectionIndex = props.apiData.metaData.items?.[props.orgUnit].rowSectionIndex;
    let customValue;

    switch (true) {
        case Boolean(de_all):
            de = de_all;
            if (
                disableCells.some(e => e === colIndex)) {
                return { disableCell: true };
            }
            break;
        case rowSectionIndex !== undefined:
            if (deCommonSections) {
                de = deCommonSections[rowSectionIndex]
            }
            else return { disableCell: true };
            break;
        case type == 'kcb':
            de = de_kcb;
            customValue = "0";
            break;
        case type == 'ytdp':
            customValue = "0";
            de = de_ytdp;
            break;
        default: de = [
            ...de_kcb,
            ...de_ytdp
        ]; break;
    }
    return { de, org, orgDetail, customValue }
}