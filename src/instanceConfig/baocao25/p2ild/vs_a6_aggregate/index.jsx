import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useLoadData } from "./hook";
import { ORG_GROUP } from "./constant";
import { PERIOD_TYPE } from "@core/ui/picker/periodpicker/constant";
import { TableData } from "./customTableVs.jsx";
import { useCorePickerState } from "@core/stateManage/corePickerState";
import { useCoreMetaState } from "@core/stateManage/metadataState";
export const reportCode = "Báo cáo VS - Aggregate"
export const reportName = "BÁO CÁO CHỈ SỐ TRAO ĐỔI DỮ LIỆU TỬ VONG GIỮA Y TẾ VÀ TƯ PHÁP"

export default () => {
    const [
        setExcelOptions,
    ] = useCoreMetaState(useShallow(state => ([
        state.actions.setExcelOptions,
    ])));

    const {
        data,
        orgReportName,
        errors,
        dhis2Period
    } = useLoadData({ reportCode });

    const [
        setAllowPeriodTypes,
        setOrgPickerConfig
    ] = useCorePickerState(
        useShallow(state => ([

            state.actions.setAllowPeriodTypes,
            state.actions.setOrgPickerConfig
        ])));

    useEffect(
        () => {
            setExcelOptions({
                columnWidths: '10,40,20,20,20,20,20,20,20,20,20,20',
                // excelOnlyTable: true,
            });
            setOrgPickerConfig({
                orgGroupVisible: [
                    ORG_GROUP.TINH_DVHC,
                    ORG_GROUP.XA_DVHC,
                    ORG_GROUP.XA_CSYT_KHAC,
                    ORG_GROUP.XA_TYT,
                ],
            })
            setAllowPeriodTypes([
                PERIOD_TYPE.month,
                PERIOD_TYPE.month2

            ]);

        },
        []
    )
    // return <></>
    const TableMemo = useMemo(() => {
        // return <></>
        return <TableData
            {
            ...{
                errors,
                reportName: "BÁO CÁO CHỈ SỐ TRAO ĐỔI DỮ LIỆU TỬ VONG GIỮA Y TẾ VÀ TƯ PHÁP",
                orgReportName,
                dhis2Period,
                data,
            }
            }
        >
        </TableData>
    }, [orgReportName, data]);

    return <div className="report-container">
        {TableMemo}
    </div>
}