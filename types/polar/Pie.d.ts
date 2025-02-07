import React, { PureComponent, ReactElement, ReactNode, SVGProps } from 'react';
import { Props as SectorProps } from '../shape/Sector';
import { LegendType, TooltipType, AnimationTiming, Coordinate, ChartOffset, DataKey, PresentationAttributesAdaptChildEvent } from '../util/types';
interface PieDef {
    cx?: number | string;
    cy?: number | string;
    startAngle?: number;
    endAngle?: number;
    paddingAngle?: number;
    innerRadius?: number | string;
    outerRadius?: number | string;
    cornerRadius?: number | string;
}
type PieActiveShape = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | SectorProps;
type PieLabelLine = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | SVGProps<SVGPathElement> | boolean;
export type PieLabel<P = any> = ReactElement<SVGElement> | ((props: P) => ReactNode | ReactElement<SVGElement>) | {
    offsetRadius: number;
} | boolean;
type PieSectorDataItem = SectorProps & {
    percent?: number;
    name?: string | number;
    midAngle?: number;
    middleRadius?: number;
    tooltipPosition?: Coordinate;
    value?: number;
    paddingAngle?: number;
};
interface PieProps extends PieDef {
    className?: string;
    animationId?: number;
    dataKey: DataKey<any>;
    nameKey?: DataKey<any>;
    valueKey?: DataKey<any>;
    blendStroke?: boolean;
    minAngle?: number;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    maxRadius?: number;
    hide?: boolean;
    data?: any[];
    sectors?: PieSectorDataItem[];
    activeShape?: PieActiveShape;
    inactiveShape?: PieActiveShape;
    labelLine?: PieLabelLine;
    label?: PieLabel;
    activeIndex?: number | number[];
    animationEasing?: AnimationTiming;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    id?: string;
    onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
    onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
    onClick?: (data: any, index: number, e: React.MouseEvent) => void;
}
export interface PieLabelRenderProps extends PieDef {
    name: string;
    percent?: number;
    stroke: string;
    index?: number;
    textAnchor: string;
    x: number;
    y: number;
    [key: string]: any;
}
interface State {
    isAnimationFinished?: boolean;
    prevIsAnimationActive?: boolean;
    prevSectors?: PieSectorDataItem[];
    curSectors?: PieSectorDataItem[];
    prevAnimationId?: number;
    sectorToFocus?: number;
}
export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & PieProps;
export declare class Pie extends PureComponent<Props, State> {
    pieRef: HTMLElement;
    sectorRefs: HTMLElement[];
    static displayName: string;
    static defaultProps: {
        stroke: string;
        fill: string;
        legendType: string;
        cx: string;
        cy: string;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: string;
        paddingAngle: number;
        labelLine: boolean;
        hide: boolean;
        minAngle: number;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
        nameKey: string;
        blendStroke: boolean;
    };
    static parseDeltaAngle: (startAngle: number, endAngle: number) => number;
    static getRealPieData: (item: Pie) => any[];
    static parseCoordinateOfPie: (item: Pie, offset: ChartOffset) => {
        cx: number;
        cy: number;
        innerRadius: number;
        outerRadius: number;
        maxRadius: number;
    };
    static getComposedData: ({ item, offset }: {
        item: Pie;
        offset: ChartOffset;
    }) => Omit<Props, 'dataKey'>;
    constructor(props: Props);
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    static getTextAnchor(x: number, cx: number): "end" | "middle" | "start";
    id: string;
    isActiveIndex(i: number): boolean;
    hasActiveIndex(): number | boolean;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    static renderLabelLineItem(option: PieLabelLine, props: any): JSX.Element;
    static renderLabelItem(option: PieLabel, props: any, value: any): JSX.Element;
    renderLabels(sectors: PieSectorDataItem[]): JSX.Element;
    static renderSectorItem(option: PieActiveShape, props: any): JSX.Element;
    renderSectorsStatically(sectors: PieSectorDataItem[]): JSX.Element[];
    renderSectorsWithAnimation(): JSX.Element;
    attachKeyboardHandlers(pieRef: HTMLElement): void;
    renderSectors(): JSX.Element | JSX.Element[];
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
