import { memo, useState, useCallback, useMemo } from 'react';
import { PLATFORM, type PlatformKey, type NavMenuData } from '@config/hooks/useNavMenuData';

import { RootMenu } from './ui/RootMenu';
import { NestedMenu } from './ui/NestedMenu';
import { ApiPlatformNestedMenu } from './ui/ApiPlatformNestedMenu';

import s from './Drawer.module.css';

interface Props {
  data: NavMenuData;
  onClose: () => void;
}

type DrillDownState = PlatformKey | null;

export const Drawer = memo<Props>(({ data, onClose }) => {
  const [drillDown, setDrillDown] = useState<DrillDownState>(null);

  const handleDrillDown = useCallback((key: PlatformKey) => {
    setDrillDown(key);
  }, []);

  const handleBack = useCallback(() => {
    setDrillDown(null);
  }, []);

  const content = useMemo(() => {
    if (drillDown === null) {
      return <RootMenu data={data} onDrillDown={handleDrillDown} onClose={onClose} />;
    }

    if (drillDown === PLATFORM.API_PLATFORM) {
      return <ApiPlatformNestedMenu data={data} onBack={handleBack} onClose={onClose} />;
    }

    return <NestedMenu platform={drillDown} data={data} onBack={handleBack} onClose={onClose} />;
  }, [drillDown, data, handleBack, onClose, handleDrillDown]);

  return (
    <>
      <div className={s.backdrop} onClick={onClose} />
      <div className={s.drawer}>{content}</div>
    </>
  );
});
Drawer.displayName = 'Drawer';
