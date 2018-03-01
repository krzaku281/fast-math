"use strict";

module.exports = {
	abs: abs,
	ceil: ceil,
	floor: floor,
	round: round,
	sign: sign,
};

function abs(value) {
	value = +value;
	return value < 0 ? -value : value;
};

function ceil(value) {
	value = +value;
	return ~~value === value ? value : (value > 0) ? (~~value + 1) : ~~value;
};

function floor(value) {
	value = +value;
	return ~~value === value ? value : (value > 0) ? ~~value : (~~value - 1);
};

function round(value) {
	value = +value;
	return value + (value < 0 ? -0.5 : 0.5) >> 0;
};

function sign(value) {
	value = +value;
	return value ? value < 0 ? -1 : 1 : 0;
};