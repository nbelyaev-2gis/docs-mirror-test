import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { cn } from '@shared/utils';
import s from './Trigger.module.css';

export const Trigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(s.trigger, s.triggerActive, className)} {...props}>
    <div className={cn(s.triggerText, s.triggerTextActive)}>{children}</div>
  </TabsPrimitive.Trigger>
));
Trigger.displayName = 'SegmentedControl.Trigger';
