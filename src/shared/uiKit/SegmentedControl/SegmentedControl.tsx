import * as TabsPrimitive from '@radix-ui/react-tabs';
import { List } from './List';
import { Trigger } from './Trigger';

interface SegmentedControlObject {
  Root: typeof Root;
  List: typeof List;
  Trigger: typeof Trigger;
  Content: typeof Content;
}

const Root = TabsPrimitive.Root;
Root.displayName = 'SegmentedControl.Root';

const Content = TabsPrimitive.Content;
Content.displayName = 'SegmentedControl.Content';

const SegmentedControl: SegmentedControlObject = {
  Root,
  List,
  Trigger,
  Content,
};

export { SegmentedControl };
