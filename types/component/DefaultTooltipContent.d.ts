import { PureComponent, CSSProperties, ReactNode } from 'react';
export type TooltipType = 'none';
export type ValueType = number | string | Array<number | string>;
export type NameType = number | string;
export type Formatter<TValue extends ValueType, TName extends NameType> = (value: TValue, name: TName, item: Payload<TValue, TName>, index: number, payload: Array<Payload<TValue, TName>>) => [TValue, TName] | TValue;
export interface Payload<TValue extends ValueType, TName extends NameType> {
    type?: TooltipType;
    color?: string;
    formatter?: Formatter<TValue, TName>;
    name?: TName;
    value?: TValue;
    unit?: ReactNode;
    dataKey?: string | number;
    payload?: any;
    chartType?: string;
}
export interface Props<TValue extends ValueType, TName extends NameType> {
    separator?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    formatter?: Formatter<TValue, TName>;
    contentStyle?: CSSProperties;
    itemStyle?: CSSProperties;
    labelStyle?: CSSProperties;
    labelFormatter?: (label: any, payload: Array<Payload<TValue, TName>>) => ReactNode;
    label?: any;
    payload?: Array<Payload<TValue, TName>>;
    itemSorter?: (item: Payload<TValue, TName>) => number | string;
}
export declare class DefaultTooltipContent<TValue extends ValueType, TName extends NameType> extends PureComponent<Props<TValue, TName>> {
    static displayName: string;
    static defaultProps: {
        separator: string;
        contentStyle: {};
        itemStyle: {};
        labelStyle: {};
    };
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
