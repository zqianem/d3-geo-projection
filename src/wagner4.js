import {geoProjection} from "d3-geo";
import {sqrt, pi} from "./math";
import {mollweideBromleyRaw} from "./mollweide";

var A = 4 * pi + 3 * sqrt(3),
    B = 2 * sqrt(2 * pi * sqrt(3) / A);

export var wagner4Raw = mollweideBromleyRaw(B * sqrt(3) / pi, B, A / 6);

export default function() {
  return geoProjection(wagner4Raw)
      .scale(176.84);
}
