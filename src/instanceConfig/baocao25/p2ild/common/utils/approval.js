import { APPROVAL_ROW_TYPE } from "@core/network/ApprovalUtils";

export function getApprovalConfig(props) {
    let { periodSelected, ds, period, approvalKey } = (props || {})
    let allowApproval =
        (props.typeAllowCondition || periodSelected?.type == (props.periodTypeApproval || "month"))
        && ds
        && !props.ignoreByTable
    let rs = allowApproval
        ? {
            approvalConfig: {
                ds: [ds],
                pe: period,
                approvalKey: approvalKey,
                approvalRowType: props.approvalRowType || APPROVAL_ROW_TYPE.BOTH,
            }
        }
        : {}
    return rs;
}