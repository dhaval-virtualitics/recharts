import { PureComponent, ReactNode, MouseEvent, ReactText, ReactElement } from 'react';
import { DataKey, LegendType, LayoutType, PresentationAttributesAdaptChildEvent } from '../util/types';
export type ContentType = ReactElement | ((props: Props) => ReactNode);
export type IconType = Omit<LegendType, 'none'>;
export type HorizontalAlignmentType = 'center' | 'left' | 'right';
export type VerticalAlignmentType = 'top' | 'bottom' | 'middle';
export type Formatter = (value: any, entry: {
    value: any;
    id?: string;
    type?: LegendType;
    color?: string;
    payload?: {
        strokeDasharray: ReactText;
    };
}, index: number) => ReactNode;
export interface Payload {
    value: any;
    id?: string;
    type?: LegendType;
    color?: string;
    payload?: {
        strokeDasharray: ReactText;
    };
    formatter?: Formatter;
    inactive?: boolean;
    legendIcon?: ReactElement<SVGElement>;
}
interface InternalProps {
    content?: ContentType;
    iconSize?: number;
    iconType?: IconType;
    layout?: LayoutType;
    align?: HorizontalAlignmentType;
    verticalAlign?: VerticalAlignmentType;
    payload?: Array<Payload>;
    inactiveColor?: string;
    formatter?: Formatter;
    onMouseEnter?: (data: Payload & {
        dataKey?: DataKey<any>;
    }, index: number, event: MouseEvent) => void;
    onMouseLeave?: (data: Payload & {
        dataKey?: DataKey<any>;
    }, index: number, event: MouseEvent) => void;
    onClick?: (data: Payload & {
        dataKey?: DataKey<any>;
    }, index: number, event: MouseEvent) => void;
}
export type Props = InternalProps & PresentationAttributesAdaptChildEvent<any, ReactElement>;
export declare class DefaultLegendContent extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        iconSize: number;
        layout: string;
        align: string;
        verticalAlign: string;
        inactiveColor: string;
    };
    renderIcon(data: Payload): JSX.Element;
    renderItems(): JSX.Element[];
    render(): JSX.Element;
}
export {};
