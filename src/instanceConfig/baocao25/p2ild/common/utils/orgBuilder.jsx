import { uniq } from "lodash"

export function getOrgParentIDByChildOuGroup({
    orgUnit,//Scope: orgUnit selected
    orgFullArray,// all orgs as array in instance
    ouAggregateLevel, // level to aggregate, ex: 3 for province level
    ouChildGroup,//Child group to aggregate parent org, ex: TW_CSYT_CSSK_TE
}) {
    let orgsFound = orgFullArray.filter(e =>
        Array(3).fill(0).map((e, idx) => ouAggregateLevel + idx).includes(e.level) && e.path.includes(orgUnit) && e.organisationUnitGroups?.some(group => ouChildGroup.includes(group.id))
    );
    return uniq(
        orgsFound.map(e => {
            if (e.level == ouAggregateLevel) {
                return e.id
            }
            if (e.level != ouAggregateLevel) {
                return e.ancestors?.find(a => a.level == ouAggregateLevel)?.id
            }
        })).join(';')
}
