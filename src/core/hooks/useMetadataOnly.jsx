import { useShallow } from 'zustand/react/shallow'
import { useCoreMetaState } from '@core/stateManage/metadataState'

export default function useMetadataOnly() {
  const [me, programs, listFolder, systemSettings, language] = useCoreMetaState(
    useShallow((s) => [s.me, s.programs, s.listFolder, s.systemSettings, s.language])
  )

  return {
    me,
    programs,
    listFolder,
    systemSettings,
    language,
  }
}
