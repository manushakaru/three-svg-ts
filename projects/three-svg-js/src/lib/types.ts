import { Vector2 } from "three";

export type Length = number | string;

export type StrokeLineCap = 'butt' | 'round' | 'square'
export type StrokeLineJoin = 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'

export interface PresentationAttributes {
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export class RectParams implements PresentationAttributes {
  x?: Length;
  y?: Length;
  width?: Length;
  height?: Length;
  rx?: Length;
  ry?: Length;
  //pathLength?: number | "none";

  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export class CircleParams implements PresentationAttributes {
  cx?: Length;
  cy?: Length;
  r?: Length;
  //pathLength?: number | "none";

  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export class EllipseParams implements PresentationAttributes {
  cx?: Length;
  cy?: Length;
  rx?: Length;
  ry?: Length;
  //pathLength?: number | "none";

  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export class TextParams implements PresentationAttributes {
  x?: Length;
  y?: Length;
  dx?: Length;
  dy?: Length;
  rotate?: Array<number>;
  lengthAdjust?: "spacing" | "spacingAndGlpyhs";
  textLength?: Length;

  textPath?: string;
  textSpacing?: number;

  // style attributes
  // fontfamiliy?:string;
  fontSize?: number;
  // fontSizeAdjust?:number;
  // fontStretch?:number;
  // fontStyle?:string;
  // fontVariant?:string;
  // fontWeight?:string;

  // presentation attributes
  textAnchor?: 'start' | 'middle' | 'end';
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  // stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  // strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export class LineParams implements PresentationAttributes {
  x1?: Length;
  x2?: Length;
  y1?: Length;
  y2?: Length;
  //pathLength?: number | "none";


  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  //fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}
export class PolylineParams implements PresentationAttributes {
  points?: string;
  //pathLength?: number | "none";


  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
  strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}
export class PolygonParams implements PresentationAttributes {
  points?: string;
  //pathLength?: number | "none";


  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
   strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export class PathParams implements PresentationAttributes {
  id?: string;
  d?: string;
  //pathLength?: number | "none";


  // presentation attributes
  // clipPath?: string;
  // clipRule?: string;
  // color?: string;
  // colorInterpolation?: string;
  // colorRendering?: string;
  // cursor?: string;
  // display?: string;
  fill?: string;
  fillOpacity?: number;
  // fillRule?: string;
  // filter?: string;
  // mask?: string;
  // opacity?: string;
  // pointerEvents?: string;
  // shapeRendering?: string;
  stroke?: string;
  // strokeDashArray?: string;
  // strokeDashOffset?: string;
   strokeLineCap?: StrokeLineCap;
  strokeLineJoin?: StrokeLineJoin;
  strokeMiterLimit?: number;
  // strokeOpacity?: string;
  strokeWidth?: Length;
  // transform?: string;
  // vectorEffect?: string;
  // visibility?: string;
}

export interface GradientStop {
  offset?: Length;
  stopColor?: string;
  //stopOpacity?: number;

}
export interface LinearGradient {
  id: string,
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;

  stops: Array<GradientStop>;
}
