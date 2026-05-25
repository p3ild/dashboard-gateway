import { parallel } from "async";
import { useEffect, useState } from "react";
import { usePrepareData } from "../../common/hooks/prepareData";
import * as CommuneAction from "../actions/Commune";
import * as ProvinceAction from "../actions/Province";
import * as CurrentlyOrgSelected from "../actions/CurrentlyOrgSelected";
import { getListColumnConfig_table1, getListColumnConfig_table2 } from "../columnConfig";
import { HeaderUILayoutTable1, HeaderUILayoutTable2, ORG_SELECTED_TYPE } from "../constant";
export const useLoadData = (props) => {
    const {
        loaded,
        orgSelected, period,
        setGlobalOverlay
    } = usePrepareData({});

    const [errors, setError] = useState(undefined);
    const [data, setData] = useState([]);
    useEffect(
        () => {
            if (loaded && orgSelected && period?.outputDataDhis2) {
                setGlobalOverlay({
                    isOpen: true
                })
                main();
            }
        },
        [loaded,]
    )

    const main = async () => {
        setError(undefined)
        setData([]);


        props = {
            ...props,
            // approvalHook,
            orgUnit: orgSelected.id,
            period: period?.outputDataDhis2,
            periodSelected: period,
            orgSelected
        }

        try {
            let orgType = orgSelected?.orgType?.key;
            let targetAction;
            switch (true) {
                case orgType == ORG_SELECTED_TYPE.PROVINCE.key:
                    targetAction = ProvinceAction;
                    break;
                case orgType == ORG_SELECTED_TYPE.COMMUNE.key:
                    targetAction = CommuneAction;
                    break;
                default:
                    targetAction = CurrentlyOrgSelected;
                    break;
            }

            {


                let loadTable1 = (callback) => {
                    targetAction.getDataCommon({
                        ...props,
                        dx: [
                            //Phan loai tu chu,
                            "uMmm9GZneMR.AMARAl67O0W",
                            "uMmm9GZneMR.je3ZoC0J1J2",
                            "uMmm9GZneMR.W3J7OtuzmSr",
                            "uMmm9GZneMR.Ky9vKtpkbsi",

                            "gRZXAKZqsI2",
                            "LB4icEqQcBz",
                            "HwxH4QdA38Z",
                            "vaqbQLjRzFU",
                            "CiRnJNg2uht",


                            "rjWwV8cqhAZ",
                            "OQBOipGcNOK",
                            "Ff7B08GIU5z.L8pQx55Qgli",
                            "HcKlezEKswk.L8pQx55Qgli",
                            "n2yWJTs36lZ.L8pQx55Qgli",
                            "YwZDwgKpNoD.L8pQx55Qgli",
                            "AXPRYRVmtKV.L8pQx55Qgli",
                            "rO33E6B0ZWO",
                            "hDGQf04ot5x.L8pQx55Qgli",
                            "itAHBgwcw7w.L8pQx55Qgli",
                            "wNLX1JVg5aB.L8pQx55Qgli",
                            "gSMOBV405ZL.L8pQx55Qgli",
                            "a99Sg2Rye5x.L8pQx55Qgli",
                            "LL7qpUiC3hZ",
                            "DXgyPsmNqyK",
                            "Ff7B08GIU5z.E1n8AO47ANx",
                            "HcKlezEKswk.E1n8AO47ANx",
                            "n2yWJTs36lZ.E1n8AO47ANx",
                            "YwZDwgKpNoD.E1n8AO47ANx",
                            "AXPRYRVmtKV.E1n8AO47ANx",
                            "Unq2JxoZ08H",
                            "hDGQf04ot5x.E1n8AO47ANx",
                            "itAHBgwcw7w.E1n8AO47ANx",
                            "wNLX1JVg5aB.E1n8AO47ANx",
                            "gSMOBV405ZL.E1n8AO47ANx",
                            "a99Sg2Rye5x.E1n8AO47ANx",
                        ],
                        listColumnConfig: getListColumnConfig_table1({
                            props
                        }),
                        table: 1,
                        defaultCol: 5,
                        separateTotalRow: true,
                    }).then(newData => {
                        newData.TableHeader = <HeaderUILayoutTable1 />;
                        callback(undefined, newData)

                    }).catch(e => callback(e))
                }
                let loadTable2 = (callback) => {
                    targetAction.getDataCommon({
                        ...props,
                        table: 2,
                        dx: [
                            //TỔNG SỐ CHI
                            "qt7P3z8zfHr",
                            "iE3PisJv4UD",
                            "KvEabpoOSg9",
                            "mfgZYc70QJt",
                            "tdDj4SwRbsa",
                            "jvbYfNRzR71",
                            "gQ7nKrrS1pY",

                            //TỔNG SỐ Chênh lệch thu-chi
                            "PJ3NRljqpdC",
                            "ak98gs8nPyq",
                            "Iq9PbFjI2Er",
                            "i9Romp8nKO6",
                            "GDbl4yjFBKj",
                            "r4UMSzuRgnq",
                            "NgkxN4EhaRE",


                            'heFbKPFOAYX.L8pQx55Qgli',
                            'heFbKPFOAYX.E1n8AO47ANx',
                            'VUujYXiLcQo.L8pQx55Qgli',
                            'VUujYXiLcQo.E1n8AO47ANx',
                            'RrIm3S7jizc.L8pQx55Qgli',
                            'RrIm3S7jizc.E1n8AO47ANx',
                            'teZ9uzWsdC8.L8pQx55Qgli',
                            'teZ9uzWsdC8.E1n8AO47ANx',
                            'IAEwNuqpwJ6.L8pQx55Qgli',
                            'IAEwNuqpwJ6.E1n8AO47ANx',
                            'RyVb0zCOSm5.L8pQx55Qgli',
                            'RyVb0zCOSm5.E1n8AO47ANx',
                            'glJjiwPA4nz.L8pQx55Qgli',
                            'glJjiwPA4nz.E1n8AO47ANx',
                            'i4GretwfRCc.L8pQx55Qgli',
                            'i4GretwfRCc.E1n8AO47ANx',
                            'itvyP8whBc4',
                            'LbJkh0Bhfdj.L8pQx55Qgli',
                            'LbJkh0Bhfdj.E1n8AO47ANx',
                            'JHh30oApLHO.L8pQx55Qgli',
                            'JHh30oApLHO.E1n8AO47ANx',
                            'q8Vt5iqopMh.L8pQx55Qgli',
                            'q8Vt5iqopMh.E1n8AO47ANx',
                            'gzQmDaPEAOt.L8pQx55Qgli',
                            'gzQmDaPEAOt.E1n8AO47ANx',
                            'bX0BZBY87ey.L8pQx55Qgli',
                            'bX0BZBY87ey.E1n8AO47ANx',
                            'eT2Ghp7Dhhj.L8pQx55Qgli',
                            'eT2Ghp7Dhhj.E1n8AO47ANx',
                        ],
                        listColumnConfig: getListColumnConfig_table2({
                            props,
                        }),
                        separateTotalRow: true,
                    }).then(newData => {
                        newData.TableHeader = <HeaderUILayoutTable2 />;
                        callback(undefined, newData)

                    }).catch(e => callback(e))
                }


                let loadedTable = await parallel([
                    loadTable1,
                    loadTable2,
                ]
                    .filter(e => e)
                );

                setData(loadedTable);

            }

        } catch (err) {

            setError(err)
        } finally {
            setGlobalOverlay({
                isOpen: false
            })
        }
    }

    return {
        errors,
        data,
        orgReportName: orgSelected.displayNameByPath,
        dhis2Period: [
            period?.labelStartDate,
            period?.labelEndDate ? `${period?.labelEndDate}` : undefined
        ]
            .filter(e => e)
            .join(' đến ')
    }

}