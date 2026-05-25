import { APPROVAL_ROW_TYPE } from '@core/network/ApprovalUtils';
import { getCoreMetaStateByPath } from '@core/stateManage/metadataState';
import { parallel } from 'async';
import { listingRowByOuGroup } from './ui/RowRender';
import { getApprovalConfig } from './utils/approval';

export const getDataCommon = async (props) => {
    let approvalUtils = getCoreMetaStateByPath('networkUtils.ApprovalUtils');

    let me = getCoreMetaStateByPath('me');
    props = {
        ...props,
        // dx: props,
        DEFAULT_COL_LENGTH: props.defaultCol,
        listColumnConfig: props.listColumnConfig,
        approvalUtils,
        includeTotalRow: ["", <p>Tổng số</p>]
    };


    let { listRow, apiData } = await listingRowByOuGroup({
        ...props,
    });

    let dataByRow = [
        ...listRow
    ];
    let networkUtils = getCoreMetaStateByPath('networkUtils');

    let [
        orgViewData,
        orgCapture
    ] = await parallel(
        [
            props.orgSelected.id,
            me.organisationUnits[0].id
        ].map((id) =>
            cb => networkUtils.findOrgByID({ orgID: id }).then(org => cb(null, org)).catch(e => cb(null, e))
        )
    )

    if (orgViewData?.children?.length > 0) {
        let childLevel = orgViewData.children[0].level
        props.orgUnitLevel = [childLevel];
        let approvalConfig = getApprovalConfig({
            ...props,
            approvalRowType: props.approvalRowType || APPROVAL_ROW_TYPE.PARENT
                || {}
        });
        let { listRow: totalRow } = await listingRowByOuGroup({
            ...props,
            ...approvalConfig,
            overrideDataAnalytics: ({ apiData }) => {
                /** If orgCapture is at the same level with orgViewData, 
                 * it means user is main org unit. So listed all child org
                 * Else so only org unit is captured
                */
                if (childLevel != orgCapture.level) return apiData;
                apiData.metaData.dimensions.ou = apiData.metaData.dimensions.ou.filter(x => me.organisationUnits.map(e => e.id).some(y => y == x));
                return apiData
            },
            includeChild: true,
        });
        dataByRow = [...totalRow]
    }

    return {
        dataByRow
    }
}
