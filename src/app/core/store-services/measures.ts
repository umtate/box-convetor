export const measures = {
  length: [
    { id: 'cm', meter: 0.01, yards: 0.0109361, inch: 0.393701, cm: 1 },
    { id: 'meter', cm: 100, yards: 1.09361, inch: 39.3701, meter: 1 },
    { id: 'yards', meter: 0.9144, cm: 91.44, inch: 36, yards: 1 },
    { id: 'inch', meter: 0.0254, yards: 0.0277778, cm: 2.54, inch: 1 },
  ],
  volume: [
    { id: 'liter', gallon: 0.219969, quart: 0.879877, pint: 1.75975 },
    { id: 'quart', gallon: 0.25, liter: 1.13652, pint: 2 },
    { id: 'pint', gallon: 0.125, quart: 0.5, litre: 0.568261 },
  ],
};
