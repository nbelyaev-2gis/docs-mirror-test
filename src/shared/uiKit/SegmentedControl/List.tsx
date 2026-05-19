import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { TabsListProps } from '@radix-ui/react-tabs';
import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { cn } from '@shared/utils';
import s from './List.module.css';

type Props = ForwardRefExoticComponent<
  TabsListProps & { fill?: boolean } & RefAttributes<HTMLDivElement>
>;

export const List = forwardRef<ElementRef<Props>, ComponentPropsWithoutRef<Props>>(
  ({ className, children, fill = false, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(s.list, fill ? s.listFill : s.listInline, className)}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  ),
);
List.displayName = 'SegmentedControl.List';
