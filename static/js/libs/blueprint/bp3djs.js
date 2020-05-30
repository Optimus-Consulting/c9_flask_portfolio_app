var BP3DJS = (function (exports) {
	'use strict';
    
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	  }
	};
  
	var createClass = function () {
	  function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
		  var descriptor = props[i];
		  descriptor.enumerable = descriptor.enumerable || false;
		  descriptor.configurable = true;
		  if ("value" in descriptor) descriptor.writable = true;
		  Object.defineProperty(target, descriptor.key, descriptor);
		}
	  }
  
	  return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	  };
	}();
  
	var get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);
  
	  if (desc === undefined) {
		var parent = Object.getPrototypeOf(object);
  
		if (parent === null) {
		  return undefined;
		} else {
		  return get(parent, property, receiver);
		}
	  } else if ("value" in desc) {
		return desc.value;
	  } else {
		var getter = desc.get;
  
		if (getter === undefined) {
		  return undefined;
		}
  
		return getter.call(receiver);
	  }
	};
  
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
  
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
		  value: subClass,
		  enumerable: false,
		  writable: true,
		  configurable: true
		}
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
  
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
  
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
  
	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = undefined;
  
		try {
		  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
			_arr.push(_s.value);
  
			if (i && _arr.length === i) break;
		  }
		} catch (err) {
		  _d = true;
		  _e = err;
		} finally {
		  try {
			if (!_n && _i["return"]) _i["return"]();
		  } finally {
			if (_d) throw _e;
		  }
		}
  
		return _arr;
	  }
  
	  return function (arr, i) {
		if (Array.isArray(arr)) {
		  return arr;
		} else if (Symbol.iterator in Object(arr)) {
		  return sliceIterator(arr, i);
		} else {
		  throw new TypeError("Invalid attempt to destructure non-iterable instance");
		}
	  };
	}();
  
	var Version = function () {
		function Version() {
			classCallCheck(this, Version);
		}
		createClass(Version, null, [{
			key: 'isVersionHigherThan',
			value: function isVersionHigherThan(version, checkVersion) {
				if (version != undefined) {
					checkVersion = checkVersion.replace(/[^\d.-]/g, '').split('.');
					var givenVersion = version.replace(/[^\d.-]/g, '').split('.');
					var flag = true;
					if (checkVersion.length != givenVersion.length) {
						return false;
					}
					for (var i = 0; i < checkVersion.length; i++) {
						var a = parseInt(checkVersion[i]);
						var b = parseInt(givenVersion[i]);
						flag &= a >= b;
					}
					return flag;
				}
				return false;
			}
		}, {
			key: 'getInformalVersion',
			value: function getInformalVersion() {
				return '0.0.3';
			}
		}, {
			key: 'getTechnicalVersion',
			value: function getTechnicalVersion() {
				return '0.0.3';
			}
		}]);
		return Version;
	}();
  
	var EVENT_ACTION = 'ACTION_EVENT';
	var EVENT_DELETED = 'DELETED_EVENT';
	var EVENT_MOVED = 'MOVED_EVENT';
	var EVENT_REDRAW = 'REDRAW_EVENT';
	var EVENT_NEW = 'NEW_EVENT';
	var EVENT_LOADED = 'LOADED_EVENT';
	var EVENT_LOADING = 'LOADING_EVENT';
	var EVENT_UPDATED = 'UPDATED_EVENT';
	var EVENT_SAVED = 'SAVED_EVENT';
	var EVENT_CHANGED = 'CHANGED_EVENT';
	var EVENT_GLTF_READY = 'GLTF_READY_EVENT';
	var EVENT_ITEM_LOADING = 'ITEM_LOADING_EVENT';
	var EVENT_ITEM_LOADED = 'ITEM_LOADED_EVENT';
	var EVENT_ITEM_REMOVED = 'ITEM_REMOVED_EVENT';
	var EVENT_ITEM_SELECTED = 'ITEM_SELECTED_EVENT';
	var EVENT_ITEM_UNSELECTED = 'ITEM_UNSELECTED_EVENT';
	var EVENT_MODE_RESET = 'MODE_RESET_EVENT';
	var EVENT_CAMERA_MOVED = 'CAMERA_MOVED_EVENT';
	var EVENT_CAMERA_ACTIVE_STATUS = 'CAMERA_ACTIVE_STATUS_EVENT';
	var EVENT_CAMERA_VIEW_CHANGE = 'CAMERA_VIEW_CHANGE_EVENT';
	var EVENT_FPS_EXIT = 'CAMERA_FPS_EXIT_EVENT';
	var EVENT_WALL_CLICKED = 'WALL_CLICKED_EVENT';
	var EVENT_ROOM_CLICKED = 'ROOM_CLICKED_EVENT';
	var EVENT_FLOOR_CLICKED = 'FLOOR_CLICKED_EVENT';
	var EVENT_NOTHING_CLICKED = 'NOTHING_CLICKED_EVENT';
	var EVENT_ROOM_NAME_CHANGED = 'CHANGED_ROOM_NAME_EVENT';
	var EVENT_CORNER_ATTRIBUTES_CHANGED = 'CORNER_ATTRIBUTES_CHANGED_EVENT';
	var EVENT_WALL_ATTRIBUTES_CHANGED = 'WALL_ATTRIBUTES_CHANGED_EVENT';
	var EVENT_ROOM_ATTRIBUTES_CHANGED = 'ROOM_ATTRIBUTES_CHANGED_EVENT';
	var EVENT_CORNER_2D_CLICKED = 'CORNER_CLICKED_2D_EVENT';
	var EVENT_WALL_2D_CLICKED = 'WALL_CLICKED_2D_EVENT';
	var EVENT_ROOM_2D_CLICKED = 'ROOM_CLICKED_2D_EVENT';
	var EVENT_CORNER_2D_DOUBLE_CLICKED = 'CORNER_DOUBLE_CLICKED_2D_EVENT';
	var EVENT_WALL_2D_DOUBLE_CLICKED = 'WALL_DOUBLE_CLICKED_2D_EVENT';
	var EVENT_ROOM_2D_DOUBLE_CLICKED = 'ROOM_DOUBLE_CLICKED_2D_EVENT';
	var EVENT_CORNER_2D_HOVER = 'CORNER_HOVER_2D_EVENT';
	var EVENT_WALL_2D_HOVER = 'WALL_HOVER_2D_EVENT';
	var EVENT_ROOM_2D_HOVER = 'ROOM_HOVER_2D_EVENT';
	var EVENT_FRAME_UPDATE = 'FRAME_UPDATE';
  
	var Utils = function () {
		function Utils() {
			classCallCheck(this, Utils);
		}
		createClass(Utils, null, [{
			key: 'pointDistanceFromLine',
			value: function pointDistanceFromLine(point, start, end) {
				var tPoint = Utils.closestPointOnLine(point, start, end);
				var tDx = point.x - tPoint.x;
				var tDy = point.y - tPoint.y;
				return Math.sqrt(tDx * tDx + tDy * tDy);
			}
		}, {
			key: 'closestPointOnLine',
			value: function closestPointOnLine(point, start, end) {
				var tA = point.x - start.x;
				var tB = point.y - start.y;
				var tC = end.x - start.x;
				var tD = end.y - start.y;
				var tDot = tA * tC + tB * tD;
				var tLenSq = tC * tC + tD * tD;
				var tParam = tDot / tLenSq;
				var tXx, tYy;
				if (tParam < 0 || start.x == end.x && start.y == end.y) {
					tXx = start.x;
					tYy = start.y;
				} else if (tParam > 1) {
					tXx = end.x;
					tYy = end.y;
				} else {
					tXx = start.x + tParam * tC;
					tYy = start.y + tParam * tD;
				}
				return new THREE.Vector2(tXx, tYy);
			}
		}, {
			key: 'distance',
			value: function distance(start, end) {
				return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
			}
		}, {
			key: 'angle',
			value: function angle(start, end) {
				var tDot = start.x * end.x + start.y * end.y;
				var tDet = start.x * end.y - start.y * end.x;
				var tAngle = -Math.atan2(tDet, tDot);
				return tAngle;
			}
		}, {
			key: 'angle2pi',
			value: function angle2pi(start, end) {
				var tTheta = Utils.angle(start, end);
				if (tTheta < 0) {
					tTheta += 2.0 * Math.PI;
				}
				return tTheta;
			}
		}, {
			key: 'getCyclicOrder',
			value: function getCyclicOrder(points) {
				var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
				if (!start) {
					start = new THREE.Vector2(0, 0);
				}
				var angles = [];
				for (var i = 0; i < points.length; i++) {
					var point = points[i];
					var vect = point.clone().sub(start);
					var radians = Math.atan2(vect.y, vect.x);
					var degrees = THREE.Math.radToDeg(radians);
					degrees = degrees > 0 ? degrees : (degrees + 360) % 360;
					angles.push(degrees);
				}
				var indices = Utils.argsort(angles);
				var sortedAngles = [];
				var sortedPoints = [];
				for (i = 0; i < indices.length; i++) {
					sortedAngles.push(angles[indices[i]]);
					sortedPoints.push(points[indices[i]]);
				}
				return { indices: indices, angles: sortedAngles, points: sortedPoints };
			}
		}, {
			key: 'argsort',
			value: function argsort(numericalValues) {
				var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
				var indices = Array.from(new Array(numericalValues.length), function (val, index) {
					return index;
				});
				return indices.map(function (item, index) {
					return [numericalValues[index], item];
				})
				.sort(function (_ref, _ref2) {
					var _ref4 = slicedToArray(_ref, 1),
						count1 = _ref4[0];
					var _ref3 = slicedToArray(_ref2, 1),
						count2 = _ref3[0];
					return (count1 - count2) * direction;
				})
				.map(function (_ref5) {
					var _ref6 = slicedToArray(_ref5, 2),
						item = _ref6[1];
					return item;
				});
			}
		}, {
			key: 'isClockwise',
			value: function isClockwise(points) {
				var tSubX = Math.min(0, Math.min.apply(null, Utils.map(points, function (p) {
					return p.x;
				})));
				var tSubY = Math.min(0, Math.min.apply(null, Utils.map(points, function (p) {
					return p.x;
				})));
				var tNewPoints = Utils.map(points, function (p) {
					return {
						x: p.x - tSubX,
						y: p.y - tSubY
					};
				});
				var tSum = 0;
				for (var tI = 0; tI < tNewPoints.length; tI++) {
					var tC1 = tNewPoints[tI];
					var tC2;
					if (tI == tNewPoints.length - 1) {
						tC2 = tNewPoints[0];
					} else {
						tC2 = tNewPoints[tI + 1];
					}
					tSum += (tC2.x - tC1.x) * (tC2.y + tC1.y);
				}
				return tSum >= 0;
			}
		}, {
			key: 'guide',
			value: function guide() {
				var tS4 = function tS4() {
					return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
				};
				return tS4() + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + '-' + tS4() + tS4() + tS4();
			}
		}, {
			key: 'polygonPolygonIntersect',
			value: function polygonPolygonIntersect(firstCorners, secondCorners) {
				for (var tI = 0; tI < firstCorners.length; tI++) {
					var tFirstCorner = firstCorners[tI],
						tSecondCorner;
					if (tI == firstCorners.length - 1) {
						tSecondCorner = firstCorners[0];
					} else {
						tSecondCorner = firstCorners[tI + 1];
					}
					if (Utils.linePolygonIntersect(tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y, secondCorners)) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'linePolygonIntersect',
			value: function linePolygonIntersect(point, point2, corners) {
				for (var tI = 0; tI < corners.length; tI++) {
					var tFirstCorner = corners[tI],
						tSecondCorner;
					if (tI == corners.length - 1) {
						tSecondCorner = corners[0];
					} else {
						tSecondCorner = corners[tI + 1];
					}
					if (Utils.lineLineIntersect(point, point2, { x: tFirstCorner.x, y: tFirstCorner.y }, { x: tSecondCorner.x, y: tSecondCorner.y })) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'lineLineIntersectPoint',
			value: function lineLineIntersectPoint(aStart, aEnd, bStart, bEnd) {
				var result = lineIntersect.checkIntersection(aStart.x, aStart.y, aEnd.x, aEnd.y, bStart.x, bStart.y, bEnd.x, bEnd.y);
				if (result.point) {
					return new THREE.Vector2(result.point.x, result.point.y);
				}
				return undefined;
			}
		}, {
			key: 'lineLineIntersect',
			value: function lineLineIntersect(lineAStart, lineAEnd, lineBStart, lineBEnd) {
				function tCCW(p1, p2, p3) {
					var tA = p1.x,
						tB = p1.y,
						tC = p2.x,
						tD = p2.y,
						tE = p3.x,
						tF = p3.y;
					return (tF - tB) * (tC - tA) > (tD - tB) * (tE - tA);
				}
				var tP1 = lineAStart,
					tP2 = lineAEnd,
					tP3 = lineBStart,
					tP4 = lineBEnd;
				return tCCW(tP1, tP3, tP4) != tCCW(tP2, tP3, tP4) && tCCW(tP1, tP2, tP3) != tCCW(tP1, tP2, tP4);
			}
		}, {
			key: 'pointInPolygon2',
			value: function pointInPolygon2(point, polygon) {
				var x = point.x,
					y = point.y;
				var inside = false;
				for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
					var intersect = (polygon[i].y <= y && y < polygon[j].y || polygon[j].y <= y && y < polygon[i].y) && x < (polygon[j].x - polygon[i].x) * (y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x;
					if (intersect) {
						inside = !inside;
					}
				}
				return inside;
			}
		}, {
			key: 'pointInPolygon',
			value: function pointInPolygon(point, corners, start) {
				start = start || new THREE.Vector2(0, 0);
				var startX = start.x || 0;
				var startY = start.y || 0;
				var tMinX = 0,
					tMinY = 0;
				var tI = 0;
				if (startX === undefined || startY === undefined) {
					for (tI = 0; tI < corners.length; tI++) {
						tMinX = Math.min(tMinX, corners[tI].x);
						tMinY = Math.min(tMinX, corners[tI].y);
					}
					startX = tMinX - 10;
					startY = tMinY - 10;
				}
				var tIntersects = 0;
				for (tI = 0; tI < corners.length; tI++) {
					var tFirstCorner = corners[tI],
						tSecondCorner;
					if (tI == corners.length - 1) {
						tSecondCorner = corners[0];
					} else {
						tSecondCorner = corners[tI + 1];
					}
					if (Utils.lineLineIntersect(start, point, tFirstCorner.x, tFirstCorner.y, tSecondCorner.x, tSecondCorner.y)) {
						tIntersects++;
					}
				}
				return tIntersects % 2 == 1;
			}
		}, {
			key: 'polygonInsidePolygon',
			value: function polygonInsidePolygon(insideCorners, outsideCorners, start) {
				start.x = start.x || 0;
				start.y = start.y || 0;
				for (var tI = 0; tI < insideCorners.length; tI++) {
					if (!Utils.pointInPolygon(insideCorners[tI].x, insideCorners[tI].y, outsideCorners, start)) {
						return false;
					}
				}
				return true;
			}
		}, {
			key: 'polygonOutsidePolygon',
			value: function polygonOutsidePolygon(insideCorners, outsideCorners, start) {
				start.x = start.x || 0;
				start.y = start.y || 0;
				for (var tI = 0; tI < insideCorners.length; tI++) {
					if (Utils.pointInPolygon(insideCorners[tI].x, insideCorners[tI].y, outsideCorners, start)) {
						return false;
					}
				}
				return true;
			}
		}, {
			key: 'forEach',
			value: function forEach(array, action) {
				for (var tI = 0; tI < array.length; tI++) {
					action(array[tI]);
				}
			}
		}, {
			key: 'forEachIndexed',
			value: function forEachIndexed(array, action) {
				for (var tI = 0; tI < array.length; tI++) {
					action(tI, array[tI]);
				}
			}
		}, {
			key: 'map',
			value: function map(array, func) {
				var tResult = [];
				array.forEach(function (element) {
					tResult.push(func(element));
				});
				return tResult;
			}
		}, {
			key: 'removeIf',
			value: function removeIf(array, func) {
				var tResult = [];
				array.forEach(function (element) {
					if (!func(element)) {
						tResult.push(element);
					}
				});
				return tResult;
			}
		}, {
			key: 'cycle',
			value: function cycle(arr, shift) {
				var tReturn = arr.slice(0);
				for (var tI = 0; tI < shift; tI++) {
					var tmp = tReturn.shift();
					tReturn.push(tmp);
				}
				return tReturn;
			}
		}, {
			key: 'unique',
			value: function unique(arr, hashFunc) {
				var tResults = [];
				var tMap = {};
				for (var tI = 0; tI < arr.length; tI++) {
					if (!tMap.hasOwnProperty(arr[tI])) {
						tResults.push(arr[tI]);
						tMap[hashFunc(arr[tI])] = true;
					}
				}
				return tResults;
			}
		}, {
			key: 'removeValue',
			value: function removeValue(array, value) {
				for (var tI = array.length - 1; tI >= 0; tI--) {
					if (array[tI] === value) {
						array.splice(tI, 1);
					}
				}
			}
		}, {
			key: 'hasValue',
			value: function hasValue(array, value) {
				for (var tI = 0; tI < array.length; tI++) {
					if (array[tI] === value) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'subtract',
			value: function subtract(array, subArray) {
				return Utils.removeIf(array, function (el) {
					return Utils.hasValue(subArray, el);
				});
			}
		}]);
		return Utils;
	}();
	var Region = function () {
		function Region(points) {
			classCallCheck(this, Region);
			this.points = points || [];
			this.length = points.length;
		}
		createClass(Region, [{
			key: 'area',
			value: function area() {
				var area = 0,
					i,
					j,
					point1,
					point2;
				for (i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
					point1 = this.points[i];
					point2 = this.points[j];
					area += point1.x * point2.y;
					area -= point1.y * point2.x;
				}
				area *= 0.5;
				return area;
			}
		}, {
			key: 'centroid',
			value: function centroid() {
				var x = 0,
					y = 0,
					i,
					j,
					f,
					point1,
					point2;
				for (i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
					point1 = this.points[i];
					point2 = this.points[j];
					f = point1.x * point2.y - point2.x * point1.y;
					x += (point1.x + point2.x) * f;
					y += (point1.y + point2.y) * f;
				}
				f = this.area() * 6;
				return new THREE.Vector2(x / f, y / f);
			}
		}]);
		return Region;
	}();
  
	function Enum() {
	  var _this = this;
	  if (!(this instanceof Enum)) return new (Function.prototype.bind.apply(Enum, [null].concat(Array.prototype.slice.call(arguments))))();
	  Array.from(arguments).forEach(function (arg) {
		_this[arg] = Symbol(arg);
	  });
	}
	var _enum = Enum;
  
	var ELogContext = _enum('None', 'All', 'Interaction2d', 'Item', 'Wall', 'Room');
	var ELogLevel = _enum('Information', 'Warning', 'Error', 'Fatal', 'Debug');
	var logContext = ELogContext.None;
	function isLogging(context, level) {
		return logContext === ELogContext.All || logContext == context || level === ELogLevel.Warning || level === ELogLevel.Error || level === ELogLevel.Fatal;
	}
	function log(context, level, message) {
		if (isLogging(context, level) === false) {
			return;
		}
		var tPrefix = '';
		switch (level) {
			case ELogLevel.Information:
				tPrefix = '[INFO_] ';
				break;
			case ELogLevel.Warning:
				tPrefix = '[WARNG] ';
				break;
			case ELogLevel.Error:
				tPrefix = '[ERROR] ';
				break;
			case ELogLevel.Fatal:
				tPrefix = '[FATAL] ';
				break;
			case ELogLevel.Debug:
				tPrefix = '[DEBUG] ';
				break;
		}
		console.log(tPrefix + message);
	}
  
	var configDimUnit = 'dimUnit';
	var configWallHeight = 'wallHeight';
	var configWallThickness = 'wallThickness';
	var configSystemUI = 'systemUI';
	var scale = 'scale';
	var gridSpacing = 'gridSpacing';
	var snapToGrid = 'snapToGrid';
	var snapTolerance = 'snapTolerance';
	var config = { dimUnit: dimCentiMeter, wallHeight: 250, wallThickness: 10, systemUI: false, scale: 1, snapToGrid: false, snapTolerance: 25, gridSpacing: 25 };
	var wallInformation = { exterior: false, interior: false, midline: true, labels: true, exteriorlabel: 'e:', interiorlabel: 'i:', midlinelabel: 'm:' };
	var cornerTolerance = 20;
	var Configuration = function () {
		function Configuration() {
			classCallCheck(this, Configuration);
		}
		createClass(Configuration, null, [{
			key: 'getData',
			value: function getData() {
				return config;
			}
		}, {
			key: 'setValue',
			value: function setValue(key, value) {
				config[key] = value;
			}
		}, {
			key: 'getStringValue',
			value: function getStringValue(key) {
				switch (key) {
					case configDimUnit:
						return String(Configuration.getData()[key]);
					default:
						throw new Error('Invalid string configuration parameter: ' + key);
				}
			}
		}, {
			key: 'getNumericValue',
			value: function getNumericValue(key) {
				switch (key) {
					case configSystemUI:
					case configWallHeight:
					case configWallThickness:
					case scale:
					case snapToGrid:
					case snapTolerance:
					case gridSpacing:
						return Number(Configuration.getData()[key]);
					default:
						throw new Error('Invalid numeric configuration parameter: ' + key);
				}
			}
		}]);
		return Configuration;
	}();
  
	var dimInch = 'inch';
	var dimFeetAndInch = 'feetAndInch';
	var dimMeter = 'm';
	var dimCentiMeter = 'cm';
	var dimMilliMeter = 'mm';
	var decimals = 1000;
	var cmPerFoot = 30.48;
	var pixelsPerFoot = 15.0;
	var cmPerPixel = cmPerFoot * (1.0 / pixelsPerFoot);
	var pixelsPerCm = 1.0 / cmPerPixel;
	var dimensioningOptions = [dimInch, dimFeetAndInch, dimMeter, dimCentiMeter, dimMilliMeter];
	var Dimensioning = function () {
		function Dimensioning() {
			classCallCheck(this, Dimensioning);
		}
		createClass(Dimensioning, null, [{
			key: 'cmToPixel',
			value: function cmToPixel(cm) {
				var apply_scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
				if (apply_scale) {
					return cm * pixelsPerCm * Configuration.getNumericValue('scale');
				}
				return cm * pixelsPerCm;
			}
		}, {
			key: 'pixelToCm',
			value: function pixelToCm(pixel) {
				var apply_scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
				if (apply_scale) {
					return pixel * cmPerPixel * (1.0 / Configuration.getNumericValue('scale'));
				}
				return pixel * cmPerPixel;
			}
		}, {
			key: 'roundOff',
			value: function roundOff(value, decimals) {
				return Math.round(decimals * value) / decimals;
			}
		}, {
			key: 'cmFromMeasureRaw',
			value: function cmFromMeasureRaw(measure) {
				switch (Configuration.getStringValue(configDimUnit)) {
					case dimFeetAndInch:
						return Math.round(decimals * (measure * 30.480016459203095991)) / decimals;
					case dimInch:
						return Math.round(decimals * (measure * 2.5400013716002578512)) / decimals;
					case dimMilliMeter:
						return Math.round(decimals * (measure * 0.10000005400001014955)) / decimals;
					case dimCentiMeter:
						return measure;
					case dimMeter:
					default:
						return Math.round(decimals * 100 * measure) / decimals;
				}
			}
		}, {
			key: 'cmFromMeasure',
			value: function cmFromMeasure(measure) {
				switch (Configuration.getStringValue(configDimUnit)) {
					case dimFeetAndInch:
						return Math.round(decimals * (measure * 30.480016459203095991)) / decimals + 'cm';
					case dimInch:
						return Math.round(decimals * (measure * 2.5400013716002578512)) / decimals + 'cm';
					case dimMilliMeter:
						return Math.round(decimals * (measure * 0.10000005400001014955)) / decimals + 'cm';
					case dimCentiMeter:
						return measure;
					case dimMeter:
					default:
						return Math.round(decimals * 100 * measure) / decimals + 'cm';
				}
			}
		}, {
			key: 'cmToMeasureRaw',
			value: function cmToMeasureRaw(cm) {
				var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
				switch (Configuration.getStringValue(configDimUnit)) {
					case dimFeetAndInch:
						var allInFeet = cm * Math.pow(0.032808416666669996953, power);
						return allInFeet;
					case dimInch:
						var inches = Math.round(decimals * (cm * Math.pow(0.393700, power))) / decimals;
						return inches;
					case dimMilliMeter:
						var mm = Math.round(decimals * (cm * Math.pow(10, power))) / decimals;
						return mm;
					case dimCentiMeter:
						return Math.round(decimals * cm) / decimals;
					case dimMeter:
					default:
						var m = Math.round(decimals * (cm * Math.pow(0.01, power))) / decimals;
						return m;
				}
			}
		}, {
			key: 'cmToMeasure',
			value: function cmToMeasure(cm) {
				var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
				switch (Configuration.getStringValue(configDimUnit)) {
					case dimFeetAndInch:
						var allInFeet = cm * Math.pow(0.032808416666669996953, power);
						var floorFeet = Math.floor(allInFeet);
						var remainingFeet = allInFeet - floorFeet;
						var remainingInches = Math.round(remainingFeet * 12);
						return floorFeet + '\'' + remainingInches + '"';
					case dimInch:
						var inches = Math.round(decimals * (cm * Math.pow(0.393700, power))) / decimals;
						return inches + '\'';
					case dimMilliMeter:
						var mm = Math.round(decimals * (cm * Math.pow(10, power))) / decimals;
						return '' + mm + 'mm';
					case dimCentiMeter:
						return '' + Math.round(decimals * cm) / decimals + 'cm';
					case dimMeter:
					default:
						var m = Math.round(decimals * (cm * Math.pow(0.01, power))) / decimals;
						return '' + m + 'm';
				}
			}
		}]);
		return Dimensioning;
	}();
  
	var VIEW_TOP = 'topview';
	var VIEW_FRONT = 'frontview';
	var VIEW_BACK = 'backview';
	var VIEW_RIGHT = 'rightview';
	var VIEW_LEFT = 'leftview';
	var VIEW_ISOMETRY = 'isometryview';
	var WallTypes = _enum('STRAIGHT', 'CURVED');
  
	var HalfEdge = function (_EventDispatcher) {
		inherits(HalfEdge, _EventDispatcher);
		function HalfEdge(room, wall, front) {
			classCallCheck(this, HalfEdge);
			var _this = possibleConstructorReturn(this, (HalfEdge.__proto__ || Object.getPrototypeOf(HalfEdge)).call(this));
			_this.min = null;
			_this.max = null;
			_this.center = null;
			_this.room = room;
			_this.wall = wall;
			_this.next = null;
			_this.prev = null;
			_this.offset = 0.0;
			_this.height = 0.0;
			_this.plane = null;
			_this.interiorTransform = new THREE.Matrix4();
			_this.invInteriorTransform = new THREE.Matrix4();
			_this.exteriorTransform = new THREE.Matrix4();
			_this.invExteriorTransform = new THREE.Matrix4();
			_this.redrawCallbacks = null;
			_this.front = front || false;
			_this.offset = wall.thickness / 2.0;
			_this.height = wall.height;
			if (_this.front) {
				_this.wall.frontEdge = _this;
			} else {
				_this.wall.backEdge = _this;
			}
			return _this;
		}
		createClass(HalfEdge, [{
			key: 'getTexture',
			value: function getTexture() {
				if (this.front) {
					return this.wall.frontTexture;
				} else {
					return this.wall.backTexture;
				}
			}
		}, {
			key: 'setTexture',
			value: function setTexture(textureUrl, textureStretch, textureScale) {
				var texture = { url: textureUrl, stretch: textureStretch, scale: textureScale };
				if (this.front) {
					this.wall.frontTexture = texture;
				} else {
					this.wall.backTexture = texture;
				}
				this.dispatchEvent({ type: EVENT_REDRAW, item: this });
			}
		}, {
			key: 'dispatchRedrawEvent',
			value: function dispatchRedrawEvent() {
				this.dispatchEvent({ type: EVENT_REDRAW, item: this });
			}
		}, {
			key: 'transformCorner',
			value: function transformCorner(corner) {
				return new THREE.Vector3(corner.x, 0, corner.y);
			}
		}, {
			key: 'generatePlane',
			value: function generatePlane() {
				var geometry = new THREE.Geometry();
				var v1 = this.transformCorner(this.interiorStart());
				var v2 = this.transformCorner(this.interiorEnd());
				var v3 = v2.clone();
				var v4 = v1.clone();
				v3.y = this.wall.startElevation;
				v4.y = this.wall.endElevation;
				geometry.vertices = [v1, v2, v3, v4];
				geometry.faces.push(new THREE.Face3(0, 1, 2));
				geometry.faces.push(new THREE.Face3(0, 2, 3));
				geometry.computeFaceNormals();
				geometry.computeBoundingBox();
				this.plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ visible: true }));
				this.plane.visible = true;
				this.plane.edge = this;
				this.computeTransforms(this.interiorTransform, this.invInteriorTransform, this.interiorStart(), this.interiorEnd());
				this.computeTransforms(this.exteriorTransform, this.invExteriorTransform, this.exteriorStart(), this.exteriorEnd());
				var b3 = new THREE.Box3();
				b3.setFromObject(this.plane);
				this.min = b3.min.clone();
				this.max = b3.max.clone();
				this.center = this.max.clone().sub(this.min).multiplyScalar(0.5).add(this.min);
			}
		}, {
			key: 'computeTransforms',
			value: function computeTransforms(transform, invTransform, start, end) {
				var v1 = start;
				var v2 = end;
				var angle = Utils.angle(new THREE.Vector2(1, 0), new THREE.Vector2(v2.x - v1.x, v2.y - v1.y));
				var tt = new THREE.Matrix4();
				var tr = new THREE.Matrix4();
				tt.makeTranslation(-v1.x, 0, -v1.y);
				tr.makeRotationY(-angle);
				transform.multiplyMatrices(tr, tt);
				invTransform.getInverse(transform);
			}
		}, {
			key: 'distanceTo',
			value: function distanceTo(x, y) {
				if (this.wall.wallType == WallTypes.STRAIGHT) {
					return Utils.pointDistanceFromLine(new THREE.Vector2(x, y), this.interiorStart(), this.interiorEnd());
				} else if (this.wall.wallType == WallTypes.CURVED) {
					var p = this._bezier.project({ x: x, y: y });
					var projected = new THREE.Vector2(p.x, p.y);
					return projected.distanceTo(new THREE.Vector2(x, y));
				}
				return -1;
			}
		}, {
			key: 'getStart',
			value: function getStart() {
				if (this.front) {
					return this.wall.getStart();
				} else {
					return this.wall.getEnd();
				}
			}
		}, {
			key: 'getEnd',
			value: function getEnd() {
				if (this.front) {
					return this.wall.getEnd();
				} else {
					return this.wall.getStart();
				}
			}
		}, {
			key: 'getOppositeEdge',
			value: function getOppositeEdge() {
				if (this.front) {
					return this.wall.backEdge;
				} else {
					return this.wall.frontEdge;
				}
			}
		}, {
			key: 'interiorCenter',
			value: function interiorCenter() {
				if (this.wall.wallType == WallTypes.STRAIGHT) {
					return new THREE.Vector2((this.interiorStart().x + this.interiorEnd().x) / 2.0, (this.interiorStart().y + this.interiorEnd().y) / 2.0);
				} else if (this.wall.wallType == WallTypes.CURVED) {
					var c = this.wall.bezier.get(0.5);
					return new THREE.Vector2(c.x, c.y);
				}
				return new THREE.Vector2((this.interiorStart().x + this.interiorEnd().x) / 2.0, (this.interiorStart().y + this.interiorEnd().y) / 2.0);
			}
		}, {
			key: 'interiorDistance',
			value: function interiorDistance() {
				var start = this.interiorStart();
				var end = this.interiorEnd();
				if (this.wall.wallType == WallTypes.STRAIGHT) {
					return Utils.distance(start, end);
				} else if (this.wall.wallType == WallTypes.CURVED) {
					return this.wall.bezier.length();
				}
				return Utils.distance(start, end);
			}
		}, {
			key: 'interiorStart',
			value: function interiorStart() {
				var vec = this.halfAngleVector(this.prev, this);
				return new THREE.Vector2(this.getStart().x + vec.x, this.getStart().y + vec.y);
			}
		}, {
			key: 'interiorEnd',
			value: function interiorEnd() {
				var vec = this.halfAngleVector(this, this.next);
				return new THREE.Vector2(this.getEnd().x + vec.x, this.getEnd().y + vec.y);
			}
		}, {
			key: 'exteriorEnd',
			value: function exteriorEnd() {
				var vec = this.halfAngleVector(this, this.next);
				return new THREE.Vector2(this.getEnd().x - vec.x, this.getEnd().y - vec.y);
			}
		}, {
			key: 'exteriorStart',
			value: function exteriorStart() {
				var vec = this.halfAngleVector(this.prev, this);
				return new THREE.Vector2(this.getStart().x - vec.x, this.getStart().y - vec.y);
			}
		}, {
			key: 'exteriorCenter',
			value: function exteriorCenter() {
				if (this.wall.wallType == WallTypes.STRAIGHT) {
					return new THREE.Vector2((this.exteriorStart().x + this.exteriorEnd().x) / 2.0, (this.exteriorStart().y + this.exteriorEnd().y) / 2.0);
				} else if (this.wall.wallType == WallTypes.CURVED) {
					var c = this.wall.bezier.get(0.5);
					return new THREE.Vector2(c.x, c.y);
				}
				return new THREE.Vector2((this.exteriorStart().x + this.exteriorEnd().x) / 2.0, (this.exteriorStart().y + this.exteriorEnd().y) / 2.0);
			}
		}, {
			key: 'exteriorDistance',
			value: function exteriorDistance() {
				var start = this.exteriorStart();
				var end = this.exteriorEnd();
				if (this.wall.wallType == WallTypes.STRAIGHT) {
					return Utils.distance(start, end);
				} else if (this.wall.wallType == WallTypes.CURVED) {
					return this.wall.bezier.length();
				}
				return Utils.distance(start, end);
			}
		}, {
			key: 'corners',
			value: function corners() {
				return [this.interiorStart(), this.interiorEnd(), this.exteriorEnd(), this.exteriorStart()];
			}
		}, {
			key: 'halfAngleVector',
			value: function halfAngleVector(v1, v2) {
				var v1startX = 0.0,
					v1startY = 0.0,
					v1endX = 0.0,
					v1endY = 0.0;
				var v2startX = 0.0,
					v2startY = 0.0,
					v2endX = 0.0,
					v2endY = 0.0;
				if (!v1) {
					v1startX = v2.getStart().x - (v2.getEnd().x - v2.getStart().x);
					v1startY = v2.getStart().y - (v2.getEnd().y - v2.getStart().y);
					v1endX = v2.getStart().x;
					v1endY = v2.getStart().y;
				} else {
					v1startX = v1.getStart().x;
					v1startY = v1.getStart().y;
					v1endX = v1.getEnd().x;
					v1endY = v1.getEnd().y;
				}
				if (!v2) {
					v2startX = v1.getEnd().x;
					v2startY = v1.getEnd().y;
					v2endX = v1.getEnd().x + (v1.getEnd().x - v1.getStart().x);
					v2endY = v1.getEnd().y + (v1.getEnd().y - v1.getStart().y);
				} else {
					v2startX = v2.getStart().x;
					v2startY = v2.getStart().y;
					v2endX = v2.getEnd().x;
					v2endY = v2.getEnd().y;
				}
				var theta = Utils.angle2pi(new THREE.Vector2(v1startX - v1endX, v1startY - v1endY), new THREE.Vector2(v2endX - v1endX, v2endY - v1endY));
				var cs = Math.cos(theta / 2.0);
				var sn = Math.sin(theta / 2.0);
				var v2dx = v2endX - v2startX;
				var v2dy = v2endY - v2startY;
				var vx = v2dx * cs - v2dy * sn;
				var vy = v2dx * sn + v2dy * cs;
				var mag = Utils.distance(new THREE.Vector2(0, 0), new THREE.Vector2(vx, vy));
				var desiredMag = this.offset / sn;
				var scalar = desiredMag / mag;
				var halfAngleVector = { x: vx * scalar, y: vy * scalar };
				return halfAngleVector;
			}
		}]);
		return HalfEdge;
	}(THREE.EventDispatcher);
  
	var Corner = function (_EventDispatcher) {
		inherits(Corner, _EventDispatcher);
		function Corner(floorplan, x, y, id) {
			classCallCheck(this, Corner);
			var _this = possibleConstructorReturn(this, (Corner.__proto__ || Object.getPrototypeOf(Corner)).call(this));
			_this.wallStarts = [];
			_this.wallEnds = [];
			_this.moved_callbacks = null;
			_this.deleted_callbacks = null;
			_this.action_callbacks = null;
			_this.floorplan = floorplan;
			_this._x = x;
			_this._y = y;
			_this._co = new THREE.Vector2(_this._x, _this._y);
			_this._elevation = Configuration.getNumericValue(configWallHeight);
			_this.id = id || Utils.guide();
			_this.attachedRooms = [];
			_this._angles = [];
			_this._angleDirections = [];
			_this._startAngles = [];
			_this._endAngles = [];
			_this._cyclicNeighbors = [];
			_this._hasChanged = false;
			return _this;
		}
		createClass(Corner, [{
			key: 'attachRoom',
			value: function attachRoom(room) {
				if (room) {
					this.attachedRooms.push(room);
				}
			}
		}, {
			key: 'getAttachedRooms',
			value: function getAttachedRooms() {
				return this.attachedRooms;
			}
		}, {
			key: 'clearAttachedRooms',
			value: function clearAttachedRooms() {
				this.attachedRooms = [];
			}
		}, {
			key: 'fireOnMove',
			value: function fireOnMove(func) {
				this.moved_callbacks.add(func);
			}
		}, {
			key: 'fireOnDelete',
			value: function fireOnDelete(func) {
				this.deleted_callbacks.add(func);
			}
		}, {
			key: 'fireOnAction',
			value: function fireOnAction(func) {
				this.action_callbacks.add(func);
			}
		}, {
			key: 'fireAction',
			value: function fireAction(action) {
				this.dispatchEvent({ type: EVENT_ACTION, item: this, action: action });
			}
		}, {
			key: 'getX',
			value: function getX() {
				return this.x;
			}
		}, {
			key: 'getY',
			value: function getY() {
				return this.y;
			}
		}, {
			key: 'snapToAxis',
			value: function snapToAxis(tolerance) {
				var snapped = { x: false, y: false };
				var scope = this;
				this.adjacentCorners().forEach(function (corner) {
					if (Math.abs(corner.x - scope.x) < tolerance) {
						scope.x = corner.x;
						snapped.x = true;
					}
					if (Math.abs(corner.y - scope.y) < tolerance) {
						scope.y = corner.y;
						snapped.y = true;
					}
				});
				return snapped;
			}
		}, {
			key: 'relativeMove',
			value: function relativeMove(dx, dy) {
				this.move(this.x + dx, this.y + dy);
			}
		}, {
			key: 'remove',
			value: function remove() {
				this.dispatchEvent({ type: EVENT_DELETED, item: this });
			}
		}, {
			key: 'removeAll',
			value: function removeAll() {
				var i = 0;
				for (i = 0; i < this.wallStarts.length; i++) {
					this.wallStarts[i].remove();
				}
				for (i = 0; i < this.wallEnds.length; i++) {
					this.wallEnds[i].remove();
				}
				this.remove();
			}
		}, {
			key: 'move',
			value: function move(newX, newY) {
				var mergeWithIntersections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
				this._x = newX;
				this._y = newY;
				this._co.x = newX;
				this._co.y = newY;
				if (mergeWithIntersections) {
					this.mergeWithIntersected();
					if (this.floorplan.rooms.length < 10) {
						this.updateAttachedRooms(true);
					}
				}
				this.dispatchEvent({ type: EVENT_MOVED, item: this, position: new THREE.Vector2(newX, newY) });
				this.wallStarts.forEach(function (wall) {
					wall.fireMoved();
				});
				this.wallEnds.forEach(function (wall) {
					wall.fireMoved();
				});
			}
		}, {
			key: 'closestAngle',
			value: function closestAngle(angle) {
				var neighbors = this.adjacentCorners();
				var delta = 999999;
				var closestAngle = 0;
				var point = new THREE.Vector2();
				for (var i = 0; i < neighbors.length; i++) {
					var wall = this.wallToOrFrom(neighbors[i]);
					if (wall.wallType == WallTypes.CURVED) {
						continue;
					}
					var neighbourAngle = neighbors[i].location.clone().sub(this.location).angle();
					neighbourAngle = neighbourAngle * 180 / Math.PI;
					var diff = Math.abs(angle - neighbourAngle);
					if (diff < delta) {
						delta = diff;
						point.x = neighbors[i].location.x;
						point.y = neighbors[i].location.y;
						closestAngle = neighbourAngle;
					}
				}
				return { angle: closestAngle, point: point };
			}
		}, {
			key: 'updateAngles',
			value: function updateAngles() {
				var neighbors = this.adjacentCorners();
				this._angles = [];
				this._angleDirections = [];
				this._startAngles = [];
				this._endAngles = [];
				this._cyclicNeighbors = [];
				if (neighbors.length < 2) {
					return;
				}
				var start = this.location.clone();
				var points = [];
				for (var i = 0; i < neighbors.length; i++) {
					points.push(neighbors[i].location);
				}
				var indicesAndAngles = Utils.getCyclicOrder(points, start);
				var indices = indicesAndAngles['indices'];
				var angles = indicesAndAngles['angles'];
				var N = indices.length < 3 ? 1 : indices.length;
				for (i = 0; i < N; i++) {
					var next = (i + 1) % indices.length;
					var cindex = indices[i];
					var nindex = indices[next];
					var cwall = this.wallToOrFrom(neighbors[cindex]);
					var nwall = this.wallToOrFrom(neighbors[nindex]);
					if (cwall != null && nwall != null) {
						if (cwall.wallType == WallTypes.CURVED || nwall.wallType == WallTypes.CURVED) {
							this._startAngles.push(0);
							this._endAngles.push(0);
							this._angles.push(0);
							this._angleDirections.push(new THREE.Vector2(0, 0));
							this._cyclicNeighbors.push(neighbors[indices[i]]);
							continue;
						}
					}
					var vectorA = points[cindex].clone().sub(start).normalize();
					var vectorB = points[nindex].clone().sub(start).normalize();
					var midVector = vectorA.add(vectorB).multiplyScalar(20.0);
					var diffAngle = Math.abs(angles[next] - angles[i]);
					diffAngle = diffAngle > 180 ? 360 - diffAngle : diffAngle;
					diffAngle = Math.round(diffAngle * 10) / 10;
					this._startAngles.push(angles[i]);
					this._endAngles.push(angles[next]);
					this._angles.push(diffAngle);
					this._angleDirections.push(midVector);
					this._cyclicNeighbors.push(neighbors[indices[i]]);
				}
			}
		}, {
			key: 'updateAttachedRooms',
			value: function updateAttachedRooms() {
				var explicit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
				if (!this._hasChanged && !explicit) {
					return;
				}
				this.attachedRooms.forEach(function (room) {
					room.updateArea();
				});
				this._hasChanged = false;
			}
		}, {
			key: 'adjacentCorners',
			value: function adjacentCorners() {
				var retArray = [];
				var i = 0;
				for (i = 0; i < this.wallStarts.length; i++) {
					retArray.push(this.wallStarts[i].getEnd());
				}
				for (i = 0; i < this.wallEnds.length; i++) {
					retArray.push(this.wallEnds[i].getStart());
				}
				return retArray;
			}
		}, {
			key: 'isWallConnected',
			value: function isWallConnected(wall) {
				var i = 0;
				for (i = 0; i < this.wallStarts.length; i++) {
					if (this.wallStarts[i] == wall) {
						return true;
					}
				}
				for (i = 0; i < this.wallEnds.length; i++) {
					if (this.wallEnds[i] == wall) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'distanceFrom',
			value: function distanceFrom(point) {
				var distance = Utils.distance(point, new THREE.Vector2(this.x, this.y));
				return distance;
			}
		}, {
			key: 'distanceFromWall',
			value: function distanceFromWall(wall) {
				var cPoint = new THREE.Vector2(this.x, this.y);
				if (wall.wallType == WallTypes.STRAIGHT) {
					return wall.distanceFrom(cPoint);
				} else if (wall.wallType == WallTypes.CURVED) {
					var p = wall.bezier.project(cPoint);
					var projected = new THREE.Vector2(p.x, p.y);
					return projected.distanceTo(cPoint);
				}
			}
		}, {
			key: 'distanceFromCorner',
			value: function distanceFromCorner(corner) {
				return this.distanceFrom(new THREE.Vector2(corner.x, corner.y));
			}
		}, {
			key: 'detachWall',
			value: function detachWall(wall) {
				Utils.removeValue(this.wallStarts, wall);
				Utils.removeValue(this.wallEnds, wall);
				if (this.wallStarts.length == 0 && this.wallEnds.length == 0) {
					this.remove();
				}
			}
		}, {
			key: 'attachStart',
			value: function attachStart(wall) {
				this.wallStarts.push(wall);
			}
		}, {
			key: 'attachEnd',
			value: function attachEnd(wall) {
				this.wallEnds.push(wall);
			}
		}, {
			key: 'wallTo',
			value: function wallTo(corner) {
				for (var i = 0; i < this.wallStarts.length; i++) {
					if (this.wallStarts[i].getEnd() === corner) {
						return this.wallStarts[i];
					}
				}
				return null;
			}
		}, {
			key: 'wallFrom',
			value: function wallFrom(corner) {
				for (var i = 0; i < this.wallEnds.length; i++) {
					if (this.wallEnds[i].getStart() === corner) {
						return this.wallEnds[i];
					}
				}
				return null;
			}
		}, {
			key: 'wallToOrFrom',
			value: function wallToOrFrom(corner) {
				return this.wallTo(corner) || this.wallFrom(corner);
			}
		}, {
			key: 'combineWithCorner',
			value: function combineWithCorner(corner) {
				var i = 0;
				this.move(corner.x, corner.y, false);
				for (i = corner.wallStarts.length - 1; i >= 0; i--) {
					corner.wallStarts[i].setStart(this);
				}
				for (i = corner.wallEnds.length - 1; i >= 0; i--) {
					corner.wallEnds[i].setEnd(this);
				}
				var rooms = corner.getAttachedRooms();
				for (i = 0; i < rooms.length; i++) {
					var room = rooms[i];
					var roomname = this.floorplan.metaroomsdata[room.roomByCornersId];
					if (roomname) {
						var oldId = room.roomByCornersId;
						var newId = oldId.replace(corner.id, this.id);
						this.floorplan.metaroomsdata[newId] = {};
						this.floorplan.metaroomsdata[newId]['name'] = roomname['name'];
						delete this.floorplan.metaroomsdata[oldId];
					}
				}
				corner.removeAll();
				this.removeDuplicateWalls();
				this.floorplan.update();
			}
		}, {
			key: 'mergeWithIntersected',
			value: function mergeWithIntersected() {
				var updateFloorPlan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
				var i = 0;
				for (i = 0; i < this.floorplan.getCorners().length; i++) {
					var corner = this.floorplan.getCorners()[i];
					if (this.distanceFromCorner(corner) < cornerTolerance && corner != this) {
						this.combineWithCorner(corner);
						return true;
					}
				}
				for (i = 0; i < this.floorplan.getWalls().length; i++) {
					var wall = this.floorplan.getWalls()[i];
					if (this.distanceFromWall(wall) < cornerTolerance && !this.isWallConnected(wall)) {
						var intersection;
						if (wall.wallType == WallTypes.STRAIGHT) {
							intersection = Utils.closestPointOnLine(new THREE.Vector2(this.x, this.y), wall.getStart(), wall.getEnd());
						} else if (wall.wallType == WallTypes.CURVED) {
							intersection = wall.bezier.project(new THREE.Vector2(this.x, this.y));
						}
						if (wall.wallType == WallTypes.STRAIGHT) {
							this.floorplan.newWall(this, wall.getEnd());
							wall.setEnd(this);
						} else if (wall.wallType == WallTypes.CURVED) {
							this.floorplan.newWall(this, wall.getEnd());
							wall.setEnd(this);
						}
						this.move(intersection.x, intersection.y, false, updateFloorPlan);
						this.floorplan.update();
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'removeDuplicateWalls',
			value: function removeDuplicateWalls() {
				var i = 0;
				var wallEndpoints = {};
				var wallStartpoints = {};
				for (i = this.wallStarts.length - 1; i >= 0; i--) {
					if (this.wallStarts[i].getEnd() === this) {
						this.wallStarts[i].remove();
					} else if (this.wallStarts[i].getEnd().id in wallEndpoints) {
						this.wallStarts[i].remove();
					} else {
						wallEndpoints[this.wallStarts[i].getEnd().id] = true;
					}
				}
				for (i = this.wallEnds.length - 1; i >= 0; i--) {
					if (this.wallEnds[i].getStart() === this) {
						this.wallEnds[i].remove();
					} else if (this.wallEnds[i].getStart().id in wallStartpoints) {
						this.wallEnds[i].remove();
					} else {
						wallStartpoints[this.wallEnds[i].getStart().id] = true;
					}
				}
			}
		}, {
			key: 'startAngles',
			get: function get() {
				return this._startAngles;
			}
		}, {
			key: 'endAngles',
			get: function get() {
				return this._endAngles;
			}
		}, {
			key: 'angles',
			get: function get() {
				return this._angles;
			}
		}, {
			key: 'angleDirections',
			get: function get() {
				return this._angleDirections;
			}
		}, {
			key: 'location',
			get: function get() {
				return this._co;
			},
			set: function set(xy) {
				this._co.x = xy.x;
				this._co.y = xy.y;
				this.x = xy.x;
				this.y = xy.y;
			}
		}, {
			key: 'x',
			get: function get() {
				return this._x;
			},
			set: function set(value) {
				var oldvalue = this._x;
				if (Math.abs(value - this._x) > 1e-6) {
					this._hasChanged = true;
				}
				this._x = value;
				if (this._hasChanged) {
					this._co.x = this._x;
					this.updateAttachedRooms();
					this.dispatchEvent({ type: EVENT_CORNER_ATTRIBUTES_CHANGED, item: this, info: { from: oldvalue, to: this._x } });
				}
			}
		}, {
			key: 'y',
			get: function get() {
				return this._y;
			},
			set: function set(value) {
				var oldvalue = this._y;
				if (Math.abs(value - this._y) > 1e-6) {
					this._hasChanged = true;
				}
				this._y = value;
				if (this._hasChanged) {
					this._co.y = this._y;
					this.updateAttachedRooms();
					this.dispatchEvent({ type: EVENT_CORNER_ATTRIBUTES_CHANGED, item: this, info: { from: oldvalue, to: this._y } });
				}
			}
		}, {
			key: 'elevation',
			set: function set(value) {
				var oldvalue = this._elevation;
				if (value - this._elevation < 1e-6) {
					this._hasChanged = true;
				}
				this._elevation = Number(value);
				if (this._hasChanged) {
					this.dispatchEvent({ type: EVENT_CORNER_ATTRIBUTES_CHANGED, item: this, info: { from: oldvalue, to: this._elevation } });
				}
			}
			,
			get: function get() {
				return this._elevation;
			}
		}]);
		return Corner;
	}(THREE.EventDispatcher);
  
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
  
	var utils = createCommonjsModule(function (module) {
	(function() {
	  var abs = Math.abs,
		cos = Math.cos,
		sin = Math.sin,
		acos = Math.acos,
		atan2 = Math.atan2,
		sqrt = Math.sqrt,
		pow = Math.pow,
		crt = function(v) {
		  return v < 0 ? -pow(-v, 1 / 3) : pow(v, 1 / 3);
		},
		pi = Math.PI,
		tau = 2 * pi,
		quart = pi / 2,
		epsilon = 0.000001,
		nMax = Number.MAX_SAFE_INTEGER || 9007199254740991,
		nMin = Number.MIN_SAFE_INTEGER || -9007199254740991,
		ZERO = { x: 0, y: 0, z: 0 };
	  var utils = {
		Tvalues: [
		  -0.0640568928626056260850430826247450385909,
		  0.0640568928626056260850430826247450385909,
		  -0.1911188674736163091586398207570696318404,
		  0.1911188674736163091586398207570696318404,
		  -0.3150426796961633743867932913198102407864,
		  0.3150426796961633743867932913198102407864,
		  -0.4337935076260451384870842319133497124524,
		  0.4337935076260451384870842319133497124524,
		  -0.5454214713888395356583756172183723700107,
		  0.5454214713888395356583756172183723700107,
		  -0.6480936519369755692524957869107476266696,
		  0.6480936519369755692524957869107476266696,
		  -0.7401241915785543642438281030999784255232,
		  0.7401241915785543642438281030999784255232,
		  -0.8200019859739029219539498726697452080761,
		  0.8200019859739029219539498726697452080761,
		  -0.8864155270044010342131543419821967550873,
		  0.8864155270044010342131543419821967550873,
		  -0.9382745520027327585236490017087214496548,
		  0.9382745520027327585236490017087214496548,
		  -0.9747285559713094981983919930081690617411,
		  0.9747285559713094981983919930081690617411,
		  -0.9951872199970213601799974097007368118745,
		  0.9951872199970213601799974097007368118745
		],
		Cvalues: [
		  0.1279381953467521569740561652246953718517,
		  0.1279381953467521569740561652246953718517,
		  0.1258374563468282961213753825111836887264,
		  0.1258374563468282961213753825111836887264,
		  0.121670472927803391204463153476262425607,
		  0.121670472927803391204463153476262425607,
		  0.1155056680537256013533444839067835598622,
		  0.1155056680537256013533444839067835598622,
		  0.1074442701159656347825773424466062227946,
		  0.1074442701159656347825773424466062227946,
		  0.0976186521041138882698806644642471544279,
		  0.0976186521041138882698806644642471544279,
		  0.086190161531953275917185202983742667185,
		  0.086190161531953275917185202983742667185,
		  0.0733464814110803057340336152531165181193,
		  0.0733464814110803057340336152531165181193,
		  0.0592985849154367807463677585001085845412,
		  0.0592985849154367807463677585001085845412,
		  0.0442774388174198061686027482113382288593,
		  0.0442774388174198061686027482113382288593,
		  0.0285313886289336631813078159518782864491,
		  0.0285313886289336631813078159518782864491,
		  0.0123412297999871995468056670700372915759,
		  0.0123412297999871995468056670700372915759
		],
		arcfn: function(t, derivativeFn) {
		  var d = derivativeFn(t);
		  var l = d.x * d.x + d.y * d.y;
		  if (typeof d.z !== "undefined") {
			l += d.z * d.z;
		  }
		  return sqrt(l);
		},
		compute: function(t, points, _3d) {
		  if (t === 0) {
			return points[0];
		  }
		  var order = points.length-1;
		  if (t === 1) {
			return points[order];
		  }
		  var p = points;
		  var mt = 1 - t;
		  if (order === 0) {
			return points[0];
		  }
		  if (order === 1) {
			ret = {
			  x: mt * p[0].x + t * p[1].x,
			  y: mt * p[0].y + t * p[1].y
			};
			if (_3d) {
			  ret.z = mt * p[0].z + t * p[1].z;
			}
			return ret;
		  }
		  if (order < 4) {
			var mt2 = mt * mt,
			  t2 = t * t,
			  a,
			  b,
			  c,
			  d = 0;
			if (order === 2) {
			  p = [p[0], p[1], p[2], ZERO];
			  a = mt2;
			  b = mt * t * 2;
			  c = t2;
			} else if (order === 3) {
			  a = mt2 * mt;
			  b = mt2 * t * 3;
			  c = mt * t2 * 3;
			  d = t * t2;
			}
			var ret = {
			  x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
			  y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y
			};
			if (_3d) {
			  ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
			}
			return ret;
		  }
		  var dCpts = JSON.parse(JSON.stringify(points));
		  while (dCpts.length > 1) {
			for (var i = 0; i < dCpts.length - 1; i++) {
			  dCpts[i] = {
				x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t,
				y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t
			  };
			  if (typeof dCpts[i].z !== "undefined") {
				dCpts[i] = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t;
			  }
			}
			dCpts.splice(dCpts.length - 1, 1);
		  }
		  return dCpts[0];
		},
		computeWithRatios: function (t, points, ratios, _3d) {
		  var mt = 1 - t, r = ratios, p = points, d;
		  var f1 = r[0], f2 = r[1], f3 = r[2], f4 = r[3];
		  f1 *= mt;
		  f2 *= t;
		  if (p.length === 2) {
			d = f1 + f2;
			return {
			  x: (f1 * p[0].x + f2 * p[1].x)/d,
			  y: (f1 * p[0].y + f2 * p[1].y)/d,
			  z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z)/d
			};
		  }
		  f1 *= mt;
		  f2 *= 2 * mt;
		  f3 *= t * t;
		  if (p.length === 3) {
			d = f1 + f2 + f3;
			return {
			  x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x)/d,
			  y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y)/d,
			  z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z)/d
			};
		  }
		  f1 *= mt;
		  f2 *= 1.5 * mt;
		  f3 *= 3 * mt;
		  f4 *= t * t * t;
		  if (p.length === 4) {
			d = f1 + f2 + f3 + f4;
			return {
			  x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x + f4 * p[3].x)/d,
			  y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y + f4 * p[3].y)/d,
			  z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z + f4 * p[3].z)/d
			};
		  }
		},
		derive: function (points, _3d) {
		  var dpoints = [];
		  for (var p = points, d = p.length, c = d - 1; d > 1; d--, c--) {
			var list = [];
			for (var j = 0, dpt; j < c; j++) {
			  dpt = {
				x: c * (p[j + 1].x - p[j].x),
				y: c * (p[j + 1].y - p[j].y)
			  };
			  if (_3d) {
				dpt.z = c * (p[j + 1].z - p[j].z);
			  }
			  list.push(dpt);
			}
			dpoints.push(list);
			p = list;
		  }
		  return dpoints;
		},
		between: function(v, m, M) {
		  return (
			(m <= v && v <= M) ||
			utils.approximately(v, m) ||
			utils.approximately(v, M)
		  );
		},
		approximately: function(a, b, precision) {
		  return abs(a - b) <= (precision || epsilon);
		},
		length: function(derivativeFn) {
		  var z = 0.5,
			sum = 0,
			len = utils.Tvalues.length,
			i,
			t;
		  for (i = 0; i < len; i++) {
			t = z * utils.Tvalues[i] + z;
			sum += utils.Cvalues[i] * utils.arcfn(t, derivativeFn);
		  }
		  return z * sum;
		},
		map: function(v, ds, de, ts, te) {
		  var d1 = de - ds,
			d2 = te - ts,
			v2 = v - ds,
			r = v2 / d1;
		  return ts + d2 * r;
		},
		lerp: function(r, v1, v2) {
		  var ret = {
			x: v1.x + r * (v2.x - v1.x),
			y: v1.y + r * (v2.y - v1.y)
		  };
		  if (!!v1.z && !!v2.z) {
			ret.z = v1.z + r * (v2.z - v1.z);
		  }
		  return ret;
		},
		pointToString: function(p) {
		  var s = p.x + "/" + p.y;
		  if (typeof p.z !== "undefined") {
			s += "/" + p.z;
		  }
		  return s;
		},
		pointsToString: function(points) {
		  return "[" + points.map(utils.pointToString).join(", ") + "]";
		},
		copy: function(obj) {
		  return JSON.parse(JSON.stringify(obj));
		},
		angle: function(o, v1, v2) {
		  var dx1 = v1.x - o.x,
			dy1 = v1.y - o.y,
			dx2 = v2.x - o.x,
			dy2 = v2.y - o.y,
			cross = dx1 * dy2 - dy1 * dx2,
			dot = dx1 * dx2 + dy1 * dy2;
		  return atan2(cross, dot);
		},
		round: function(v, d) {
		  var s = "" + v;
		  var pos = s.indexOf(".");
		  return parseFloat(s.substring(0, pos + 1 + d));
		},
		dist: function(p1, p2) {
		  var dx = p1.x - p2.x,
			dy = p1.y - p2.y;
		  return sqrt(dx * dx + dy * dy);
		},
		closest: function(LUT, point) {
		  var mdist = pow(2, 63),
			mpos,
			d;
		  LUT.forEach(function(p, idx) {
			d = utils.dist(point, p);
			if (d < mdist) {
			  mdist = d;
			  mpos = idx;
			}
		  });
		  return { mdist: mdist, mpos: mpos };
		},
		abcratio: function(t, n) {
		  if (n !== 2 && n !== 3) {
			return false;
		  }
		  if (typeof t === "undefined") {
			t = 0.5;
		  } else if (t === 0 || t === 1) {
			return t;
		  }
		  var bottom = pow(t, n) + pow(1 - t, n),
			top = bottom - 1;
		  return abs(top / bottom);
		},
		projectionratio: function(t, n) {
		  if (n !== 2 && n !== 3) {
			return false;
		  }
		  if (typeof t === "undefined") {
			t = 0.5;
		  } else if (t === 0 || t === 1) {
			return t;
		  }
		  var top = pow(1 - t, n),
			bottom = pow(t, n) + top;
		  return top / bottom;
		},
		lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
		  var nx =
			  (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
			ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
			d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		  if (d == 0) {
			return false;
		  }
		  return { x: nx / d, y: ny / d };
		},
		lli4: function(p1, p2, p3, p4) {
		  var x1 = p1.x,
			y1 = p1.y,
			x2 = p2.x,
			y2 = p2.y,
			x3 = p3.x,
			y3 = p3.y,
			x4 = p4.x,
			y4 = p4.y;
		  return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
		},
		lli: function(v1, v2) {
		  return utils.lli4(v1, v1.c, v2, v2.c);
		},
		makeline: function(p1, p2) {
		  var Bezier = bezier;
		  var x1 = p1.x,
			y1 = p1.y,
			x2 = p2.x,
			y2 = p2.y,
			dx = (x2 - x1) / 3,
			dy = (y2 - y1) / 3;
		  return new Bezier(
			x1,
			y1,
			x1 + dx,
			y1 + dy,
			x1 + 2 * dx,
			y1 + 2 * dy,
			x2,
			y2
		  );
		},
		findbbox: function(sections) {
		  var mx = nMax,
			my = nMax,
			MX = nMin,
			MY = nMin;
		  sections.forEach(function(s) {
			var bbox = s.bbox();
			if (mx > bbox.x.min) mx = bbox.x.min;
			if (my > bbox.y.min) my = bbox.y.min;
			if (MX < bbox.x.max) MX = bbox.x.max;
			if (MY < bbox.y.max) MY = bbox.y.max;
		  });
		  return {
			x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
			y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
		  };
		},
		shapeintersections: function(
		  s1,
		  bbox1,
		  s2,
		  bbox2,
		  curveIntersectionThreshold
		) {
		  if (!utils.bboxoverlap(bbox1, bbox2)) return [];
		  var intersections = [];
		  var a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
		  var a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
		  a1.forEach(function(l1) {
			if (l1.virtual) return;
			a2.forEach(function(l2) {
			  if (l2.virtual) return;
			  var iss = l1.intersects(l2, curveIntersectionThreshold);
			  if (iss.length > 0) {
				iss.c1 = l1;
				iss.c2 = l2;
				iss.s1 = s1;
				iss.s2 = s2;
				intersections.push(iss);
			  }
			});
		  });
		  return intersections;
		},
		makeshape: function(forward, back, curveIntersectionThreshold) {
		  var bpl = back.points.length;
		  var fpl = forward.points.length;
		  var start = utils.makeline(back.points[bpl - 1], forward.points[0]);
		  var end = utils.makeline(forward.points[fpl - 1], back.points[0]);
		  var shape = {
			startcap: start,
			forward: forward,
			back: back,
			endcap: end,
			bbox: utils.findbbox([start, forward, back, end])
		  };
		  var self = utils;
		  shape.intersections = function(s2) {
			return self.shapeintersections(
			  shape,
			  shape.bbox,
			  s2,
			  s2.bbox,
			  curveIntersectionThreshold
			);
		  };
		  return shape;
		},
		getminmax: function(curve, d, list) {
		  if (!list) return { min: 0, max: 0 };
		  var min = nMax,
			max = nMin,
			t,
			c;
		  if (list.indexOf(0) === -1) {
			list = [0].concat(list);
		  }
		  if (list.indexOf(1) === -1) {
			list.push(1);
		  }
		  for (var i = 0, len = list.length; i < len; i++) {
			t = list[i];
			c = curve.get(t);
			if (c[d] < min) {
			  min = c[d];
			}
			if (c[d] > max) {
			  max = c[d];
			}
		  }
		  return { min: min, mid: (min + max) / 2, max: max, size: max - min };
		},
		align: function(points, line) {
		  var tx = line.p1.x,
			ty = line.p1.y,
			a = -atan2(line.p2.y - ty, line.p2.x - tx),
			d = function(v) {
			  return {
				x: (v.x - tx) * cos(a) - (v.y - ty) * sin(a),
				y: (v.x - tx) * sin(a) + (v.y - ty) * cos(a)
			  };
			};
		  return points.map(d);
		},
		roots: function(points, line) {
		  line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
		  var order = points.length - 1;
		  var p = utils.align(points, line);
		  var reduce = function(t) {
			return 0 <= t && t <= 1;
		  };
		  if (order === 2) {
			var a = p[0].y,
			  b = p[1].y,
			  c = p[2].y,
			  d = a - 2 * b + c;
			if (d !== 0) {
			  var m1 = -sqrt(b * b - a * c),
				m2 = -a + b,
				v1 = -(m1 + m2) / d,
				v2 = -(-m1 + m2) / d;
			  return [v1, v2].filter(reduce);
			} else if (b !== c && d === 0) {
			  return [(2*b - c)/(2*b - 2*c)].filter(reduce);
			}
			return [];
		  }
		  var pa = p[0].y,
			pb = p[1].y,
			pc = p[2].y,
			pd = p[3].y,
			d = -pa + 3 * pb - 3 * pc + pd,
			a = 3 * pa - 6 * pb + 3 * pc,
			b = -3 * pa + 3 * pb,
			c = pa;
		  if (utils.approximately(d, 0)) {
			if (utils.approximately(a, 0)) {
			  if (utils.approximately(b, 0)) {
				return [];
			  }
			  return [-c / b].filter(reduce);
			}
			var q = sqrt(b * b - 4 * a * c),
			  a2 = 2 * a;
			return [(q - b) / a2, (-b - q) / a2].filter(reduce);
		  }
		  a /= d;
		  b /= d;
		  c /= d;
		  var p = (3 * b - a * a) / 3,
			p3 = p / 3,
			q = (2 * a * a * a - 9 * a * b + 27 * c) / 27,
			q2 = q / 2,
			discriminant = q2 * q2 + p3 * p3 * p3,
			u1,
			v1,
			x1,
			x2,
			x3;
		  if (discriminant < 0) {
			var mp3 = -p / 3,
			  mp33 = mp3 * mp3 * mp3,
			  r = sqrt(mp33),
			  t = -q / (2 * r),
			  cosphi = t < -1 ? -1 : t > 1 ? 1 : t,
			  phi = acos(cosphi),
			  crtr = crt(r),
			  t1 = 2 * crtr;
			x1 = t1 * cos(phi / 3) - a / 3;
			x2 = t1 * cos((phi + tau) / 3) - a / 3;
			x3 = t1 * cos((phi + 2 * tau) / 3) - a / 3;
			return [x1, x2, x3].filter(reduce);
		  } else if (discriminant === 0) {
			u1 = q2 < 0 ? crt(-q2) : -crt(q2);
			x1 = 2 * u1 - a / 3;
			x2 = -u1 - a / 3;
			return [x1, x2].filter(reduce);
		  } else {
			var sd = sqrt(discriminant);
			u1 = crt(-q2 + sd);
			v1 = crt(q2 + sd);
			return [u1 - v1 - a / 3].filter(reduce);
		  }
		},
		droots: function(p) {
		  if (p.length === 3) {
			var a = p[0],
			  b = p[1],
			  c = p[2],
			  d = a - 2 * b + c;
			if (d !== 0) {
			  var m1 = -sqrt(b * b - a * c),
				m2 = -a + b,
				v1 = -(m1 + m2) / d,
				v2 = -(-m1 + m2) / d;
			  return [v1, v2];
			} else if (b !== c && d === 0) {
			  return [(2 * b - c) / (2 * (b - c))];
			}
			return [];
		  }
		  if (p.length === 2) {
			var a = p[0],
			  b = p[1];
			if (a !== b) {
			  return [a / (a - b)];
			}
			return [];
		  }
		},
		curvature: function(t, points, _3d, kOnly) {
		  var dpoints = utils.derive(points);
		  var d1 = dpoints[0];
		  var d2 = dpoints[1];
		  var num, dnm, adk, dk, k=0, r=0;
		  var d = utils.compute(t, d1);
		  var dd = utils.compute(t, d2);
		  var qdsum = d.x*d.x + d.y*d.y;
		  if (_3d) {
			num = sqrt(
			  pow(d.y*dd.z - dd.y*d.z, 2) +
			  pow(d.z*dd.x - dd.z*d.x, 2) +
			  pow(d.x*dd.y - dd.x*d.y, 2)
			);
			dnm = pow(qdsum + d.z*d.z, 3/2);
		  } else {
			num = d.x*dd.y - d.y*dd.x;
			dnm = pow(qdsum, 3/2);
		  }
		  if (num === 0 || dnm === 0) {
			return { k:0, r:0 };
		  }
		  k = num/dnm;
		  r = dnm/num;
		  if (!kOnly) {
			var pk = utils.curvature(t-0.001, points, _3d, true).k;
			var nk = utils.curvature(t+0.001, points, _3d, true).k;
			dk = ((nk-k) + (k-pk))/2;
			adk = (abs(nk-k) + abs(k-pk))/2;
		  }
		  return { k: k, r: r, dk: dk, adk:adk, };
		},
		inflections: function(points) {
		  if (points.length < 4) return [];
		  var p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }),
			a = p[2].x * p[1].y,
			b = p[3].x * p[1].y,
			c = p[1].x * p[2].y,
			d = p[3].x * p[2].y,
			v1 = 18 * (-3 * a + 2 * b + 3 * c - d),
			v2 = 18 * (3 * a - b - 3 * c),
			v3 = 18 * (c - a);
		  if (utils.approximately(v1, 0)) {
			if (!utils.approximately(v2, 0)) {
			  var t = -v3 / v2;
			  if (0 <= t && t <= 1) return [t];
			}
			return [];
		  }
		  var trm = v2 * v2 - 4 * v1 * v3,
			sq = Math.sqrt(trm),
			d = 2 * v1;
		  if (utils.approximately(d, 0)) return [];
		  return [(sq - v2) / d, -(v2 + sq) / d].filter(function(r) {
			return 0 <= r && r <= 1;
		  });
		},
		bboxoverlap: function(b1, b2) {
		  var dims = ["x", "y"],
			len = dims.length,
			i,
			dim,
			l,
			t,
			d;
		  for (i = 0; i < len; i++) {
			dim = dims[i];
			l = b1[dim].mid;
			t = b2[dim].mid;
			d = (b1[dim].size + b2[dim].size) / 2;
			if (abs(l - t) >= d) return false;
		  }
		  return true;
		},
		expandbox: function(bbox, _bbox) {
		  if (_bbox.x.min < bbox.x.min) {
			bbox.x.min = _bbox.x.min;
		  }
		  if (_bbox.y.min < bbox.y.min) {
			bbox.y.min = _bbox.y.min;
		  }
		  if (_bbox.z && _bbox.z.min < bbox.z.min) {
			bbox.z.min = _bbox.z.min;
		  }
		  if (_bbox.x.max > bbox.x.max) {
			bbox.x.max = _bbox.x.max;
		  }
		  if (_bbox.y.max > bbox.y.max) {
			bbox.y.max = _bbox.y.max;
		  }
		  if (_bbox.z && _bbox.z.max > bbox.z.max) {
			bbox.z.max = _bbox.z.max;
		  }
		  bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
		  bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
		  if (bbox.z) {
			bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
		  }
		  bbox.x.size = bbox.x.max - bbox.x.min;
		  bbox.y.size = bbox.y.max - bbox.y.min;
		  if (bbox.z) {
			bbox.z.size = bbox.z.max - bbox.z.min;
		  }
		},
		pairiteration: function(c1, c2, curveIntersectionThreshold) {
		  var c1b = c1.bbox(),
			c2b = c2.bbox(),
			r = 100000,
			threshold = curveIntersectionThreshold || 0.5;
		  if (
			c1b.x.size + c1b.y.size < threshold &&
			c2b.x.size + c2b.y.size < threshold
		  ) {
			return [
			  ((r * (c1._t1 + c1._t2) / 2) | 0) / r +
				"/" +
				((r * (c2._t1 + c2._t2) / 2) | 0) / r
			];
		  }
		  var cc1 = c1.split(0.5),
			cc2 = c2.split(0.5),
			pairs = [
			  { left: cc1.left, right: cc2.left },
			  { left: cc1.left, right: cc2.right },
			  { left: cc1.right, right: cc2.right },
			  { left: cc1.right, right: cc2.left }
			];
		  pairs = pairs.filter(function(pair) {
			return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
		  });
		  var results = [];
		  if (pairs.length === 0) return results;
		  pairs.forEach(function(pair) {
			results = results.concat(
			  utils.pairiteration(pair.left, pair.right, threshold)
			);
		  });
		  results = results.filter(function(v, i) {
			return results.indexOf(v) === i;
		  });
		  return results;
		},
		getccenter: function(p1, p2, p3) {
		  var dx1 = p2.x - p1.x,
			dy1 = p2.y - p1.y,
			dx2 = p3.x - p2.x,
			dy2 = p3.y - p2.y;
		  var dx1p = dx1 * cos(quart) - dy1 * sin(quart),
			dy1p = dx1 * sin(quart) + dy1 * cos(quart),
			dx2p = dx2 * cos(quart) - dy2 * sin(quart),
			dy2p = dx2 * sin(quart) + dy2 * cos(quart);
		  var mx1 = (p1.x + p2.x) / 2,
			my1 = (p1.y + p2.y) / 2,
			mx2 = (p2.x + p3.x) / 2,
			my2 = (p2.y + p3.y) / 2;
		  var mx1n = mx1 + dx1p,
			my1n = my1 + dy1p,
			mx2n = mx2 + dx2p,
			my2n = my2 + dy2p;
		  var arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n),
			r = utils.dist(arc, p1),
			s = atan2(p1.y - arc.y, p1.x - arc.x),
			m = atan2(p2.y - arc.y, p2.x - arc.x),
			e = atan2(p3.y - arc.y, p3.x - arc.x),
			_;
		  if (s < e) {
			if (s > m || m > e) {
			  s += tau;
			}
			if (s > e) {
			  _ = e;
			  e = s;
			  s = _;
			}
		  } else {
			if (e < m && m < s) {
			  _ = e;
			  e = s;
			  s = _;
			} else {
			  e += tau;
			}
		  }
		  arc.s = s;
		  arc.e = e;
		  arc.r = r;
		  return arc;
		},
		numberSort: function(a, b) {
		  return a - b;
		}
	  };
	  module.exports = utils;
	})();
	});
  
	var polyBezier = createCommonjsModule(function (module) {
	(function() {
	  var utils$1 = utils;
	  var PolyBezier = function(curves) {
		this.curves = [];
		this._3d = false;
		if (!!curves) {
		  this.curves = curves;
		  this._3d = this.curves[0]._3d;
		}
	  };
	  PolyBezier.prototype = {
		valueOf: function() {
		  return this.toString();
		},
		toString: function() {
		  return (
			"[" +
			this.curves
			  .map(function(curve) {
				return utils$1.pointsToString(curve.points);
			  })
			  .join(", ") +
			"]"
		  );
		},
		addCurve: function(curve) {
		  this.curves.push(curve);
		  this._3d = this._3d || curve._3d;
		},
		length: function() {
		  return this.curves
			.map(function(v) {
			  return v.length();
			})
			.reduce(function(a, b) {
			  return a + b;
			});
		},
		curve: function(idx) {
		  return this.curves[idx];
		},
		bbox: function() {
		  var c = this.curves;
		  var bbox = c[0].bbox();
		  for (var i = 1; i < c.length; i++) {
			utils$1.expandbox(bbox, c[i].bbox());
		  }
		  return bbox;
		},
		offset: function(d) {
		  var offset = [];
		  this.curves.forEach(function(v) {
			offset = offset.concat(v.offset(d));
		  });
		  return new PolyBezier(offset);
		}
	  };
	  module.exports = PolyBezier;
	})();
	});
  
	function normalizePath(d) {
	  d = d
		.replace(/,/g, " ")
		.replace(/-/g, " - ")
		.replace(/-\s+/g, "-")
		.replace(/([a-zA-Z])/g, " $1 ");
	  var instructions = d.replace(/([a-zA-Z])\s?/g, "|$1").split("|"),
		instructionLength = instructions.length,
		i,
		instruction,
		op,
		lop,
		args = [],
		alen,
		a,
		sx = 0,
		sy = 0,
		x = 0,
		y = 0,
		cx = 0,
		cy = 0,
		cx2 = 0,
		cy2 = 0,
		normalized = "";
	  for (i = 1; i < instructionLength; i++) {
		instruction = instructions[i];
		op = instruction.substring(0, 1);
		lop = op.toLowerCase();
		args = instruction
		  .replace(op, "")
		  .trim()
		  .split(" ");
		args = args
		  .filter(function(v) {
			return v !== "";
		  })
		  .map(parseFloat);
		alen = args.length;
		if (lop === "m") {
		  normalized += "M ";
		  if (op === "m") {
			x += args[0];
			y += args[1];
		  } else {
			x = args[0];
			y = args[1];
		  }
		  sx = x;
		  sy = y;
		  normalized += x + " " + y + " ";
		  if (alen > 2) {
			for (a = 0; a < alen; a += 2) {
			  if (op === "m") {
				x += args[a];
				y += args[a + 1];
			  } else {
				x = args[a];
				y = args[a + 1];
			  }
			  normalized += ["L",x,y,''].join(" ");
			}
		  }
		} else if (lop === "l") {
		  for (a = 0; a < alen; a += 2) {
			if (op === "l") {
			  x += args[a];
			  y += args[a + 1];
			} else {
			  x = args[a];
			  y = args[a + 1];
			}
			normalized += ["L",x,y,''].join(" ");
		  }
		} else if (lop === "h") {
		  for (a = 0; a < alen; a++) {
			if (op === "h") {
			  x += args[a];
			} else {
			  x = args[a];
			}
			normalized += ["L",x,y,''].join(" ");
		  }
		} else if (lop === "v") {
		  for (a = 0; a < alen; a++) {
			if (op === "v") {
			  y += args[a];
			} else {
			  y = args[a];
			}
			normalized += ["L",x,y,''].join(" ");
		  }
		} else if (lop === "q") {
		  for (a = 0; a < alen; a += 4) {
			if (op === "q") {
			  cx = x + args[a];
			  cy = y + args[a + 1];
			  x += args[a + 2];
			  y += args[a + 3];
			} else {
			  cx = args[a];
			  cy = args[a + 1];
			  x = args[a + 2];
			  y = args[a + 3];
			}
			normalized += ["Q",cx,cy,x,y,''].join(" ");
		  }
		} else if (lop === "t") {
		  for (a = 0; a < alen; a += 2) {
			cx = x + (x - cx);
			cy = y + (y - cy);
			if (op === "t") {
			  x += args[a];
			  y += args[a + 1];
			} else {
			  x = args[a];
			  y = args[a + 1];
			}
			normalized += ["Q",cx,cy,x,y,''].join(" ");
		  }
		} else if (lop === "c") {
		  for (a = 0; a < alen; a += 6) {
			if (op === "c") {
			  cx = x + args[a];
			  cy = y + args[a + 1];
			  cx2 = x + args[a + 2];
			  cy2 = y + args[a + 3];
			  x += args[a + 4];
			  y += args[a + 5];
			} else {
			  cx = args[a];
			  cy = args[a + 1];
			  cx2 = args[a + 2];
			  cy2 = args[a + 3];
			  x = args[a + 4];
			  y = args[a + 5];
			}
			normalized += ["C",cx,cy,cx2,cy2,x,y,''].join(" ");
		  }
		} else if (lop === "s") {
		  for (a = 0; a < alen; a += 4) {
			cx = x + (x - cx2);
			cy = y + (y - cy2);
			if (op === "s") {
			  cx2 = x + args[a];
			  cy2 = y + args[a + 1];
			  x += args[a + 2];
			  y += args[a + 3];
			} else {
			  cx2 = args[a];
			  cy2 = args[a + 1];
			  x = args[a + 2];
			  y = args[a + 3];
			}
			normalized +=["C",cx,cy,cx2,cy2,x,y,''].join(" ");
		  }
		} else if (lop === "z") {
		  normalized += "Z ";
		  x = sx;
		  y = sy;
		}
	  }
	  return normalized.trim();
	}
	var normaliseSvg = normalizePath;
  
	var M = { x: false, y: false };
	function makeBezier(Bezier, term, values) {
	  if (term === 'Z') return;
	  if (term === 'M') {
		M = {x: values[0], y: values[1]};
		return;
	  }
	  var cvalues = [false, M.x, M.y].concat(values);
	  var PreboundConstructor = Bezier.bind.apply(Bezier, cvalues);
	  var curve = new PreboundConstructor();
	  var last = values.slice(-2);
	  M = { x : last[0], y: last[1] };
	  return curve;
	}
	function convertPath(Bezier, d) {
	  var terms = normaliseSvg(d).split(" "),
		term,
		matcher = new RegExp("[MLCQZ]", ""),
		segment,
		values,
		segments = [],
		ARGS = { "C": 6, "Q": 4, "L": 2, "M": 2};
	  while (terms.length) {
		term = terms.splice(0,1)[0];
		if (matcher.test(term)) {
		  values = terms.splice(0, ARGS[term]).map(parseFloat);
		  segment = makeBezier(Bezier, term, values);
		  if (segment) segments.push(segment);
		}
	  }
	  return new Bezier.PolyBezier(segments);
	}
	var svgToBeziers = convertPath;
  
	var bezier = createCommonjsModule(function (module) {
	(function() {
	  var abs = Math.abs,
		min = Math.min,
		max = Math.max,
		cos = Math.cos,
		sin = Math.sin,
		acos = Math.acos,
		sqrt = Math.sqrt,
		pi = Math.PI,
		ZERO = { x: 0, y: 0, z: 0 };
	  var utils$1 = utils;
	  var PolyBezier = polyBezier;
	  var Bezier = function(coords) {
		var args = coords && coords.forEach ? coords : [].slice.call(arguments);
		var coordlen = false;
		if (typeof args[0] === "object") {
		  coordlen = args.length;
		  var newargs = [];
		  args.forEach(function(point) {
			["x", "y", "z"].forEach(function(d) {
			  if (typeof point[d] !== "undefined") {
				newargs.push(point[d]);
			  }
			});
		  });
		  args = newargs;
		}
		var higher = false;
		var len = args.length;
		if (coordlen) {
		  if (coordlen > 4) {
			if (arguments.length !== 1) {
			  throw new Error(
				"Only new Bezier(point[]) is accepted for 4th and higher order curves"
			  );
			}
			higher = true;
		  }
		} else {
		  if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
			if (arguments.length !== 1) {
			  throw new Error(
				"Only new Bezier(point[]) is accepted for 4th and higher order curves"
			  );
			}
		  }
		}
		var _3d =
		  (!higher && (len === 9 || len === 12)) ||
		  (coords && coords[0] && typeof coords[0].z !== "undefined");
		this._3d = _3d;
		var points = [];
		for (var idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
		  var point = {
			x: args[idx],
			y: args[idx + 1]
		  };
		  if (_3d) {
			point.z = args[idx + 2];
		  }
		  points.push(point);
		}
		this.order = points.length - 1;
		this.points = points;
		var dims = ["x", "y"];
		if (_3d) dims.push("z");
		this.dims = dims;
		this.dimlen = dims.length;
		(function(curve) {
		  var order = curve.order;
		  var points = curve.points;
		  var a = utils$1.align(points, { p1: points[0], p2: points[order] });
		  for (var i = 0; i < a.length; i++) {
			if (abs(a[i].y) > 0.0001) {
			  curve._linear = false;
			  return;
			}
		  }
		  curve._linear = true;
		})(this);
		this._t1 = 0;
		this._t2 = 1;
		this.update();
	  };
	  var svgToBeziers$1 = svgToBeziers;
	  Bezier.SVGtoBeziers = function(d) {
		return svgToBeziers$1(Bezier, d);
	  };
	  function getABC(n, S, B, E, t) {
		if (typeof t === "undefined") {
		  t = 0.5;
		}
		var u = utils$1.projectionratio(t, n),
		  um = 1 - u,
		  C = {
			x: u * S.x + um * E.x,
			y: u * S.y + um * E.y
		  },
		  s = utils$1.abcratio(t, n),
		  A = {
			x: B.x + (B.x - C.x) / s,
			y: B.y + (B.y - C.y) / s
		  };
		return { A: A, B: B, C: C };
	  }
	  Bezier.quadraticFromPoints = function(p1, p2, p3, t) {
		if (typeof t === "undefined") {
		  t = 0.5;
		}
		if (t === 0) {
		  return new Bezier(p2, p2, p3);
		}
		if (t === 1) {
		  return new Bezier(p1, p2, p2);
		}
		var abc = getABC(2, p1, p2, p3, t);
		return new Bezier(p1, abc.A, p3);
	  };
	  Bezier.cubicFromPoints = function(S, B, E, t, d1) {
		if (typeof t === "undefined") {
		  t = 0.5;
		}
		var abc = getABC(3, S, B, E, t);
		if (typeof d1 === "undefined") {
		  d1 = utils$1.dist(B, abc.C);
		}
		var d2 = d1 * (1 - t) / t;
		var selen = utils$1.dist(S, E),
		  lx = (E.x - S.x) / selen,
		  ly = (E.y - S.y) / selen,
		  bx1 = d1 * lx,
		  by1 = d1 * ly,
		  bx2 = d2 * lx,
		  by2 = d2 * ly;
		var e1 = { x: B.x - bx1, y: B.y - by1 },
		  e2 = { x: B.x + bx2, y: B.y + by2 },
		  A = abc.A,
		  v1 = { x: A.x + (e1.x - A.x) / (1 - t), y: A.y + (e1.y - A.y) / (1 - t) },
		  v2 = { x: A.x + (e2.x - A.x) / t, y: A.y + (e2.y - A.y) / t },
		  nc1 = { x: S.x + (v1.x - S.x) / t, y: S.y + (v1.y - S.y) / t },
		  nc2 = {
			x: E.x + (v2.x - E.x) / (1 - t),
			y: E.y + (v2.y - E.y) / (1 - t)
		  };
		return new Bezier(S, nc1, nc2, E);
	  };
	  var getUtils = function() {
		return utils$1;
	  };
	  Bezier.getUtils = getUtils;
	  Bezier.PolyBezier = PolyBezier;
	  Bezier.prototype = {
		getUtils: getUtils,
		valueOf: function() {
		  return this.toString();
		},
		toString: function() {
		  return utils$1.pointsToString(this.points);
		},
		toSVG: function(relative) {
		  if (this._3d) return false;
		  var p = this.points,
			x = p[0].x,
			y = p[0].y,
			s = ["M", x, y, this.order === 2 ? "Q" : "C"];
		  for (var i = 1, last = p.length; i < last; i++) {
			s.push(p[i].x);
			s.push(p[i].y);
		  }
		  return s.join(" ");
		},
		setRatios: function(ratios) {
		  if (ratios.length !== this.points.length) {
			throw new Error("incorrect number of ratio values");
		  }
		  this.ratios = ratios;
		  this._lut = [];
		},
		verify: function() {
		  var print = this.coordDigest();
		  if (print !== this._print) {
			this._print = print;
			this.update();
		  }
		},
		coordDigest: function() {
		  return this.points.map(function(c,pos) {
			return '' + pos + c.x + c.y + (c.z?c.z:0);
		  }).join('');
		},
		update: function(newprint) {
		  this._lut = [];
		  this.dpoints = utils$1.derive(this.points, this._3d);
		  this.computedirection();
		},
		computedirection: function() {
		  var points = this.points;
		  var angle = utils$1.angle(points[0], points[this.order], points[1]);
		  this.clockwise = angle > 0;
		},
		length: function() {
		  return utils$1.length(this.derivative.bind(this));
		},
		_lut: [],
		getLUT: function(steps) {
		  this.verify();
		  steps = steps || 100;
		  if (this._lut.length === steps) {
			return this._lut;
		  }
		  this._lut = [];
		  steps--;
		  for (var t = 0; t <= steps; t++) {
			this._lut.push(this.compute(t / steps));
		  }
		  return this._lut;
		},
		on: function(point, error) {
		  error = error || 5;
		  var lut = this.getLUT(),
			hits = [],
			c,
			t = 0;
		  for (var i = 0; i < lut.length; i++) {
			c = lut[i];
			if (utils$1.dist(c, point) < error) {
			  hits.push(c);
			  t += i / lut.length;
			}
		  }
		  if (!hits.length) return false;
		  return (t /= hits.length);
		},
		project: function(point) {
		  var LUT = this.getLUT(),
			l = LUT.length - 1,
			closest = utils$1.closest(LUT, point),
			mdist = closest.mdist,
			mpos = closest.mpos;
		  var ft,
			t,
			p,
			d,
			t1 = (mpos - 1) / l,
			t2 = (mpos + 1) / l,
			step = 0.1 / l;
		  mdist += 1;
		  for (t = t1, ft = t; t < t2 + step; t += step) {
			p = this.compute(t);
			d = utils$1.dist(point, p);
			if (d < mdist) {
			  mdist = d;
			  ft = t;
			}
		  }
		  p = this.compute(ft);
		  p.t = ft;
		  p.d = mdist;
		  return p;
		},
		get: function(t) {
		  return this.compute(t);
		},
		point: function(idx) {
		  return this.points[idx];
		},
		compute: function(t) {
		  if (this.ratios) return utils$1.computeWithRatios(t, this.points, this.ratios, this._3d);
		  return utils$1.compute(t, this.points, this._3d, this.ratios);
		},
		raise: function() {
		  var p = this.points,
			np = [p[0]],
			i,
			k = p.length,
			pi,
			pim;
		  for (var i = 1; i < k; i++) {
			pi = p[i];
			pim = p[i - 1];
			np[i] = {
			  x: (k - i) / k * pi.x + i / k * pim.x,
			  y: (k - i) / k * pi.y + i / k * pim.y
			};
		  }
		  np[k] = p[k - 1];
		  return new Bezier(np);
		},
		derivative: function(t) {
		  var mt = 1 - t,
			a,
			b,
			c = 0,
			p = this.dpoints[0];
		  if (this.order === 2) {
			p = [p[0], p[1], ZERO];
			a = mt;
			b = t;
		  }
		  if (this.order === 3) {
			a = mt * mt;
			b = mt * t * 2;
			c = t * t;
		  }
		  var ret = {
			x: a * p[0].x + b * p[1].x + c * p[2].x,
			y: a * p[0].y + b * p[1].y + c * p[2].y
		  };
		  if (this._3d) {
			ret.z = a * p[0].z + b * p[1].z + c * p[2].z;
		  }
		  return ret;
		},
		curvature: function(t) {
		  return utils$1.curvature(t, this.points, this._3d);
		},
		inflections: function() {
		  return utils$1.inflections(this.points);
		},
		normal: function(t) {
		  return this._3d ? this.__normal3(t) : this.__normal2(t);
		},
		__normal2: function(t) {
		  var d = this.derivative(t);
		  var q = sqrt(d.x * d.x + d.y * d.y);
		  return { x: -d.y / q, y: d.x / q };
		},
		__normal3: function(t) {
		  var r1 = this.derivative(t),
			r2 = this.derivative(t + 0.01),
			q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z),
			q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
		  r1.x /= q1;
		  r1.y /= q1;
		  r1.z /= q1;
		  r2.x /= q2;
		  r2.y /= q2;
		  r2.z /= q2;
		  var c = {
			x: r2.y * r1.z - r2.z * r1.y,
			y: r2.z * r1.x - r2.x * r1.z,
			z: r2.x * r1.y - r2.y * r1.x
		  };
		  var m = sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
		  c.x /= m;
		  c.y /= m;
		  c.z /= m;
		  var R = [
			c.x * c.x,
			c.x * c.y - c.z,
			c.x * c.z + c.y,
			c.x * c.y + c.z,
			c.y * c.y,
			c.y * c.z - c.x,
			c.x * c.z - c.y,
			c.y * c.z + c.x,
			c.z * c.z
		  ];
		  var n = {
			x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
			y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
			z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
		  };
		  return n;
		},
		hull: function(t) {
		  var p = this.points,
			_p = [],
			pt,
			q = [],
			idx = 0,
			i = 0,
			l = 0;
		  q[idx++] = p[0];
		  q[idx++] = p[1];
		  q[idx++] = p[2];
		  if (this.order === 3) {
			q[idx++] = p[3];
		  }
		  while (p.length > 1) {
			_p = [];
			for (i = 0, l = p.length - 1; i < l; i++) {
			  pt = utils$1.lerp(t, p[i], p[i + 1]);
			  q[idx++] = pt;
			  _p.push(pt);
			}
			p = _p;
		  }
		  return q;
		},
		split: function(t1, t2) {
		  if (t1 === 0 && !!t2) {
			return this.split(t2).left;
		  }
		  if (t2 === 1) {
			return this.split(t1).right;
		  }
		  var q = this.hull(t1);
		  var result = {
			left:
			  this.order === 2
				? new Bezier([q[0], q[3], q[5]])
				: new Bezier([q[0], q[4], q[7], q[9]]),
			right:
			  this.order === 2
				? new Bezier([q[5], q[4], q[2]])
				: new Bezier([q[9], q[8], q[6], q[3]]),
			span: q
		  };
		  result.left._t1 = utils$1.map(0, 0, 1, this._t1, this._t2);
		  result.left._t2 = utils$1.map(t1, 0, 1, this._t1, this._t2);
		  result.right._t1 = utils$1.map(t1, 0, 1, this._t1, this._t2);
		  result.right._t2 = utils$1.map(1, 0, 1, this._t1, this._t2);
		  if (!t2) {
			return result;
		  }
		  t2 = utils$1.map(t2, t1, 1, 0, 1);
		  var subsplit = result.right.split(t2);
		  return subsplit.left;
		},
		extrema: function() {
		  var dims = this.dims,
			result = {},
			roots = [],
			p,
			mfn;
		  dims.forEach(
			function(dim) {
			  mfn = function(v) {
				return v[dim];
			  };
			  p = this.dpoints[0].map(mfn);
			  result[dim] = utils$1.droots(p);
			  if (this.order === 3) {
				p = this.dpoints[1].map(mfn);
				result[dim] = result[dim].concat(utils$1.droots(p));
			  }
			  result[dim] = result[dim].filter(function(t) {
				return t >= 0 && t <= 1;
			  });
			  roots = roots.concat(result[dim].sort(utils$1.numberSort));
			}.bind(this)
		  );
		  roots = roots.sort(utils$1.numberSort).filter(function(v, idx) {
			return roots.indexOf(v) === idx;
		  });
		  result.values = roots;
		  return result;
		},
		bbox: function() {
		  var extrema = this.extrema(),
			result = {};
		  this.dims.forEach(
			function(d) {
			  result[d] = utils$1.getminmax(this, d, extrema[d]);
			}.bind(this)
		  );
		  return result;
		},
		overlaps: function(curve) {
		  var lbbox = this.bbox(),
			tbbox = curve.bbox();
		  return utils$1.bboxoverlap(lbbox, tbbox);
		},
		offset: function(t, d) {
		  if (typeof d !== "undefined") {
			var c = this.get(t);
			var n = this.normal(t);
			var ret = {
			  c: c,
			  n: n,
			  x: c.x + n.x * d,
			  y: c.y + n.y * d
			};
			if (this._3d) {
			  ret.z = c.z + n.z * d;
			}
			return ret;
		  }
		  if (this._linear) {
			var nv = this.normal(0);
			var coords = this.points.map(function(p) {
			  var ret = {
				x: p.x + t * nv.x,
				y: p.y + t * nv.y
			  };
			  if (p.z && n.z) {
				ret.z = p.z + t * nv.z;
			  }
			  return ret;
			});
			return [new Bezier(coords)];
		  }
		  var reduced = this.reduce();
		  return reduced.map(function(s) {
			if (s._linear) {
			  return s.offset(t)[0];
			}
			return s.scale(t);
		  });
		},
		simple: function() {
		  if (this.order === 3) {
			var a1 = utils$1.angle(this.points[0], this.points[3], this.points[1]);
			var a2 = utils$1.angle(this.points[0], this.points[3], this.points[2]);
			if ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0)) return false;
		  }
		  var n1 = this.normal(0);
		  var n2 = this.normal(1);
		  var s = n1.x * n2.x + n1.y * n2.y;
		  if (this._3d) {
			s += n1.z * n2.z;
		  }
		  var angle = abs(acos(s));
		  return angle < pi / 3;
		},
		reduce: function() {
		  var i,
			t1 = 0,
			t2 = 0,
			step = 0.01,
			segment,
			pass1 = [],
			pass2 = [];
		  var extrema = this.extrema().values;
		  if (extrema.indexOf(0) === -1) {
			extrema = [0].concat(extrema);
		  }
		  if (extrema.indexOf(1) === -1) {
			extrema.push(1);
		  }
		  for (t1 = extrema[0], i = 1; i < extrema.length; i++) {
			t2 = extrema[i];
			segment = this.split(t1, t2);
			segment._t1 = t1;
			segment._t2 = t2;
			pass1.push(segment);
			t1 = t2;
		  }
		  pass1.forEach(function(p1) {
			t1 = 0;
			t2 = 0;
			while (t2 <= 1) {
			  for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
				segment = p1.split(t1, t2);
				if (!segment.simple()) {
				  t2 -= step;
				  if (abs(t1 - t2) < step) {
					return [];
				  }
				  segment = p1.split(t1, t2);
				  segment._t1 = utils$1.map(t1, 0, 1, p1._t1, p1._t2);
				  segment._t2 = utils$1.map(t2, 0, 1, p1._t1, p1._t2);
				  pass2.push(segment);
				  t1 = t2;
				  break;
				}
			  }
			}
			if (t1 < 1) {
			  segment = p1.split(t1, 1);
			  segment._t1 = utils$1.map(t1, 0, 1, p1._t1, p1._t2);
			  segment._t2 = p1._t2;
			  pass2.push(segment);
			}
		  });
		  return pass2;
		},
		scale: function(d) {
		  var order = this.order;
		  var distanceFn = false;
		  if (typeof d === "function") {
			distanceFn = d;
		  }
		  if (distanceFn && order === 2) {
			return this.raise().scale(distanceFn);
		  }
		  var clockwise = this.clockwise;
		  var r1 = distanceFn ? distanceFn(0) : d;
		  var r2 = distanceFn ? distanceFn(1) : d;
		  var v = [this.offset(0, 10), this.offset(1, 10)];
		  var o = utils$1.lli4(v[0], v[0].c, v[1], v[1].c);
		  if (!o) {
			throw new Error("cannot scale this curve. Try reducing it first.");
		  }
		  var points = this.points,
			np = [];
		  [0, 1].forEach(
			function(t) {
			  var p = (np[t * order] = utils$1.copy(points[t * order]));
			  p.x += (t ? r2 : r1) * v[t].n.x;
			  p.y += (t ? r2 : r1) * v[t].n.y;
			}.bind(this)
		  );
		  if (!distanceFn) {
			[0, 1].forEach(
			  function(t) {
				if (this.order === 2 && !!t) return;
				var p = np[t * order];
				var d = this.derivative(t);
				var p2 = { x: p.x + d.x, y: p.y + d.y };
				np[t + 1] = utils$1.lli4(p, p2, o, points[t + 1]);
			  }.bind(this)
			);
			return new Bezier(np);
		  }
		  [0, 1].forEach(
			function(t) {
			  if (this.order === 2 && !!t) return;
			  var p = points[t + 1];
			  var ov = {
				x: p.x - o.x,
				y: p.y - o.y
			  };
			  var rc = distanceFn ? distanceFn((t + 1) / order) : d;
			  if (distanceFn && !clockwise) rc = -rc;
			  var m = sqrt(ov.x * ov.x + ov.y * ov.y);
			  ov.x /= m;
			  ov.y /= m;
			  np[t + 1] = {
				x: p.x + rc * ov.x,
				y: p.y + rc * ov.y
			  };
			}.bind(this)
		  );
		  return new Bezier(np);
		},
		outline: function(d1, d2, d3, d4) {
		  d2 = typeof d2 === "undefined" ? d1 : d2;
		  var reduced = this.reduce(),
			len = reduced.length,
			fcurves = [],
			bcurves = [],
			p,
			alen = 0,
			tlen = this.length();
		  var graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";
		  function linearDistanceFunction(s, e, tlen, alen, slen) {
			return function(v) {
			  var f1 = alen / tlen,
				f2 = (alen + slen) / tlen,
				d = e - s;
			  return utils$1.map(v, 0, 1, s + f1 * d, s + f2 * d);
			};
		  }
		  reduced.forEach(function(segment) {
			slen = segment.length();
			if (graduated) {
			  fcurves.push(
				segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
			  );
			  bcurves.push(
				segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
			  );
			} else {
			  fcurves.push(segment.scale(d1));
			  bcurves.push(segment.scale(-d2));
			}
			alen += slen;
		  });
		  bcurves = bcurves
			.map(function(s) {
			  p = s.points;
			  if (p[3]) {
				s.points = [p[3], p[2], p[1], p[0]];
			  } else {
				s.points = [p[2], p[1], p[0]];
			  }
			  return s;
			})
			.reverse();
		  var fs = fcurves[0].points[0],
			fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1],
			bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1],
			be = bcurves[0].points[0],
			ls = utils$1.makeline(bs, fs),
			le = utils$1.makeline(fe, be),
			segments = [ls]
			  .concat(fcurves)
			  .concat([le])
			  .concat(bcurves),
			slen = segments.length;
		  return new PolyBezier(segments);
		},
		outlineshapes: function(d1, d2, curveIntersectionThreshold) {
		  d2 = d2 || d1;
		  var outline = this.outline(d1, d2).curves;
		  var shapes = [];
		  for (var i = 1, len = outline.length; i < len / 2; i++) {
			var shape = utils$1.makeshape(
			  outline[i],
			  outline[len - i],
			  curveIntersectionThreshold
			);
			shape.startcap.virtual = i > 1;
			shape.endcap.virtual = i < len / 2 - 1;
			shapes.push(shape);
		  }
		  return shapes;
		},
		intersects: function(curve, curveIntersectionThreshold) {
		  if (!curve) return this.selfintersects(curveIntersectionThreshold);
		  if (curve.p1 && curve.p2) {
			return this.lineIntersects(curve);
		  }
		  if (curve instanceof Bezier) {
			curve = curve.reduce();
		  }
		  return this.curveintersects(
			this.reduce(),
			curve,
			curveIntersectionThreshold
		  );
		},
		lineIntersects: function(line) {
		  var mx = min(line.p1.x, line.p2.x),
			my = min(line.p1.y, line.p2.y),
			MX = max(line.p1.x, line.p2.x),
			MY = max(line.p1.y, line.p2.y),
			self = this;
		  return utils$1.roots(this.points, line).filter(function(t) {
			var p = self.get(t);
			return utils$1.between(p.x, mx, MX) && utils$1.between(p.y, my, MY);
		  });
		},
		selfintersects: function(curveIntersectionThreshold) {
		  var reduced = this.reduce();
		  var i,
			len = reduced.length - 2,
			results = [],
			result,
			left,
			right;
		  for (i = 0; i < len; i++) {
			left = reduced.slice(i, i + 1);
			right = reduced.slice(i + 2);
			result = this.curveintersects(left, right, curveIntersectionThreshold);
			results = results.concat(result);
		  }
		  return results;
		},
		curveintersects: function(c1, c2, curveIntersectionThreshold) {
		  var pairs = [];
		  c1.forEach(function(l) {
			c2.forEach(function(r) {
			  if (l.overlaps(r)) {
				pairs.push({ left: l, right: r });
			  }
			});
		  });
		  var intersections = [];
		  pairs.forEach(function(pair) {
			var result = utils$1.pairiteration(
			  pair.left,
			  pair.right,
			  curveIntersectionThreshold
			);
			if (result.length > 0) {
			  intersections = intersections.concat(result);
			}
		  });
		  return intersections;
		},
		arcs: function(errorThreshold) {
		  errorThreshold = errorThreshold || 0.5;
		  var circles = [];
		  return this._iterate(errorThreshold, circles);
		},
		_error: function(pc, np1, s, e) {
		  var q = (e - s) / 4,
			c1 = this.get(s + q),
			c2 = this.get(e - q),
			ref = utils$1.dist(pc, np1),
			d1 = utils$1.dist(pc, c1),
			d2 = utils$1.dist(pc, c2);
		  return abs(d1 - ref) + abs(d2 - ref);
		},
		_iterate: function(errorThreshold, circles) {
		  var t_s = 0,
			t_e = 1,
			safety;
		  do {
			safety = 0;
			t_e = 1;
			var np1 = this.get(t_s),
			  np2,
			  np3,
			  arc,
			  prev_arc;
			var curr_good = false,
			  prev_good = false,
			  done;
			var t_m = t_e,
			  prev_e = 1;
			do {
			  prev_good = curr_good;
			  prev_arc = arc;
			  t_m = (t_s + t_e) / 2;
			  np2 = this.get(t_m);
			  np3 = this.get(t_e);
			  arc = utils$1.getccenter(np1, np2, np3);
			  arc.interval = {
				start: t_s,
				end: t_e
			  };
			  var error = this._error(arc, np1, t_s, t_e);
			  curr_good = error <= errorThreshold;
			  done = prev_good && !curr_good;
			  if (!done) prev_e = t_e;
			  if (curr_good) {
				if (t_e >= 1) {
				  arc.interval.end = prev_e = 1;
				  prev_arc = arc;
				  if (t_e > 1) {
					var d = {
					  x: arc.x + arc.r * cos(arc.e),
					  y: arc.y + arc.r * sin(arc.e)
					};
					arc.e += utils$1.angle({ x: arc.x, y: arc.y }, d, this.get(1));
				  }
				  break;
				}
				t_e = t_e + (t_e - t_s) / 2;
			  } else {
				t_e = t_m;
			  }
			} while (!done && safety++ < 100);
			if (safety >= 100) {
			  break;
			}
			prev_arc = prev_arc ? prev_arc : arc;
			circles.push(prev_arc);
			t_s = prev_e;
		  } while (t_e < 1);
		  return circles;
		}
	  };
	  module.exports = Bezier;
	})();
	});
  
	var bezierJs = bezier;
  
	var defaultWallTexture = { url: '/static/rooms/textures/wallmap.png', stretch: true, scale: 0 };
	var Wall = function (_EventDispatcher) {
		inherits(Wall, _EventDispatcher);
		function Wall(start, end, aa, bb) {
			classCallCheck(this, Wall);
			var _this = possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).call(this));
			_this.start = start;
			_this.end = end;
			_this.name = 'wall';
			if (!aa && !bb) {
				_this._walltype = WallTypes.STRAIGHT;
			} else {
				_this._walltype = WallTypes.CURVED;
			}
			var o = new THREE.Vector2(0, 0);
			var abvector = end.location.clone().sub(start.location).multiplyScalar(0.5);
			var ab135plus = abvector.clone().rotateAround(o, Math.PI * 0.75);
			var ab45plus = abvector.clone().rotateAround(o, Math.PI * 0.25);
			if (aa) {
				_this._a = new THREE.Vector2(0, 0);
				_this._a.x = aa.x;
				_this._a.y = aa.y;
			} else {
				_this._a = start.location.clone().add(ab45plus);
			}
			if (bb) {
				_this._b = new THREE.Vector2(0, 0);
				_this._b.x = bb.x;
				_this._b.y = bb.y;
			} else {
				_this._b = end.location.clone().add(ab135plus);
			}
			_this._a_vector = _this._a.clone().sub(start.location);
			_this._b_vector = _this._b.clone().sub(start.location);
			_this._bezier = new bezierJs(start.location.x, start.location.y, _this._a.x, _this._a.y, _this._b.x, _this._b.y, end.location.x, end.location.y);
			_this.id = _this.getUuid();
			_this.start.attachStart(_this);
			_this.end.attachEnd(_this);
			_this.frontEdge = null;
			_this.backEdge = null;
			_this.orphan = false;
			_this.items = [];
			_this.onItems = [];
			_this.frontTexture = defaultWallTexture;
			_this.backTexture = defaultWallTexture;
			_this.thickness = Configuration.getNumericValue(configWallThickness);
			_this.height = Configuration.getNumericValue(configWallHeight);
			_this.moved_callbacks = null;
			_this.deleted_callbacks = null;
			_this.action_callbacks = null;
			_this.addCornerMoveListener(_this.start);
			_this.addCornerMoveListener(_this.end);
			return _this;
		}
		createClass(Wall, [{
			key: 'addCornerMoveListener',
			value: function addCornerMoveListener(corner) {
				var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
				var scope = this;
				function moved() {
					scope.updateControlVectors();
				}
				if (remove) {
					corner.removeEventListener(EVENT_MOVED, moved);
					return;
				}
				corner.addEventListener(EVENT_MOVED, moved);
			}
		}, {
			key: 'updateControlVectors',
			value: function updateControlVectors() {
				this._bezier.points[0].x = this.start.location.x;
				this._bezier.points[0].y = this.start.location.y;
				this._bezier.points[1].x = this.a.x;
				this._bezier.points[1].y = this.a.y;
				this._bezier.points[2].x = this.b.x;
				this._bezier.points[2].y = this.b.y;
				this._bezier.points[3].x = this.end.location.x;
				this._bezier.points[3].y = this.end.location.y;
				this._bezier.update();
				if (this.getStart() || this.getEnd()) {
					this.getStart() != null ? this.getStart().floorplan.update(false) : this.getEnd() != null ? this.getEnd().floorplan.update(false) : false;
				}
			}
		}, {
			key: 'getUuid',
			value: function getUuid() {
				return [this.start.id, this.end.id].join();
			}
		}, {
			key: 'resetFrontBack',
			value: function resetFrontBack() {
				this.frontEdge = null;
				this.backEdge = null;
				this.orphan = false;
			}
		}, {
			key: 'snapToAxis',
			value: function snapToAxis(tolerance) {
				this.start.snapToAxis(tolerance);
				this.end.snapToAxis(tolerance);
			}
		}, {
			key: 'fireOnMove',
			value: function fireOnMove(func) {
				this.moved_callbacks.add(func);
			}
		}, {
			key: 'fireOnDelete',
			value: function fireOnDelete(func) {
				this.deleted_callbacks.add(func);
			}
		}, {
			key: 'dontFireOnDelete',
			value: function dontFireOnDelete(func) {
				this.deleted_callbacks.remove(func);
			}
		}, {
			key: 'fireOnAction',
			value: function fireOnAction(func) {
				this.action_callbacks.add(func);
			}
		}, {
			key: 'fireAction',
			value: function fireAction(action) {
				this.dispatchEvent({ type: EVENT_ACTION, action: action });
			}
		}, {
			key: 'relativeMove',
			value: function relativeMove(dx, dy) {
				this.start.relativeMove(dx, dy);
				this.end.relativeMove(dx, dy);
				this.updateControlVectors();
			}
		}, {
			key: 'fireMoved',
			value: function fireMoved() {
				this.dispatchEvent({ type: EVENT_MOVED, item: this, position: null });
			}
		}, {
			key: 'fireRedraw',
			value: function fireRedraw() {
				if (this.frontEdge) {
					this.frontEdge.dispatchRedrawEvent();
				}
				if (this.backEdge) {
					this.backEdge.dispatchRedrawEvent();
				}
			}
		}, {
			key: 'getStart',
			value: function getStart() {
				return this.start;
			}
		}, {
			key: 'getEnd',
			value: function getEnd() {
				return this.end;
			}
		}, {
			key: 'getStartX',
			value: function getStartX() {
				return this.start.getX();
			}
		}, {
			key: 'getEndX',
			value: function getEndX() {
				return this.end.getX();
			}
		}, {
			key: 'getStartY',
			value: function getStartY() {
				return this.start.getY();
			}
		}, {
			key: 'getEndY',
			value: function getEndY() {
				return this.end.getY();
			}
		}, {
			key: 'wallLength',
			value: function wallLength() {
				if (this.wallType == WallTypes.STRAIGHT) {
					var start = this.getStart();
					var end = this.getEnd();
					return Utils.distance(start, end);
				} else if (this.wallType == WallTypes.CURVED) {
					return this._bezier.length();
				}
				return -1;
			}
		}, {
			key: 'wallCenter',
			value: function wallCenter() {
				if (this.wallType == WallTypes.STRAIGHT) {
					return new THREE.Vector2((this.getStart().x + this.getEnd().x) / 2.0, (this.getStart().y + this.getEnd().y) / 2.0);
				} else if (this.wallType == WallTypes.CURVED) {
					var p = this._bezier.get(0.5);
					return new THREE.Vector2(p.x, p.y);
				}
				return new THREE.Vector2(0, 0);
			}
		}, {
			key: 'remove',
			value: function remove() {
				this.start.detachWall(this);
				this.end.detachWall(this);
				this.dispatchEvent({ type: EVENT_DELETED, item: this });
			}
		}, {
			key: 'setStart',
			value: function setStart(corner) {
				this.start.detachWall(this);
				this.addCornerMoveListener(this.start, true);
				corner.attachStart(this);
				this.start = corner;
				this.addCornerMoveListener(this.start);
				this.fireMoved();
			}
		}, {
			key: 'setEnd',
			value: function setEnd(corner) {
				this.end.detachWall(this);
				this.addCornerMoveListener(this.end);
				corner.attachEnd(this);
				this.end = corner;
				this.addCornerMoveListener(this.end, true);
				this.fireMoved();
			}
		}, {
			key: 'distanceFrom',
			value: function distanceFrom(point) {
				if (this.wallType == WallTypes.STRAIGHT) {
					return Utils.pointDistanceFromLine(point, new THREE.Vector2(this.getStartX(), this.getStartY()), new THREE.Vector2(this.getEndX(), this.getEndY()));
				} else if (this.wallType == WallTypes.CURVED) {
					var p = this._bezier.project(point);
					var projected = new THREE.Vector2(p.x, p.y);
					return projected.distanceTo(point);
				}
				return -1;
			}
		}, {
			key: 'oppositeCorner',
			value: function oppositeCorner(corner) {
				if (this.start === corner) {
					return this.end;
				} else if (this.end === corner) {
					return this.start;
				} else {
					console.log('Wall does not connect to corner');
					return null;
				}
			}
		}, {
			key: 'getClosestCorner',
			value: function getClosestCorner(point) {
				var startVector = new THREE.Vector2(this.start.x, this.start.y);
				var endVector = new THREE.Vector2(this.end.x, this.end.y);
				var startDistance = point.distanceTo(startVector);
				var endDistance = point.distanceTo(endVector);
				if (startDistance <= this.thickness * 2) {
					return this.start;
				} else if (endDistance <= this.thickness * 2) {
					return this.end;
				}
				return null;
			}
		}, {
			key: 'updateAttachedRooms',
			value: function updateAttachedRooms() {
				var explicit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
				if (this.start != null) {
					this.start.updateAttachedRooms(explicit);
				}
				if (this.end) {
					this.end.updateAttachedRooms(explicit);
				}
			}
		}, {
			key: 'a',
			get: function get() {
				return this._a;
			},
			set: function set(location) {
				this._a.x = location.x;
				this._a.y = location.y;
				this._a_vector = this._a.clone().sub(this.start.location);
				this.updateControlVectors();
			}
		}, {
			key: 'b',
			get: function get() {
				return this._b;
			},
			set: function set(location) {
				this._b.x = location.x;
				this._b.y = location.y;
				this._b_vector = this._b.clone().sub(this.start.location);
				this.updateControlVectors();
			}
		}, {
			key: 'aVector',
			get: function get() {
				return this._a_vector.clone();
			}
		}, {
			key: 'bVector',
			get: function get() {
				return this._b_vector.clone();
			}
		}, {
			key: 'bezier',
			get: function get() {
				return this._bezier;
			}
		}, {
			key: 'wallSize',
			set: function set(value) {
				if (this.wallType == WallTypes.STRAIGHT) {
					var vector = this.getEnd().location.clone().sub(this.getStart().location);
					var currentLength = this.wallLength();
					var changeInLength = value / currentLength;
					var neighboursCountStart = this.getStart().adjacentCorners().length == 1;
					var neighboursCountEnd = this.getEnd().adjacentCorners().length == 1;
					var changeInLengthOffset, movementVector, startPoint, endPoint;
					changeInLengthOffset = changeInLength - 1;
					if (!neighboursCountStart && !neighboursCountEnd || neighboursCountStart && neighboursCountEnd) {
						changeInLengthOffset *= 0.5;
						movementVector = vector.clone().multiplyScalar(changeInLengthOffset);
						startPoint = movementVector.clone().multiplyScalar(-1).add(this.getStart().location);
						endPoint = movementVector.clone().add(this.getEnd().location);
					} else if (neighboursCountStart) {
						movementVector = vector.clone().multiplyScalar(changeInLengthOffset);
						startPoint = movementVector.clone().multiplyScalar(-1).add(this.getStart().location);
						endPoint = this.getEnd().location;
					} else if (neighboursCountEnd) {
						movementVector = vector.clone().multiplyScalar(changeInLengthOffset);
						endPoint = movementVector.clone().add(this.getEnd().location);
						startPoint = this.getStart().location;
					}
					this.getStart().move(startPoint.x, startPoint.y);
					this.getEnd().move(endPoint.x, endPoint.y);
					this.updateAttachedRooms();
				}
			},
			get: function get() {
				return this.wallLength();
			}
		}, {
			key: 'wallType',
			get: function get() {
				return this._walltype;
			},
			set: function set(value) {
				if (value == WallTypes.STRAIGHT || value == WallTypes.CURVED) {
					this._walltype = value;
				}
				this.updateControlVectors();
				this.updateAttachedRooms(true);
			}
		}, {
			key: 'startElevation',
			get: function get() {
				if (this.start && this.start != null) {
					return this.start.elevation;
				}
				return 0.0;
			}
		}, {
			key: 'endElevation',
			get: function get() {
				if (this.end && this.end != null) {
					return this.end.elevation;
				}
				return 0.0;
			}
		}]);
		return Wall;
	}(THREE.EventDispatcher);
  
	var defaultRoomTexture = { url: '/static/rooms/textures/hardwood.png', scale: 400 };
	var Room = function (_EventDispatcher) {
		inherits(Room, _EventDispatcher);
		function Room(floorplan, corners) {
			classCallCheck(this, Room);
			var _this = possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this));
			_this._name = 'A New Room';
			_this.min = null;
			_this.max = null;
			_this.center = null;
			_this.area = 0.0;
			_this.areaCenter = null;
			_this._polygonPoints = [];
			_this.floorplan = floorplan;
			_this.corners = corners;
			_this.interiorCorners = [];
			_this.edgePointer = null;
			_this.floorPlane = null;
			_this.roofPlane = null;
			_this.customTexture = false;
			_this.floorChangeCallbacks = null;
			_this.updateWalls();
			_this.updateInteriorCorners();
			_this.generatePlane();
			_this.generateRoofPlane();
			var cornerids = [];
			for (var i = 0; i < _this.corners.length; i++) {
				var c = _this.corners[i];
				c.attachRoom(_this);
				cornerids.push(c.id);
			}
			_this._roomByCornersId = cornerids.join(',');
			return _this;
		}
		createClass(Room, [{
			key: 'roomIdentifier',
			value: function roomIdentifier() {
				var cornerids = [];
				this.corners.forEach(function (corner) {
					cornerids.push(corner.id);
				});
				var ids = cornerids.join(',');
				return ids;
			}
		}, {
			key: 'getUuid',
			value: function getUuid() {
				var cornerUuids = Utils.map(this.corners, function (c) {
					return c.id;
				});
				cornerUuids.sort();
				return cornerUuids.join();
			}
		}, {
			key: 'fireOnFloorChange',
			value: function fireOnFloorChange(callback) {
				this.floorChangeCallbacks.add(callback);
			}
		}, {
			key: 'getTexture',
			value: function getTexture() {
				var uuid = this.getUuid();
				var tex = this.floorplan.getFloorTexture(uuid);
				return tex || defaultRoomTexture;
			}
		}, {
			key: 'setRoomWallsTexture',
			value: function setRoomWallsTexture(textureUrl, textureStretch, textureScale) {
				var edge = this.edgePointer;
				var iterateWhile = true;
				edge.setTexture(textureUrl, textureStretch, textureScale);
				while (iterateWhile) {
					if (edge.next === this.edgePointer) {
						break;
					} else {
						edge = edge.next;
					}
					edge.setTexture(textureUrl, textureStretch, textureScale);
				}
			}
		}, {
			key: 'setTexture',
			value: function setTexture(textureUrl, textureStretch, textureScale) {
				var uuid = this.getUuid();
				this.floorplan.setFloorTexture(uuid, textureUrl, textureScale);
				this.dispatchEvent({ type: EVENT_CHANGED, item: this });
			}
		}, {
			key: 'generateRoofPlane',
			value: function generateRoofPlane() {
				if (this.roofPlane && this.roofPlane != null) {
					if (this.roofPlane.parent != null) {
						this.roofPlane.parent.remove(this.roofPlane);
					}
				}
				var geometry = new THREE.Geometry();
				this.corners.forEach(function (corner) {
					var vertex = new THREE.Vector3(corner.x, corner.elevation, corner.y);
					geometry.vertices.push(vertex);
				});
				for (var i = 2; i < geometry.vertices.length; i++) {
					var face = new THREE.Face3(0, i - 1, i);
					geometry.faces.push(face);
				}
				this.roofPlane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, visible: false }));
				this.roofPlane.room = this;
			}
		}, {
			key: 'generatePlane',
			value: function generatePlane() {
				var points = [];
				this.interiorCorners.forEach(function (corner) {
					points.push(new THREE.Vector2(corner.x, corner.y));
				});
				var shape = new THREE.Shape(points);
				var geometry = new THREE.ShapeGeometry(shape);
				this.floorPlane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, visible: false }));
				this.floorPlane.visible = true;
				this.floorPlane.rotation.set(Math.PI / 2, 0, 0);
				this.floorPlane.room = this;
				var b3 = new THREE.Box3();
				b3.setFromObject(this.floorPlane);
				this.min = b3.min.clone();
				this.max = b3.max.clone();
				this.center = this.max.clone().sub(this.min).multiplyScalar(0.5).add(this.min);
			}
		}, {
			key: 'cycleIndex',
			value: function cycleIndex(index) {
				if (index < 0) {
					return index += this.corners.length;
				} else {
					return index % this.corners.length;
				}
			}
		}, {
			key: 'pointInRoom',
			value: function pointInRoom(pt) {
				var polygon = [];
				this.corners.forEach(function (corner) {
					var co = new THREE.Vector2(corner.x, corner.y);
					polygon.push(co);
				});
				return Utils.pointInPolygon2(pt, polygon);
			}
		}, {
			key: 'updateInteriorCorners',
			value: function updateInteriorCorners() {
				var edge = this.edgePointer;
				var iterateWhile = true;
				while (iterateWhile) {
					this.interiorCorners.push(edge.interiorStart());
					edge.generatePlane();
					if (edge.next === this.edgePointer) {
						break;
					} else {
						edge = edge.next;
					}
				}
			}
		}, {
			key: 'updateArea',
			value: function updateArea() {
				var oldarea = this.area;
				var points = [];
				var allpoints = [];
				this.areaCenter = new THREE.Vector2();
				this._polygonPoints = [];
				var firstCorner, secondCorner, wall, i, corner, region;
				for (i = 0; i < this.corners.length; i++) {
					corner = this.corners[i];
					firstCorner = this.corners[i];
					secondCorner = this.corners[(i + 1) % this.corners.length];
					wall = firstCorner.wallToOrFrom(secondCorner);
					if (wall != null) {
						if (wall.wallType == WallTypes.CURVED) {
							var begin = corner.location.clone().sub(wall.bezier.get(0)).length();
							var p;
							var stepIndex;
							allpoints.push(corner.location.clone());
							if (begin < 1e-6) {
								for (stepIndex = 1; stepIndex < 20; stepIndex++) {
									p = wall.bezier.get(stepIndex / 20);
									allpoints.push(new THREE.Vector2(p.x, p.y));
								}
							} else {
								for (stepIndex = 19; stepIndex > 0; stepIndex--) {
									p = wall.bezier.get(stepIndex / 20);
									allpoints.push(new THREE.Vector2(p.x, p.y));
								}
							}
						} else {
							allpoints.push(corner.location.clone());
						}
					} else {
						allpoints.push(corner.location.clone());
					}
				}
				points = allpoints;
				region = new Region(points);
				this.area = Math.abs(region.area());
				this.areaCenter = region.centroid();
				this._polygonPoints = points;
				this.dispatchEvent({ type: EVENT_ROOM_ATTRIBUTES_CHANGED, item: this, info: { from: oldarea, to: this.area } });
			}
		}, {
			key: 'updateArea2',
			value: function updateArea2() {
				var scope = this;
				var isComplexRoom = false;
				var oldarea = this.area;
				var points = [];
				var N = 0;
				var area = 0;
				this.areaCenter = new THREE.Vector2();
				this._polygonPoints = [];
				for (var i = 0; i < this.corners.length; i++) {
					var firstCorner = this.corners[i];
					var secondCorner = this.corners[(i + 1) % this.corners.length];
					var wall = firstCorner.wallToOrFrom(secondCorner);
					isComplexRoom |= wall.wallType == WallTypes.CURVED;
				}
				var inext, a, b, ax_by, ay_bx, delta;
				if (!isComplexRoom) {
					this.corners.forEach(function (corner) {
						var co = new THREE.Vector2(corner.x, corner.y);
						scope.areaCenter.add(co);
						points.push(co);
					});
					this.areaCenter.multiplyScalar(1.0 / points.length);
					for (i = 0; i < points.length; i++) {
						inext = (i + 1) % points.length;
						a = points[i];
						b = points[inext];
						ax_by = a.x * b.y;
						ay_bx = a.y * b.x;
						delta = ax_by - ay_bx;
						area += delta;
					}
					this.area = Math.abs(area) * 0.5;
					this._polygonPoints = points;
					this.dispatchEvent({ type: EVENT_ROOM_ATTRIBUTES_CHANGED, item: this, info: { from: oldarea, to: this.area } });
					return;
				}
				N = this.corners.length;
				for (i = 0; i < this.corners.length; i++) {
					firstCorner = this.corners[i];
					secondCorner = this.corners[(i + 1) % this.corners.length];
					wall = firstCorner.wallToOrFrom(secondCorner);
					this.areaCenter.add(firstCorner.location);
					if (wall != null) {
						if (wall.wallType == WallTypes.CURVED) {
							points.push(firstCorner.location);
							var LUT = wall.bezier.getLUT(20);
							for (var j = 1; j < LUT.length - 1; j++) {
								var p = LUT[j];
								p = new THREE.Vector2(p.x, p.y);
								points.push(p);
							}
						} else {
							points.push(firstCorner.location);
						}
					} else {
						points.push(firstCorner.location);
					}
				}
				this.areaCenter.multiplyScalar(1.0 / N);
				var indicesAndAngles = Utils.getCyclicOrder(points, this.areaCenter);
				points = indicesAndAngles['points'];
				for (i = 0; i < points.length; i++) {
					inext = (i + 1) % points.length;
					a = points[i];
					b = points[inext];
					ax_by = a.x * b.y;
					ay_bx = a.y * b.x;
					delta = ax_by - ay_bx;
					area += delta;
				}
				this._polygonPoints = points;
				this.area = Math.abs(area) * 0.5;
				this.dispatchEvent({ type: EVENT_ROOM_ATTRIBUTES_CHANGED, item: this, info: { from: oldarea, to: this.area } });
			}
		}, {
			key: 'hasAllCornersById',
			value: function hasAllCornersById(ids) {
				var sum = 0;
				for (var i = 0; i < ids.length; i++) {
					sum += this.hasACornerById(ids[i]);
				}
				return sum == this.corners.length;
			}
		}, {
			key: 'hasACornerById',
			value: function hasACornerById(id) {
				for (var i = 0; i < this.corners.length; i++) {
					var corner = this.corners[i];
					if (corner.id == id) {
						return 1;
					}
				}
				return 0;
			}
		}, {
			key: 'updateWalls',
			value: function updateWalls() {
				var prevEdge = null;
				var firstEdge = null;
				for (var i = 0; i < this.corners.length; i++) {
					var firstCorner = this.corners[i];
					var secondCorner = this.corners[(i + 1) % this.corners.length];
					var wallTo = firstCorner.wallTo(secondCorner);
					var wallFrom = firstCorner.wallFrom(secondCorner);
					var edge = null;
					if (wallTo) {
						edge = new HalfEdge(this, wallTo, true);
					} else if (wallFrom) {
						edge = new HalfEdge(this, wallFrom, false);
					} else {
						console.log('corners arent connected by a wall, uh oh');
					}
					if (i == 0) {
						firstEdge = edge;
					} else {
						edge.prev = prevEdge;
						prevEdge.next = edge;
						if (i + 1 == this.corners.length) {
							firstEdge.prev = edge;
							edge.next = firstEdge;
						}
					}
					prevEdge = edge;
				}
				this.edgePointer = firstEdge;
			}
		}, {
			key: 'roomCornerPoints',
			get: function get() {
				return this._polygonPoints;
			}
		}, {
			key: 'roomByCornersId',
			get: function get() {
				return this._roomByCornersId;
			}
		}, {
			key: 'name',
			set: function set(value) {
				var oldname = this._name;
				this._name = value;
				this.dispatchEvent({ type: EVENT_ROOM_ATTRIBUTES_CHANGED, item: this, info: { from: oldname, to: this._name } });
			},
			get: function get() {
				return this._name;
			}
		}]);
		return Room;
	}(THREE.EventDispatcher);
  
	var defaultFloorPlanTolerance = 10.0;
	var Floorplan = function (_EventDispatcher) {
		inherits(Floorplan, _EventDispatcher);
		function Floorplan() {
			classCallCheck(this, Floorplan);
			var _this = possibleConstructorReturn(this, (Floorplan.__proto__ || Object.getPrototypeOf(Floorplan)).call(this));
			_this.walls = [];
			_this.corners = [];
			_this.rooms = [];
			_this.metaroomsdata = {};
			_this.new_wall_callbacks = [];
			_this.new_corner_callbacks = [];
			_this.redraw_callbacks = [];
			_this.updated_rooms = [];
			_this.roomLoadedCallbacks = [];
			_this.floorTextures = {};
			_this._carbonSheet = null;
			return _this;
		}
		createClass(Floorplan, [{
			key: 'wallEdges',
			value: function wallEdges() {
				var edges = [];
				this.walls.forEach(function (wall) {
					if (wall.frontEdge) {
						edges.push(wall.frontEdge);
					}
					if (wall.backEdge) {
						edges.push(wall.backEdge);
					}
				});
				return edges;
			}
		}, {
			key: 'roofPlanes',
			value: function roofPlanes() {
				var planes = [];
				this.rooms.forEach(function (room) {
					planes.push(room.roofPlane);
				});
				return planes;
			}
		}, {
			key: 'wallEdgePlanes',
			value: function wallEdgePlanes() {
				var planes = [];
				this.walls.forEach(function (wall) {
					if (wall.frontEdge) {
						planes.push(wall.frontEdge.plane);
					}
					if (wall.backEdge) {
						planes.push(wall.backEdge.plane);
					}
				});
				return planes;
			}
		}, {
			key: 'floorPlanes',
			value: function floorPlanes() {
				return Utils.map(this.rooms, function (room) {
					return room.floorPlane;
				});
			}
		}, {
			key: 'fireOnNewWall',
			value: function fireOnNewWall(callback) {
				this.new_wall_callbacks.add(callback);
			}
		}, {
			key: 'fireOnNewCorner',
			value: function fireOnNewCorner(callback) {
				this.new_corner_callbacks.add(callback);
			}
		}, {
			key: 'fireOnRedraw',
			value: function fireOnRedraw(callback) {
				this.redraw_callbacks.add(callback);
			}
		}, {
			key: 'fireOnUpdatedRooms',
			value: function fireOnUpdatedRooms(callback) {
				this.updated_rooms.add(callback);
			}
		}, {
			key: 'newWallsForIntersections',
			value: function newWallsForIntersections(start, end) {
				var intersections = false;
				var cStart = new THREE.Vector2(start.getX(), start.getY());
				var cEnd = new THREE.Vector2(end.getX(), end.getY());
				var line = { p1: cStart, p2: cEnd };
				for (var i = 0; i < this.walls.length; i++) {
					var twall = this.walls[i];
					var bstart = { x: twall.getStartX(), y: twall.getStartY() };
					var bend = { x: twall.getEndX(), y: twall.getEndY() };
					var iPoint;
					if (twall.wallType == WallTypes.CURVED) {
						iPoint = twall.bezier.intersects(line);
						if (iPoint.length) {
							iPoint = twall.bezier.get(iPoint[0]);
						}
					} else {
						iPoint = Utils.lineLineIntersectPoint(cStart, cEnd, bstart, bend);
					}
					if (iPoint) {
						var nCorner = this.newCorner(iPoint.x, iPoint.y);
						nCorner.mergeWithIntersected(false);
						intersections = true;
					}
				}
				this.update();
				return intersections;
			}
		}, {
			key: 'newWall',
			value: function newWall(start, end, a, b) {
				var scope = this;
				var wall = new Wall(start, end, a, b);
				this.walls.push(wall);
				wall.addEventListener(EVENT_DELETED, function (o) {
					scope.removeWall(o.item);
				});
				wall.addEventListener(EVENT_WALL_ATTRIBUTES_CHANGED, function (o) {
					scope.dispatchEvent(o);
				});
				this.dispatchEvent({ type: EVENT_NEW, item: this, newItem: wall });
				this.update();
				return wall;
			}
		}, {
			key: 'newCorner',
			value: function newCorner(x, y, id) {
				var scope = this;
				var corner = new Corner(this, x, y, id);
				for (var i = 0; i < this.corners.length; i++) {
					var existingCorner = this.corners[i];
					if (existingCorner.distanceFromCorner(corner) < cornerTolerance) {
						return existingCorner;
					}
				}
				this.corners.push(corner);
				corner.addEventListener(EVENT_DELETED, function (o) {
					scope.removeCorner(o.item);
				});
				corner.addEventListener(EVENT_CORNER_ATTRIBUTES_CHANGED, function (o) {
					scope.dispatchEvent(o);
					var updatecorners = o.item.adjacentCorners();
					updatecorners.push(o.item);
					scope.update(false, updatecorners);
				});
				corner.addEventListener(EVENT_MOVED, function (o) {
					scope.dispatchEvent(o);
					var updatecorners = o.item.adjacentCorners();
					updatecorners.push(o.item);
					scope.update(false, updatecorners);
				});
				this.dispatchEvent({ type: EVENT_NEW, item: this, newItem: corner });
				this.update();
				return corner;
			}
		}, {
			key: 'removeWall',
			value: function removeWall(wall) {
				this.dispatchEvent({ type: EVENT_DELETED, item: this, deleted: wall, item_type: 'wall' });
				Utils.removeValue(this.walls, wall);
				this.update();
			}
		}, {
			key: 'removeCorner',
			value: function removeCorner(corner) {
				this.dispatchEvent({ type: EVENT_DELETED, item: this, deleted: corner, item_type: 'corner' });
				Utils.removeValue(this.corners, corner);
			}
		}, {
			key: 'getWalls',
			value: function getWalls() {
				return this.walls;
			}
		}, {
			key: 'getCorners',
			value: function getCorners() {
				return this.corners;
			}
		}, {
			key: 'getRooms',
			value: function getRooms() {
				return this.rooms;
			}
		}, {
			key: 'overlappedRoom',
			value: function overlappedRoom(mx, my) {
				for (var i = 0; i < this.rooms.length; i++) {
					var room = this.rooms[i];
					var flag = room.pointInRoom(new THREE.Vector2(mx, my));
					if (flag) {
						return room;
					}
				}
				return null;
			}
		}, {
			key: 'overlappedControlPoint',
			value: function overlappedControlPoint(wall, x, y, tolerance) {
				tolerance = tolerance || defaultFloorPlanTolerance * 5;
				if (wall.a.distanceTo(new THREE.Vector2(x, y)) < tolerance && wall.wallType == WallTypes.CURVED) {
					return wall.a;
				} else if (wall.b.distanceTo(new THREE.Vector2(x, y)) < tolerance && wall.wallType == WallTypes.CURVED) {
					return wall.b;
				}
				return null;
			}
		}, {
			key: 'overlappedCorner',
			value: function overlappedCorner(x, y, tolerance) {
				tolerance = tolerance || defaultFloorPlanTolerance;
				for (var i = 0; i < this.corners.length; i++) {
					if (this.corners[i].distanceFrom(new THREE.Vector2(x, y)) < tolerance) {
						return this.corners[i];
					}
				}
				return null;
			}
		}, {
			key: 'overlappedWall',
			value: function overlappedWall(x, y, tolerance) {
				tolerance = tolerance || defaultFloorPlanTolerance;
				for (var i = 0; i < this.walls.length; i++) {
					var newtolerance = tolerance;
					if (this.walls[i].distanceFrom(new THREE.Vector2(x, y)) < newtolerance) {
						return this.walls[i];
					}
				}
				return null;
			}
		}, {
			key: 'getMetaRoomData',
			value: function getMetaRoomData() {
				var metaRoomData = {};
				this.rooms.forEach(function (room) {
					var metaroom = {};
					var ids = room.roomByCornersId;
					metaroom['name'] = room.name;
					metaRoomData[ids] = metaroom;
				});
				return metaRoomData;
			}
		}, {
			key: 'saveFloorplan',
			value: function saveFloorplan() {
				var floorplans = { version: Version.getTechnicalVersion(), corners: {}, walls: [], rooms: {}, wallTextures: [], floorTextures: {}, newFloorTextures: {}, carbonSheet: {} };
				var cornerIds = [];
				this.walls.forEach(function (wall) {
					if (wall.getStart() && wall.getEnd()) {
						floorplans.walls.push({
							'corner1': wall.getStart().id,
							'corner2': wall.getEnd().id,
							'frontTexture': wall.frontTexture,
							'backTexture': wall.backTexture,
							'wallType': wall.wallType.description,
							'a': { x: wall.a.x, y: wall.a.y },
							'b': { x: wall.b.x, y: wall.b.y }
						});
						cornerIds.push(wall.getStart());
						cornerIds.push(wall.getEnd());
					}
				});
				cornerIds.forEach(function (corner) {
					floorplans.corners[corner.id] = { 'x': Dimensioning.cmToMeasureRaw(corner.x), 'y': Dimensioning.cmToMeasureRaw(corner.y), 'elevation': Dimensioning.cmToMeasureRaw(corner.elevation) };
				});
				floorplans.rooms = this.metaroomsdata;
				if (this.carbonSheet) {
					floorplans.carbonSheet['url'] = this.carbonSheet.url;
					floorplans.carbonSheet['transparency'] = this.carbonSheet.transparency;
					floorplans.carbonSheet['x'] = this.carbonSheet.x;
					floorplans.carbonSheet['y'] = this.carbonSheet.y;
					floorplans.carbonSheet['anchorX'] = this.carbonSheet.anchorX;
					floorplans.carbonSheet['anchorY'] = this.carbonSheet.anchorY;
					floorplans.carbonSheet['width'] = this.carbonSheet.width;
					floorplans.carbonSheet['height'] = this.carbonSheet.height;
				}
				floorplans.newFloorTextures = this.floorTextures;
				return floorplans;
			}
		}, {
			key: 'loadFloorplan',
			value: function loadFloorplan(floorplan) {
				this.reset();
				var corners = {};
				if (floorplan == null || !('corners' in floorplan) || !('walls' in floorplan)) {
					return;
				}
				for (var id in floorplan.corners) {
					var corner = floorplan.corners[id];
					corners[id] = this.newCorner(Dimensioning.cmFromMeasureRaw(corner.x), Dimensioning.cmFromMeasureRaw(corner.y), id);
					if (corner.elevation) {
						corners[id].elevation = Dimensioning.cmFromMeasureRaw(corner.elevation);
					}
				}
				var scope = this;
				floorplan.walls.forEach(function (wall) {
					var newWall = scope.newWall(corners[wall.corner1], corners[wall.corner2]);
					if (wall.frontTexture) {
						newWall.frontTexture = wall.frontTexture;
					}
					if (wall.backTexture) {
						newWall.backTexture = wall.backTexture;
					}
					if (Version.isVersionHigherThan(floorplan.version, '0.0.2a')) {
						newWall.a = wall.a;
						newWall.b = wall.b;
						if (wall.wallType == 'CURVED') {
							newWall.wallType = WallTypes.CURVED;
						} else {
							newWall.wallType = WallTypes.STRAIGHT;
						}
					}
				});
				if ('newFloorTextures' in floorplan) {
					this.floorTextures = floorplan.newFloorTextures;
				}
				this.metaroomsdata = floorplan.rooms;
				this.update();
				if ('carbonSheet' in floorplan) {
					this.carbonSheet.clear();
					this.carbonSheet.maintainProportion = false;
					this.carbonSheet.x = floorplan.carbonSheet['x'];
					this.carbonSheet.y = floorplan.carbonSheet['y'];
					this.carbonSheet.transparency = floorplan.carbonSheet['transparency'];
					this.carbonSheet.anchorX = floorplan.carbonSheet['anchorX'];
					this.carbonSheet.anchorY = floorplan.carbonSheet['anchorY'];
					this.carbonSheet.width = floorplan.carbonSheet['width'];
					this.carbonSheet.height = floorplan.carbonSheet['height'];
					this.carbonSheet.url = floorplan.carbonSheet['url'];
					this.carbonSheet.maintainProportion = true;
				}
				this.dispatchEvent({ type: EVENT_LOADED, item: this });
			}
		}, {
			key: 'getFloorTexture',
			value: function getFloorTexture(uuid) {
				if (uuid in this.floorTextures) {
					return this.floorTextures[uuid];
				}
				return null;
			}
		}, {
			key: 'setFloorTexture',
			value: function setFloorTexture(uuid, url, scale) {
				this.floorTextures[uuid] = { url: url, scale: scale };
			}
		}, {
			key: 'updateFloorTextures',
			value: function updateFloorTextures() {
				var uuids = Utils.map(this.rooms, function (room) {
					return room.getUuid();
				});
				for (var uuid in this.floorTextures) {
					if (!Utils.hasValue(uuids, uuid)) {
						delete this.floorTextures[uuid];
					}
				}
			}
		}, {
			key: 'reset',
			value: function reset() {
				var tmpCorners = this.corners.slice(0);
				var tmpWalls = this.walls.slice(0);
				tmpCorners.forEach(function (corner) {
					corner.remove();
				});
				tmpWalls.forEach(function (wall) {
					wall.remove();
				});
				this.corners = [];
				this.walls = [];
			}
		}, {
			key: 'roomNameChanged',
			value: function roomNameChanged(e) {
				if (this.metaroomsdata) {
					this.metaroomsdata[e.item.roomByCornersId] = e.newname;
				}
			}
		}, {
			key: 'update',
			value: function update()
			{
				var updateroomconfiguration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
				var updatecorners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				if (updatecorners != null) {
					updatecorners.forEach(function (corner) {
						corner.updateAngles();
					});
				}
				if (!updateroomconfiguration) {
					this.dispatchEvent({ type: EVENT_UPDATED, item: this });
					return;
				}
				var scope = this;
				this.walls.forEach(function (wall) {
					wall.resetFrontBack();
				});
				var roomCorners = this.findRooms(this.corners);
				this.rooms = [];
				this.corners.forEach(function (corner) {
					corner.clearAttachedRooms();
				});
				roomCorners.forEach(function (corners) {
					var room = new Room(scope, corners);
					room.updateArea();
					scope.rooms.push(room);
					room.addEventListener(EVENT_ROOM_NAME_CHANGED, function (e) {
						scope.roomNameChanged(e);
					});
					room.addEventListener(EVENT_ROOM_ATTRIBUTES_CHANGED, function (o) {
						var room = o.item;
						scope.dispatchEvent(o);
						if (scope.metaroomsdata[room.roomByCornersId]) {
							scope.metaroomsdata[room.roomByCornersId]['name'] = room.name;
						} else {
							scope.metaroomsdata[room.roomByCornersId] = {};
							scope.metaroomsdata[room.roomByCornersId]['name'] = room.name;
						}
					});
					if (scope.metaroomsdata) {
						if (scope.metaroomsdata[room.roomByCornersId]) {
							room.name = scope.metaroomsdata[room.roomByCornersId]['name'];
						}
					}
				});
				this.assignOrphanEdges();
				this.updateFloorTextures();
				this.dispatchEvent({ type: EVENT_UPDATED, item: this });
			}
		}, {
			key: 'getCenter',
			value: function getCenter() {
				return this.getDimensions(true);
			}
		}, {
			key: 'getSize',
			value: function getSize() {
				return this.getDimensions(false);
			}
		}, {
			key: 'getDimensions',
			value: function getDimensions(center) {
				center = center || false;
				var xMin = Infinity;
				var xMax = -Infinity;
				var zMin = Infinity;
				var zMax = -Infinity;
				this.corners.forEach(function (corner) {
					if (corner.x < xMin) xMin = corner.x;
					if (corner.x > xMax) xMax = corner.x;
					if (corner.y < zMin) zMin = corner.y;
					if (corner.y > zMax) zMax = corner.y;
				});
				var ret;
				if (xMin == Infinity || xMax == -Infinity || zMin == Infinity || zMax == -Infinity) {
					ret = new THREE.Vector3();
				} else {
					if (center) {
						ret = new THREE.Vector3((xMin + xMax) * 0.5, 0, (zMin + zMax) * 0.5);
					} else {
						ret = new THREE.Vector3(xMax - xMin, 0, zMax - zMin);
					}
				}
				return ret;
			}
		}, {
			key: 'assignOrphanEdges',
			value: function assignOrphanEdges() {
				this.walls.forEach(function (wall) {
					if (!wall.backEdge && !wall.frontEdge) {
						wall.orphan = true;
						var back = new HalfEdge(null, wall, false);
						var front = new HalfEdge(null, wall, true);
						back.generatePlane();
						front.generatePlane();
					}
				});
			}
		}, {
			key: 'findRooms',
			value: function findRooms(corners) {
				function _calculateTheta(previousCorner, currentCorner, nextCorner) {
					var theta = Utils.angle2pi(new THREE.Vector2(previousCorner.x - currentCorner.x, previousCorner.y - currentCorner.y), new THREE.Vector2(nextCorner.x - currentCorner.x, nextCorner.y - currentCorner.y));
					return theta;
				}
				function _removeDuplicateRooms(roomArray) {
					var results = [];
					var lookup = {};
					var hashFunc = function hashFunc(corner) {
						return corner.id;
					};
					var sep = '-';
					for (var i = 0; i < roomArray.length; i++) {
						var add = true;
						var room = roomArray[i];
						for (var j = 0; j < room.length; j++) {
							var roomShift = Utils.cycle(room, j);
							var str = Utils.map(roomShift, hashFunc).join(sep);
							if (lookup.hasOwnProperty(str)) {
								add = false;
							}
						}
						if (add) {
							results.push(roomArray[i]);
							lookup[str] = true;
						}
					}
					return results;
				}
				function _findTightestCycle(firstCorner, secondCorner) {
					var stack = [];
					var next = { corner: secondCorner, previousCorners: [firstCorner] };
					var visited = {};
					visited[firstCorner.id] = true;
					while (next) {
						var currentCorner = next.corner;
						visited[currentCorner.id] = true;
						if (next.corner === firstCorner && currentCorner !== secondCorner) {
							return next.previousCorners;
						}
						var addToStack = [];
						var adjacentCorners = next.corner.adjacentCorners();
						for (var i = 0; i < adjacentCorners.length; i++) {
							var nextCorner = adjacentCorners[i];
							if (nextCorner.id in visited && !(nextCorner === firstCorner && currentCorner !== secondCorner)) {
								continue;
							}
							addToStack.push(nextCorner);
						}
						var previousCorners = next.previousCorners.slice(0);
						previousCorners.push(currentCorner);
						if (addToStack.length > 1) {
							var previousCorner = next.previousCorners[next.previousCorners.length - 1];
							addToStack.sort(function (a, b) {
								return _calculateTheta(previousCorner, currentCorner, b) - _calculateTheta(previousCorner, currentCorner, a);
							});
						}
						if (addToStack.length > 0) {
							addToStack.forEach(function (corner) {
								stack.push({ corner: corner, previousCorners: previousCorners });
							});
						}
						next = stack.pop();
					}
					return [];
				}
				var loops = [];
				corners.forEach(function (firstCorner) {
					firstCorner.adjacentCorners().forEach(function (secondCorner) {
						loops.push(_findTightestCycle(firstCorner, secondCorner));
					});
				});
				var uniqueLoops = _removeDuplicateRooms(loops);
				var uniqueCCWLoops = Utils.removeIf(uniqueLoops, Utils.isClockwise);
				return uniqueCCWLoops;
			}
		}, {
			key: 'carbonSheet',
			set: function set(val) {
				this._carbonSheet = val;
			}
			,
			get: function get() {
				return this._carbonSheet;
			}
		}]);
		return Floorplan;
	}(THREE.EventDispatcher);
  
	var Item = function (_Mesh) {
		inherits(Item, _Mesh);
		function Item(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, Item);
			var _this = possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));
			_this.model = model;
			_this.metadata = metadata;
			_this.errorGlow = new THREE.Mesh();
			_this.hover = false;
			_this.selected = false;
			_this.highlighted = false;
			_this.error = false;
			_this.emissiveColor = 0x444444;
			_this.obstructFloorMoves = true;
			_this.position_set = false;
			_this.allowRotate = true;
			_this.fixed = false;
			_this.dragOffset = new THREE.Vector3();
			_this.halfSize = new THREE.Vector3(0, 0, 0);
			_this.bhelper = null;
			_this.scene = _this.model.scene;
			_this._freePosition = true;
			if (!isgltf) {
				_this.geometry = geometry;
				_this.material = material;
				_this.geometry.computeBoundingBox();
				_this.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-0.5 * (_this.geometry.boundingBox.max.x + _this.geometry.boundingBox.min.x), -0.5 * (_this.geometry.boundingBox.max.y + _this.geometry.boundingBox.min.y), -0.5 * (_this.geometry.boundingBox.max.z + _this.geometry.boundingBox.min.z)));
				_this.geometry.computeBoundingBox();
			} else {
				var objectBox = new THREE.Box3();
				objectBox.setFromObject(geometry);
				var hsize = objectBox.max.clone().sub(objectBox.min).multiplyScalar(0.5);
				_this.geometry = new THREE.BoxGeometry(hsize.x * 0.5, hsize.y * 0.5, hsize.z * 0.5);
				_this.material = new THREE.MeshStandardMaterial({ color: 0x000000, wireframe: true, visible: false });
				_this.geometry.computeBoundingBox();
				_this.add(geometry);
			}
			if (!_this.material.color) {
				_this.material.color = new THREE.Color('#FFFFFF');
			}
			_this.wirematerial = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
			_this.errorColor = 0xff0000;
			_this.resizable = metadata.resizable;
			_this.castShadow = true;
			_this.receiveShadow = false;
			_this.originalmaterial = material;
			_this.texture = _this.material.texture;
			_this.position_set = false;
			if (position) {
				_this.position.copy(position);
				_this.position_set = true;
			}
			_this.halfSize = _this.objectHalfSize();
			_this.canvasWH = document.createElement('canvas');
			_this.canvasWH.width = _this.getWidth() + 1.0;
			_this.canvasWH.height = _this.getHeight() + 1.0;
			_this.canvascontextWH = _this.canvasWH.getContext('2d');
			_this.canvasTextureWH = new THREE.CanvasTexture(_this.canvasWH);
			_this.canvasMaterialWH = new THREE.MeshBasicMaterial({ map: _this.canvasTextureWH, side: THREE.DoubleSide, transparent: true });
			_this.canvasPlaneWH = new THREE.Mesh(new THREE.PlaneGeometry(_this.getWidth(), _this.getHeight(), 1, 1), _this.canvasMaterialWH);
			_this.canvasPlaneWH.scale.set(1, 1, 1);
			_this.canvasPlaneWH.position.set(0, 0, _this.getDepth() * 0.5 + 0.3);
			
			_this.canvasWD = document.createElement('canvas');
			_this.canvasWD.width = _this.getWidth() + 1.0;
			_this.canvasWD.height = _this.getDepth() + 1.0;
			_this.canvascontextWD = _this.canvasWD.getContext('2d');
			_this.canvasTextureWD = new THREE.CanvasTexture(_this.canvasWD);
			_this.canvasMaterialWD = new THREE.MeshBasicMaterial({ map: _this.canvasTextureWD, side: THREE.DoubleSide, transparent: true });
			_this.canvasPlaneWD = new THREE.Mesh(new THREE.PlaneGeometry(_this.getWidth(), _this.getDepth(), 1, 1), _this.canvasMaterialWD);
			_this.canvasPlaneWD.rotateX(-Math.PI * 0.5);
			_this.canvasPlaneWD.scale.set(1, 1, 1);
			_this.canvasPlaneWD.position.set(0, _this.getHeight() * 0.5 + 0.3, 0);
			_this.canvasPlaneWH.visible = _this.canvasPlaneWD.visible = false;
			_this.add(_this.canvasPlaneWH);
			_this.add(_this.canvasPlaneWD);
			_this.resizeProportionally = true;
			if (rotation) {
				_this.rotation.y = rotation;
			}
			if (scale != null) {
				_this.setScale(scale.x, scale.y, scale.z);
			}
			if (_this.metadata.materialColors) {
				if (_this.metadata.materialColors.length) {
					if (_this.material.length) {
						for (var i = 0; i < _this.metadata.materialColors.length; i++) {
							_this.material[i].color = new THREE.Color(_this.metadata.materialColors[i]);
						}
					} else {
						_this.material.color = new THREE.Color(_this.metadata.materialColors[0]);
					}
				}
			}
			return _this;
		}
		createClass(Item, [{
			key: 'updateCanvasTexture',
			value: function updateCanvasTexture(canvas, context, material, w, h, wPrefix, hPrefix) {
				if (w < 1 || h < 1) {
					return;
				}
				wPrefix = wPrefix ? wPrefix : 'w:';
				hPrefix = hPrefix ? hPrefix : 'h:';
				w *= 3;
				h *= 3;
				canvas.width = w;
				canvas.height = h;
				canvas.style.letterSpacing = '-22.5px';
				context.font = 'bold 45pt Courier';
				context.fillStyle = '#DADADA99';
				context.fillRect(0, 0, w, h);
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.lineWidth = 3;
				context.setLineDash([1, 2]);
				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(0, h * 0.5);
				context.lineTo(w, h * 0.5);
				context.closePath();
				context.stroke();
				context.beginPath();
				context.moveTo(w * 0.125, 0);
				context.lineTo(w * 0.125, h);
				context.closePath();
				context.stroke();
				context.lineWidth = 1;
				context.setLineDash([0]);
				context.strokeStyle = '#0000FF';
				context.strokeText(wPrefix + Dimensioning.cmToMeasure(w / 3), w * 0.5, h * 0.5);
				context.fillStyle = '#FF0000';
				context.fillText(wPrefix + Dimensioning.cmToMeasure(w / 3), w * 0.5, h * 0.5);
				context.translate(w * 0.125, 0);
				context.rotate(Math.PI * 0.5);
				context.strokeStyle = '#0000FF';
				context.strokeText(hPrefix + Dimensioning.cmToMeasure(h / 3), h * 0.5, 0);
				context.fillStyle = '#FF0000';
				context.fillText(hPrefix + Dimensioning.cmToMeasure(h / 3), h * 0.5, 0);
				context.restore();
				material.map.needsUpdate = true;
			}
		}, {
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				this.material = flag ? this.wirematerial : this.originalmaterial;
			}
		}, {
			key: 'remove',
			value: function remove() {
				this.scene.removeItem(this);
			}
		}, {
			key: 'resize',
			value: function resize(height, width, depth) {
				var x = width / this.getWidth();
				var y = height / this.getHeight();
				var z = depth / this.getDepth();
				if (this.resizeProportionally) {
					if (Math.abs(width - this.getWidth()) > 0.1) {
						this.setScale(x, x, x);
					} else if (Math.abs(height - this.getHeight()) > 0.1) {
						this.setScale(y, y, y);
					} else {
						this.setScale(z, z, z);
					}
					return;
				}
				this.setScale(x, y, z);
			}
		}, {
			key: 'getMaterial',
			value: function getMaterial() {
				return this.material;
			}
		}, {
			key: 'getMaterialColor',
			value: function getMaterialColor(index) {
				index = index ? index : 0;
				if (this.material.length) {
					return '#' + this.material[index].color.getHexString();
				}
				return '#' + this.material.color.getHexString();
			}
		}, {
			key: 'setMaterialColor',
			value: function setMaterialColor(color, index) {
				var c = new THREE.Color(color);
				if (this.material.length) {
					index = index ? index : 0;
					this.material[index].color = c;
					return;
				}
				this.material.color = c;
			}
		}, {
			key: 'setScale',
			value: function setScale(x, y, z) {
				var scaleVec = new THREE.Vector3(x, y, z);
				this.halfSize.multiply(scaleVec);
				scaleVec.multiply(this.scale);
				this.scale.set(scaleVec.x, scaleVec.y, scaleVec.z);
				this.resized();
				if (this.bhelper) {
					this.bhelper.update();
				}
				this.updateCanvasTexture(this.canvasWH, this.canvascontextWH, this.canvasMaterialWH, this.getWidth(), this.getHeight(), 'w:', 'h:');
				this.updateCanvasTexture(this.canvasWD, this.canvascontextWD, this.canvasMaterialWD, this.getWidth(), this.getDepth(), 'w:', 'd:');
				this.scene.needsUpdate = true;
			}
		}, {
			key: 'getProportionalResize',
			value: function getProportionalResize() {
				return this.resizeProportionally;
			}
		}, {
			key: 'setProportionalResize',
			value: function setProportionalResize(flag) {
				this.resizeProportionally = flag;
			}
		}, {
			key: 'setFixed',
			value: function setFixed(fixed) {
				this.fixed = fixed;
			}
		}, {
			key: 'resized',
			value: function resized() {}
		}, {
			key: 'getHeight',
			value: function getHeight() {
				return this.halfSize.y * 2.0;
			}
		}, {
			key: 'getWidth',
			value: function getWidth() {
				return this.halfSize.x * 2.0;
			}
		}, {
			key: 'getDepth',
			value: function getDepth() {
				return this.halfSize.z * 2.0;
			}
		}, {
			key: 'placeInRoom',
			value: function placeInRoom() {}
		}, {
			key: 'initObject',
			value: function initObject() {
				this.placeInRoom();
				if (this.halfSize.x < 1.0) {
					this.resize(this.getHeight() * 300, this.getWidth() * 300, this.getDepth() * 300);
				}
				this.bhelper = new THREE.BoxHelper(this);
				this.scene.add(this.bhelper);
				this.bhelper.visible = false;
				this.scene.needsUpdate = true;
			}
		}, {
			key: 'removed',
			value: function removed() {}
		}, {
			key: 'updateHighlight',
			value: function updateHighlight() {
				var _this2 = this;
				var on = this.hover || this.selected;
				this.highlighted = on;
				var hex = on ? this.emissiveColor : 0x000000;
				if (this.material) {
					if (this.material.length) {
						this.material.forEach(function (material) {
							material.emissive.setHex(hex);
							_this2.material.emissive = new THREE.Color(hex);
						});
					} else {
						this.material.emissive.setHex(hex);
						this.material.emissive = new THREE.Color(hex);
					}
				}
			}
		}, {
			key: 'mouseOver',
			value: function mouseOver() {
				this.hover = true;
				this.updateHighlight();
			}
		}, {
			key: 'mouseOff',
			value: function mouseOff() {
				this.hover = false;
				this.updateHighlight();
			}
		}, {
			key: 'setSelected',
			value: function setSelected() {
				this.setScale(1, 1, 1);
				this.selected = true;
				this.bhelper.visible = true;
				this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = true;
				this.updateHighlight();
			}
		}, {
			key: 'setUnselected',
			value: function setUnselected() {
				this.selected = false;
				this.bhelper.visible = false;
				this.canvasPlaneWH.visible = this.canvasPlaneWD.visible = false;
				this.updateHighlight();
			}
		}, {
			key: 'clickPressed',
			value: function clickPressed(intersection) {
				this.dragOffset.copy(intersection.point).sub(this.position);
			}
		}, {
			key: 'clickDragged',
			value: function clickDragged(intersection) {
				if (intersection) {
					this.moveToPosition(intersection.point.sub(this.dragOffset), intersection);
				}
			}
		}, {
			key: 'rotate',
			value: function rotate(intersection) {
				if (intersection) {
					var angle = Utils.angle(new THREE.Vector2(0, 1), new THREE.Vector2(intersection.point.x - this.position.x, intersection.point.z - this.position.z));
					var snapTolerance = Math.PI / 16.0;
					for (var i = -4; i <= 4; i++) {
						if (Math.abs(angle - i * (Math.PI / 2)) < snapTolerance) {
							angle = i * (Math.PI / 2);
							break;
						}
					}
					this.rotation.y = angle;
				}
			}
		}, {
			key: 'moveToPosition',
			value: function moveToPosition(vec3) {
				this.position.copy(vec3);
				if (this.bhelper) {
					this.bhelper.update();
				}
			}
		}, {
			key: 'clickReleased',
			value: function clickReleased() {
				if (this.error) {
					this.hideError();
				}
			}
		}, {
			key: 'customIntersectionPlanes',
			value: function customIntersectionPlanes() {
				return [];
			}
		}, {
			key: 'getCorners',
			value: function getCorners(xDim, yDim, position) {
				position = position || this.position;
				var halfSize = this.halfSize.clone();
				var c1 = new THREE.Vector3(-halfSize.x, 0, -halfSize.z);
				var c2 = new THREE.Vector3(halfSize.x, 0, -halfSize.z);
				var c3 = new THREE.Vector3(halfSize.x, 0, halfSize.z);
				var c4 = new THREE.Vector3(-halfSize.x, 0, halfSize.z);
				var transform = new THREE.Matrix4();
				transform.makeRotationY(this.rotation.y);
				c1.applyMatrix4(transform);
				c2.applyMatrix4(transform);
				c3.applyMatrix4(transform);
				c4.applyMatrix4(transform);
				c1.add(position);
				c2.add(position);
				c3.add(position);
				c4.add(position);
				var corners = [{ x: c1.x, y: c1.z }, { x: c2.x, y: c2.z }, { x: c3.x, y: c3.z }, { x: c4.x, y: c4.z }];
				return corners;
			}
		}, {
			key: 'isValidPosition',
			value: function isValidPosition() {
				return false;
			}
		}, {
			key: 'showError',
			value: function showError(vec3) {
				vec3 = vec3 || this.position;
				if (!this.error) {
					this.error = true;
					this.errorGlow = this.createGlow(this.errorColor, 0.8, true);
					this.scene.add(this.errorGlow);
				}
				this.errorGlow.position.copy(vec3);
			}
		}, {
			key: 'hideError',
			value: function hideError() {
				if (this.error) {
					this.error = false;
					this.scene.remove(this.errorGlow);
				}
			}
		}, {
			key: 'objectHalfSize',
			value: function objectHalfSize() {
				this.geometry.computeBoundingBox();
				var objectBox = this.geometry.boundingBox.clone();
				return objectBox.max.clone().sub(objectBox.min).divideScalar(2);
			}
		}, {
			key: 'createGlow',
			value: function createGlow(color, opacity, ignoreDepth) {
				ignoreDepth = ignoreDepth || false;
				var glowMaterial = new THREE.MeshBasicMaterial({ color: color, blending: THREE.AdditiveBlending, opacity: 0.2, transparent: true, depthTest: !ignoreDepth });
				var glow = new THREE.Mesh(this.geometry.clone(), glowMaterial);
				glow.position.copy(this.position);
				glow.rotation.copy(this.rotation);
				glow.scale.copy(this.scale);
				return glow;
			}
		}, {
			key: 'getMetaData',
			value: function getMetaData() {
				var matattribs = [];
				if (this.material.length) {
					this.material.forEach(function (mat) {
						matattribs.push('#' + mat.color.getHexString());
					});
				} else {
					matattribs.push('#' + this.material.color.getHexString());
				}
				return { item_name: this.metadata.itemName,
					item_type: this.metadata.itemType, format: this.metadata.format, model_url: this.metadata.modelUrl,
					xpos: this.position.x, ypos: this.position.y, zpos: this.position.z,
					rotation: this.rotation.y,
					scale_x: this.scale.x, scale_y: this.scale.y, scale_z: this.scale.z, fixed: this.fixed,
					material_colors: matattribs };
			}
		}, {
			key: 'freePosition',
			get: function get() {
				return this._freePosition;
			}
		}]);
		return Item;
	}(THREE.Mesh);
  
	var FloorItem = function (_Item) {
		inherits(FloorItem, _Item);
		function FloorItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, FloorItem);
			var _this = possibleConstructorReturn(this, (FloorItem.__proto__ || Object.getPrototypeOf(FloorItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this._freePosition = false;
			return _this;
		}
		createClass(FloorItem, [{
			key: 'placeInRoom',
			value: function placeInRoom() {
				if (!this.position_set) {
					var center = this.model.floorplan.getCenter();
					this.position.x = center.x;
					this.position.z = center.z;
					this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
				}
			}
		}, {
			key: 'resized',
			value: function resized() {
				this.position.y = this.halfSize.y;
			}
		}, {
			key: 'moveToPosition',
			value: function moveToPosition(vec3) {
				if (!this.isValidPosition(vec3)) {
					this.showError(vec3);
					return;
				} else {
					this.hideError();
					vec3.y = this.position.y;
					get(FloorItem.prototype.__proto__ || Object.getPrototypeOf(FloorItem.prototype), 'moveToPosition', this).call(this, vec3);
				}
			}
		}, {
			key: 'isValidPosition',
			value: function isValidPosition(vec3) {
				var corners = this.getCorners('x', 'z', vec3);
				var rooms = this.model.floorplan.getRooms();
				var isInARoom = false;
				for (var i = 0; i < rooms.length; i++) {
					if (Utils.pointInPolygon(new THREE.Vector2(vec3.x, vec3.z), rooms[i].interiorCorners) && !Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
						isInARoom = true;
					}
				}
				if (!isInARoom) {
					return true;
				}
				return true;
			}
		}]);
		return FloorItem;
	}(Item);
  
	var WallItem = function (_Item) {
		inherits(WallItem, _Item);
		function WallItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, WallItem);
			var _this = possibleConstructorReturn(this, (WallItem.__proto__ || Object.getPrototypeOf(WallItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this.currentWallEdge = null;
			_this.refVec = new THREE.Vector2(0, 1.0);
			_this.wallOffsetScalar = 0;
			_this.sizeX = 0;
			_this.sizeY = 0;
			_this.addToWall = false;
			_this.boundToFloor = false;
			_this.frontVisible = false;
			_this.backVisible = false;
			_this.allowRotate = false;
			_this._freePosition = false;
			return _this;
		}
		createClass(WallItem, [{
			key: 'closestWallEdge',
			value: function closestWallEdge() {
				var wallEdges = this.model.floorplan.wallEdges();
				var wallEdge = null;
				var minDistance = null;
				var itemX = this.position.x;
				var itemZ = this.position.z;
				wallEdges.forEach(function (edge) {
					var distance = edge.distanceTo(itemX, itemZ);
					if (minDistance === null || distance < minDistance) {
						minDistance = distance;
						wallEdge = edge;
					}
				});
				return wallEdge;
			}
		}, {
			key: 'removed',
			value: function removed() {
				if (this.currentWallEdge != null && this.addToWall) {
					Utils.removeValue(this.currentWallEdge.wall.items, this);
					this.redrawWall();
				}
			}
		}, {
			key: 'redrawWall',
			value: function redrawWall() {
				if (this.addToWall) {
					this.currentWallEdge.wall.fireRedraw();
				}
			}
		}, {
			key: 'updateEdgeVisibility',
			value: function updateEdgeVisibility(visible, front) {
				if (front) {
					this.frontVisible = visible;
				} else {
					this.backVisible = visible;
				}
				this.visible = this.frontVisible || this.backVisible;
			}
		}, {
			key: 'updateSize',
			value: function updateSize() {
				this.wallOffsetScalar = (this.geometry.boundingBox.max.z - this.geometry.boundingBox.min.z) * this.scale.z / 2.0;
				this.sizeX = (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x) * this.scale.x;
				this.sizeY = (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y;
			}
		}, {
			key: 'resized',
			value: function resized() {
				if (this.boundToFloor) {
					this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y + 0.01;
				}
				this.updateSize();
				this.redrawWall();
			}
		}, {
			key: 'placeInRoom',
			value: function placeInRoom() {
				var closestWallEdge = this.closestWallEdge();
				this.changeWallEdge(closestWallEdge);
				this.updateSize();
				if (!this.position_set) {
					var center = closestWallEdge.interiorCenter();
					var newPos = new THREE.Vector3(center.x, closestWallEdge.wall.height / 2.0, center.y);
					this.boundMove(newPos);
					this.position.copy(newPos);
					this.redrawWall();
				}
			}
		}, {
			key: 'moveToPosition',
			value: function moveToPosition(vec3, intersection) {
				var intersectionEdge = intersection ? intersection.object ? intersection.object.edge : intersection : this.closestWallEdge();
				this.changeWallEdge(intersectionEdge);
				this.boundMove(vec3);
				get(WallItem.prototype.__proto__ || Object.getPrototypeOf(WallItem.prototype), 'moveToPosition', this).call(this, vec3);
				this.redrawWall();
			}
		}, {
			key: 'getWallOffset',
			value: function getWallOffset() {
				return this.wallOffsetScalar;
			}
		}, {
			key: 'changeWallEdge',
			value: function changeWallEdge(wallEdge) {
				if (this.currentWallEdge != null) {
					if (this.addToWall) {
						Utils.removeValue(this.currentWallEdge.wall.items, this);
						this.redrawWall();
					} else {
						Utils.removeValue(this.currentWallEdge.wall.onItems, this);
					}
				}
				var scope = this;
				function __remove(event) {
					scope.remove(event.item);
				}
				if (this.currentWallEdge != null) {
					this.currentWallEdge.wall.removeEventListener(EVENT_DELETED, __remove);
				}
				wallEdge.wall.addEventListener(EVENT_DELETED, __remove);
				var normal2 = new THREE.Vector2();
				var normal3 = wallEdge.plane.geometry.faces[0].normal;
				normal2.x = normal3.x;
				normal2.y = normal3.z;
				var angle = Utils.angle(new THREE.Vector2(this.refVec.x, this.refVec.y), new THREE.Vector2(normal2.x, normal2.y));
				this.rotation.y = angle;
				this.currentWallEdge = wallEdge;
				if (this.addToWall) {
					wallEdge.wall.items.push(this);
					this.redrawWall();
				} else {
					wallEdge.wall.onItems.push(this);
				}
			}
		}, {
			key: 'customIntersectionPlanes',
			value: function customIntersectionPlanes() {
				return this.model.floorplan.wallEdgePlanes();
			}
		}, {
			key: 'boundMove',
			value: function boundMove(vec3) {
				var tolerance = 1;
				var edge = this.currentWallEdge;
				vec3.applyMatrix4(edge.interiorTransform);
				if (vec3.x < this.sizeX / 2.0 + tolerance) {
					vec3.x = this.sizeX / 2.0 + tolerance;
				} else if (vec3.x > edge.interiorDistance() - this.sizeX / 2.0 - tolerance) {
					vec3.x = edge.interiorDistance() - this.sizeX / 2.0 - tolerance;
				}
				if (this.boundToFloor) {
					vec3.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y) * this.scale.y + 0.01;
				} else {
					if (vec3.y < this.sizeY / 2.0 + tolerance) {
						vec3.y = this.sizeY / 2.0 + tolerance;
					}
				}
				vec3.z = this.getWallOffset();
				vec3.applyMatrix4(edge.invInteriorTransform);
			}
		}]);
		return WallItem;
	}(Item);
  
	var InWallItem = function (_WallItem) {
		inherits(InWallItem, _WallItem);
		function InWallItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, InWallItem);
			var _this = possibleConstructorReturn(this, (InWallItem.__proto__ || Object.getPrototypeOf(InWallItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this.addToWall = true;
			return _this;
		}
		createClass(InWallItem, [{
			key: 'getWallOffset',
			value: function getWallOffset() {
				return -this.currentWallEdge.offset + 0.5;
			}
		}]);
		return InWallItem;
	}(WallItem);
  
	var InWallFloorItem = function (_InWallItem) {
		inherits(InWallFloorItem, _InWallItem);
		function InWallFloorItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, InWallFloorItem);
			var _this = possibleConstructorReturn(this, (InWallFloorItem.__proto__ || Object.getPrototypeOf(InWallFloorItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this.boundToFloor = true;
			return _this;
		}
		return InWallFloorItem;
	}(InWallItem);
  
	var OnFloorItem = function (_FloorItem) {
		inherits(OnFloorItem, _FloorItem);
		function OnFloorItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, OnFloorItem);
			var _this = possibleConstructorReturn(this, (OnFloorItem.__proto__ || Object.getPrototypeOf(OnFloorItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this.obstructFloorMoves = false;
			_this.receiveShadow = true;
			return _this;
		}
		return OnFloorItem;
	}(FloorItem);
  
	var WallFloorItem = function (_WallItem) {
		inherits(WallFloorItem, _WallItem);
		function WallFloorItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, WallFloorItem);
			var _this = possibleConstructorReturn(this, (WallFloorItem.__proto__ || Object.getPrototypeOf(WallFloorItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this.boundToFloor = true;
			return _this;
		}
		return WallFloorItem;
	}(WallItem);
  
	var RoofItem = function (_Item) {
		inherits(RoofItem, _Item);
		function RoofItem(model, metadata, geometry, material, position, rotation, scale) {
			var isgltf = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			classCallCheck(this, RoofItem);
			var _this = possibleConstructorReturn(this, (RoofItem.__proto__ || Object.getPrototypeOf(RoofItem)).call(this, model, metadata, geometry, material, position, rotation, scale, isgltf));
			_this.allowRotate = false;
			_this.boundToFloor = false;
			_this._freePosition = false;
			if (_this.geometry) {
				_this.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-0.5 * (_this.geometry.boundingBox.max.x + _this.geometry.boundingBox.min.x), -0.5 * (_this.geometry.boundingBox.max.y - _this.geometry.boundingBox.min.y), -0.5 * (_this.geometry.boundingBox.max.z + _this.geometry.boundingBox.min.z)));
				_this.geometry.computeBoundingBox();
			}
			_this.halfSize = _this.objectHalfSize();
			_this.canvasPlaneWH.position.set(0, _this.getHeight() * -0.5, _this.getDepth() * 0.5);
			_this.canvasPlaneWD.position.set(0, -_this.getHeight(), 0);
			var co = _this.closestCeilingPoint();
			_this.moveToPosition(co);
			return _this;
		}
		createClass(RoofItem, [{
			key: 'customIntersectionPlanes',
			value: function customIntersectionPlanes() {
				return this.model.floorplan.roofPlanes();
			}
		}, {
			key: 'roofContainsPoint',
			value: function roofContainsPoint(roof, forpoint) {
				var g = roof.geometry;
				var result = { distance: Number.MAX_VALUE, contains: false, point: null, closestPoint: null };
				var closestPoint = null;
				for (var i = 0; i < g.faces.length; i++) {
					var f = g.faces[i];
					var plane = new THREE.Plane();
					var triangle = new THREE.Triangle(g.vertices[f.a], g.vertices[f.b], g.vertices[f.c]);
					var ipoint = new THREE.Vector3();
					var cpoint = new THREE.Vector3();
					var contains = false;
					var distance = 0.0;
					closestPoint = triangle.closestPointToPoint(forpoint, cpoint);
					triangle.getPlane(plane);
					plane.projectPoint(forpoint, ipoint);
					contains = triangle.containsPoint(ipoint);
					distance = plane.distanceToPoint(forpoint);
					if (distance < result.distance && contains) {
						result.distance = distance;
						result.contains = contains;
						result.point = ipoint;
						result.closestPoint = closestPoint.clone();
					}
				}
				if (result.point == null) {
					result.closestPoint = closestPoint.clone();
				}
				return result;
			}
		}, {
			key: 'closestCeilingPoint',
			value: function closestCeilingPoint() {
				var roofs = this.model.floorplan.roofPlanes();
				var roof = null;
				var globalResult = { distance: Number.MAX_VALUE, point: null };
				var result = null;
				for (var i = 0; i < roofs.length; i++) {
					roof = roofs[i];
					result = this.roofContainsPoint(roof, this.position);
					if (result.point != null && result.distance < globalResult.distance && result.contains) {
						globalResult.distance = result.distance;
						globalResult.point = result.point.clone();
					}
				}
				if (globalResult.point == null) {
					return result.closestPoint.clone();
				}
				return globalResult.point.clone();
			}
		}, {
			key: 'placeInRoom',
			value: function placeInRoom() {
				if (!this.position_set) {
					var co = this.closestCeilingPoint();
					this.moveToPosition(co);
				}
			}
		}]);
		return RoofItem;
	}(Item);
  
	var item_types = { 1: FloorItem, 2: WallItem, 3: InWallItem, 7: InWallFloorItem, 8: OnFloorItem, 9: WallFloorItem, 0: Item, 4: RoofItem };
	var Factory = function () {
		function Factory() {
			classCallCheck(this, Factory);
		}
		createClass(Factory, null, [{
			key: 'getClass',
			value: function getClass(itemType) {
				return item_types[itemType];
			}
		}]);
		return Factory;
	}();
  
	var Scene = function (_EventDispatcher) {
		inherits(Scene, _EventDispatcher);
		function Scene(model, textureDir) {
			classCallCheck(this, Scene);
			var _this = possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
			_this.model = model;
			_this.textureDir = textureDir;
			_this.scene = new THREE.Scene();
			_this.scene.background = new THREE.Color(0xffffff);
			_this.scene.fog = new THREE.Fog(0xFAFAFA, 0.001, 6000);
			_this.items = [];
			_this.needsUpdate = false;
			_this.gltfloader = new GLTFLoader();
			_this.objloader = new OBJLoader();
			_this.gltfloader.setCrossOrigin('');
			_this.itemLoadingCallbacks = null;
			_this.itemLoadedCallbacks = null;
			_this.itemRemovedCallbacks = null;
			return _this;
		}
		createClass(Scene, [{
			key: 'add',
			value: function add(mesh) {
				this.scene.add(mesh);
			}
		}, {
			key: 'remove',
			value: function remove(mesh) {
				this.scene.remove(mesh);
				Utils.removeValue(this.items, mesh);
			}
		}, {
			key: 'getScene',
			value: function getScene() {
				return this.scene;
			}
		}, {
			key: 'getItems',
			value: function getItems() {
				return this.items;
			}
		}, {
			key: 'itemCount',
			value: function itemCount() {
				return this.items.length;
			}
		}, {
			key: 'clearItems',
			value: function clearItems() {
				var scope = this;
				this.items.forEach(function (item) {
					scope.removeItem(item, true);
				});
				this.items = [];
			}
		}, {
			key: 'removeItem',
			value: function removeItem(item, keepInList) {
				keepInList = keepInList || false;
				this.dispatchEvent({ type: EVENT_ITEM_REMOVED, item: item });
				item.removed();
				this.scene.remove(item);
				if (!keepInList) {
					Utils.removeValue(this.items, item);
				}
			}
		}, {
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				this.items.forEach(function (item) {
					item.switchWireframe(flag);
				});
			}
		}, {
			key: 'addItem',
			value: function addItem(itemType, fileName, metadata, position, rotation, scale, fixed, newItemDefinitions) {
				
				if(itemType == undefined)
				{
					itemType = 1;
				}
				
				var scope = this;
				
				function addToMaterials(materials, newmaterial) {
					for (var i = 0; i < materials.length; i++) {
						var mat = materials[i];
						if (mat.name == newmaterial.name) {
							return [materials, i];
						}
					}
					materials.push(newmaterial);
					return [materials, materials.length - 1];
				}
				var scope = this;
				var loaderCallback = function (geometry, materials, isgltf=false)
				{
					var item = new (Factory.getClass(itemType))(scope.model, metadata, geometry, materials, position, rotation, scale, isgltf);
					item.fixed = fixed || false;
					scope.items.push(item);
					scope.add(item);
					item.initObject();
					scope.dispatchEvent({type:EVENT_ITEM_LOADED, item: item});
					if(newItemDefinitions)
					{
						item.moveToPosition(newItemDefinitions.position, newItemDefinitions.edge);
						item.placeInRoom();
					}
				};
				var gltfCallback = function gltfCallback(gltfModel) {
					var newmaterials = [];
					var newGeometry = new THREE.Geometry();
					gltfModel.scene.traverse(function (child) {
						if (child.type == 'Mesh') {
							var materialindices = [];
							if (child.material.length) {
								for (var k = 0; k < child.material.length; k++) {
									var newItems = addToMaterials(newmaterials, child.material[k]);
									newmaterials = newItems[0];
									materialindices.push(newItems[1]);
								}
							} else {
								newItems = addToMaterials(newmaterials, child.material);
								newmaterials = newItems[0];
								materialindices.push(newItems[1]);
							}
							if (child.geometry.isBufferGeometry) {
								var tGeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
								tGeometry.faces.forEach(function (face) {
									face.materialIndex = materialindices[face.materialIndex];
								});
								child.updateMatrix();
								newGeometry.merge(tGeometry, child.matrix);
							} else {
								child.geometry.faces.forEach(function (face) {
									face.materialIndex = materialindices[face.materialIndex];
								});
								child.updateMatrix();
								newGeometry.mergeMesh(child);
							}
						}
					});
					loaderCallback(newGeometry, newmaterials);
				};
				var objCallback = function objCallback(object) {
					var materials = [];
					var newGeometry = new THREE.Geometry();
					object.traverse(function (child) {
						if (child.type == 'Mesh') {
							if (child.material.length) {
								materials = materials.concat(child.material);
							} else {
								materials.push(child.material);
							}
							if (child.geometry.isBufferGeometry) {
								var tGeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
								child.updateMatrix();
								newGeometry.merge(tGeometry, child.matrix);
							} else {
								child.updateMatrix();
								newGeometry.mergeMesh(child);
							}
						}
					});
					loaderCallback(newGeometry, materials);
				};
				this.dispatchEvent({ type: EVENT_ITEM_LOADING });
				if (!metadata.format) {
					this.loader.load(fileName, loaderCallback, undefined);
				} else if (metadata.format == 'gltf') {
					this.gltfloader.load(fileName, gltfCallback, null, null);
				} else if (metadata.format == 'obj') {
					this.objloader.load(fileName, objCallback, null, null);
				}
			}
		}]);
		return Scene;
	}(THREE.EventDispatcher);
  
	function OBJExporter() {
					this.parse = function (object) {
									var output = '';
									var indexVertex = 0;
									var indexVertexUvs = 0;
									var indexNormals = 0;
									var vertex = new THREE.Vector3();
									var normal = new THREE.Vector3();
									var uv = new THREE.Vector2();
									var i,
										j,
										k,
										l,
										m,
										face = [];
									var parseMesh = function parseMesh(mesh) {
													var nbVertex = 0;
													var nbNormals = 0;
													var nbVertexUvs = 0;
													var geometry = mesh.geometry;
													var normalMatrixWorld = new THREE.Matrix3();
													if (geometry instanceof THREE.Geometry) {
																	geometry = new THREE.BufferGeometry().setFromObject(mesh);
													}
													if (geometry instanceof THREE.BufferGeometry) {
																	var vertices = geometry.getAttribute('position');
																	var normals = geometry.getAttribute('normal');
																	var uvs = geometry.getAttribute('uv');
																	var indices = geometry.getIndex();
																	output += 'o ' + mesh.name + '\n';
																	if (mesh.material && mesh.material.name) {
																					output += 'usemtl ' + mesh.material.name + '\n';
																	}
																	if (vertices !== undefined) {
																					for (i = 0, l = vertices.count; i < l; i++, nbVertex++) {
																									vertex.x = vertices.getX(i);
																									vertex.y = vertices.getY(i);
																									vertex.z = vertices.getZ(i);
																									vertex.applyMatrix4(mesh.matrixWorld);
																									output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';
																					}
																	}
																	if (uvs !== undefined) {
																					for (i = 0, l = uvs.count; i < l; i++, nbVertexUvs++) {
																									uv.x = uvs.getX(i);
																									uv.y = uvs.getY(i);
																									output += 'vt ' + uv.x + ' ' + uv.y + '\n';
																					}
																	}
																	if (normals !== undefined) {
																					normalMatrixWorld.getNormalMatrix(mesh.matrixWorld);
																					for (i = 0, l = normals.count; i < l; i++, nbNormals++) {
																									normal.x = normals.getX(i);
																									normal.y = normals.getY(i);
																									normal.z = normals.getZ(i);
																									normal.applyMatrix3(normalMatrixWorld);
																									output += 'vn ' + normal.x + ' ' + normal.y + ' ' + normal.z + '\n';
																					}
																	}
																	if (indices !== null) {
																					for (i = 0, l = indices.count; i < l; i += 3) {
																									for (m = 0; m < 3; m++) {
																													j = indices.getX(i + m) + 1;
																													face[m] = indexVertex + j + (normals || uvs ? '/' + (uvs ? indexVertexUvs + j : '') + (normals ? '/' + (indexNormals + j) : '') : '');
																									}
																									output += 'f ' + face.join(' ') + '\n';
																					}
																	} else {
																					for (i = 0, l = vertices.count; i < l; i += 3) {
																									for (m = 0; m < 3; m++) {
																													j = i + m + 1;
																													face[m] = indexVertex + j + (normals || uvs ? '/' + (uvs ? indexVertexUvs + j : '') + (normals ? '/' + (indexNormals + j) : '') : '');
																									}
																									output += 'f ' + face.join(' ') + '\n';
																					}
																	}
													} else {
																	console.warn('THREE.OBJExporter.parseMesh(): geometry type unsupported', geometry);
													}
													indexVertex += nbVertex;
													indexVertexUvs += nbVertexUvs;
													indexNormals += nbNormals;
									};
									var parseLine = function parseLine(line) {
													var nbVertex = 0;
													var geometry = line.geometry;
													var type = line.type;
													if (geometry instanceof THREE.Geometry) {
																	geometry = new THREE.BufferGeometry().setFromObject(line);
													}
													if (geometry instanceof THREE.BufferGeometry) {
																	var vertices = geometry.getAttribute('position');
																	output += 'o ' + line.name + '\n';
																	if (vertices !== undefined) {
																					for (i = 0, l = vertices.count; i < l; i++, nbVertex++) {
																									vertex.x = vertices.getX(i);
																									vertex.y = vertices.getY(i);
																									vertex.z = vertices.getZ(i);
																									vertex.applyMatrix4(line.matrixWorld);
																									output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';
																					}
																	}
																	if (type === 'Line') {
																					output += 'l ';
																					for (j = 1, l = vertices.count; j <= l; j++) {
																									output += indexVertex + j + ' ';
																					}
																					output += '\n';
																	}
																	if (type === 'LineSegments') {
																					for (j = 1, k = j + 1, l = vertices.count; j < l; j += 2, k = j + 1) {
																									output += 'l ' + (indexVertex + j) + ' ' + (indexVertex + k) + '\n';
																					}
																	}
													} else {
																	console.warn('THREE.OBJExporter.parseLine(): geometry type unsupported', geometry);
													}
													indexVertex += nbVertex;
									};
									object.traverse(function (child) {
													if (child instanceof THREE.Mesh) {
																	parseMesh(child);
													}
													if (child instanceof THREE.Line) {
																	parseLine(child);
													}
									});
									return output;
					};
	}
	OBJExporter.prototype = Object.create(THREE.EventDispatcher.prototype);
	OBJExporter.prototype.constructor = OBJExporter;
  
	var Model = function (_EventDispatcher) {
		inherits(Model, _EventDispatcher);
		function Model(textureDir) {
			classCallCheck(this, Model);
			var _this = possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));
			_this.floorplan = new Floorplan();
			_this.scene = new Scene(_this, textureDir);
			_this.roomLoadingCallbacks = null;
			_this.roomLoadedCallbacks = null;
			_this.roomSavedCallbacks = null;
			_this.roomDeletedCallbacks = null;
			return _this;
		}
		createClass(Model, [{
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				this.scene.switchWireframe(flag);
			}
		}, {
			key: 'loadSerialized',
			value: function loadSerialized(json) {
				this.dispatchEvent({ type: EVENT_LOADING, item: this });
				var data = JSON.parse(json);
				this.newRoom(data.floorplan, data.items);
				this.dispatchEvent({ type: EVENT_LOADED, item: this });
			}
		}, {
			key: 'exportMeshAsObj',
			value: function exportMeshAsObj() {
				var exporter = new OBJExporter();
				return exporter.parse(this.scene.getScene());
			}
		}, {
			key: 'exportForBlender',
			value: function exportForBlender() {
				var scope = this;
				var gltfexporter = new GLTFExporter();
				var meshes = [];
				this.scene.getScene().traverse(function (child) {
					if (child instanceof THREE.Mesh) {
						if (child.material) {
							if (child.material.length || child.material.visible) {
								var op = child.material.transparent ? child.material.opacity : undefined;
								meshes.push(child);
								if (op) {
									child.material.opacity = op;
								}
							}
						}
					}
				});
				gltfexporter.parse(meshes, function (result) {
					var output = JSON.stringify(result, null, 2);
					scope.dispatchEvent({ type: EVENT_GLTF_READY, item: this, gltf: output });
				});
			}
		}, {
			key: 'exportSerialized',
			value: function exportSerialized() {
				var items_arr = [];
				var objects = this.scene.getItems();
				for (var i = 0; i < objects.length; i++) {
					var obj = objects[i];
					items_arr[i] = obj.getMetaData();
				}
				var room = { floorplan: this.floorplan.saveFloorplan(), items: items_arr };
				return JSON.stringify(room);
			}
		}, {
			key: 'newRoom',
			value: function newRoom(floorplan, items) {
				var _this2 = this;
				this.scene.clearItems();
				this.floorplan.loadFloorplan(floorplan);
				items.forEach(function (item) {
					var matColors = item.material_colors ? item.material_colors : [];
					var position = new THREE.Vector3(item.xpos, item.ypos, item.zpos);
					var metadata = { itemName: item.item_name, resizable: item.resizable, format: item.format, itemType: item.item_type, modelUrl: item.model_url, materialColors: matColors };
					var scale = new THREE.Vector3(item.scale_x, item.scale_y, item.scale_z);
					_this2.scene.addItem(item.item_type, item.model_url, metadata, position, item.rotation, scale, item.fixed);
				});
			}
		}]);
		return Model;
	}(THREE.EventDispatcher);
  
	var CarbonSheet = function (_EventDispatcher) {
		inherits(CarbonSheet, _EventDispatcher);
		function CarbonSheet(floorplan, viewmodel, canvas) {
			classCallCheck(this, CarbonSheet);
			var _this = possibleConstructorReturn(this, (CarbonSheet.__proto__ || Object.getPrototypeOf(CarbonSheet)).call(this));
			_this.canvasElement = document.getElementById(canvas);
			_this.canvas = canvas;
			_this.context = _this.canvasElement.getContext('2d');
			_this.floorplan = floorplan;
			_this.viewmodel = viewmodel;
			_this._url = '';
			_this._image = new Image();
			_this._loaded = false;
			_this._transparency = 1.0;
			_this._x = _this._y = 0.0;
			_this._anchorX = 0;
			_this._anchorY = 0;
			_this._rawWidthPixels = _this._rawHeightPixels = 1.0;
			_this._rawWidth = _this._rawHeight = 1.0;
			_this._widthPixels = _this._heightPixels = 1.0;
			_this._width = _this._height = 1.0;
			_this._drawWidthPixels = _this._drawHeightPixels = 1.0;
			_this._scaleX = _this._scaleY = 1.0;
			_this._maintainProportion = true;
			_this._widthByHeightRatio = 1.0;
			return _this;
		}
		createClass(CarbonSheet, [{
			key: '_calibrate',
			value: function _calibrate() {
				if (!this._loaded) {
					return;
				}
				this._scaleX = this._widthPixels / this._rawWidthPixels;
				this._scaleY = this._heightPixels / this._rawHeightPixels;
				this._drawWidthPixels = this._rawWidthPixels * this._scaleX;
				this._drawHeightPixels = this._rawHeightPixels * this._scaleY;
			}
		}, {
			key: '_updated',
			value: function _updated() {
				this.dispatchEvent({ type: EVENT_UPDATED });
			}
		}, {
			key: 'clear',
			value: function clear() {
				this._loaded = false;
				this._transparency = 1.0;
				this._x = this._y = 0.0;
				this._anchorX = 0.0;
				this._anchorY = 0.0;
				this._rawWidthPixels = this._rawHeightPixels = 1.0;
				this._rawWidth = this._rawHeight = 1.0;
				this._widthPixels = this._heightPixels = 1.0;
				this._width = this._height = 1.0;
				this._scaleX = this._scaleY = 1.0;
				this._drawWidthPixels = this._drawHeightPixels = 1.0;
			}
		}, {
			key: 'drawOriginCrossHair',
			value: function drawOriginCrossHair() {
				var ox = 0;
				var oy = 0;
				this.context.fillStyle = '#FF0000';
				this.context.fillRect(ox - 1.5, oy - 15, 3, 30);
				this.context.fillRect(ox - 15, oy - 1.5, 30, 3);
			}
		}, {
			key: 'draw',
			value: function draw() {
				if (this._loaded) {
					var conX = this.viewmodel.convertX(this._x);
					var conY = this.viewmodel.convertY(this._y);
					this.context.translate(conX, conY);
					this.context.globalAlpha = this._transparency;
					this.context.drawImage(this._image, -this._anchorX * this._scaleX * Configuration.getNumericValue('scale'), -this._anchorY * this._scaleY * Configuration.getNumericValue('scale'), this._drawWidthPixels * Configuration.getNumericValue('scale'), this._drawHeightPixels * Configuration.getNumericValue('scale'));
					this.context.globalAlpha = 1.0;
					this.context.beginPath();
					this.context.fillStyle = 'blue';
					this.context.arc(0, 0, 5, 0, 6.28);
					this.context.fill();
					this.context.closePath();
					this.drawOriginCrossHair();
					this.context.translate(-conX, -conY);
				}
			}
		}, {
			key: 'url',
			set: function set(val) {
				if (!val || val == null) {
					return;
				}
				var scope = this;
				this._url = val;
				this._loaded = false;
				this._image.onload = function () {
					scope._rawWidthPixels = this.width;
					scope._rawHeightPixels = this.height;
					scope._rawWidth = scope._rawWidthPixels * cmPerPixel;
					scope._rawHeight = scope._rawHeightPixels * cmPerPixel;
					scope._widthByHeightRatio = this.width / this.height;
					if (scope._widthPixels < 2.0) {
						scope._widthPixels = scope._rawWidthPixels;
						scope.width = Dimensioning.cmToMeasureRaw(scope._rawWidth);
					}
					if (scope._heightPixels < 2.0) {
						scope._heightPixels = scope._rawHeightPixels;
						scope.height = Dimensioning.cmToMeasureRaw(scope._rawHeight);
					}
					scope._loaded = true;
					scope._calibrate();
					scope._updated();
				};
				this._image.onerror = function () {
					scope._loaded = false;
					scope._url = '';
				};
				this._image.src = this._url;
			},
			get: function get() {
				return this._url;
			}
		}, {
			key: 'maintainProportion',
			set: function set(flag) {
				this._maintainProportion = flag;
				this._updated();
			},
			get: function get() {
				return this._maintainProportion;
			}
		}, {
			key: 'loaded',
			get: function get() {
				return this._loaded;
			}
		}, {
			key: 'transparency',
			set: function set(val) {
				this._transparency = val;
				this._updated();
			},
			get: function get() {
				return this._transparency;
			}
		}, {
			key: 'x',
			set: function set(val) {
				this._x = val;
				this._updated();
			},
			get: function get() {
				return this._x;
			}
		}, {
			key: 'y',
			set: function set(val) {
				this._y = val;
				this._updated();
			},
			get: function get() {
				return this._y;
			}
		}, {
			key: 'anchorX',
			set: function set(val) {
				this._anchorX = val;
				this._updated();
			},
			get: function get() {
				return this._anchorX;
			}
		}, {
			key: 'anchorY',
			set: function set(val) {
				this._anchorY = val;
				this._updated();
			},
			get: function get() {
				return this._anchorY;
			}
		}, {
			key: 'width',
			set: function set(val) {
				this._width = Dimensioning.cmFromMeasureRaw(val);
				this._widthPixels = this._width * pixelsPerCm;
				if (this._maintainProportion) {
					this._height = this._width / this._widthByHeightRatio;
					this._heightPixels = this._height * pixelsPerCm;
				}
				this._calibrate();
				this._updated();
			},
			get: function get() {
				return Dimensioning.cmToMeasureRaw(this._width);
			}
		}, {
			key: 'height',
			set: function set(val) {
				this._height = Dimensioning.cmFromMeasureRaw(val);
				this._heightPixels = this._height * pixelsPerCm;
				if (this._maintainProportion) {
					this._width = this._height * this._widthByHeightRatio;
					this._widthPixels = this._width * pixelsPerCm;
				}
				this._calibrate();
				this._updated();
			},
			get: function get() {
				return Dimensioning.cmToMeasureRaw(this._height);
			}
		}]);
		return CarbonSheet;
	}(THREE.EventDispatcher);
  
	var floorplannerModes = { MOVE: 0, DRAW: 1, DELETE: 2 };
	var gridWidth = 1;
	var gridColor = '#f1f1f1';
	var roomColor = '#fedaff66';
	var roomColorHover = '#008cba66';
	var roomColorSelected = '#00ba8c66';
	exports.wallWidth = 5;
	exports.wallWidthHover = 7;
	exports.wallWidthSelected = 9;
	var wallColor = '#dddddd';
	var wallColorHover = '#008cba';
	var wallColorSelected = '#00ba8c';
	var edgeColor = '#888888';
	var edgeColorHover = '#008cba';
	var edgeWidth = 1;
	var deleteColor = '#ff0000';
	var cornerRadius = 3;
	var cornerRadiusHover = 6;
	var cornerRadiusSelected = 9;
	var cornerColor = '#cccccc';
	var cornerColorHover = '#008cba';
	var cornerColorSelected = '#00ba8c';
	var FloorplannerView2D = function () {
		function FloorplannerView2D(floorplan, viewmodel, canvas) {
			classCallCheck(this, FloorplannerView2D);
			this.canvasElement = document.getElementById(canvas);
			this.canvas = canvas;
			this.context = this.canvasElement.getContext('2d');
			this.floorplan = floorplan;
			this.viewmodel = viewmodel;
			var scope = this;
			this._carbonsheet = new CarbonSheet(floorplan, viewmodel, canvas);
			this._carbonsheet.addEventListener(EVENT_UPDATED, function () {
				scope.draw();
			});
			this.floorplan.carbonSheet = this._carbonsheet;
			jQuery(window).resize(function () {});
			jQuery(window).on('orientationchange', function () {
				scope.orientationChange();
			});
			this.handleWindowResize();
		}
		createClass(FloorplannerView2D, [{
			key: 'orientationChange',
			value: function orientationChange() {
				this.handleWindowResize();
			}
		}, {
			key: 'handleWindowResize',
			value: function handleWindowResize() {
				var canvasSel = $('#' + this.canvas);
				var parent = canvasSel.parent();
				parent.css({ width: window.innerWidth, height: window.innerHeight });
				var w = window.innerWidth;
				var h = window.innerHeight;
				canvasSel.height(h);
				canvasSel.width(w);
				this.canvasElement.height = h;
				this.canvasElement.width = w;
				this.draw();
			}
		}, {
			key: 'draw',
			value: function draw() {
				var _this = this;
				exports.wallWidth = Dimensioning.cmToPixel(Configuration.getNumericValue(configWallThickness));
				exports.wallWidthHover = Dimensioning.cmToPixel(Configuration.getNumericValue(configWallThickness)) * 0.7;
				exports.wallWidthSelected = Dimensioning.cmToPixel(Configuration.getNumericValue(configWallThickness)) * 0.9;
				this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
				this._carbonsheet.draw();
				this.drawGrid();
				this.drawOriginCrossHair();
				this.floorplan.getRooms().forEach(function (room) {
					_this.drawRoom(room);
				});
				this.floorplan.getWalls().forEach(function (wall) {
					_this.drawWall(wall);
				});
				this.floorplan.getCorners().forEach(function (corner) {
					_this.drawCorner(corner);
				});
				if (this.viewmodel.mode == floorplannerModes.DRAW) {
					this.drawTarget(this.viewmodel.targetX, this.viewmodel.targetY, this.viewmodel.lastNode);
					if (this.viewmodel.lastNode != null && this.viewmodel.lastNode != undefined) {
						var a = new THREE.Vector2(this.viewmodel.lastNode.x, this.viewmodel.lastNode.y);
						var b = new THREE.Vector2(this.viewmodel.targetX, this.viewmodel.targetY);
						var abvector = b.clone().sub(a);
						var midPoint = abvector.multiplyScalar(0.5).add(a);
						this.drawTextLabel(Dimensioning.cmToMeasure(a.distanceTo(b)), this.viewmodel.convertX(midPoint.x), this.viewmodel.convertY(midPoint.y));
						var vector = b.clone().sub(a);
						var sAngle = vector.angle() * 180 / Math.PI;
						var result = this.viewmodel.lastNode.closestAngle(sAngle);
						var eAngle = result['angle'];
						var closestVector = result['point'].sub(a);
						var textDistance = 60;
						var radius = Math.min(textDistance, vector.length());
						var location = vector.normalize().add(closestVector.normalize()).multiplyScalar(textDistance).add(a);
						var ox = this.viewmodel.convertX(this.viewmodel.lastNode.x);
						var oy = this.viewmodel.convertY(this.viewmodel.lastNode.y);
						var angle = Math.abs(eAngle - sAngle);
						angle = angle > 180 ? 360 - angle : angle;
						angle = Math.round(angle * 10) / 10;
						sAngle = sAngle * Math.PI / 180;
						eAngle = eAngle * Math.PI / 180;
						this.context.strokeStyle = '#FF0000';
						this.context.lineWidth = 4;
						this.context.beginPath();
						this.context.arc(ox, oy, radius * 0.5, Math.min(sAngle, eAngle), Math.max(sAngle, eAngle), false);
						this.context.stroke();
						this.drawTextLabel(angle + '\xB0', this.viewmodel.convertX(location.x), this.viewmodel.convertY(location.y));
					}
				}
				this.floorplan.getWalls().forEach(function (wall) {
					_this.drawWallLabels(wall);
				});
				if (this.viewmodel._clickedWallControl != null) {
					this.drawCircle(this.viewmodel.convertX(this.viewmodel._clickedWallControl.x), this.viewmodel.convertY(this.viewmodel._clickedWallControl.y), 7, '#F7F7F7');
				}
			}
		}, {
			key: 'zoom',
			value: function zoom() {
				var originx = this.viewmodel.canvasElement.innerWidth() / 2.0;
				var originy = this.viewmodel.canvasElement.innerHeight() / 2.0;
				if (Configuration.getNumericValue('scale') != 1) {
					this.context.setTransform(1, 0, 0, 1, 0, 0);
					this.context.translate(originx, originy);
					this.context.scale(Configuration.getNumericValue('scale'), Configuration.getNumericValue('scale'));
					this.context.translate(-originx, -originy);
				} else {
					this.context.setTransform(1, 0, 0, 1, 0, 0);
				}
				this.draw();
			}
		}, {
			key: 'drawCornerAngles',
			value: function drawCornerAngles(corner) {
				var ox = this.viewmodel.convertX(corner.location.x);
				var oy = this.viewmodel.convertY(corner.location.y);
				var offsetRatio = 2.0;
				for (var i = 0; i < corner.angles.length; i++) {
					var direction = corner.angleDirections[i];
					var location = direction.clone().add(corner.location);
					var sAngle = corner.startAngles[i] * Math.PI / 180;
					var eAngle = corner.endAngles[i] * Math.PI / 180;
					var angle = corner.angles[i];
					var lx = this.viewmodel.convertX(location.x);
					var ly = this.viewmodel.convertY(location.y);
					var radius = direction.length() * offsetRatio * 0.5;
					if (angle > 130 || angle == 0) {
						continue;
					}
					var ccwise = Math.abs(corner.startAngles[i] - corner.endAngles[i]) > 180;
					this.context.strokeStyle = '#000000';
					this.context.lineWidth = 4;
					this.context.beginPath();
					if (angle == 90) {
						var location2 = direction.clone().multiplyScalar(offsetRatio).add(corner.location);
						var lxx = this.viewmodel.convertX(location2.x);
						var lyy = this.viewmodel.convertY(location2.y);
						var b = { x: lxx, y: oy };
						var c = { x: lxx, y: lyy };
						var d = { x: ox, y: lyy };
						this.drawLine(b.x, b.y, c.x, c.y, this.context.lineWidth, this.context.strokeStyle);
						this.drawLine(c.x, c.y, d.x, d.y, this.context.lineWidth, this.context.strokeStyle);
					} else {
						this.context.arc(ox, oy, radius, Math.min(sAngle, eAngle), Math.max(sAngle, eAngle), ccwise);
					}
					this.context.stroke();
					this.drawTextLabel(angle + '\xB0', lx, ly);
				}
			}
		}, {
			key: 'drawOriginCrossHair',
			value: function drawOriginCrossHair() {
				var ox = this.viewmodel.convertX(0);
				var oy = this.viewmodel.convertY(0);
				this.context.fillStyle = '#0000FF';
				this.context.fillRect(ox - 2, oy - 7.5, 4, 15);
				this.context.fillRect(ox - 7.5, oy - 2, 15, 4);
				this.context.strokeStyle = '#FF0000';
				this.context.fillRect(ox - 1.25, oy - 5, 2.5, 10);
				this.context.fillRect(ox - 5, oy - 1.25, 10, 2.5);
			}
		}, {
			key: 'drawWallLabels',
			value: function drawWallLabels(wall) {
				if (wall.backEdge && wall.frontEdge) {
					if (wall.backEdge.interiorDistance() < wall.frontEdge.interiorDistance()) {
						this.drawEdgeLabel(wall.backEdge);
						this.drawEdgeLabelExterior(wall.backEdge);
					} else {
						this.drawEdgeLabel(wall.frontEdge);
						this.drawEdgeLabelExterior(wall.frontEdge);
					}
				} else if (wall.backEdge) {
					this.drawEdgeLabel(wall.backEdge);
					this.drawEdgeLabelExterior(wall.backEdge);
				} else if (wall.frontEdge) {
					this.drawEdgeLabel(wall.frontEdge);
					this.drawEdgeLabelExterior(wall.frontEdge);
				}
				this.drawWallLabelsMiddle(wall);
			}
		}, {
			key: 'drawWallLabelsMiddle',
			value: function drawWallLabelsMiddle(wall) {
				if (!wallInformation.midline) {
					return;
				}
				var pos = wall.wallCenter();
				var length = wall.wallLength();
				if (length < 60) {
					return;
				}
				var label = !wallInformation.labels ? '' : wallInformation.midlinelabel;
				this.drawTextLabel('' + label + Dimensioning.cmToMeasure(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y));
			}
		}, {
			key: 'drawEdgeLabelExterior',
			value: function drawEdgeLabelExterior(edge) {
				var pos = edge.exteriorCenter();
				var length = edge.exteriorDistance();
				if (length < 60) {
					return;
				}
				if (wallInformation.exterior) {
					var label = !wallInformation.labels ? '' : wallInformation.exteriorlabel;
					this.drawTextLabel('' + label + Dimensioning.cmToMeasure(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y + 40));
				}
			}
		}, {
			key: 'drawEdgeLabel',
			value: function drawEdgeLabel(edge) {
				var pos = edge.interiorCenter();
				var length = edge.interiorDistance();
				if (length < 60) {
					return;
				}
				if (wallInformation.interior) {
					var label = !wallInformation.labels ? '' : wallInformation.interiorlabel;
					this.drawTextLabel('' + label + Dimensioning.cmToMeasure(length), this.viewmodel.convertX(pos.x), this.viewmodel.convertY(pos.y - 40));
				}
			}
		}, {
			key: 'drawTextLabel',
			value: function drawTextLabel(label, x, y) {
				var textcolor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#000000';
				var strokecolor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ffffff';
				var style = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'normal';
				this.context.font = style + ' 12px Arial';
				this.context.fillStyle = textcolor;
				this.context.textBaseline = 'middle';
				this.context.textAlign = 'center';
				this.context.strokeStyle = strokecolor;
				this.context.lineWidth = 4;
				this.context.strokeText(label, x, y);
				this.context.fillText(label, x, y);
			}
		}, {
			key: 'drawEdge',
			value: function drawEdge(edge, hover) {
				var curved = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
				var color = edgeColor;
				if (hover && this.viewmodel.mode == floorplannerModes.DELETE) {
					color = deleteColor;
				} else if (hover) {
					color = edgeColorHover;
				}
				var corners = edge.corners();
				var scope = this;
				if (!curved) {
					this.drawPolygon(Utils.map(corners, function (corner) {
						return scope.viewmodel.convertX(corner.x);
					}), Utils.map(corners, function (corner) {
						return scope.viewmodel.convertY(corner.y);
					}), false, null, true, color, edgeWidth);
				}
			}
		}, {
			key: 'drawWall',
			value: function drawWall(wall) {
				var selected = wall === this.viewmodel.selectedWall;
				var hover = wall === this.viewmodel.activeWall && wall != this.viewmodel.selectedWall;
				var color = wallColor;
				if (hover && this.viewmodel.mode == floorplannerModes.DELETE) {
					color = deleteColor;
				} else if (hover) {
					color = wallColorHover;
				} else if (selected) {
					color = wallColorSelected;
				}
				var isCurved = wall.wallType == WallTypes.CURVED;
				if (wall.wallType == WallTypes.CURVED && selected) {
					this.drawLine(this.viewmodel.convertX(wall.getStartX()), this.viewmodel.convertY(wall.getStartY()), this.viewmodel.convertX(wall.a.x), this.viewmodel.convertY(wall.a.y), 5, '#006600');
					this.drawLine(this.viewmodel.convertX(wall.a.x), this.viewmodel.convertY(wall.a.y), this.viewmodel.convertX(wall.b.x), this.viewmodel.convertY(wall.b.y), 5, '#006600');
					this.drawLine(this.viewmodel.convertX(wall.b.x), this.viewmodel.convertY(wall.b.y), this.viewmodel.convertX(wall.getEndX()), this.viewmodel.convertY(wall.getEndY()), 5, '#06600');
					this.drawLine(this.viewmodel.convertX(wall.getStartX()), this.viewmodel.convertY(wall.getStartY()), this.viewmodel.convertX(wall.a.x), this.viewmodel.convertY(wall.a.y), 1, '#00FF00');
					this.drawLine(this.viewmodel.convertX(wall.a.x), this.viewmodel.convertY(wall.a.y), this.viewmodel.convertX(wall.b.x), this.viewmodel.convertY(wall.b.y), 1, '#00FF00');
					this.drawLine(this.viewmodel.convertX(wall.b.x), this.viewmodel.convertY(wall.b.y), this.viewmodel.convertX(wall.getEndX()), this.viewmodel.convertY(wall.getEndY()), 1, '#00FF00');
					this.drawCircle(this.viewmodel.convertX(wall.a.x), this.viewmodel.convertY(wall.a.y), 10, '#D7D7D7');
					this.drawCircle(this.viewmodel.convertX(wall.b.x), this.viewmodel.convertY(wall.b.y), 10, '#D7D7D7');
				}
				if (wall.wallType == WallTypes.STRAIGHT) {
					this.drawLine(this.viewmodel.convertX(wall.getStartX()), this.viewmodel.convertY(wall.getStartY()), this.viewmodel.convertX(wall.getEndX()), this.viewmodel.convertY(wall.getEndY()), hover ? exports.wallWidthHover : selected ? exports.wallWidthSelected : exports.wallWidth, color);
				} else {
					this.drawCurvedLine(this.viewmodel.convertX(wall.getStartX()), this.viewmodel.convertY(wall.getStartY()), this.viewmodel.convertX(wall.a.x), this.viewmodel.convertY(wall.a.y), this.viewmodel.convertX(wall.b.x), this.viewmodel.convertY(wall.b.y), this.viewmodel.convertX(wall.getEndX()), this.viewmodel.convertY(wall.getEndY()), hover ? exports.wallWidthHover : selected ? exports.wallWidthSelected : exports.wallWidth, color);
				}
				if (!hover && !selected && wall.frontEdge) {
					this.drawEdge(wall.frontEdge, hover, isCurved);
				}
				if (!hover && !selected && wall.backEdge) {
					this.drawEdge(wall.backEdge, hover, isCurved);
				}
				if (selected) {
					if (wall.wallType != WallTypes.CURVED) {
						this.drawCornerAngles(wall.start);
						this.drawCornerAngles(wall.end);
					}
				}
				this.drawCircle(this.viewmodel.canvasElement.innerWidth() / 2.0, this.viewmodel.canvasElement.innerHeight() / 2.0, 3, '#FF0000');
			}
		}, {
			key: 'drawRoom',
			value: function drawRoom(room) {
				var selected = room === this.viewmodel.selectedRoom;
				var hover = room === this.viewmodel.activeRoom && room != this.viewmodel.selectedRoom;
				var color = roomColor;
				if (hover) {
					color = roomColorHover;
				} else if (selected) {
					color = roomColorSelected;
				}
				var polygonPoints = [];
				for (var i = 0; i < room.roomCornerPoints.length; i++) {
					polygonPoints.push([room.roomCornerPoints[i]]);
				}
				this.drawPolygonCurved(polygonPoints, true, color);
				this.drawTextLabel(Dimensioning.cmToMeasure(room.area, 2) + String.fromCharCode(178), this.viewmodel.convertX(room.areaCenter.x), this.viewmodel.convertY(room.areaCenter.y), '#0000FF', '#00FF0000', 'bold');
				this.drawTextLabel(room.name, this.viewmodel.convertX(room.areaCenter.x), this.viewmodel.convertY(room.areaCenter.y + 30), '#363636', '#00FF0000', 'bold italic');
			}
		}, {
			key: 'drawCorner',
			value: function drawCorner(corner) {
				var _this2 = this;
				var cornerX = this.viewmodel.convertX(corner.x);
				var cornerY = this.viewmodel.convertY(corner.y);
				var hover = corner === this.viewmodel.activeCorner && corner != this.viewmodel.selectedCorner;
				var selected = corner === this.viewmodel.selectedCorner;
				var color = cornerColor;
				if (hover && this.viewmodel.mode == floorplannerModes.DELETE) {
					color = deleteColor;
				} else if (hover) {
					color = cornerColorHover;
				} else if (selected) {
					color = cornerColorSelected;
				}
				if (selected) {
					this.drawCornerAngles(corner);
					corner.adjacentCorners().forEach(function (neighbour) {
						_this2.drawCornerAngles(neighbour);
					});
				}
				this.drawCircle(cornerX, cornerY, hover ? cornerRadiusHover : selected ? cornerRadiusSelected : cornerRadius, color);
			}
		}, {
			key: 'drawTarget',
			value: function drawTarget(x, y, lastNode) {
				this.drawCircle(this.viewmodel.convertX(x), this.viewmodel.convertY(y), cornerRadiusHover, cornerColorHover);
				if (lastNode) {
					this.drawLine(this.viewmodel.convertX(lastNode.x), this.viewmodel.convertY(lastNode.y), this.viewmodel.convertX(x), this.viewmodel.convertY(y), exports.wallWidthHover, wallColorHover);
				}
			}
		}, {
			key: 'drawBezierObject',
			value: function drawBezierObject(bezier) {
				var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
				var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#f0f0f0';
				this.drawCurvedLine(this.viewmodel.convertX(bezier.points[0].x), this.viewmodel.convertY(bezier.points[0].y), this.viewmodel.convertX(bezier.points[1].x), this.viewmodel.convertY(bezier.points[1].y), this.viewmodel.convertX(bezier.points[2].x), this.viewmodel.convertY(bezier.points[2].y), this.viewmodel.convertX(bezier.points[3].x), this.viewmodel.convertY(bezier.points[3].y), width, color);
			}
		}, {
			key: 'drawCurvedLine',
			value: function drawCurvedLine(startX, startY, aX, aY, bX, bY, endX, endY, width, color) {
				this.context.beginPath();
				this.context.moveTo(startX, startY);
				this.context.bezierCurveTo(aX, aY, bX, bY, endX, endY);
				this.context.lineWidth = width + 3;
				this.context.strokeStyle = '#999999';
				this.context.stroke();
				this.context.beginPath();
				this.context.moveTo(startX, startY);
				this.context.bezierCurveTo(aX, aY, bX, bY, endX, endY);
				this.context.lineWidth = width;
				this.context.strokeStyle = color;
				this.context.stroke();
			}
		}, {
			key: 'drawLine',
			value: function drawLine(startX, startY, endX, endY, width, color) {
				this.context.beginPath();
				this.context.moveTo(startX, startY);
				this.context.lineTo(endX, endY);
				this.context.closePath();
				this.context.lineWidth = width;
				this.context.strokeStyle = color;
				this.context.stroke();
			}
		}, {
			key: 'drawPolygonCurved',
			value: function drawPolygonCurved(pointsets) {
				var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
				var fillColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FF00FF';
				var stroke = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
				var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#000000';
				var strokeWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
				fill = fill || false;
				stroke = stroke || false;
				this.context.beginPath();
				for (var i = 0; i < pointsets.length; i++) {
					var pointset = pointsets[i];
					if (pointset.length == 1) {
						if (i == 0) {
							this.context.moveTo(this.viewmodel.convertX(pointset[0].x), this.viewmodel.convertY(pointset[0].y));
						} else {
							this.context.lineTo(this.viewmodel.convertX(pointset[0].x), this.viewmodel.convertY(pointset[0].y));
						}
					}
					else if (pointset.length == 3) {
							this.context.bezierCurveTo(this.viewmodel.convertX(pointset[0].x), this.viewmodel.convertY(pointset[0].y), this.viewmodel.convertX(pointset[1].x), this.viewmodel.convertY(pointset[1].y), this.viewmodel.convertX(pointset[2].x), this.viewmodel.convertY(pointset[2].y));
						}
				}
				this.context.closePath();
				if (fill) {
					this.context.fillStyle = fillColor;
					this.context.fill();
				}
				if (stroke) {
					this.context.lineWidth = strokeWidth;
					this.context.strokeStyle = strokeColor;
					this.context.stroke();
				}
			}
		}, {
			key: 'drawPolygon',
			value: function drawPolygon(xArr, yArr, fill, fillColor, stroke, strokeColor, strokeWidth) {
				fill = fill || false;
				stroke = stroke || false;
				this.context.beginPath();
				this.context.moveTo(xArr[0], yArr[0]);
				for (var i = 1; i < xArr.length; i++) {
					this.context.lineTo(xArr[i], yArr[i]);
				}
				this.context.closePath();
				if (fill) {
					this.context.fillStyle = fillColor;
					this.context.fill();
				}
				if (stroke) {
					this.context.lineWidth = strokeWidth;
					this.context.strokeStyle = strokeColor;
					this.context.stroke();
				}
			}
		}, {
			key: 'drawCircle',
			value: function drawCircle(centerX, centerY, radius, fillColor) {
				this.context.beginPath();
				this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
				this.context.closePath();
				this.context.fillStyle = fillColor;
				this.context.fill();
			}
		}, {
			key: 'calculateGridOffset',
			value: function calculateGridOffset(n) {
				var gspacing = Dimensioning.cmToPixel(Configuration.getNumericValue(gridSpacing));
				if (n >= 0) {
					return (n + gspacing / 2.0) % gspacing - gspacing / 2.0;
				} else {
					return (n - gspacing / 2.0) % gspacing + gspacing / 2.0;
				}
			}
		}, {
			key: 'drawGrid',
			value: function drawGrid() {
				var gspacing = Dimensioning.cmToPixel(Configuration.getNumericValue(gridSpacing));
				var offsetX = this.calculateGridOffset(-this.viewmodel.originX);
				var offsetY = this.calculateGridOffset(-this.viewmodel.originY);
				var width = this.canvasElement.width;
				var height = this.canvasElement.height;
				var scale = Configuration.getNumericValue('scale');
				if (scale < 1.0) {
					width = width / scale;
					height = height / scale;
				}
				for (var x = 0; x <= width / gspacing; x++) {
					this.drawLine(gspacing * x + offsetX, 0, gspacing * x + offsetX, height, gridWidth, gridColor);
				}
				for (var y = 0; y <= height / gspacing; y++) {
					this.drawLine(0, gspacing * y + offsetY, width, gspacing * y + offsetY, gridWidth, gridColor);
				}
			}
		}, {
			key: 'carbonSheet',
			get: function get() {
				return this._carbonsheet;
			}
		}]);
		return FloorplannerView2D;
	}();
  
	var Floorplanner2D = function (_EventDispatcher) {
		inherits(Floorplanner2D, _EventDispatcher);
		function Floorplanner2D(canvas, floorplan) {
			classCallCheck(this, Floorplanner2D);
			var _this = possibleConstructorReturn(this, (Floorplanner2D.__proto__ || Object.getPrototypeOf(Floorplanner2D)).call(this));
			_this.mode = 0;
			_this.activeWall = null;
			_this.activeCorner = null;
			_this.activeRoom = null;
			_this._clickedWall = null;
			_this._clickedWallControl = null;
			_this._clickedCorner = null;
			_this._clickedRoom = null;
			_this.originX = 0;
			_this.originY = 0;
			_this.unScaledOriginX = 0;
			_this.unScaledOriginY = 0;
			_this.targetX = 0;
			_this.targetY = 0;
			_this.lastNode = null;
			_this.wallWidth = 0;
			_this.modeResetCallbacks = null;
			_this.mouseDown = false;
			_this.mouseMoved = false;
			_this.mouseX = 0;
			_this.mouseY = 0;
			_this.rawMouseX = 0;
			_this.rawMouseY = 0;
			_this.lastX = 0;
			_this.lastY = 0;
			_this.canvas = canvas;
			_this.floorplan = floorplan;
			_this.canvasElement = jQuery('#' + canvas);
			_this.view = new FloorplannerView2D(_this.floorplan, _this, canvas);
			_this.cmPerPixel = cmPerPixel;
			_this.pixelsPerCm = pixelsPerCm;
			_this.wallWidth = Dimensioning.cmToPixel(Configuration.getNumericValue('wallThickness'));
			_this.gridsnapmode = false;
			_this.shiftkey = false;
			_this.setMode(floorplannerModes.MOVE);
			var scope = _this;
			_this.canvasElement.bind('touchstart mousedown', function (event) {
				scope.mousedown(event);
			});
			_this.canvasElement.bind('touchmove mousemove', function (event) {
				scope.mousemove(event);
			});
			_this.canvasElement.bind('touchend mouseup', function (event) {
				scope.mouseup(event);
			});
			_this.canvasElement.bind('mouseleave', function (event) {
				scope.mouseleave(event);
			});
			_this.canvasElement.bind('dblclick', function (event) {
				scope.doubleclick(event);
			});
			document.addEventListener('keyup', function (event) {
				scope.keyUp(event);
			});
			document.addEventListener('keydown', function (event) {
				scope.keyDown(event);
			});
			floorplan.addEventListener(EVENT_LOADED, function () {
				scope.reset();
			});
			function updateView() {
				scope.view.draw();
			}
			floorplan.addEventListener(EVENT_CORNER_ATTRIBUTES_CHANGED, updateView);
			floorplan.addEventListener(EVENT_WALL_ATTRIBUTES_CHANGED, updateView);
			floorplan.addEventListener(EVENT_ROOM_ATTRIBUTES_CHANGED, updateView);
			return _this;
		}
		createClass(Floorplanner2D, [{
			key: 'doubleclick',
			value: function doubleclick() {
				var userinput, cid;
				function getAValidInput(message, current) {
					var uinput = window.prompt(message, current);
					if (uinput != null) {
						return uinput;
					}
					return current;
				}
				if (this.activeCorner) {
					this.floorplan.dispatchEvent({ type: EVENT_CORNER_2D_DOUBLE_CLICKED, item: this.activeCorner });
					if (!Configuration.getNumericValue('systemUI')) {
						return;
					}
					cid = this.activeCorner.id;
					var units = Configuration.getStringValue(configDimUnit);
					this.activeCorner.elevation = getAValidInput('Elevation at this point (in ' + units + ',\n' + cid + '): ', Dimensioning.cmToMeasureRaw(this.activeCorner.elevation));
					var x = getAValidInput('Location: X (' + Dimensioning.cmToMeasureRaw(this.activeCorner.x) + '): ', Dimensioning.cmToMeasureRaw(this.activeCorner.x));
					var y = getAValidInput('Location: Y (' + Dimensioning.cmToMeasureRaw(this.activeCorner.y) + '): ', Dimensioning.cmToMeasureRaw(this.activeCorner.y));
					this.activeCorner.move(Dimensioning.cmFromMeasureRaw(x), Dimensioning.cmFromMeasureRaw(y));
				} else if (this.activeWall) {
					this.floorplan.dispatchEvent({ type: EVENT_WALL_2D_DOUBLE_CLICKED, item: this.activeWall });
					if (!Configuration.getNumericValue('systemUI')) {
						return;
					}
				} else if (this.activeRoom) {
					this.floorplan.dispatchEvent({ type: EVENT_ROOM_2D_DOUBLE_CLICKED, item: this.activeRoom });
					if (!Configuration.getNumericValue('systemUI')) {
						return;
					}
					userinput = window.prompt('Enter a name for this Room: ', this.activeRoom.name);
					if (userinput != null) {
						this.activeRoom.name = userinput;
					}
					this.view.draw();
				}
			}
		}, {
			key: 'keyUp',
			value: function keyUp(e) {
				if (e.keyCode == 27) {
					this.escapeKey();
				}
				this.gridsnapmode = false;
				this.shiftkey = false;
			}
		}, {
			key: 'keyDown',
			value: function keyDown(e) {
				if (e.shiftKey || e.keyCode == 16) {
					this.shiftkey = true;
				}
				this.gridsnapmode = this.shiftkey;
			}
		}, {
			key: 'escapeKey',
			value: function escapeKey() {
				this.setMode(floorplannerModes.MOVE);
			}
		}, {
			key: 'updateTarget',
			value: function updateTarget() {
				if (this.mode == floorplannerModes.DRAW && this.lastNode) {
					if (Math.abs(this.mouseX - this.lastNode.x) < Configuration.getNumericValue(snapTolerance)) {
						this.targetX = this.lastNode.x;
					} else {
						this.targetX = this.mouseX;
					}
					if (Math.abs(this.mouseY - this.lastNode.y) < Configuration.getNumericValue(snapTolerance)) {
						this.targetY = this.lastNode.y;
					} else {
						this.targetY = this.mouseY;
					}
				} else {
					this.targetX = this.mouseX;
					this.targetY = this.mouseY;
				}
				if (this.gridsnapmode || Configuration.getNumericValue('snapToGrid')) {
					this.targetX = Math.floor(this.targetX / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
					this.targetY = Math.floor(this.targetY / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
				}
				this.view.draw();
			}
		}, {
			key: 'mousedown',
			value: function mousedown(event) {
				this.mouseDown = true;
				this.mouseMoved = false;
				if (event.touches) {
					this.rawMouseX = event.touches[0].clientX;
					this.rawMouseY = event.touches[0].clientY;
					event = event.touches[0];
				}
				this.lastX = this.rawMouseX;
				this.lastY = this.rawMouseY;
				if (this.mode == floorplannerModes.DELETE) {
					if (this.activeCorner) {
						this.activeCorner.removeAll();
					} else if (this.activeWall) {
						this.activeWall.remove();
					}
				}
				this.mouseX = Dimensioning.pixelToCm(event.clientX - this.canvasElement.offset().left) + Dimensioning.pixelToCm(this.originX);
				this.mouseY = Dimensioning.pixelToCm(event.clientY - this.canvasElement.offset().top) + Dimensioning.pixelToCm(this.originY);
				if (this._clickedWall) {
					this._clickedWallControl = this.floorplan.overlappedControlPoint(this._clickedWall, this.mouseX, this.mouseY);
					if (this._clickedWallControl != null) {
						this.view.draw();
						return;
					}
				}
				var mDownCorner = this.floorplan.overlappedCorner(this.mouseX, this.mouseY);
				var mDownWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY);
				var mDownRoom = this.floorplan.overlappedRoom(this.mouseX, this.mouseY);
				this._clickedWallControl = null;
				if (mDownCorner == null && mDownWall == null && mDownRoom == null) {
					this._clickedCorner = undefined;
					this._clickedWall = undefined;
					this._clickedRoom = undefined;
					this.floorplan.dispatchEvent({ type: EVENT_NOTHING_CLICKED });
				} else if (mDownCorner != null) {
					this._clickedCorner = undefined;
					this._clickedWall = undefined;
					this._clickedRoom = undefined;
					this._clickedCorner = mDownCorner;
					this.floorplan.dispatchEvent({ type: EVENT_CORNER_2D_CLICKED, item: this._clickedCorner });
				} else if (mDownWall != null) {
					this._clickedCorner = undefined;
					this._clickedWall = undefined;
					this._clickedRoom = undefined;
					this._clickedWall = mDownWall;
					this.floorplan.dispatchEvent({ type: EVENT_WALL_2D_CLICKED, item: this._clickedWall });
				} else if (mDownRoom != null) {
					this._clickedCorner = undefined;
					this._clickedWall = undefined;
					this._clickedRoom = undefined;
					this._clickedRoom = mDownRoom;
					this.floorplan.dispatchEvent({ type: EVENT_ROOM_2D_CLICKED, item: this._clickedRoom });
				}
				this.view.draw();
			}
		}, {
			key: 'mousemove',
			value: function mousemove(event) {
				this.mouseMoved = true;
				if (event.touches) {
					event.stopPropagation();
					event.preventDefault();
					event = event.touches[0];
				}
				this.rawMouseX = event.clientX;
				this.rawMouseY = event.clientY;
				this.mouseX = Dimensioning.pixelToCm(event.clientX - this.canvasElement.offset().left) + Dimensioning.pixelToCm(this.originX);
				this.mouseY = Dimensioning.pixelToCm(event.clientY - this.canvasElement.offset().top) + Dimensioning.pixelToCm(this.originY);
				if (this.mode == floorplannerModes.DRAW || this.mode == floorplannerModes.MOVE && this.mouseDown) {
					this.updateTarget();
				}
				if (this.mode != floorplannerModes.DRAW && !this.mouseDown) {
					var hoverCorner = this.floorplan.overlappedCorner(this.mouseX, this.mouseY);
					var hoverWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY);
					var hoverRoom = this.floorplan.overlappedRoom(this.mouseX, this.mouseY);
					var draw = false;
					if (hoverCorner != this.activeCorner && this.activeWall == null) {
						this.activeCorner = hoverCorner;
						this.floorplan.dispatchEvent({ type: EVENT_CORNER_2D_HOVER, item: hoverCorner });
						draw = true;
					}
					if (hoverWall != this.activeWall && this.activeCorner == null) {
						this.activeWall = hoverWall;
						this.floorplan.dispatchEvent({ type: EVENT_WALL_2D_HOVER, item: hoverWall });
						draw = true;
					} else {
						this.activeWall = null;
					}
					if (this.activeWall == null && this.activeCorner == null) {
						this.activeRoom = hoverRoom;
					}
					if (this.activeCorner == null && this.activeWall == null && this.activeRoom != null) {
						this.floorplan.dispatchEvent({ type: EVENT_ROOM_2D_HOVER, item: hoverRoom });
					}
					if (this.activeRoom == null) {
						draw = true;
					}
					if (draw) {
						this.view.draw();
					}
				}
				var mx, my;
				if (this.mouseDown && !this.activeCorner && !this.activeWall && !this._clickedWallControl)
					{
						this.originX += this.lastX - this.rawMouseX;
						this.originY += this.lastY - this.rawMouseY;
						this.unScaledOriginX += (this.lastX - this.rawMouseX) * (1 / Configuration.getNumericValue('scale'));
						this.unScaledOriginY += (this.lastY - this.rawMouseY) * (1 / Configuration.getNumericValue('scale'));
						this.lastX = this.rawMouseX;
						this.lastY = this.rawMouseY;
						this.view.draw();
					}
				if (this.mode == floorplannerModes.MOVE && this.mouseDown)
					{
						if (this._clickedWallControl != null) {
							mx = this.mouseX;
							my = this.mouseY;
							if (this.gridsnapmode || Configuration.getNumericValue('snapToGrid')) {
								mx = Math.floor(this.mouseX / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
								my = Math.floor(this.mouseY / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
							}
							this._clickedWallControl.x = mx;
							this._clickedWallControl.y = my;
							this._clickedWall.updateControlVectors();
							this.view.draw();
							return;
						}
						if (this.activeCorner) {
							if (this.gridsnapmode || Configuration.getNumericValue('snapToGrid')) {
								mx = Math.floor(this.mouseX / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
								my = Math.floor(this.mouseY / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
								this.activeCorner.move(Math.round(mx), Math.round(my));
							} else {
								this.activeCorner.move(this.mouseX, this.mouseY);
							}
						} else if (this.activeWall) {
							if (this.gridsnapmode || Configuration.getNumericValue('snapToGrid')) {
								var dx = Dimensioning.pixelToCm(this.rawMouseX - this.lastX);
								var dy = Dimensioning.pixelToCm(this.rawMouseY - this.lastY);
								mx = Math.floor(dx / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
								my = Math.floor(dy / Configuration.getNumericValue(snapTolerance)) * Configuration.getNumericValue(snapTolerance);
								this.activeWall.relativeMove(mx, my);
							} else {
								this.activeWall.relativeMove(Dimensioning.pixelToCm(this.rawMouseX - this.lastX), Dimensioning.pixelToCm(this.rawMouseY - this.lastY));
							}
							if (this.gridsnapmode || Configuration.getNumericValue('snapToGrid')) {
								this.activeWall.snapToAxis(Configuration.getNumericValue(snapTolerance));
							}
							this.lastX = this.rawMouseX;
							this.lastY = this.rawMouseY;
						}
						this.view.draw();
					}
			}
		}, {
			key: 'mouseup',
			value: function mouseup() {
				this.mouseDown = false;
				if (this.mode == floorplannerModes.DRAW && !this.mouseMoved) {
					var corner = this.floorplan.newCorner(this.targetX, this.targetY);
					if (this.lastNode != null) {
						this.floorplan.newWall(this.lastNode, corner);
						this.floorplan.newWallsForIntersections(this.lastNode, corner);
						this.view.draw();
					}
					if (corner.mergeWithIntersected() && this.lastNode != null) {
						this.setMode(floorplannerModes.MOVE);
					}
					this.lastNode = corner;
				} else {
					if (this.activeCorner != null) {
						this.activeCorner.updateAttachedRooms(true);
					}
					if (this.activeWall != null) {
						this.activeWall.updateAttachedRooms(true);
					}
					if (this._clickedCorner) {
						this._clickedCorner.updateAttachedRooms(true);
					}
					if (this._clickedWall) {
						this._clickedWall.updateAttachedRooms(true);
					}
				}
				this.view.draw();
			}
		}, {
			key: 'mouseleave',
			value: function mouseleave() {
				this.mouseDown = false;
			}
		}, {
			key: '__updateInteractiveElements',
			value: function __updateInteractiveElements() {}
		}, {
			key: 'reset',
			value: function reset() {
				this.view.carbonSheet.clear();
				this.resizeView();
				this.setMode(floorplannerModes.MOVE);
				this.resetOrigin();
				this.view.draw();
			}
		}, {
			key: 'resizeView',
			value: function resizeView() {
				this.view.handleWindowResize();
			}
		}, {
			key: 'setMode',
			value: function setMode(mode) {
				this.lastNode = null;
				this.mode = mode;
				this.dispatchEvent({ type: EVENT_MODE_RESET, mode: mode });
				this.updateTarget();
			}
		}, {
			key: 'resetOrigin',
			value: function resetOrigin() {
				var centerX = this.canvasElement.innerWidth() / 2.0;
				var centerY = this.canvasElement.innerHeight() / 2.0;
				var centerFloorplan = this.floorplan.getCenter();
				this.originX = Dimensioning.cmToPixel(centerFloorplan.x) - centerX;
				this.originY = Dimensioning.cmToPixel(centerFloorplan.z) - centerY;
				this.unScaledOriginX = Dimensioning.cmToPixel(centerFloorplan.x, false) - centerX;
				this.unScaledOriginY = Dimensioning.cmToPixel(centerFloorplan.z, false) - centerY;
			}
		}, {
			key: 'zoom',
			value: function zoom() {
				var centerX = this.canvasElement.innerWidth() / 2.0;
				var centerY = this.canvasElement.innerHeight() / 2.0;
				var originScreen = new THREE.Vector2(centerX, centerY);
				var currentPan = new THREE.Vector2(this.unScaledOriginX + centerX, this.unScaledOriginY + centerY);
				currentPan = currentPan.multiplyScalar(Configuration.getNumericValue('scale')).sub(originScreen);
				this.originX = currentPan.x;
				this.originY = currentPan.y;
			}
		}, {
			key: 'convertX',
			value: function convertX(x) {
				return Dimensioning.cmToPixel(x - Dimensioning.pixelToCm(this.originX));
			}
		}, {
			key: 'convertY',
			value: function convertY(y) {
				return Dimensioning.cmToPixel(y - Dimensioning.pixelToCm(this.originY));
			}
		}, {
			key: 'selectedCorner',
			get: function get() {
				return this._clickedCorner;
			}
		}, {
			key: 'selectedWall',
			get: function get() {
				return this._clickedWall;
			}
		}, {
			key: 'selectedRoom',
			get: function get() {
				return this._clickedRoom;
			}
		}, {
			key: 'carbonSheet',
			get: function get() {
				return this.view.carbonSheet;
			}
		}]);
		return Floorplanner2D;
	}(THREE.EventDispatcher);
  
	var Metadata = function Metadata() {
		classCallCheck(this, Metadata);
		this.itemName = '';
		this.itemType = -1;
		this.modelUrl = '';
		this.resizable = false;
	};
  
	var states = { UNSELECTED: 0, SELECTED: 1, DRAGGING: 2, ROTATING: 3, ROTATING_FREE: 4, PANNING: 5 };
	var Controller = function (_EventDispatcher) {
		inherits(Controller, _EventDispatcher);
		function Controller(three, model, camera, element, controls, hud) {
			classCallCheck(this, Controller);
			var _this = possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
			_this.three = three;
			_this.model = model;
			_this.camera = camera;
			_this.element = element;
			_this.controls = controls;
			_this.hud = hud;
			_this.enabled = true;
			_this.scene = model.scene;
			_this.plane = null;
			_this.mouse = new THREE.Vector2(0, 0);
			_this.alternateMouse = new THREE.Vector2(0, 0);
			_this.intersectedObject = null;
			_this.mouseoverObject = null;
			_this.selectedObject = null;
			_this.mouseDown = false;
			_this.mouseMoved = false;
			_this.rotateMouseOver = false;
			_this.state = states.UNSELECTED;
			_this.needsUpdate = true;
			var scope = _this;
			_this.itemremovedevent = function (o) {
				scope.itemRemoved(o.item);
			};
			_this.itemloadedevent = function (o) {
				scope.itemLoaded(o.item);
			};
			_this.mousedownevent = function (event) {
				scope.mouseDownEvent(event);
			};
			_this.mouseupevent = function (event) {
				scope.mouseUpEvent(event);
			};
			_this.mousemoveevent = function (event) {
				scope.mouseMoveEvent(event);
			};
			_this.init();
			return _this;
		}
		createClass(Controller, [{
			key: 'init',
			value: function init() {
				this.element.bind('touchstart mousedown', this.mousedownevent);
				this.element.bind('touchmove mousemove', this.mousemoveevent);
				this.element.bind('touchend mouseup', this.mouseupevent);
				this.scene.addEventListener(EVENT_ITEM_REMOVED, this.itemremovedevent);
				this.scene.addEventListener(EVENT_ITEM_LOADED, this.itemloadedevent);
				this.setGroundPlane();
			}
		}, {
			key: 'itemRemoved',
			value: function itemRemoved(item) {
				if (item === this.selectedObject) {
					this.selectedObject.setUnselected();
					this.selectedObject.mouseOff();
					this.setSelectedObject(null);
				}
			}
		}, {
			key: 'itemLoaded',
			value: function itemLoaded(item) {
				var scope = this;
				if (!item.position_set) {
					scope.setSelectedObject(item);
					scope.switchState(states.DRAGGING);
					var pos = item.position.clone();
					pos.y = 0;
					var vec = scope.three.projectVector(pos);
					scope.clickPressed(vec);
				}
				item.position_set = true;
			}
		}, {
			key: 'clickPressed',
			value: function clickPressed(vec2) {
				this.mouse = vec2 || this.mouse;
				var intersection = this.itemIntersection(this.mouse, this.selectedObject);
				if (intersection) {
					this.selectedObject.clickPressed(intersection);
				}
			}
		}, {
			key: 'clickDragged',
			value: function clickDragged(vec2) {
				var scope = this;
				this.mouse = vec2 || this.mouse;
				var intersection = scope.itemIntersection(this.mouse, this.selectedObject);
				if (intersection) {
					if (scope.isRotating()) {
						this.selectedObject.rotate(intersection);
					} else {
						this.selectedObject.clickDragged(intersection);
					}
				}
			}
		}, {
			key: 'showGroundPlane',
			value: function showGroundPlane(flag) {
				this.plane.visible = flag;
			}
		}, {
			key: 'setGroundPlane',
			value: function setGroundPlane() {
				var size = 10000;
				this.plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ visible: false }));
				this.plane.rotation.x = -Math.PI / 2;
				this.plane.visible = true;
				this.scene.add(this.plane);
			}
		}, {
			key: 'checkWallsAndFloors',
			value: function checkWallsAndFloors() {
				if (this.state == states.UNSELECTED && this.mouseoverObject == null) {
					var wallEdgePlanes = this.model.floorplan.wallEdgePlanes();
					var wallIntersects = this.getIntersections(this.mouse, wallEdgePlanes, true);
					if (wallIntersects.length > 0) {
						var wall = wallIntersects[0].object.edge;
						this.three.wallIsClicked(wall);
						return;
					}
					var floorPlanes = this.model.floorplan.floorPlanes();
					var floorIntersects = this.getIntersections(this.mouse, floorPlanes, false);
					if (floorIntersects.length > 0) {
						var room = floorIntersects[0].object.room;
						this.three.floorIsClicked(room);
						return;
					}
					this.three.nothingIsClicked();
				}
			}
		}, {
			key: 'isRotating',
			value: function isRotating() {
				return this.state == states.ROTATING || this.state == states.ROTATING_FREE;
			}
		}, {
			key: 'mouseDownEvent',
			value: function mouseDownEvent(event) {
				if (this.enabled) {
					event.preventDefault();
					this.mouseMoved = false;
					this.mouseDown = true;
					if (event.touches) {
						this.mouse.x = event.touches[0].clientX;
						this.mouse.y = event.touches[0].clientY;
						this.alternateMouse.x = event.touches[0].clientX;
						this.alternateMouse.y = event.touches[0].clientY;
						this.updateIntersections();
						this.checkWallsAndFloors();
					}
					switch (this.state) {
						case states.SELECTED:
							if (this.rotateMouseOver) {
								this.switchState(states.ROTATING);
							} else if (this.intersectedObject != null) {
								this.setSelectedObject(this.intersectedObject);
								if (!this.intersectedObject.fixed) {
									this.switchState(states.DRAGGING);
								}
							}
							break;
						case states.UNSELECTED:
							if (this.intersectedObject != null) {
								this.setSelectedObject(this.intersectedObject);
								if (!this.intersectedObject.fixed) {
									this.switchState(states.DRAGGING);
								}
							}
							break;
						case states.DRAGGING:
						case states.ROTATING:
							break;
						case states.ROTATING_FREE:
							this.switchState(states.SELECTED);
							break;
					}
				}
			}
		}, {
			key: 'mouseMoveEvent',
			value: function mouseMoveEvent(event) {
				if (this.enabled) {
					event.preventDefault();
					this.mouseMoved = true;
					this.mouse.x = event.clientX;
					this.mouse.y = event.clientY;
					this.alternateMouse.x = event.clientX;
					this.alternateMouse.y = event.clientY;
					if (event.touches) {
						this.mouse.x = event.touches[0].clientX;
						this.mouse.y = event.touches[0].clientY;
						this.alternateMouse.x = event.touches[0].clientX;
						this.alternateMouse.y = event.touches[0].clientY;
					}
					if (!this.mouseDown) {
						this.updateIntersections();
					}
					switch (this.state) {
						case states.UNSELECTED:
							this.updateMouseover();
							break;
						case states.SELECTED:
							this.updateMouseover();
							break;
						case states.DRAGGING:
						case states.ROTATING:
						case states.ROTATING_FREE:
							this.clickDragged();
							this.hud.update();
							this.needsUpdate = true;
							break;
					}
				}
			}
		}, {
			key: 'mouseUpEvent',
			value: function mouseUpEvent() {
				if (this.enabled) {
					this.mouseDown = false;
					switch (this.state) {
						case states.DRAGGING:
							this.selectedObject.clickReleased();
							this.switchState(states.SELECTED);
							break;
						case states.ROTATING:
							if (!this.mouseMoved) {
								this.switchState(states.ROTATING_FREE);
							} else {
								this.switchState(states.SELECTED);
							}
							break;
						case states.UNSELECTED:
							if (!this.mouseMoved) {
								this.checkWallsAndFloors();
							}
							break;
						case states.SELECTED:
							if (this.intersectedObject == null && !this.mouseMoved) {
								this.switchState(states.UNSELECTED);
								this.checkWallsAndFloors();
							}
							break;
					}
				}
			}
		}, {
			key: 'switchState',
			value: function switchState(newState) {
				if (newState != this.state) {
					this.onExit(this.state);
					this.onEntry(newState);
				}
				this.state = newState;
				this.hud.setRotating(this.isRotating());
			}
		}, {
			key: 'onEntry',
			value: function onEntry(state) {
				switch (state) {
					case states.UNSELECTED:
						this.setSelectedObject(null);
						break;
					case states.SELECTED:
						this.controls.enabled = true;
						break;
					case states.ROTATING:
					case states.ROTATING_FREE:
						this.controls.enabled = false;
						break;
					case states.DRAGGING:
						this.three.setCursorStyle('move');
						this.clickPressed();
						this.controls.enabled = false;
						break;
				}
			}
		}, {
			key: 'onExit',
			value: function onExit(state) {
				switch (state) {
					case states.UNSELECTED:
					case states.SELECTED:
						break;
					case states.DRAGGING:
						if (this.mouseoverObject) {
							this.three.setCursorStyle('pointer');
						} else {
							this.three.setCursorStyle('auto');
						}
						break;
				}
			}
		}, {
			key: 'selectedObject',
			value: function selectedObject() {
				return this.selectedObject;
			}
		}, {
			key: 'updateIntersections',
			value: function updateIntersections() {
				var hudObject = this.hud.getObject();
				if (hudObject != null) {
					var hudIntersects = this.getIntersections(this.mouse, hudObject, false, false, true);
					if (hudIntersects.length > 0) {
						this.rotateMouseOver = true;
						this.hud.setMouseover(true);
						this.intersectedObject = null;
						return;
					}
				}
				this.rotateMouseOver = false;
				this.hud.setMouseover(false);
				var items = this.model.scene.getItems();
				var intersects = this.getIntersections(this.mouse, items, false, true);
				if (intersects.length > 0) {
					this.intersectedObject = intersects[0].object;
				} else {
					this.intersectedObject = null;
				}
			}
		}, {
			key: 'itemIntersection',
			value: function itemIntersection(vec2, item) {
				var customIntersections = item.customIntersectionPlanes();
				if (item.freePosition) {
					return this.freeMouse3D(vec2);
				}
				var intersections = null;
				if (customIntersections && customIntersections.length > 0) {
					intersections = this.getIntersections(vec2, customIntersections, true);
				} else {
					intersections = this.getIntersections(vec2, this.plane);
				}
				if (intersections.length > 0) {
					return intersections[0];
				} else {
					return null;
				}
			}
		}, {
			key: 'normalizeVector2',
			value: function normalizeVector2(vec2) {
				var retVec = new THREE.Vector2();
				retVec.x = (vec2.x - this.three.widthMargin) / (window.innerWidth - this.three.widthMargin) * 2 - 1;
				retVec.y = -((vec2.y - this.three.heightMargin) / (window.innerHeight - this.three.heightMargin)) * 2 + 1;
				return retVec;
			}
		}, {
			key: 'mouseToVec3',
			value: function mouseToVec3(vec2) {
				var normVec2 = this.normalizeVector2(vec2);
				var vector = new THREE.Vector3(normVec2.x, normVec2.y, 0.5);
				vector.unproject(this.camera);
				return vector;
			}
		}, {
			key: 'freeMouse3D',
			value: function freeMouse3D(vec2) {
				var distance;
				var pos = new THREE.Vector3();
				var vector = this.mouseToVec3(vec2);
				vector.sub(this.camera.position).normalize();
				distance = -this.camera.position.z / vector.z;
				pos.copy(this.camera.position).add(vector.multiplyScalar(distance));
				return { point: pos, distance: distance };
			}
		}, {
			key: 'getIntersections',
			value: function getIntersections(vec2, objects, filterByNormals, onlyVisible, recursive, linePrecision) {
				var vector = this.mouseToVec3(vec2);
				onlyVisible = onlyVisible || false;
				filterByNormals = filterByNormals || false;
				recursive = recursive || false;
				linePrecision = linePrecision || 20;
				var direction = vector.sub(this.camera.position).normalize();
				var raycaster = new THREE.Raycaster(this.camera.position, direction);
				raycaster.linePrecision = linePrecision;
				raycaster = new THREE.Raycaster();
				raycaster.setFromCamera(this.normalizeVector2(this.alternateMouse), this.camera);
				var intersections;
				if (objects instanceof Array) {
					intersections = raycaster.intersectObjects(objects, recursive);
				} else {
					intersections = raycaster.intersectObject(objects, recursive);
				}
				if (onlyVisible) {
					intersections = Utils.removeIf(intersections, function (intersection) {
						return !intersection.object.visible;
					});
				}
				if (filterByNormals) {
					intersections = Utils.removeIf(intersections, function (intersection) {
						var dot = intersection.face.normal.dot(direction);return dot > 0;
					});
				}
				return intersections;
			}
		}, {
			key: 'setSelectedObject',
			value: function setSelectedObject(object) {
				if (this.state === states.UNSELECTED) {
					this.switchState(states.SELECTED);
				}
				if (this.selectedObject != null) {
					this.selectedObject.setUnselected();
				}
				if (object != null) {
					this.selectedObject = object;
					this.selectedObject.setSelected();
					this.three.itemIsSelected(object);
				} else {
					this.selectedObject = null;
					this.three.itemIsUnselected();
				}
				this.needsUpdate = true;
			}
		}, {
			key: 'updateMouseover',
			value: function updateMouseover() {
				if (this.intersectedObject != null) {
					if (this.mouseoverObject != null) {
						if (this.mouseoverObject !== this.intersectedObject) {
							this.mouseoverObject.mouseOff();
							this.mouseoverObject = this.intersectedObject;
							this.mouseoverObject.mouseOver();
							this.needsUpdate = true;
						}
					} else {
						this.mouseoverObject = this.intersectedObject;
						this.mouseoverObject.mouseOver();
						this.three.setCursorStyle('pointer');
						this.needsUpdate = true;
					}
				} else if (this.mouseoverObject != null) {
					this.mouseoverObject.mouseOff();
					this.three.setCursorStyle('auto');
					this.mouseoverObject = null;
					this.needsUpdate = true;
				}
			}
		}, {
			key: 'changeCamera',
			value: function changeCamera(newCamera) {
				this.camera = newCamera;
			}
		}]);
		return Controller;
	}(THREE.EventDispatcher);
  
	function OrbitControls(object, domElement) {
			this.object = object;
			this.domElement = domElement !== undefined ? domElement : document;
			this.enabled = true;
			this.needsUpdate = true;
			this.target = new THREE.Vector3();
			this.minDistance = 0;
			this.maxDistance = Infinity;
			this.minZoom = 0;
			this.maxZoom = Infinity;
			this.minPolarAngle = 0;
			this.maxPolarAngle = Math.PI;
			this.minAzimuthAngle = -Infinity;
			this.maxAzimuthAngle = Infinity;
			this.enableDamping = false;
			this.dampingFactor = 0.25;
			this.enableZoom = true;
			this.zoomSpeed = 1.0;
			this.enableRotate = true;
			this.rotateSpeed = 1.0;
			this.enablePan = true;
			this.panSpeed = 1.0;
			this.screenSpacePanning = false;
			this.keyPanSpeed = 7.0;
			this.autoRotate = false;
			this.autoRotateSpeed = 2.0;
			this.enableKeys = true;
			this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
			this.mouseButtons = { LEFT: THREE.MOUSE.LEFT, MIDDLE: THREE.MOUSE.MIDDLE, RIGHT: THREE.MOUSE.RIGHT };
			this.target0 = this.target.clone();
			this.position0 = this.object.position.clone();
			this.zoom0 = this.object.zoom;
			this.getPolarAngle = function () {
					return spherical.phi;
			};
			this.getAzimuthalAngle = function () {
					return spherical.theta;
			};
			this.saveState = function () {
					scope.target0.copy(scope.target);
					scope.position0.copy(scope.object.position);
					scope.zoom0 = scope.object.zoom;
			};
			this.reset = function () {
					scope.target.copy(scope.target0);
					scope.object.position.copy(scope.position0);
					scope.object.zoom = scope.zoom0;
					scope.object.updateProjectionMatrix();
					scope.dispatchEvent(changeEvent);
					scope.dispatchEvent({ type: EVENT_CAMERA_MOVED });
					scope.update();
					state = STATE.NONE;
			};
			this.update = function () {
					var offset = new THREE.Vector3();
					var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
					var quatInverse = quat.clone().inverse();
					var lastPosition = new THREE.Vector3();
					var lastQuaternion = new THREE.Quaternion();
					return function update() {
							var position = scope.object.position;
							offset.copy(position).sub(scope.target);
							offset.applyQuaternion(quat);
							spherical.setFromVector3(offset);
							if (scope.autoRotate && state === STATE.NONE) {
									rotateLeft(getAutoRotationAngle());
							}
							spherical.theta += sphericalDelta.theta;
							spherical.phi += sphericalDelta.phi;
							spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));
							spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
							spherical.makeSafe();
							spherical.radius *= scale;
							spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
							scope.target.add(panOffset);
							offset.setFromSpherical(spherical);
							offset.applyQuaternion(quatInverse);
							position.copy(scope.target).add(offset);
							scope.object.lookAt(scope.target);
							if (scope.enableDamping === true) {
									sphericalDelta.theta *= 1 - scope.dampingFactor;
									sphericalDelta.phi *= 1 - scope.dampingFactor;
									panOffset.multiplyScalar(1 - scope.dampingFactor);
							} else {
									sphericalDelta.set(0, 0, 0);
									panOffset.set(0, 0, 0);
							}
							scale = 1;
							if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
									scope.dispatchEvent(changeEvent);
									scope.dispatchEvent({ type: EVENT_CAMERA_MOVED });
									lastPosition.copy(scope.object.position);
									lastQuaternion.copy(scope.object.quaternion);
									zoomChanged = false;
									this.needsUpdate = true;
									return true;
							} else {
									this.needsUpdate = false;
							}
							return false;
					};
			}();
			this.dispose = function () {
					scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
					scope.domElement.removeEventListener('mousedown', onMouseDown, false);
					scope.domElement.removeEventListener('wheel', onMouseWheel, false);
					scope.domElement.removeEventListener('touchstart', onTouchStart, false);
					scope.domElement.removeEventListener('touchend', onTouchEnd, false);
					scope.domElement.removeEventListener('touchmove', onTouchMove, false);
					document.removeEventListener('mousemove', onMouseMove, false);
					document.removeEventListener('mouseup', onMouseUp, false);
					window.removeEventListener('keydown', onKeyDown, false);
			};
			var scope = this;
			var changeEvent = { type: 'change' };
			var startEvent = { type: 'start' };
			var endEvent = { type: 'end' };
			var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 };
			var state = STATE.NONE;
			var EPS = 0.000001;
			var spherical = new THREE.Spherical();
			var sphericalDelta = new THREE.Spherical();
			var scale = 1;
			var panOffset = new THREE.Vector3();
			var zoomChanged = false;
			var rotateStart = new THREE.Vector2();
			var rotateEnd = new THREE.Vector2();
			var rotateDelta = new THREE.Vector2();
			var panStart = new THREE.Vector2();
			var panEnd = new THREE.Vector2();
			var panDelta = new THREE.Vector2();
			var dollyStart = new THREE.Vector2();
			var dollyEnd = new THREE.Vector2();
			var dollyDelta = new THREE.Vector2();
			function getAutoRotationAngle() {
					return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
			}
			function getZoomScale() {
					return Math.pow(0.95, scope.zoomSpeed);
			}
			function rotateLeft(angle) {
					sphericalDelta.theta -= angle;
			}
			function rotateUp(angle) {
					sphericalDelta.phi -= angle;
			}
			var panLeft = function () {
					var v = new THREE.Vector3();
					return function panLeft(distance, objectMatrix) {
							v.setFromMatrixColumn(objectMatrix, 0);
							v.multiplyScalar(-distance);
							panOffset.add(v);
					};
			}();
			var panUp = function () {
					var v = new THREE.Vector3();
					return function panUp(distance, objectMatrix) {
							if (scope.screenSpacePanning === true) {
									v.setFromMatrixColumn(objectMatrix, 1);
							} else {
									v.setFromMatrixColumn(objectMatrix, 0);
									v.crossVectors(scope.object.up, v);
							}
							v.multiplyScalar(distance);
							panOffset.add(v);
					};
			}();
			var pan = function () {
					var offset = new THREE.Vector3();
					return function pan(deltaX, deltaY) {
							var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
							if (scope.object.isPerspectiveCamera) {
									var position = scope.object.position;
									offset.copy(position).sub(scope.target);
									var targetDistance = offset.length();
									targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
									panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
									panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
							} else if (scope.object.isOrthographicCamera) {
									panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
									panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
							} else {
									console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
									scope.enablePan = false;
							}
					};
			}();
			function dollyIn(dollyScale) {
					if (scope.object.isPerspectiveCamera) {
							scale /= dollyScale;
					} else if (scope.object.isOrthographicCamera) {
							scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
							scope.object.updateProjectionMatrix();
							zoomChanged = true;
					} else {
							console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
							scope.enableZoom = false;
					}
			}
			function dollyOut(dollyScale) {
					if (scope.object.isPerspectiveCamera) {
							scale *= dollyScale;
					} else if (scope.object.isOrthographicCamera) {
							scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
							scope.object.updateProjectionMatrix();
							zoomChanged = true;
					} else {
							console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
							scope.enableZoom = false;
					}
			}
			function handleMouseDownRotate(event) {
					rotateStart.set(event.clientX, event.clientY);
			}
			function handleMouseDownDolly(event) {
					dollyStart.set(event.clientX, event.clientY);
			}
			function handleMouseDownPan(event) {
					panStart.set(event.clientX, event.clientY);
			}
			function handleMouseMoveRotate(event) {
					rotateEnd.set(event.clientX, event.clientY);
					rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
					var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
					rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
					rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
					rotateStart.copy(rotateEnd);
					scope.update();
			}
			function handleMouseMoveDolly(event) {
					dollyEnd.set(event.clientX, event.clientY);
					dollyDelta.subVectors(dollyEnd, dollyStart);
					if (dollyDelta.y > 0) {
							dollyIn(getZoomScale());
					} else if (dollyDelta.y < 0) {
							dollyOut(getZoomScale());
					}
					dollyStart.copy(dollyEnd);
					scope.update();
			}
			function handleMouseMovePan(event) {
					panEnd.set(event.clientX, event.clientY);
					panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
					pan(panDelta.x, panDelta.y);
					panStart.copy(panEnd);
					scope.update();
			}
			function handleMouseWheel(event) {
					if (event.deltaY < 0) {
							dollyOut(getZoomScale());
					} else if (event.deltaY > 0) {
							dollyIn(getZoomScale());
					}
					scope.update();
			}
			function handleKeyDown(event) {
					switch (event.keyCode) {
							case scope.keys.UP:
									pan(0, scope.keyPanSpeed);
									scope.update();
									break;
							case scope.keys.BOTTOM:
									pan(0, -scope.keyPanSpeed);
									scope.update();
									break;
							case scope.keys.LEFT:
									pan(scope.keyPanSpeed, 0);
									scope.update();
									break;
							case scope.keys.RIGHT:
									pan(-scope.keyPanSpeed, 0);
									scope.update();
									break;
					}
			}
			function handleTouchStartRotate(event) {
					rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
			}
			function handleTouchStartDollyPan(event) {
					if (scope.enableZoom) {
							var dx = event.touches[0].pageX - event.touches[1].pageX;
							var dy = event.touches[0].pageY - event.touches[1].pageY;
							var distance = Math.sqrt(dx * dx + dy * dy);
							dollyStart.set(0, distance);
					}
					if (scope.enablePan) {
							var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
							var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
							panStart.set(x, y);
					}
			}
			function handleTouchMoveRotate(event) {
					rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
					rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
					var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
					rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
					rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
					rotateStart.copy(rotateEnd);
					scope.update();
			}
			function handleTouchMoveDollyPan(event) {
					if (scope.enableZoom) {
							var dx = event.touches[0].pageX - event.touches[1].pageX;
							var dy = event.touches[0].pageY - event.touches[1].pageY;
							var distance = Math.sqrt(dx * dx + dy * dy);
							dollyEnd.set(0, distance);
							dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
							dollyIn(dollyDelta.y);
							dollyStart.copy(dollyEnd);
					}
					if (scope.enablePan) {
							var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
							var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
							panEnd.set(x, y);
							panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
							pan(panDelta.x, panDelta.y);
							panStart.copy(panEnd);
					}
					scope.update();
			}
			function onMouseDown(event) {
					if (scope.enabled === false) return;
					event.preventDefault();
					switch (event.button) {
							case scope.mouseButtons.LEFT:
									if (event.ctrlKey || event.metaKey) {
											if (scope.enablePan === false) return;
											handleMouseDownPan(event);
											state = STATE.PAN;
									} else {
											if (scope.enableRotate === false) return;
											handleMouseDownRotate(event);
											state = STATE.ROTATE;
									}
									break;
							case scope.mouseButtons.MIDDLE:
									if (scope.enableZoom === false) return;
									handleMouseDownDolly(event);
									state = STATE.DOLLY;
									break;
							case scope.mouseButtons.RIGHT:
									if (scope.enablePan === false) return;
									handleMouseDownPan(event);
									state = STATE.PAN;
									break;
					}
					if (state !== STATE.NONE) {
							document.addEventListener('mousemove', onMouseMove, false);
							document.addEventListener('mouseup', onMouseUp, false);
							scope.dispatchEvent(startEvent);
					}
			}
			function onMouseMove(event) {
					if (scope.enabled === false) return;
					event.preventDefault();
					switch (state) {
							case STATE.ROTATE:
									if (scope.enableRotate === false) return;
									handleMouseMoveRotate(event);
									break;
							case STATE.DOLLY:
									if (scope.enableZoom === false) return;
									handleMouseMoveDolly(event);
									break;
							case STATE.PAN:
									if (scope.enablePan === false) return;
									handleMouseMovePan(event);
									break;
					}
			}
			function onMouseUp(event) {
					if (scope.enabled === false) return;
					document.removeEventListener('mousemove', onMouseMove, false);
					document.removeEventListener('mouseup', onMouseUp, false);
					scope.dispatchEvent(endEvent);
					state = STATE.NONE;
			}
			function onMouseWheel(event) {
					if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
					event.preventDefault();
					event.stopPropagation();
					scope.dispatchEvent(startEvent);
					handleMouseWheel(event);
					scope.dispatchEvent(endEvent);
			}
			function onKeyDown(event) {
					if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
					handleKeyDown(event);
			}
			function onTouchStart(event) {
					if (scope.enabled === false) return;
					event.preventDefault();
					switch (event.touches.length) {
							case 1:
									if (scope.enableRotate === false) return;
									handleTouchStartRotate(event);
									state = STATE.TOUCH_ROTATE;
									break;
							case 2:
									if (scope.enableZoom === false && scope.enablePan === false) return;
									handleTouchStartDollyPan(event);
									state = STATE.TOUCH_DOLLY_PAN;
									break;
							default:
									state = STATE.NONE;
					}
					if (state !== STATE.NONE) {
							scope.dispatchEvent(startEvent);
					}
			}
			function onTouchMove(event) {
					if (scope.enabled === false) return;
					event.preventDefault();
					event.stopPropagation();
					switch (event.touches.length) {
							case 1:
									if (scope.enableRotate === false) return;
									if (state !== STATE.TOUCH_ROTATE) return;
									handleTouchMoveRotate(event);
									break;
							case 2:
									if (scope.enableZoom === false && scope.enablePan === false) return;
									if (state !== STATE.TOUCH_DOLLY_PAN) return;
									handleTouchMoveDollyPan(event);
									break;
							default:
									state = STATE.NONE;
					}
			}
			function onTouchEnd(event) {
					if (scope.enabled === false) return;
					scope.dispatchEvent(endEvent);
					state = STATE.NONE;
			}
			function onContextMenu(event) {
					if (scope.enabled === false) return;
					event.preventDefault();
			}
			scope.domElement.addEventListener('contextmenu', onContextMenu, false);
			scope.domElement.addEventListener('mousedown', onMouseDown, false);
			scope.domElement.addEventListener('wheel', onMouseWheel, false);
			scope.domElement.addEventListener('touchstart', onTouchStart, false);
			scope.domElement.addEventListener('touchend', onTouchEnd, false);
			scope.domElement.addEventListener('touchmove', onTouchMove, false);
			window.addEventListener('keydown', onKeyDown, false);
			this.update();
	}
	OrbitControls.prototype = Object.assign(Object.create(THREE.EventDispatcher.prototype), {
			constructor: OrbitControls,
			center: {
					get: function get() {
							console.warn('OrbitControls: .center has been renamed to .target');
							return this.target;
					}
			},
			noZoom: {
					get: function get() {
							console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
							return !this.enableZoom;
					},
					set: function set(value) {
							console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
							this.enableZoom = !value;
					}
			},
			noRotate: {
					get: function get() {
							console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
							return !this.enableRotate;
					},
					set: function set(value) {
							console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
							this.enableRotate = !value;
					}
			},
			noPan: {
					get: function get() {
							console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
							return !this.enablePan;
					},
					set: function set(value) {
							console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
							this.enablePan = !value;
					}
			},
			noKeys: {
					get: function get() {
							console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
							return !this.enableKeys;
					},
					set: function set(value) {
							console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
							this.enableKeys = !value;
					}
			},
			staticMoving: {
					get: function get() {
							console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
							return !this.enableDamping;
					},
					set: function set(value) {
							console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
							this.enableDamping = !value;
					}
			},
			dynamicDampingFactor: {
					get: function get() {
							console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
							return this.dampingFactor;
					},
					set: function set(value) {
							console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
							this.dampingFactor = value;
					}
			}
	});
  
	var FirstPersonControls = function () {
		function FirstPersonControls(object) {
			var domElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
			classCallCheck(this, FirstPersonControls);
			this.object = object;
			this.target = new THREE.Vector3(0, 0, 0);
			this.domElement = domElement;
			this.enabled = true;
			this.movementSpeed = 1.0;
			this.lookSpeed = 0.005;
			this.lookVertical = true;
			this.autoForward = false;
			this.activeLook = true;
			this.heightSpeed = false;
			this.heightCoef = 1.0;
			this.heightMin = 0.0;
			this.heightMax = 1.0;
			this.constrainVertical = false;
			this.verticalMin = 0;
			this.verticalMax = Math.PI;
			this.autoSpeedFactor = 0.0;
			this.mouseX = 0;
			this.mouseY = 0;
			this.lat = 0;
			this.lon = 0;
			this.phi = 0;
			this.theta = 0;
			this.moveForward = false;
			this.moveBackward = false;
			this.moveLeft = false;
			this.moveRight = false;
			this.mouseDragOn = false;
			this.viewHalfX = 0;
			this.viewHalfY = 0;
			if (this.domElement !== document) {
				this.domElement.setAttribute('tabindex', -1);
			}
			this._contextMenu = this.contextMenu.bind(this);
			this._onMouseMove = this.onMouseMove.bind(this);
			this._onMouseDown = this.onMouseDown.bind(this);
			this._onMouseUp = this.onMouseUp.bind(this);
			this._onKeyDown = this.onKeyDown.bind(this);
			this._onKeyUp = this.onKeyUp.bind(this);
			this.handleResize();
			this.bindEvents();
		}
		createClass(FirstPersonControls, [{
			key: 'handleResize',
			value: function handleResize() {
				if (this.domElement === document) {
					this.viewHalfX = window.innerWidth / 2;
					this.viewHalfY = window.innerHeight / 2;
				} else {
					this.viewHalfX = this.domElement.offsetWidth / 2;
					this.viewHalfY = this.domElement.offsetHeight / 2;
				}
			}
		}, {
			key: 'bindEvents',
			value: function bindEvents() {
				this.domElement.addEventListener('contextmenu', this._contextmenu, false);
				this.domElement.addEventListener('mousemove', this._onMouseMove, false);
				this.domElement.addEventListener('mousedown', this._onMouseDown, false);
				this.domElement.addEventListener('mouseup', this._onMouseUp, false);
				window.addEventListener('keydown', this._onKeyDown, false);
				window.addEventListener('keyup', this._onKeyUp, false);
			}
		}, {
			key: 'onMouseDown',
			value: function onMouseDown(event) {
				if (!this.enabled) {
					return;
				}
				if (this.domElement !== document) {
					this.domElement.focus();
				}
				event.preventDefault();
				event.stopPropagation();
				if (this.activeLook) {
					switch (event.button) {
						case 0:
							this.moveForward = true;
							break;
						case 2:
							this.moveBackward = true;
							break;
					}
				}
				this.mouseDragOn = true;
			}
		}, {
			key: 'onMouseUp',
			value: function onMouseUp(event) {
				if (!this.enabled) {
					return;
				}
				event.preventDefault();
				event.stopPropagation();
				if (this.activeLook) {
					switch (event.button) {
						case 0:
							this.moveForward = false;
							break;
						case 2:
							this.moveBackward = false;
							break;
					}
				}
				this.mouseDragOn = false;
			}
		}, {
			key: 'onMouseMove',
			value: function onMouseMove(event) {
				if (!this.enabled) {
					return;
				}
				if (this.domElement === document) {
					this.mouseX = event.pageX - this.viewHalfX;
					this.mouseY = event.pageY - this.viewHalfY;
				} else {
					this.mouseX = event.pageX - this.domElement.offsetLeft - this.viewHalfX;
					this.mouseY = event.pageY - this.domElement.offsetTop - this.viewHalfY;
				}
			}
		}, {
			key: 'onKeyDown',
			value: function onKeyDown(event) {
				if (!this.enabled) {
					return;
				}
				switch (event.keyCode) {
					case 38:
					case 87:
						this.moveForward = true;
						break;
					case 37:
					case 65:
						this.moveLeft = true;
						break;
					case 40:
					case 83:
						this.moveBackward = true;
						break;
					case 39:
					case 68:
						this.moveRight = true;
						break;
					case 82:
						this.moveUp = true;
						break;
					case 70:
						this.moveDown = true;
						break;
				}
			}
		}, {
			key: 'onKeyUp',
			value: function onKeyUp(event) {
				if (!this.enabled) {
					return;
				}
				switch (event.keyCode) {
					case 38:
					case 87:
						this.moveForward = false;
						break;
					case 37:
					case 65:
						this.moveLeft = false;
						break;
					case 40:
					case 83:
						this.moveBackward = false;
						break;
					case 39:
					case 68:
						this.moveRight = false;
						break;
					case 82:
						this.moveUp = false;
						break;
					case 70:
						this.moveDown = false;
						break;
				}
			}
		}, {
			key: 'update',
			value: function update(delta) {
				if (this.enabled === false) {
					return;
				}
				if (this.heightSpeed) {
					var y = THREE.Math.clamp(this.object.position.y, this.heightMin, this.heightMax);
					var heightDelta = y - this.heightMin;
					this.autoSpeedFactor = delta * (heightDelta * this.heightCoef);
				} else {
					this.autoSpeedFactor = 0.0;
				}
				var actualMoveSpeed = delta * this.movementSpeed;
				if (this.moveForward || this.autoForward && !this.moveBackward) {
					this.object.translateZ(-(actualMoveSpeed + this.autoSpeedFactor));
				}
				if (this.moveBackward) {
					this.object.translateZ(actualMoveSpeed);
				}
				if (this.moveLeft) {
					this.object.translateX(-actualMoveSpeed);
				}
				if (this.moveRight) {
					this.object.translateX(actualMoveSpeed);
				}
				if (this.moveUp) {
					this.object.translateY(actualMoveSpeed);
				}
				if (this.moveDown) {
					this.object.translateY(-actualMoveSpeed);
				}
				var actualLookSpeed = delta * this.lookSpeed;
				if (!this.activeLook) {
					actualLookSpeed = 0;
				}
				var verticalLookRatio = 1;
				if (this.constrainVertical) {
					verticalLookRatio = Math.PI / (this.verticalMax - this.verticalMin);
				}
				this.lon += this.mouseX * actualLookSpeed;
				if (this.lookVertical) {
					this.lat -= this.mouseY * actualLookSpeed * verticalLookRatio;
				}
				this.lat = Math.max(-85, Math.min(85, this.lat));
				this.phi = THREE.Math.degToRad(90 - this.lat);
				this.theta = THREE.Math.degToRad(this.lon);
				if (this.constrainVertical) {
					this.phi = THREE.Math.mapLinear(this.phi, 0, Math.PI, this.verticalMin, this.verticalMax);
				}
				var targetPosition = this.target;
				var position = this.object.position;
				targetPosition.x = position.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
				targetPosition.y = position.y + 100 * Math.cos(this.phi);
				targetPosition.z = position.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
				this.object.lookAt(targetPosition);
			}
		}, {
			key: 'contextMenu',
			value: function contextMenu(event) {
				if (!this.enabled) {
					return;
				}
				event.preventDefault();
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.domElement.removeEventListener('contextmenu', this._contextmenu, false);
				this.domElement.removeEventListener('mousedown', this._onMouseDown, false);
				this.domElement.removeEventListener('mousemove', this._onMouseMove, false);
				this.domElement.removeEventListener('mouseup', this._onMouseUp, false);
				window.removeEventListener('keydown', this._onKeyDown, false);
				window.removeEventListener('keyup', this._onKeyUp, false);
			}
		}]);
		return FirstPersonControls;
	}();
  
	function PointerLockControls(camera, domElement) {
		var scope = this;
		this.domElement = domElement || document.body;
		this.enabled = false;
		this.isLocked = true;
		this.walkspeed = 3000;
		this.lookspeed = 0.002;
		this.characterHeight = 125;
		camera.rotation.set(0, 0, 0);
		var pitchObject = new THREE.Object3D();
		pitchObject.add(camera);
		var yawObject = new THREE.Object3D();
		yawObject.position.y = this.characterHeight;
		yawObject.add(pitchObject);
		var PI_2 = Math.PI / 2;
		var moveForward = false;
		var moveBackward = false;
		var moveLeft = false;
		var moveRight = false;
		var canJump = false;
		var velocity = new THREE.Vector3();
		var direction = new THREE.Vector3();
		function onMouseDown() {
			if (scope.enabled && !scope.isLocked) ;
		}
		function onMouseMove(event) {
			if (scope.enabled === false) return;
			var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
			yawObject.rotation.y -= movementX * scope.lookspeed;
			pitchObject.rotation.x -= movementY * scope.lookspeed;
			pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
		}
		function onKeyDown(event) {
			if (scope.enabled === false) return;
			switch (event.keyCode) {
				case 38:
				case 87:
					moveForward = true;
					break;
				case 37:
				case 65:
					moveLeft = true;break;
				case 40:
				case 83:
					moveBackward = true;
					break;
				case 39:
				case 68:
					moveRight = true;
					break;
				case 32:
					if (canJump === true) {
						velocity.y += 350;
					}
					canJump = false;
					break;
			}
		}
		function onKeyUp(event) {
			if (scope.enabled === false) return;
			switch (event.keyCode) {
				case 38:
				case 87:
					moveForward = false;
					break;
				case 37:
				case 65:
					moveLeft = false;
					break;
				case 40:
				case 83:
					moveBackward = false;
					break;
				case 39:
				case 68:
					moveRight = false;
					break;
			}
		}
		this.update = function (delta2) {
			var delta = delta2;
			velocity.x -= velocity.x * 10.0 * delta;
			velocity.z -= velocity.z * 10.0 * delta;
			velocity.y -= 9.8 * 100.0 * delta;
			direction.z = Number(moveForward) - Number(moveBackward);
			direction.x = Number(moveLeft) - Number(moveRight);
			direction.normalize();
			if (moveForward || moveBackward) velocity.z -= direction.z * this.walkspeed * delta;
			if (moveLeft || moveRight) velocity.x -= direction.x * this.walkspeed * delta;
			scope.getObject().translateX(velocity.x * delta);
			scope.getObject().translateY(velocity.y * delta);
			scope.getObject().translateZ(velocity.z * delta);
			if (scope.getObject().position.y < scope.characterHeight) {
				velocity.y = 0;
				scope.getObject().position.y = scope.characterHeight;
				canJump = true;
			}
		};
		function onPointerlockChange() {
			if (document.pointerLockElement === scope.domElement) {
				scope.dispatchEvent({ type: 'lock' });
				scope.isLocked = true;
			} else {
				scope.dispatchEvent({ type: 'unlock' });
				scope.isLocked = false;
			}
		}
		function onPointerlockError() {
			console.error('THREE.PointerLockControls: Unable to use Pointer Lock API');
		}
		this.connect = function () {
			document.addEventListener('keydown', onKeyDown, false);
			document.addEventListener('keyup', onKeyUp, false);
			document.addEventListener('mousedown', onMouseDown, false);
			document.addEventListener('mousemove', onMouseMove, false);
			document.addEventListener('pointerlockchange', onPointerlockChange, false);
			document.addEventListener('pointerlockerror', onPointerlockError, false);
		};
		this.disconnect = function () {
			document.addEventListener('keydown', onKeyDown, false);
			document.addEventListener('keyup', onKeyUp, false);
			document.removeEventListener('mousedown', onMouseDown, false);
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('pointerlockchange', onPointerlockChange, false);
			document.removeEventListener('pointerlockerror', onPointerlockError, false);
		};
		this.dispose = function () {
			this.disconnect();
		};
		this.getObject = function () {
			return yawObject;
		};
		this.getDirection = function () {
			var direction = new THREE.Vector3(0, 0, -1);
			var rotation = new THREE.Euler(0, 0, 0, 'YXZ');
			return function (v) {
				rotation.set(pitchObject.rotation.x, yawObject.rotation.y, 0);
				v.copy(direction).applyEuler(rotation);
				return v;
			};
		}();
		this.lock = function () {
			this.domElement.requestPointerLock();
			var i = this.domElement;
			if (i.requestFullscreen) {
				i.requestFullscreen();
			} else if (i.webkitRequestFullscreen) {
				i.webkitRequestFullscreen();
			} else if (i.mozRequestFullScreen) {
				i.mozRequestFullScreen();
			} else if (i.msRequestFullscreen) {
				i.msRequestFullscreen();
			}
		};
		this.unlock = function () {
			if (document.exitPointerLock) {
				document.exitPointerLock();
			}
		};
		this.connect();
	}
	PointerLockControls.prototype = Object.create(THREE.EventDispatcher.prototype);
	PointerLockControls.prototype.constructor = PointerLockControls;
  
	var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };
	var Controls = function (_EventDispatcher) {
		inherits(Controls, _EventDispatcher);
		function Controls(object, domElement) {
			classCallCheck(this, Controls);
			var _this = possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this));
			_this.object = object;
			_this.domElement = domElement !== undefined ? domElement : jQuery(document);
			_this.enabled = true;
			_this.target = new THREE.Vector3();
			_this.center = _this.target;
			_this.noZoom = false;
			_this.zoomSpeed = 1.0;
			_this.minDistance = 0;
			_this.maxDistance = 2500;
			_this.noRotate = false;
			_this.rotateSpeed = 1.0;
			_this.noPan = false;
			_this.keyPanSpeed = 40.0;
			_this.autoRotate = false;
			_this.autoRotateSpeed = 2.0;
			_this.minPolarAngle = 0;
			_this.maxPolarAngle = Math.PI / 2;
			_this.noKeys = false;
			_this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
			_this.cameraMovedCallbacks = jQuery.Callbacks();
			_this.needsUpdate = true;
			_this.EPS = 0.000001;
			_this.rotateStart = new THREE.Vector2();
			_this.rotateEnd = new THREE.Vector2();
			_this.rotateDelta = new THREE.Vector2();
			_this.panStart = new THREE.Vector2();
			_this.panEnd = new THREE.Vector2();
			_this.panDelta = new THREE.Vector2();
			_this.dollyStart = new THREE.Vector2();
			_this.dollyEnd = new THREE.Vector2();
			_this.dollyDelta = new THREE.Vector2();
			_this.phiDelta = 0;
			_this.thetaDelta = 0;
			_this.scale = 1;
			_this.pan = new THREE.Vector3();
			_this.state = STATE.NONE;
			_this.mouseupevent = function (event) {
				_this.onMouseUp(event);
			};
			_this.mousemoveevent = function (event) {
				_this.onMouseMove(event);
			};
			_this.mousedownevent = function (event) {
				_this.onMouseDown(event);
			};
			_this.mousewheelevent = function (event) {
				_this.onMouseWheel(event);
			};
			_this.touchstartevent = function (event) {
				_this.touchstart(event);
			};
			_this.touchendevent = function (event) {
				_this.touchend(event);
			};
			_this.touchmoveevent = function (event) {
				_this.touchmove(event);
			};
			_this.keydownevent = function (event) {
				_this.onKeyDown(event);
			};
			_this.domElement.addEventListener('contextmenu', function (event) {
				event.preventDefault();
			}, false);
			_this.domElement.addEventListener('mousedown', _this.mousedownevent, false);
			_this.domElement.addEventListener('mousewheel', _this.mousewheelevent, false);
			_this.domElement.addEventListener('DOMMouseScroll', _this.mousewheelevent, false);
			_this.domElement.addEventListener('touchstart', _this.touchstartevent, false);
			_this.domElement.addEventListener('touchend', _this.touchendevent, false);
			_this.domElement.addEventListener('touchmove', _this.touchmoveevent, false);
			window.addEventListener('keydown', _this.keydownevent, false);
			return _this;
		}
		createClass(Controls, [{
			key: 'controlsActive',
			value: function controlsActive() {
				return this.state === STATE.NONE;
			}
		}, {
			key: 'setPan',
			value: function setPan(vec3) {
				this.pan = vec3;
			}
		}, {
			key: 'panTo',
			value: function panTo(vec3) {
				var newTarget = new THREE.Vector3(vec3.x, this.target.y, vec3.z);
				var delta = this.target.clone().sub(newTarget);
				this.pan.sub(delta);
				this.update();
			}
		}, {
			key: 'rotateLeft',
			value: function rotateLeft(angle) {
				if (angle === undefined) {
					angle = this.getAutoRotationAngle();
				}
				this.thetaDelta -= angle;
			}
		}, {
			key: 'rotateUp',
			value: function rotateUp(angle) {
				if (angle === undefined) {
					angle = this.getAutoRotationAngle();
				}
				this.phiDelta -= angle;
			}
		}, {
			key: 'panLeft',
			value: function panLeft(distance) {
				var panOffset = new THREE.Vector3();
				var te = this.object.matrix.elements;
				panOffset.set(te[0], 0, te[2]);
				panOffset.normalize();
				panOffset.multiplyScalar(-distance);
				this.pan.add(panOffset);
			}
		}, {
			key: 'panUp',
			value: function panUp(distance) {
				var panOffset = new THREE.Vector3();
				var te = this.object.matrix.elements;
				panOffset.set(te[4], 0, te[6]);
				panOffset.normalize();
				panOffset.multiplyScalar(distance);
				this.pan.add(panOffset);
			}
		}, {
			key: 'updatePan',
			value: function updatePan(delta) {
				var element = this.domElement === jQuery(document) ? this.domElement.body : this.domElement;
				if (this.object.fov !== undefined) {
					var position = this.object.position;
					var offset = position.clone().sub(this.target);
					var targetDistance = offset.length();
					targetDistance *= Math.tan(this.object.fov / 2 * Math.PI / 180.0);
					this.panLeft(2 * delta.x * targetDistance / element.clientHeight);
					this.panUp(2 * delta.y * targetDistance / element.clientHeight);
				} else if (this.object.top !== undefined) {
					this.panLeft(delta.x * (this.object.right - this.object.left) / element.clientWidth);
					this.panUp(delta.y * (this.object.top - this.object.bottom) / element.clientHeight);
				} else {
					console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
				}
				this.update();
			}
		}, {
			key: 'panXY',
			value: function panXY(x, y) {
				this.updatePan(new THREE.Vector2(x, y));
			}
		}, {
			key: 'dollyIn',
			value: function dollyIn(dollyScale) {
				if (dollyScale === undefined) {
					dollyScale = this.getZoomScale();
				}
				this.scale /= dollyScale;
			}
		}, {
			key: 'dollyOut',
			value: function dollyOut(dollyScale) {
				if (dollyScale === undefined) {
					dollyScale = this.getZoomScale();
				}
				this.scale *= dollyScale;
			}
		}, {
			key: 'update',
			value: function update() {
				var position = this.object.position;
				var offset = position.clone().sub(this.target);
				var theta = Math.atan2(offset.x, offset.z);
				var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);
				if (this.autoRotate) {
					this.rotateLeft(this.getAutoRotationAngle());
				}
				theta += this.thetaDelta;
				phi += this.phiDelta;
				phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));
				phi = Math.max(this.EPS, Math.min(Math.PI - this.EPS, phi));
				var radius = offset.length() * this.scale;
				radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));
				this.target.add(this.pan);
				offset.x = radius * Math.sin(phi) * Math.sin(theta);
				offset.y = radius * Math.cos(phi);
				offset.z = radius * Math.sin(phi) * Math.cos(theta);
				position.copy(this.target).add(offset);
				this.object.lookAt(this.target);
				this.thetaDelta = 0;
				this.phiDelta = 0;
				this.scale = 1;
				this.pan.set(0, 0, 0);
				this.dispatchEvent({ type: EVENT_CAMERA_MOVED });
				this.needsUpdate = true;
			}
		}, {
			key: 'getAutoRotationAngle',
			value: function getAutoRotationAngle() {
				return 2 * Math.PI / 60 / 60 * this.autoRotateSpeed;
			}
		}, {
			key: 'getZoomScale',
			value: function getZoomScale() {
				return Math.pow(0.95, this.zoomSpeed);
			}
		}, {
			key: 'onMouseDown',
			value: function onMouseDown(event) {
				if (this.enabled === false) {
					return;
				}
				event.preventDefault();
				if (event.button === 0) {
					if (this.noRotate === true) {
						return;
					}
					this.state = STATE.ROTATE;
					this.rotateStart.set(event.clientX, event.clientY);
				} else if (event.button === 1) {
					if (this.noZoom === true) {
						return;
					}
					this.state = STATE.DOLLY;
					this.dollyStart.set(event.clientX, event.clientY);
				} else if (event.button === 2) {
					if (this.noPan === true) {
						return;
					}
					this.state = STATE.PAN;
					this.panStart.set(event.clientX, event.clientY);
				}
				this.domElement.addEventListener('mousemove', this.mousemoveevent, false);
				this.domElement.addEventListener('mouseup', this.mouseupevent, false);
			}
		}, {
			key: 'onMouseMove',
			value: function onMouseMove(event) {
				if (this.enabled === false) {
					return;
				}
				event.preventDefault();
				var element = this.domElement === jQuery(document) ? this.domElement.body : this.domElement;
				if (this.state === STATE.ROTATE) {
					if (this.noRotate === true) {
						return;
					}
					this.rotateEnd.set(event.clientX, event.clientY);
					this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
					this.rotateLeft(2 * Math.PI * this.rotateDelta.x / element.clientWidth * this.rotateSpeed);
					this.rotateUp(2 * Math.PI * this.rotateDelta.y / element.clientHeight * this.rotateSpeed);
					this.rotateStart.copy(this.rotateEnd);
				} else if (this.state === STATE.DOLLY) {
					if (this.noZoom === true) {
						return;
					}
					this.dollyEnd.set(event.clientX, event.clientY);
					this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);
					if (this.dollyDelta.y > 0) {
						this.dollyIn();
					} else {
						this.dollyOut();
					}
					this.dollyStart.copy(this.dollyEnd);
				} else if (this.state === STATE.PAN) {
					if (this.noPan === true) {
						return;
					}
					this.panEnd.set(event.clientX, event.clientY);
					this.panDelta.subVectors(this.panEnd, this.panStart);
					this.updatePan(this.panDelta);
					this.panStart.copy(this.panEnd);
				}
				this.update();
			}
		}, {
			key: 'onMouseUp',
			value: function onMouseUp() {
				if (this.enabled === false) {
					return;
				}
				this.domElement.removeEventListener('mousemove', this.mousemoveevent, false);
				this.domElement.removeEventListener('mouseup', this.mouseupevent, false);
				this.state = STATE.NONE;
			}
		}, {
			key: 'onMouseWheel',
			value: function onMouseWheel(event) {
				if (this.enabled === false || this.noZoom === true) {
					return;
				}
				var delta = 0;
				if (event.wheelDelta) {
					delta = event.wheelDelta;
				} else if (event.detail) {
					delta = -event.detail;
				}
				if (delta > 0) {
					this.dollyOut();
				} else {
					this.dollyIn();
				}
				this.update();
			}
		}, {
			key: 'onKeyDown',
			value: function onKeyDown(event) {
				if (this.enabled === false) {
					return;
				}
				if (this.noKeys === true) {
					return;
				}
				if (this.noPan === true) {
					return;
				}
				switch (event.keyCode) {
					case this.keys.UP:
						this.updatePan(new THREE.Vector2(0, this.keyPanSpeed));
						break;
					case this.keys.BOTTOM:
						this.updatePan(new THREE.Vector2(0, -this.keyPanSpeed));
						break;
					case this.keys.LEFT:
						this.updatePan(new THREE.Vector2(this.keyPanSpeed, 0));
						break;
					case this.keys.RIGHT:
						this.updatePan(new THREE.Vector2(-this.keyPanSpeed, 0));
						break;
				}
			}
		}, {
			key: 'touchstart',
			value: function touchstart(event) {
				if (this.enabled === false) {
					return;
				}
				switch (event.touches.length) {
					case 1:
						if (this.noRotate === true) {
							return;
						}
						this.state = STATE.TOUCH_ROTATE;
						this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
						break;
					case 2:
						if (this.noZoom === true) {
							return;
						}
						this.state = STATE.TOUCH_DOLLY;
						var dx = event.touches[0].pageX - event.touches[1].pageX;
						var dy = event.touches[0].pageY - event.touches[1].pageY;
						var distance = Math.sqrt(dx * dx + dy * dy);
						this.dollyStart.set(0, distance);
						break;
					case 3:
						if (this.noPan === true) {
							return;
						}
						this.state = STATE.TOUCH_PAN;
						this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
						break;
					default:
						this.state = STATE.NONE;
				}
			}
		}, {
			key: 'touchmove',
			value: function touchmove(event) {
				if (this.enabled === false) {
					return;
				}
				event.preventDefault();
				event.stopPropagation();
				var element = this.domElement === jQuery(document) ? this.domElement.body : this.domElement;
				switch (event.touches.length) {
					case 1:
						if (this.noRotate === true) {
							return;
						}
						if (this.state !== STATE.TOUCH_ROTATE) {
							return;
						}
						this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
						this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
						this.rotateLeft(2 * Math.PI * this.rotateDelta.x / element.clientWidth * this.rotateSpeed);
						this.rotateUp(2 * Math.PI * this.rotateDelta.y / element.clientHeight * this.rotateSpeed);
						this.rotateStart.copy(this.rotateEnd);
						break;
					case 2:
						if (this.noZoom === true) {
							return;
						}
						if (this.state !== STATE.TOUCH_DOLLY) {
							return;
						}
						var dx = event.touches[0].pageX - event.touches[1].pageX;
						var dy = event.touches[0].pageY - event.touches[1].pageY;
						var distance = Math.sqrt(dx * dx + dy * dy);
						this.dollyEnd.set(0, distance);
						this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);
						if (this.dollyDelta.y > 0) {
							this.dollyOut();
						} else {
							this.dollyIn();
						}
						this.dollyStart.copy(this.dollyEnd);
						break;
					case 3:
						if (this.noPan === true) {
							return;
						}
						if (this.state !== STATE.TOUCH_PAN) {
							return;
						}
						this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
						this.panDelta.subVectors(this.panEnd, this.panStart);
						this.pan(this.panDelta);
						this.panStart.copy(this.panEnd);
						break;
					default:
						this.state = STATE.NONE;
				}
			}
		}, {
			key: 'touchend',
			value: function touchend() {
				if (this.enabled === false) {
					return;
				}
				this.state = STATE.NONE;
			}
		}]);
		return Controls;
	}(THREE.EventDispatcher);
  
	var Edge = function (_EventDispatcher) {
		inherits(Edge, _EventDispatcher);
		function Edge(scene, edge, controls) {
			classCallCheck(this, Edge);
			var _this = possibleConstructorReturn(this, (Edge.__proto__ || Object.getPrototypeOf(Edge)).call(this));
			_this.name = 'edge';
			_this.scene = scene;
			_this.edge = edge;
			_this.controls = controls;
			_this.wall = edge.wall;
			_this.front = edge.front;
			_this.planes = [];
			_this.phantomPlanes = [];
			_this.basePlanes = [];
			_this.texture = new THREE.TextureLoader();
			_this.lightMap = new THREE.TextureLoader().load('/static/rooms/textures/walllightmap.png');
			_this.fillerColor = 0xdddddd;
			_this.sideColor = 0xcccccc;
			_this.baseColor = 0xdddddd;
			_this.visible = false;
			var scope = _this;
			_this.redrawevent = function () {
				scope.redraw();
			};
			_this.visibilityevent = function () {
				scope.updateVisibility();
			};
			_this.showallevent = function () {
				scope.showAll();
			};
			_this.visibilityfactor = true;
			_this.init();
			return _this;
		}
		createClass(Edge, [{
			key: 'remove',
			value: function remove() {
				this.edge.removeEventListener(EVENT_REDRAW, this.redrawevent);
				this.controls.removeEventListener(EVENT_CAMERA_MOVED, this.visibilityevent);
				this.controls.removeEventListener(EVENT_CAMERA_ACTIVE_STATUS, this.showallevent);
				this.removeFromScene();
			}
		}, {
			key: 'init',
			value: function init() {
				this.edge.addEventListener(EVENT_REDRAW, this.redrawevent);
				this.controls.addEventListener(EVENT_CAMERA_MOVED, this.visibilityevent);
				this.controls.addEventListener(EVENT_CAMERA_ACTIVE_STATUS, this.showallevent);
				this.updateTexture();
				this.updatePlanes();
				this.addToScene();
			}
		}, {
			key: 'redraw',
			value: function redraw() {
				this.removeFromScene();
				this.updateTexture();
				this.updatePlanes();
				this.addToScene();
			}
		}, {
			key: 'removeFromScene',
			value: function removeFromScene() {
				var scope = this;
				scope.planes.forEach(function (plane) {
					scope.scene.remove(plane);
				});
				scope.basePlanes.forEach(function (plane) {
					scope.scene.remove(plane);
				});
				scope.phantomPlanes.forEach(function (plane) {
					scope.scene.remove(plane);
				});
				scope.planes = [];
				scope.basePlanes = [];
			}
		}, {
			key: 'addToScene',
			value: function addToScene() {
				var scope = this;
				this.planes.forEach(function (plane) {
					scope.scene.add(plane);
				});
				this.basePlanes.forEach(function (plane) {
					scope.scene.add(plane);
				});
				this.phantomPlanes.forEach(function (plane) {
					scope.scene.add(plane);
				});
				this.updateVisibility();
			}
		}, {
			key: 'showAll',
			value: function showAll() {
				var scope = this;
				scope.visible = true;
				scope.planes.forEach(function (plane) {
					plane.material.transparent = !scope.visible;
					plane.material.opacity = 1.0;
					plane.visible = scope.visible;
				});
				this.wall.items.forEach(function (item) {
					item.updateEdgeVisibility(scope.visible, scope.front);
				});
				this.wall.onItems.forEach(function (item) {
					item.updateEdgeVisibility(scope.visible, scope.front);
				});
			}
		}, {
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				var scope = this;
				scope.visible = true;
				scope.planes.forEach(function (plane) {
					plane.material.wireframe = flag;
				});
			}
		}, {
			key: 'updateVisibility',
			value: function updateVisibility() {
				var scope = this;
				var start = scope.edge.interiorStart();
				var end = scope.edge.interiorEnd();
				var x = end.x - start.x;
				var y = end.y - start.y;
				var normal = new THREE.Vector3(-y, 0, x);
				normal.normalize();
				var position = scope.controls.object.position.clone();
				var focus = new THREE.Vector3((start.x + end.x) / 2.0, 0, (start.y + end.y) / 2.0);
				var direction = position.sub(focus).normalize();
				var dot = normal.dot(direction);
				scope.visible = dot >= 0;
				scope.planes.forEach(function (plane) {
					plane.visible = scope.visible;
				});
				scope.updateObjectVisibility();
			}
		}, {
			key: 'updateObjectVisibility',
			value: function updateObjectVisibility() {
			}
		}, {
			key: 'updateTexture',
			value: function updateTexture(callback) {
				var scope = this;
				callback = callback || function () {
					scope.scene.needsUpdate = true;
				};
				var textureData = this.edge.getTexture();
				var stretch = textureData.stretch;
				var url = textureData.url;
				var scale = textureData.scale;
				this.texture = new THREE.TextureLoader().load(url, callback);
				if (!stretch) {
					var height = this.wall.height;
					var width = this.edge.interiorDistance();
					this.texture.wrapT = THREE.RepeatWrapping;
					this.texture.wrapS = THREE.RepeatWrapping;
					this.texture.repeat.set(width / scale, height / scale);
					this.texture.needsUpdate = true;
				}
			}
		}, {
			key: 'updatePlanes',
			value: function updatePlanes() {
				var extStartCorner = this.edge.getStart();
				var extEndCorner = this.edge.getEnd();
				if (extStartCorner == null || extEndCorner == null) {
					return;
				}
				var color = 0xFFFFFF;
				var wallMaterial = new THREE.MeshBasicMaterial({
					color: color,
					side: THREE.FrontSide,
					map: this.texture,
					transparent: true,
					lightMap: this.lightMap,
					opacity: 1.0,
					wireframe: false
				});
				var fillerMaterial = new THREE.MeshBasicMaterial({
					color: this.fillerColor,
					side: THREE.DoubleSide,
					map: this.texture,
					transparent: true,
					opacity: 1.0,
					wireframe: false
				});
				if (this.edge.wall.start.getAttachedRooms().length < 2 || this.edge.wall.end.getAttachedRooms().length < 2) {
					this.planes.push(this.makeWall(this.edge.exteriorStart(), this.edge.exteriorEnd(), this.edge.exteriorTransform, this.edge.invExteriorTransform, fillerMaterial));
				}
				this.planes.push(this.makeWall(this.edge.interiorStart(), this.edge.interiorEnd(), this.edge.interiorTransform, this.edge.invInteriorTransform, wallMaterial));
				this.basePlanes.push(this.buildFillerUniformHeight(this.edge, 0, THREE.BackSide, this.baseColor));
				if (this.edge.wall.start.getAttachedRooms().length < 2 || this.edge.wall.end.getAttachedRooms().length < 2) {
					this.planes.push(this.buildFillerVaryingHeights(this.edge, THREE.DoubleSide, this.fillerColor));
				}
				this.planes.push(this.buildSideFillter(this.edge.interiorStart(), this.edge.exteriorStart(), extStartCorner.elevation, this.sideColor));
				this.planes.push(this.buildSideFillter(this.edge.interiorEnd(), this.edge.exteriorEnd(), extEndCorner.elevation, this.sideColor));
			}
		}, {
			key: 'makeWall',
			value: function makeWall(start, end, transform, invTransform, material) {
				var v1 = this.toVec3(start);
				var v2 = this.toVec3(end);
				var v3 = v2.clone();
				var v4 = v1.clone();
				v3.y = this.edge.getEnd().elevation;
				v4.y = this.edge.getStart().elevation;
				var points = [v1.clone(), v2.clone(), v3.clone(), v4.clone()];
				points.forEach(function (p) {
					p.applyMatrix4(transform);
				});
				var spoints = [new THREE.Vector2(points[0].x, points[0].y), new THREE.Vector2(points[1].x, points[1].y), new THREE.Vector2(points[2].x, points[2].y), new THREE.Vector2(points[3].x, points[3].y)];
				var shape = new THREE.Shape(spoints);
				this.wall.items.forEach(function (item) {
					var pos = item.position.clone();
					pos.applyMatrix4(transform);
					var halfSize = item.halfSize;
					var min = halfSize.clone().multiplyScalar(-1);
					var max = halfSize.clone();
					min.add(pos);
					max.add(pos);
					var holePoints = [new THREE.Vector2(min.x, min.y), new THREE.Vector2(max.x, min.y), new THREE.Vector2(max.x, max.y), new THREE.Vector2(min.x, max.y)];
					shape.holes.push(new THREE.Path(holePoints));
				});
				var geometry = new THREE.ShapeGeometry(shape);
				geometry.vertices.forEach(function (v) {
					v.applyMatrix4(invTransform);
				});
				var totalDistance = Utils.distance(new THREE.Vector2(v1.x, v1.z), new THREE.Vector2(v2.x, v2.z));
				var height = this.wall.height;
				geometry.faceVertexUvs[0] = [];
				geometry.faces.forEach(function (face) {
					var vertA = geometry.vertices[face.a];
					var vertB = geometry.vertices[face.b];
					var vertC = geometry.vertices[face.c];
					geometry.faceVertexUvs[0].push([vertexToUv(vertA), vertexToUv(vertB), vertexToUv(vertC)]);
				});
				geometry.faceVertexUvs[1] = geometry.faceVertexUvs[0];
				geometry.computeFaceNormals();
				geometry.computeVertexNormals();
				function vertexToUv(vertex) {
					var x = Utils.distance(new THREE.Vector2(v1.x, v1.z), new THREE.Vector2(vertex.x, vertex.z)) / totalDistance;
					var y = vertex.y / height;
					return new THREE.Vector2(x, y);
				}
				var mesh = new THREE.Mesh(geometry, material);
				mesh.name = 'wall';
				return mesh;
			}
		}, {
			key: 'buildSideFillter',
			value: function buildSideFillter(p1, p2, height, color) {
				var points = [this.toVec3(p1), this.toVec3(p2), this.toVec3(p2, height), this.toVec3(p1, height)];
				var geometry = new THREE.Geometry();
				points.forEach(function (p) {
					geometry.vertices.push(p);
				});
				geometry.faces.push(new THREE.Face3(0, 1, 2));
				geometry.faces.push(new THREE.Face3(0, 2, 3));
				var fillerMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
				var filler = new THREE.Mesh(geometry, fillerMaterial);
				return filler;
			}
		}, {
			key: 'buildFillerVaryingHeights',
			value: function buildFillerVaryingHeights(edge, side, color) {
				var a = this.toVec3(edge.exteriorStart(), this.edge.getStart().elevation);
				var b = this.toVec3(edge.exteriorEnd(), this.edge.getEnd().elevation);
				var c = this.toVec3(edge.interiorEnd(), this.edge.getEnd().elevation);
				var d = this.toVec3(edge.interiorStart(), this.edge.getStart().elevation);
				var fillerMaterial = new THREE.MeshBasicMaterial({ color: color, side: side });
				var geometry = new THREE.Geometry();
				geometry.vertices.push(a, b, c, d);
				geometry.faces.push(new THREE.Face3(0, 1, 2));
				geometry.faces.push(new THREE.Face3(0, 2, 3));
				var filler = new THREE.Mesh(geometry, fillerMaterial);
				return filler;
			}
		}, {
			key: 'buildFillerUniformHeight',
			value: function buildFillerUniformHeight(edge, height, side, color) {
				var points = [this.toVec2(edge.exteriorStart()), this.toVec2(edge.exteriorEnd()), this.toVec2(edge.interiorEnd()), this.toVec2(edge.interiorStart())];
				var fillerMaterial = new THREE.MeshBasicMaterial({ color: color, side: side });
				var shape = new THREE.Shape(points);
				var geometry = new THREE.ShapeGeometry(shape);
				var filler = new THREE.Mesh(geometry, fillerMaterial);
				filler.rotation.set(Math.PI / 2, 0, 0);
				filler.position.y = height;
				return filler;
			}
		}, {
			key: 'toVec2',
			value: function toVec2(pos) {
				return new THREE.Vector2(pos.x, pos.y);
			}
		}, {
			key: 'toVec3',
			value: function toVec3(pos, height) {
				height = height || 0;
				return new THREE.Vector3(pos.x, height, pos.y);
			}
		}]);
		return Edge;
	}(THREE.EventDispatcher);
  
	var Floor = function (_EventDispatcher) {
		inherits(Floor, _EventDispatcher);
		function Floor(scene, room) {
			classCallCheck(this, Floor);
			var _this = possibleConstructorReturn(this, (Floor.__proto__ || Object.getPrototypeOf(Floor)).call(this));
			_this.scene = scene;
			_this.room = room;
			_this.floorPlane = null;
			_this.roofPlane = null;
			_this.changedevent = function () {
				_this.redraw();
			};
			_this.init();
			return _this;
		}
		createClass(Floor, [{
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				this.floorPlane.visible = !flag;
				this.roofPlane.visible = !flag;
			}
		}, {
			key: 'init',
			value: function init() {
				this.room.addEventListener(EVENT_CHANGED, this.changedevent);
				this.floorPlane = this.buildFloor();
				this.roofPlane = this.buildRoofVaryingHeight();
			}
		}, {
			key: 'redraw',
			value: function redraw() {
				this.removeFromScene();
				this.floorPlane = this.buildFloor();
				this.roofPlane = this.buildRoofVaryingHeight();
				this.addToScene();
			}
		}, {
			key: 'buildFloor',
			value: function buildFloor() {
				var textureSettings = this.room.getTexture();
				var floorTexture = new THREE.TextureLoader().load(textureSettings.url);
				floorTexture.wrapS = THREE.RepeatWrapping;
				floorTexture.wrapT = THREE.RepeatWrapping;
				floorTexture.repeat.set(1, 1);
				var floorMaterialTop = new THREE.MeshPhongMaterial({
					map: floorTexture,
					side: THREE.DoubleSide,
					color: 0xcccccc,
					specular: 0x0a0a0a
				});
				var textureScale = textureSettings.scale;
				var points = [];
				this.room.interiorCorners.forEach(function (corner) {
					points.push(new THREE.Vector2(corner.x / textureScale, corner.y / textureScale));
				});
				var shape = new THREE.Shape(points);
				var geometry = new THREE.ShapeGeometry(shape);
				var floor = new THREE.Mesh(geometry, floorMaterialTop);
				floor.rotation.set(Math.PI / 2, 0, 0);
				floor.scale.set(textureScale, textureScale, textureScale);
				floor.receiveShadow = true;
				floor.castShadow = false;
				return floor;
			}
		}, {
			key: 'buildRoofVaryingHeight',
			value: function buildRoofVaryingHeight() {
				var roofMaterial = new THREE.MeshBasicMaterial({ side: THREE.FrontSide, color: 0xe5e5e5 });
				var geometry = new THREE.Geometry();
				this.room.corners.forEach(function (corner) {
					var vertex = new THREE.Vector3(corner.x, corner.elevation, corner.y);
					geometry.vertices.push(vertex);
				});
				for (var i = 2; i < geometry.vertices.length; i++) {
					var face = new THREE.Face3(0, i - 1, i);
					geometry.faces.push(face);
				}
				var roof = new THREE.Mesh(geometry, roofMaterial);
				return roof;
			}
		}, {
			key: 'buildRoofUniformHeight',
			value: function buildRoofUniformHeight() {
				var roofMaterial = new THREE.MeshBasicMaterial({ side: THREE.FrontSide, color: 0xe5e5e5 });
				var points = [];
				this.room.interiorCorners.forEach(function (corner) {
					points.push(new THREE.Vector2(corner.x, corner.y));
				});
				var shape = new THREE.Shape(points);
				var geometry = new THREE.ShapeGeometry(shape);
				var roof = new THREE.Mesh(geometry, roofMaterial);
				roof.rotation.set(Math.PI / 2, 0, 0);
				roof.position.y = Configuration.getNumericValue(configWallHeight);
				return roof;
			}
		}, {
			key: 'addToScene',
			value: function addToScene() {
				this.scene.add(this.floorPlane);
				this.scene.add(this.roofPlane);
				this.scene.add(this.room.floorPlane);
				this.scene.add(this.room.roofPlane);
			}
		}, {
			key: 'removeFromScene',
			value: function removeFromScene() {
				this.scene.remove(this.floorPlane);
				this.scene.remove(this.roofPlane);
				this.scene.remove(this.room.floorPlane);
				this.scene.remove(this.room.roofPlane);
			}
		}, {
			key: 'showRoof',
			value: function showRoof(flag) {
				console.log(flag);
			}
		}]);
		return Floor;
	}(THREE.EventDispatcher);
  
	var Floorplan3D = function (_EventDispatcher) {
		inherits(Floorplan3D, _EventDispatcher);
		function Floorplan3D(scene, floorPlan, controls) {
			classCallCheck(this, Floorplan3D);
			var _this = possibleConstructorReturn(this, (Floorplan3D.__proto__ || Object.getPrototypeOf(Floorplan3D)).call(this));
			_this.scene = scene;
			_this.floorplan = floorPlan;
			_this.controls = controls;
			_this.floors = [];
			_this.edges = [];
			var scope = _this;
			_this.updatedroomsevent = function () {
				scope.redraw();
			};
			_this.floorplan.addEventListener(EVENT_UPDATED, _this.updatedroomsevent);
			return _this;
		}
		createClass(Floorplan3D, [{
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				this.floors.forEach(function (floor) {
					floor.switchWireframe(flag);
				});
				this.edges.forEach(function (edge) {
					edge.switchWireframe(flag);
				});
			}
		}, {
			key: 'redraw',
			value: function redraw() {
				var _this2 = this;
				var scope = this;
				this.floors.forEach(function (floor) {
					floor.removeFromScene();
				});
				this.edges.forEach(function (edge) {
					edge.remove();
				});
				this.floors = [];
				this.edges = [];
				this.floorplan.getRooms().forEach(function (room) {
					var threeFloor = new Floor(_this2.scene, room);
					_this2.floors.push(threeFloor);
					threeFloor.addToScene();
				});
				var eindex = 0;
				this.floorplan.wallEdges().forEach(function (edge) {
					var threeEdge = new Edge(scope.scene, edge, scope.controls);
					threeEdge.name = 'edge_' + eindex;
					_this2.edges.push(threeEdge);
					eindex += 1;
				});
			}
		}, {
			key: 'showRoof',
			value: function showRoof(flag) {
				this.floors.forEach(function (threeFloor) {
					threeFloor.showRoof(flag);
				});
			}
		}]);
		return Floorplan3D;
	}(THREE.EventDispatcher);
  
	var HUD = function (_EventDispatcher) {
		inherits(HUD, _EventDispatcher);
		function HUD(three, scene) {
			classCallCheck(this, HUD);
			var _this = possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this));
			_this.three = three;
			if (!scene) {
				_this.scene = new THREE.Scene();
			} else {
				_this.scene = scene;
			}
			_this.selectedItem = null;
			_this.rotating = false;
			_this.mouseover = false;
			_this.tolerance = 10;
			_this.height = 5;
			_this.distance = 20;
			_this.color = '#ffffff';
			_this.hoverColor = '#f1c40f';
			_this.activeObject = null;
			var scope = _this;
			_this.itemselectedevent = function (o) {
				scope.itemSelected(o.item);
			};
			_this.itemunselectedevent = function () {
				scope.itemUnselected();
			};
			_this.init();
			return _this;
		}
		createClass(HUD, [{
			key: 'init',
			value: function init() {
				this.three.addEventListener(EVENT_ITEM_SELECTED, this.itemselectedevent);
				this.three.addEventListener(EVENT_ITEM_UNSELECTED, this.itemunselectedevent);
			}
		}, {
			key: 'getScene',
			value: function getScene() {
				return this.scene;
			}
		}, {
			key: 'getObject',
			value: function getObject() {
				return this.activeObject;
			}
		}, {
			key: 'resetSelectedItem',
			value: function resetSelectedItem() {
				this.selectedItem = null;
				if (this.activeObject) {
					this.scene.remove(this.activeObject);
					this.activeObject = null;
				}
			}
		}, {
			key: 'itemSelected',
			value: function itemSelected(item) {
				if (this.selectedItem != item) {
					this.resetSelectedItem();
					if (item.allowRotate && !item.fixed) {
						this.selectedItem = item;
						this.activeObject = this.makeObject(this.selectedItem);
						this.scene.add(this.activeObject);
					}
				}
			}
		}, {
			key: 'itemUnselected',
			value: function itemUnselected() {
				this.resetSelectedItem();
			}
		}, {
			key: 'setRotating',
			value: function setRotating(isRotating) {
				this.rotating = isRotating;
				this.setColor();
			}
		}, {
			key: 'setMouseover',
			value: function setMouseover(isMousedOver) {
				this.mouseover = isMousedOver;
				this.setColor();
			}
		}, {
			key: 'setColor',
			value: function setColor() {
				var scope = this;
				if (scope.activeObject) {
					scope.activeObject.children.forEach(function (obj) {
						obj.material.color.set(scope.getColor());
					});
				}
				scope.three.ensureNeedsUpdate();
			}
		}, {
			key: 'getColor',
			value: function getColor() {
				return this.mouseover || this.rotating ? this.hoverColor : this.color;
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.activeObject) {
					this.activeObject.rotation.y = this.selectedItem.rotation.y;
					this.activeObject.position.x = this.selectedItem.position.x;
					this.activeObject.position.z = this.selectedItem.position.z;
				}
			}
		}, {
			key: 'makeLineGeometry',
			value: function makeLineGeometry(item) {
				var geometry = new THREE.Geometry();
				geometry.vertices.push(new THREE.Vector3(0, 0, 0), this.rotateVector(item));
				return geometry;
			}
		}, {
			key: 'rotateVector',
			value: function rotateVector(item) {
				var vec = new THREE.Vector3(0, 0, Math.max(item.halfSize.x, item.halfSize.z) + 1.4 + this.distance);
				return vec;
			}
		}, {
			key: 'makeLineMaterial',
			value: function makeLineMaterial() {
				var mat = new THREE.LineBasicMaterial({ color: this.getColor(), linewidth: 3 });
				return mat;
			}
		}, {
			key: 'makeCone',
			value: function makeCone(item) {
				var coneGeo = new THREE.CylinderGeometry(5, 0, 10);
				var coneMat = new THREE.MeshBasicMaterial({ color: this.getColor() });
				var cone = new THREE.Mesh(coneGeo, coneMat);
				cone.position.copy(this.rotateVector(item));
				cone.rotation.x = -Math.PI / 2.0;
				return cone;
			}
		}, {
			key: 'makeSphere',
			value: function makeSphere() {
				var geometry = new THREE.SphereGeometry(4, 16, 16);
				var material = new THREE.MeshBasicMaterial({ color: this.getColor() });
				var sphere = new THREE.Mesh(geometry, material);
				return sphere;
			}
		}, {
			key: 'makeObject',
			value: function makeObject(item) {
				var object = new THREE.Object3D();
				var line = new THREE.LineSegments(this.makeLineGeometry(item), this.makeLineMaterial(this.rotating));
				var cone = this.makeCone(item);
				var sphere = this.makeSphere(item);
				object.add(line);
				object.add(cone);
				object.add(sphere);
				object.rotation.y = item.rotation.y;
				object.position.x = item.position.x;
				object.position.z = item.position.z;
				object.position.y = this.height;
				return object;
			}
		}]);
		return HUD;
	}(THREE.EventDispatcher);
  
	var Lights = function (_EventDispatcher) {
		inherits(Lights, _EventDispatcher);
		function Lights(scene, floorplan) {
			classCallCheck(this, Lights);
			var _this = possibleConstructorReturn(this, (Lights.__proto__ || Object.getPrototypeOf(Lights)).call(this));
			_this.scene = scene;
			_this.floorplan = floorplan;
			_this.tol = 1;
			_this.height = 300;
			_this.dirLight = null;
			_this.updatedroomsevent = function () {
				_this.updateShadowCamera();
			};
			_this.init();
			return _this;
		}
		createClass(Lights, [{
			key: 'getDirLight',
			value: function getDirLight() {
				return this.dirLight;
			}
		}, {
			key: 'init',
			value: function init() {
				var light = new THREE.HemisphereLight(0xffffff, 0x888888, 1.1);
				light.position.set(0, this.height, 0);
				this.scene.add(light);
				this.dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
				this.dirLight.color.setHSL(1, 1, 0.1);
				this.dirLight.castShadow = true;
				this.dirLight.shadow.mapSize.width = 1024;
				this.dirLight.shadow.mapSize.height = 1024;
				this.dirLight.shadow.camera.far = this.height + this.tol;
				this.dirLight.shadow.bias = -0.0001;
				this.dirLight.visible = true;
				this.scene.add(this.dirLight);
				this.scene.add(this.dirLight.target);
				this.floorplan.addEventListener(EVENT_UPDATED, this.updatedroomsevent);
			}
		}, {
			key: 'updateShadowCamera',
			value: function updateShadowCamera() {
				var size = this.floorplan.getSize();
				var d = (Math.max(size.z, size.x) + this.tol) / 2.0;
				var center = this.floorplan.getCenter();
				var pos = new THREE.Vector3(center.x, this.height, center.z);
				this.dirLight.position.copy(pos);
				this.dirLight.target.position.copy(center);
				this.dirLight.shadow.camera.left = -d;
				this.dirLight.shadow.camera.right = d;
				this.dirLight.shadow.camera.top = d;
				this.dirLight.shadow.camera.bottom = -d;
				if (this.dirLight.shadowCamera) {
					this.dirLight.shadow.camera.left = this.dirLight.shadowCameraLeft;
					this.dirLight.shadow.camera.right = this.dirLight.shadowCameraRight;
					this.dirLight.shadow.camera.top = this.dirLight.shadowCameraTop;
					this.dirLight.shadow.camera.bottom = this.dirLight.shadowCameraBottom;
					this.dirLight.shadowCamera.updateProjectionMatrix();
				}
			}
		}]);
		return Lights;
	}(THREE.EventDispatcher);
  
	var Skybox = function (_EventDispatcher) {
		inherits(Skybox, _EventDispatcher);
		function Skybox(scene, renderer) {
			classCallCheck(this, Skybox);
			var _this = possibleConstructorReturn(this, (Skybox.__proto__ || Object.getPrototypeOf(Skybox)).call(this));
			var scene = scene;
			var topColor = 0xffffff;
			var bottomColor = 0xe9e9e9;
			var verticalOffset = 500;
			var sphereRadius = 4000;
			var widthSegments = 32;
			var heightSegments = 15;
			var vertexShader = ["varying vec3 vWorldPosition;", "void main() {", "  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "  vWorldPosition = worldPosition.xyz;", "  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join('\n');
			var fragmentShader = ["uniform vec3 topColor;", "uniform vec3 bottomColor;", "uniform float offset;", "varying vec3 vWorldPosition;", "void main() {", "  float h = normalize( vWorldPosition + offset ).y;", "  gl_FragColor = vec4( mix( bottomColor, topColor, (h + 1.0) / 2.0), 1.0 );", "}"].join('\n');
			var uniforms = {
				topColor: {
					type: "c",
					value: new THREE.Color(topColor)
				},
				bottomColor: {
					type: "c",
					value: new THREE.Color(bottomColor)
				},
				offset: {
					type: "f",
					value: verticalOffset
				}
			};
			var skyGeo = new THREE.SphereGeometry(sphereRadius, widthSegments, heightSegments);
			var skyMat = new THREE.ShaderMaterial({
				vertexShader: vertexShader,
				fragmentShader: fragmentShader,
				uniforms: uniforms,
				side: THREE.BackSide
			});
			var sky = new THREE.Mesh(skyGeo, skyMat);
			scene.add(sky);
			return _this;
		}
		return Skybox;
	}(THREE.EventDispatcher);
  
	var Main = function (_EventDispatcher) {
		inherits(Main, _EventDispatcher);
		function Main(model, element, canvasElement, opts) {
			classCallCheck(this, Main);
			var _this = possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
			var options = { resize: true, pushHref: false, spin: true, spinSpeed: .00002, clickPan: true, canMoveFixedItems: false };
			for (var opt in options) {
				if (options.hasOwnProperty(opt) && opts.hasOwnProperty(opt)) {
					options[opt] = opts[opt];
				}
			}
			_this.pauseRender = true;
			_this.model = model;
			_this.scene = model.scene;
			_this.element = jQuery(element);
			_this.canvasElement = canvasElement;
			_this.options = options;
			_this.domElement = null;
			_this.orthocamera = null;
			_this.perspectivecamera = null;
			_this.camera = null;
			_this.savedcameraposition = null;
			_this.fpscamera = null;
			_this.cameraNear = 10;
			_this.cameraFar = 10000;
			_this.controls = null;
			_this.fpscontrols = null;
			_this.fpsclock = new THREE.Clock(true);
			_this.firstpersonmode = false;
			_this.renderer = null;
			_this.controller = null;
			_this.needsUpdate = false;
			_this.lastRender = Date.now();
			_this.mouseOver = false;
			_this.hasClicked = false;
			_this.hud = null;
			_this.heightMargin = null;
			_this.widthMargin = null;
			_this.elementHeight = null;
			_this.elementWidth = null;
			_this.itemSelectedCallbacks = jQuery.Callbacks();
			_this.itemUnselectedCallbacks = jQuery.Callbacks();
			_this.wallClicked = jQuery.Callbacks();
			_this.floorClicked = jQuery.Callbacks();
			_this.nothingClicked = jQuery.Callbacks();
			_this.floorplan = null;
			var scope = _this;
			_this.updatedevent = function () {
				scope.centerCamera();
			};
			_this.gltfreadyevent = function (o) {
				scope.gltfReady(o);
			};
			_this.clippingPlaneActive = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0.0);
			_this.clippingPlaneActive2 = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.0);
			_this.globalClippingPlane = [_this.clippingPlaneActive, _this.clippingPlaneActive2];
			_this.clippingEmpty = Object.freeze([]);
			_this.clippingEnabled = false;
			_this.init();
			return _this;
		}
		createClass(Main, [{
			key: 'getARenderer',
			value: function getARenderer() {
				var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
				renderer.shadowMap.enabled = true;
				renderer.shadowMapSoft = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				renderer.setClearColor(0xFFFFFF, 1);
				renderer.clippingPlanes = this.clippingEmpty;
				renderer.localClippingEnabled = false;
				return renderer;
			}
		}, {
			key: 'init',
			value: function init() {
				var scope = this;
				THREE.ImageUtils.crossOrigin = '';
				var orthoScale = 100;
				var orthoWidth = window.innerWidth;
				var orthoHeight = window.innerHeight;
				scope.domElement = scope.element.get(0);
				scope.fpscamera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
				scope.perspectivecamera = new THREE.PerspectiveCamera(45, 10, scope.cameraNear, scope.cameraFar);
				scope.orthocamera = new THREE.OrthographicCamera(orthoWidth / -orthoScale, orthoWidth / orthoScale, orthoHeight / orthoScale, orthoHeight / -orthoScale, scope.cameraNear, scope.cameraFar);
				scope.camera = scope.perspectivecamera;
				scope.renderer = scope.getARenderer();
				scope.domElement.appendChild(scope.renderer.domElement);
				scope.skybox = new Skybox(scope.scene, scope.renderer);
				scope.controls = new OrbitControls(scope.camera, scope.domElement);
				scope.controls.autoRotate = this.options['spin'];
				scope.controls.enableDamping = true;
				scope.controls.dampingFactor = 0.5;
				scope.controls.maxPolarAngle = Math.PI * 0.5;
				scope.controls.maxDistance = 3000;
				scope.controls.minZoom = 0.9;
				scope.controls.screenSpacePanning = true;
				scope.fpscontrols = new PointerLockControls(scope.fpscamera);
				scope.fpscontrols.characterHeight = 160;
				this.scene.add(scope.fpscontrols.getObject());
				this.fpscontrols.getObject().position.set(0, 200, 0);
				this.fpscontrols.addEventListener('unlock', function () {
					scope.switchFPSMode(false);
					scope.dispatchEvent({ type: EVENT_FPS_EXIT });
				});
				scope.hud = new HUD(scope, scope.scene);
				scope.controller = new Controller(scope, scope.model, scope.camera, scope.element, scope.controls, scope.hud);
				scope.updateWindowSize();
				if (scope.options.resize) {
					jQuery(window).resize(function () {
						scope.updateWindowSize();
					});
				}
				scope.centerCamera();
				scope.model.floorplan.addEventListener(EVENT_UPDATED, this.updatedevent);
				scope.model.addEventListener(EVENT_GLTF_READY, this.gltfreadyevent);
				scope.lights = new Lights(scope.scene, scope.model.floorplan);
				scope.floorplan = new Floorplan3D(scope.scene, scope.model.floorplan, scope.controls);
				scope.dispatchEvent({ type: EVENT_LOADED, item: scope });

				function animate() {
					scope.dispatchEvent({ type: EVENT_FRAME_UPDATE, item: null });
					requestAnimationFrame(animate);
					scope.render(scope.scene, scope.camera);
				}
				scope.switchFPSMode(false);
				animate();
				scope.element.mouseenter(function () {
					scope.mouseOver = true;
				}).mouseleave(function () {
					scope.mouseOver = false;
				}).click(function () {
					scope.hasClicked = true;
				});
			}
		}, {
			key: 'exportForBlender',
			value: function exportForBlender() {
				this.controller.showGroundPlane(false);
				this.model.exportForBlender();
			}
		}, {
			key: 'gltfReady',
			value: function gltfReady(o) {
				this.dispatchEvent({ type: EVENT_GLTF_READY, item: this, gltf: o.gltf });
				this.controller.showGroundPlane(true);
			}
		}, {
			key: 'itemIsSelected',
			value: function itemIsSelected(item) {
				this.dispatchEvent({ type: EVENT_ITEM_SELECTED, item: item });
			}
		}, {
			key: 'itemIsUnselected',
			value: function itemIsUnselected() {
				this.dispatchEvent({ type: EVENT_ITEM_UNSELECTED });
			}
		}, {
			key: 'wallIsClicked',
			value: function wallIsClicked(wall) {
				this.dispatchEvent({ type: EVENT_WALL_CLICKED, item: wall, wall: wall });
			}
		}, {
			key: 'floorIsClicked',
			value: function floorIsClicked(item) {
				this.dispatchEvent({ type: EVENT_FLOOR_CLICKED, item: item });
			}
		}, {
			key: 'nothingIsClicked',
			value: function nothingIsClicked() {
				this.dispatchEvent({ type: EVENT_NOTHING_CLICKED });
			}
		}, {
			key: 'spin',
			value: function spin() {
				var scope = this;
				scope.controls.autoRotate = scope.options.spin && !scope.mouseOver && !scope.hasClicked;
			}
		}, {
			key: 'dataUrl',
			value: function dataUrl() {
				var dataUrl = this.renderer.domElement.toDataURL('image/png');
				return dataUrl;
			}
		}, {
			key: 'stopSpin',
			value: function stopSpin() {
				this.hasClicked = true;
				this.controls.autoRotate = false;
			}
		}, {
			key: 'options',
			value: function options() {
				return this.options;
			}
		}, {
			key: 'getModel',
			value: function getModel() {
				return this.model;
			}
		}, {
			key: 'getScene',
			value: function getScene() {
				return this.scene;
			}
		}, {
			key: 'getController',
			value: function getController() {
				return this.controller;
			}
		}, {
			key: 'getCamera',
			value: function getCamera() {
				return this.camera;
			}
		}, {
			key: 'ensureNeedsUpdate',
			value: function ensureNeedsUpdate() {
				this.needsUpdate = true;
			}
		}, {
			key: 'rotatePressed',
			value: function rotatePressed() {
				this.controller.rotatePressed();
			}
		}, {
			key: 'rotateReleased',
			value: function rotateReleased() {
				this.controller.rotateReleased();
			}
		}, {
			key: 'setCursorStyle',
			value: function setCursorStyle(cursorStyle) {
				this.domElement.style.cursor = cursorStyle;
			}
		}, {
			key: 'updateWindowSize',
			value: function updateWindowSize() {
				var scope = this;
				scope.heightMargin = scope.element.offset().top;
				scope.widthMargin = scope.element.offset().left;
				scope.elementWidth = scope.element.innerWidth();
				if (scope.options.resize) {
					scope.elementHeight = window.innerHeight - scope.heightMargin;
				} else {
					scope.elementHeight = scope.element.innerHeight();
				}
				scope.orthocamera.left = -window.innerWidth / 1.0;
				scope.orthocamera.right = window.innerWidth / 1.0;
				scope.orthocamera.top = window.innerHeight / 1.0;
				scope.orthocamera.bottom = -window.innerHeight / 1.0;
				scope.orthocamera.updateProjectionMatrix();
				scope.perspectivecamera.aspect = scope.elementWidth / scope.elementHeight;
				scope.perspectivecamera.updateProjectionMatrix();
				scope.fpscamera.aspect = scope.elementWidth / scope.elementHeight;
				scope.fpscamera.updateProjectionMatrix();
				scope.renderer.setSize(scope.elementWidth, scope.elementHeight);
				scope.needsUpdate = true;
			}
		}, {
			key: 'centerCamera',
			value: function centerCamera() {
				var scope = this;
				var yOffset = 150.0;
				var pan = scope.model.floorplan.getCenter();
				pan.y = yOffset;
				scope.controls.target = pan;
				var distance = scope.model.floorplan.getSize().z * 1.5;
				var offset = pan.clone().add(new THREE.Vector3(0, distance, distance));
				scope.camera.position.copy(offset);
				scope.controls.update();
			}
		}, {
			key: 'projectVector',
			value: function projectVector(vec3, ignoreMargin) {
				var scope = this;
				ignoreMargin = ignoreMargin || false;
				var widthHalf = scope.elementWidth / 2;
				var heightHalf = scope.elementHeight / 2;
				var vector = new THREE.Vector3();
				vector.copy(vec3);
				vector.project(scope.camera);
				var vec2 = new THREE.Vector2();
				vec2.x = vector.x * widthHalf + widthHalf;
				vec2.y = -(vector.y * heightHalf) + heightHalf;
				if (!ignoreMargin) {
					vec2.x += scope.widthMargin;
					vec2.y += scope.heightMargin;
				}
				return vec2;
			}
		}, {
			key: 'sceneGraph',
			value: function sceneGraph(obj) {
				console.group(' <%o> ' + obj.name, obj);
				obj.children.forEach(this.sceneGraph);
				console.groupEnd();
			}
		}, {
			key: 'switchWireframe',
			value: function switchWireframe(flag) {
				this.model.switchWireframe(flag);
				this.floorplan.switchWireframe(flag);
				this.render(true);
			}
		}, {
			key: 'pauseTheRendering',
			value: function pauseTheRendering(flag) {
				this.pauseRender = flag;
			}
		}, {
			key: 'switchView',
			value: function switchView(viewpoint) {
				var center = this.model.floorplan.getCenter();
				var size = this.model.floorplan.getSize();
				var distance = this.controls.object.position.distanceTo(this.controls.target);
				this.controls.target.copy(center);
				switch (viewpoint) {
					case VIEW_TOP:
						center.y = 1000;
						this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_TOP });
						break;
					case VIEW_FRONT:
						center.z = center.z - size.z * 0.5 - distance;
						this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_FRONT });
						break;
					case VIEW_BACK:
						center.z = center.z - size.z * 0.5 + distance;
						this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_BACK });
						break;
					case VIEW_RIGHT:
						center.x = center.x + size.x * 0.5 + distance;
						this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_RIGHT });
						break;
					case VIEW_LEFT:
						center.x = center.x - size.x * 0.5 - distance;
						this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_LEFT });
						break;
					case VIEW_ISOMETRY:
					default:
						center.x += distance;
						center.y += distance;
						center.z += distance;
						this.dispatchEvent({ type: EVENT_CAMERA_VIEW_CHANGE, view: VIEW_ISOMETRY });
				}
				this.camera.position.copy(center);
				this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE_STATUS });
				this.controls.needsUpdate = true;
				this.controls.update();
				this.render(true);
			}
		}, {
			key: 'lockView',
			value: function lockView(locked) {
				this.controls.enableRotate = locked;
				this.render(true);
			}
		}, {
			key: 'changeClippingPlanes',
			value: function changeClippingPlanes(clipRatio, clipRatio2) {
				var size = this.model.floorplan.getSize();
				size.z = size.z + size.z * 0.25;
				size.z = size.z * 0.5;
				this.clippingPlaneActive.constant = this.model.floorplan.getSize().z * clipRatio;
				this.clippingPlaneActive2.constant = this.model.floorplan.getSize().z * clipRatio2;
				if (!this.clippingEnabled) {
					this.clippingEnabled = true;
					this.renderer.clippingPlanes = this.globalClippingPlane;
				}
				this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE_STATUS });
				this.controls.needsUpdate = true;
				this.controls.update();
				this.render(true);
			}
		}, {
			key: 'resetClipping',
			value: function resetClipping() {
				this.clippingEnabled = false;
				this.renderer.clippingPlanes = this.clippingEmpty;
				this.controls.needsUpdate = true;
				this.controls.update();
				this.render(true);
			}
		}, {
			key: 'switchOrthographicMode',
			value: function switchOrthographicMode(flag) {
				if (flag) {
					this.camera = this.orthocamera;
					this.camera.position.copy(this.perspectivecamera.position.clone());
					this.controls.object = this.camera;
					this.controller.changeCamera(this.camera);
					this.controls.needsUpdate = true;
					this.controls.update();
					this.render(true);
					return;
				}
				this.camera = this.perspectivecamera;
				this.camera.position.copy(this.orthocamera.position.clone());
				this.controls.object = this.camera;
				this.controller.changeCamera(this.camera);
				this.controls.needsUpdate = true;
				this.controls.update();
				this.render(true);
			}
		}, {
			key: 'switchFPSMode',
			value: function switchFPSMode(flag) {
				this.firstpersonmode = flag;
				this.fpscontrols.enabled = flag;
				this.controls.enabled = !flag;
				this.controller.enabled = !flag;
				this.controls.dispatchEvent({ type: EVENT_CAMERA_ACTIVE_STATUS });
				if (flag) {
					this.fpscontrols.lock();
				} else {
					this.fpscontrols.unlock();
				}
				this.model.switchWireframe(false);
				this.floorplan.switchWireframe(false);
				this.render(true);
			}
		}, {
			key: 'shouldRender',
			value: function shouldRender() {
				var scope = this;
				if (scope.controls.needsUpdate || scope.controller.needsUpdate || scope.needsUpdate || scope.model.scene.needsUpdate) {
					scope.controls.needsUpdate = false;
					scope.controller.needsUpdate = false;
					scope.needsUpdate = false;
					scope.model.scene.needsUpdate = false;
					return true;
				} else {
					return false;
				}
			}
		}, {
			key: 'rendervr',
			value: function rendervr() {}
		}, {
			key: 'render',
			value: function render(forced) {
				var scope = this;
				forced = forced ? forced : false;
				if (this.pauseRender && !forced) {
					return;
				}
				scope.spin();
				if (scope.firstpersonmode) {
					scope.fpscontrols.update(scope.fpsclock.getDelta());
					scope.renderer.render(scope.scene.getScene(), scope.fpscamera);
				} else {
					if (this.shouldRender() || forced) {
						scope.renderer.render(scope.scene.getScene(), scope.camera);
					}
				}
				scope.lastRender = Date.now();
			}
		}]);
		return Main;
	}(THREE.EventDispatcher);
  
	var BlueprintJS =
	function BlueprintJS(options) {
		classCallCheck(this, BlueprintJS);
		Configuration.setValue(configDimUnit, dimMeter);
		this.options = options;
		this.model = new Model(options.textureDir);
		this.three = new Main(this.model, options.threeElement, options.threeCanvasElement, {});
		if (!options.widget) {
			this.floorplanner = new Floorplanner2D(options.floorplannerElement, this.model.floorplan);
		} else {
			this.three.getController().enabled = false;
		}
	};
  
	exports.BlueprintJS = BlueprintJS;
	exports.CarbonSheet = CarbonSheet;
	exports.Configuration = Configuration;
	exports.Controller = Controller;
	exports.Controls = Controls;
	exports.Corner = Corner;
	exports.Dimensioning = Dimensioning;
	exports.ELogContext = ELogContext;
	exports.ELogLevel = ELogLevel;
	exports.EVENT_ACTION = EVENT_ACTION;
	exports.EVENT_CAMERA_ACTIVE_STATUS = EVENT_CAMERA_ACTIVE_STATUS;
	exports.EVENT_CAMERA_MOVED = EVENT_CAMERA_MOVED;
	exports.EVENT_CAMERA_VIEW_CHANGE = EVENT_CAMERA_VIEW_CHANGE;
	exports.EVENT_CHANGED = EVENT_CHANGED;
	exports.EVENT_CORNER_2D_CLICKED = EVENT_CORNER_2D_CLICKED;
	exports.EVENT_CORNER_2D_DOUBLE_CLICKED = EVENT_CORNER_2D_DOUBLE_CLICKED;
	exports.EVENT_CORNER_2D_HOVER = EVENT_CORNER_2D_HOVER;
	exports.EVENT_CORNER_ATTRIBUTES_CHANGED = EVENT_CORNER_ATTRIBUTES_CHANGED;
	exports.EVENT_DELETED = EVENT_DELETED;
	exports.EVENT_FLOOR_CLICKED = EVENT_FLOOR_CLICKED;
	exports.EVENT_FPS_EXIT = EVENT_FPS_EXIT;
	exports.EVENT_GLTF_READY = EVENT_GLTF_READY;
	exports.EVENT_ITEM_LOADED = EVENT_ITEM_LOADED;
	exports.EVENT_ITEM_LOADING = EVENT_ITEM_LOADING;
	exports.EVENT_ITEM_REMOVED = EVENT_ITEM_REMOVED;
	exports.EVENT_ITEM_SELECTED = EVENT_ITEM_SELECTED;
	exports.EVENT_ITEM_UNSELECTED = EVENT_ITEM_UNSELECTED;
	exports.EVENT_LOADED = EVENT_LOADED;
	exports.EVENT_LOADING = EVENT_LOADING;
	exports.EVENT_MODE_RESET = EVENT_MODE_RESET;
	exports.EVENT_MOVED = EVENT_MOVED;
	exports.EVENT_NEW = EVENT_NEW;
	exports.EVENT_NOTHING_CLICKED = EVENT_NOTHING_CLICKED;
	exports.EVENT_REDRAW = EVENT_REDRAW;
	exports.EVENT_ROOM_2D_CLICKED = EVENT_ROOM_2D_CLICKED;
	exports.EVENT_ROOM_2D_DOUBLE_CLICKED = EVENT_ROOM_2D_DOUBLE_CLICKED;
	exports.EVENT_ROOM_2D_HOVER = EVENT_ROOM_2D_HOVER;
	exports.EVENT_ROOM_ATTRIBUTES_CHANGED = EVENT_ROOM_ATTRIBUTES_CHANGED;
	exports.EVENT_ROOM_CLICKED = EVENT_ROOM_CLICKED;
	exports.EVENT_ROOM_NAME_CHANGED = EVENT_ROOM_NAME_CHANGED;
	exports.EVENT_SAVED = EVENT_SAVED;
	exports.EVENT_UPDATED = EVENT_UPDATED;
	exports.EVENT_WALL_2D_CLICKED = EVENT_WALL_2D_CLICKED;
	exports.EVENT_WALL_2D_DOUBLE_CLICKED = EVENT_WALL_2D_DOUBLE_CLICKED;
	exports.EVENT_WALL_2D_HOVER = EVENT_WALL_2D_HOVER;
	exports.EVENT_WALL_ATTRIBUTES_CHANGED = EVENT_WALL_ATTRIBUTES_CHANGED;
	exports.EVENT_WALL_CLICKED = EVENT_WALL_CLICKED;
	exports.Edge = Edge;
	exports.Factory = Factory;
	exports.FirstPersonControls = FirstPersonControls;
	exports.Floor = Floor;
	exports.FloorItem = FloorItem;
	exports.Floorplan = Floorplan;
	exports.Floorplan3D = Floorplan3D;
	exports.Floorplanner2D = Floorplanner2D;
	exports.FloorplannerView2D = FloorplannerView2D;
	exports.HUD = HUD;
	exports.HalfEdge = HalfEdge;
	exports.InWallFloorItem = InWallFloorItem;
	exports.InWallItem = InWallItem;
	exports.Item = Item;
	exports.Lights = Lights;
	exports.Main = Main;
	exports.Metadata = Metadata;
	exports.Model = Model;
	exports.OnFloorItem = OnFloorItem;
	exports.OrbitControls = OrbitControls;
	exports.PointerLockControls = PointerLockControls;
	exports.Region = Region;
	exports.RoofItem = RoofItem;
	exports.Room = Room;
	exports.STATE = STATE;
	exports.Scene = Scene;
	exports.Skybox = Skybox;
	exports.Utils = Utils;
	exports.VIEW_FRONT = VIEW_FRONT;
	exports.VIEW_BACK = VIEW_BACK;
	exports.VIEW_ISOMETRY = VIEW_ISOMETRY;
	exports.VIEW_LEFT = VIEW_LEFT;
	exports.VIEW_RIGHT = VIEW_RIGHT;
	exports.VIEW_TOP = VIEW_TOP;
	exports.Version = Version;
	exports.Wall = Wall;
	exports.WallFloorItem = WallFloorItem;
	exports.WallItem = WallItem;
	exports.WallTypes = WallTypes;
	exports.cmPerFoot = cmPerFoot;
	exports.cmPerPixel = cmPerPixel;
	exports.config = config;
	exports.configDimUnit = configDimUnit;
	exports.configSystemUI = configSystemUI;
	exports.configWallHeight = configWallHeight;
	exports.configWallThickness = configWallThickness;
	exports.cornerColor = cornerColor;
	exports.cornerColorHover = cornerColorHover;
	exports.cornerColorSelected = cornerColorSelected;
	exports.cornerRadius = cornerRadius;
	exports.cornerRadiusHover = cornerRadiusHover;
	exports.cornerRadiusSelected = cornerRadiusSelected;
	exports.cornerTolerance = cornerTolerance;
	exports.decimals = decimals;
	exports.defaultFloorPlanTolerance = defaultFloorPlanTolerance;
	exports.defaultRoomTexture = defaultRoomTexture;
	exports.defaultWallTexture = defaultWallTexture;
	exports.deleteColor = deleteColor;
	exports.dimCentiMeter = dimCentiMeter;
	exports.dimFeetAndInch = dimFeetAndInch;
	exports.dimInch = dimInch;
	exports.dimMeter = dimMeter;
	exports.dimMilliMeter = dimMilliMeter;
	exports.dimensioningOptions = dimensioningOptions;
	exports.edgeColor = edgeColor;
	exports.edgeColorHover = edgeColorHover;
	exports.edgeWidth = edgeWidth;
	exports.floorplannerModes = floorplannerModes;
	exports.gridColor = gridColor;
	exports.gridSpacing = gridSpacing;
	exports.gridWidth = gridWidth;
	exports.isLogging = isLogging;
	exports.item_types = item_types;
	exports.log = log;
	exports.logContext = logContext;
	exports.pixelsPerCm = pixelsPerCm;
	exports.pixelsPerFoot = pixelsPerFoot;
	exports.roomColor = roomColor;
	exports.roomColorHover = roomColorHover;
	exports.roomColorSelected = roomColorSelected;
	exports.scale = scale;
	exports.snapToGrid = snapToGrid;
	exports.snapTolerance = snapTolerance;
	exports.states = states;
	exports.wallColor = wallColor;
	exports.wallColorHover = wallColorHover;
	exports.wallColorSelected = wallColorSelected;
	exports.wallInformation = wallInformation;
	exports.EVENT_FRAME_UPDATE = EVENT_FRAME_UPDATE;
  
	return exports;
  
  }({}));
  