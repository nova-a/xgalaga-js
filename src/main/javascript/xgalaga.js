/**
 * $Id$
 * Copyright (C) 2010 Klaus Reimer <k@ailis.de>
 * See LICENSE.TXT for licensing information
 * 
 * @fileoverview
 * Provides the xgalaga namespace and global constants.
 * 
 * @author Klaus Reimer (k@ailis.de)
 * @version $Revision: 910 $
 */

/** The application namespace. @type {Object} */
xgalaga = {};


/** The number of stars in the game. @final @type {Number} */
xgalaga.MAX_STARS = 30;

/** The maximum number of aliens. @final @type {Number} */
xgalaga.MAX_ALIENS = 60;

/** The minimum number of torpedos. @final @type {Number} */
xgalaga.MIN_TORPS = 3;

/** The maximum number of torpedos. @final @type {Number} */
xgalaga.MAX_TORPS = 10;

/** The maximum number of paths. @final @type {Number} */
xgalaga.MAX_PATH = 50;

/** The maximum number of simultanous explosions. @final @type {Number} */
xgalaga.MAX_EXPLOSIONS = 10;

/** The enemy torpedo speed. @final @type {Number} */
xgalaga.ETORP_SPEED = 8;

/** The player torpedo speed. @final @type {Number} */
xgalaga.TORP_SPEED = 12;

/** The enemy torpedo chance. @final @type {Number} */
xgalaga.TORP_CHANCE = 60;

/** The delay between torpedos. @final @type {Number} */
xgalaga.TORP_DELAY = 5;

/** Constant for direction north. @final @type {Number} */
xgalaga.DIR_N = 0;

/** Constant for direction north-north-east. @final @type {Number} */
xgalaga.DIR_NNE = 1;

/** Constant for direction north-east. @final @type {Number} */
xgalaga.DIR_NE = 2;

/** Constant for direction east-north-east. @final @type {Number} */
xgalaga.DIR_ENE = 3;

/** Constant for direction east. @final @type {Number} */
xgalaga.DIR_E = 4;

/** Constant for direction east-south-east. @final @type {Number} */
xgalaga.DIR_ESE = 5;

/** Constant for direction south-east. @final @type {Number} */
xgalaga.DIR_SE = 6;

/** Constant for direction south-south-east. @final @type {Number} */
xgalaga.DIR_SSE = 7;

/** Constant for direction south. @final @type {Number} */
xgalaga.DIR_S = 8;

/** Constant for direction south-south-west. @final @type {Number} */
xgalaga.DIR_SSW = 9;

/** Constant for direction south-west. @final @type {Number} */
xgalaga.DIR_SW = 10;

/** Constant for direction west-south-west. @final @type {Number} */
xgalaga.DIR_WSW = 11;

/** Constant for direction west. @final @type {Number} */
xgalaga.DIR_W = 12;

/** Constant for direction west-north-west. @final @type {Number} */
xgalaga.DIR_WNW = 13;

/** Constant for direction north-west. @final @type {Number} */
xgalaga.DIR_NW = 14;

/** Constant for direction north-north-west. @final @type {Number} */
xgalaga.DIR_NNW = 15;

/** The move deltas for the directions. @final @type {Array} */
xgalaga.MOVES = [
    [ 0, -4 ],
    [ 1, -4 ],
    [ 3, -3 ],
    [ 4, -1 ],
    [ 4, 0 ],
    [ 4, 1 ],
    [ 3, 3 ],
    [ 1, 4 ],
    [ 0, 4 ],
    [ -1, 4 ],
    [ -3, 3 ],
    [ -4, 1 ],
    [  -4, 0 ],
    [ -4, -1 ],
    [ -3, -3 ],
    [ -1, -4 ]
];

/** The turn speed. @final @type {Number} */
xgalaga.TURN_SPEED = 10;

/** The minimum player speed. @final @type {Number} */
xgalaga.MIN_SPEED = 3;

/** The maximum player speed. @final @type {Number} */
xgalaga.MAX_SPEED = 8;

/** The start level @final @type {Number} */
xgalaga.START_LEVEL = 1;

/** Constant for HTML render mode. @final @type {Number} */
xgalaga.RENDER_MODE_HTML = 0;

/** Constant for Canvas render mode. @final @type {Number} */
xgalaga.RENDER_MODE_CANVAS = 1;

/** The paths. @final @type {Array} */
xgalaga.PATHS = [
    [
        /* PEELLEFT = 0 */
        [ 0, 3 ],
        [ 15, 3 ],
        [ 14, 3 ],
        [ 13, 3 ],
        [ 12, 3 ],
        [ 11, 3 ],
        [ 10, 3 ],
        [ 9, 3 ],
        [ 8, 3 ],
        [ -1, -1 ]
    ],
    [
        /* PEELRIGHT = 1 */
        [ 0, 3 ],
        [ 1, 3 ],
        [ 2, 3 ],
        [ 3, 3 ],
        [ 4, 3 ],
        [ 5, 3 ],
        [ 6, 3 ],
        [ 7, 3 ],
        [ 8, 3 ],
        [ -1, -1 ]
    ],
    [
        /* LOOP = 2 */
        [ 8, 2 ],
        [ 9, 2 ],
        [ 10, 2 ],
        [ 11, 2 ],
        [ 12, 2 ],
        [ 13, 2 ],
        [ 14, 2 ],
        [ 15, 2 ],
        [ 0, 2 ],
        [ 1, 2 ],
        [ 2, 2 ],
        [ 3, 2 ],
        [ 4, 2 ],
        [ 5, 2 ],
        [ 6, 2 ],
        [ 7, 2 ],
        [ 8, 2 ],
        [ -1, -1 ]
    ],
    [
        /* SWOOP1 = 3 */
        [ 8, 20 ],
        [ 9, 3 ],
        [ 10, 3 ],
        [ 11, 3 ],
        [ 12, 3 ],
        [ -1, -1 ]
    ],
    [
        /* SWOOP2 = 4 */
        [ 8, 20 ],
        [ 7, 3 ],
        [ 6, 3 ],
        [ 5, 3 ],
        [ 4, 3 ],
        [ -1, -1 ]
    ],
    [
        /* ZIGZAG = 5 */
        [ 7, 15 ],
        [ 8, 2 ],
        [ 9, 15 ],
        [ 8, 2 ],
        [ 7, 15 ],
        [ 8, 2 ],
        [ 9, 15 ],
        [ 8, 2 ],
        [ -1, -1 ]
    ],
    [
        /* LOOP2 = 6 */
        [ 8, 2 ],
        [ 7, 2 ],
        [ 6, 2 ],
        [ 5, 2 ],
        [ 4, 2 ],
        [ 3, 2 ],
        [ 2, 2 ],
        [ 1, 2 ],
        [ 0, 2 ],
        [ 15, 2 ],
        [ 14, 2 ],
        [ 13, 2 ],
        [ 12, 2 ],
        [ 11, 2 ],
        [ 10, 2 ],
        [ 9, 2 ],
        [ 8, 2 ],
        [ -1, -1 ]
    ],
    [
        /* SPIN = 7 */
        [ 8, 1 ],
        [ 7, 1 ],
        [ 6, 1 ],
        [ 5, 1 ],
        [ 4, 1 ],
        [ 3, 1 ],
        [ 2, 1 ],
        [ 1, 1 ],
        [ 0, 1 ],
        [ 15, 1 ],
        [ 14, 1 ],
        [ 13, 1 ],
        [ 12, 1 ],
        [ 11, 1 ],
        [ 10, 1 ],
        [ 9, 1 ],
        [ 8, 1 ],
        [ -1, -1 ]
    ],
    [
        /* LEFTDIAG */
        [ 8, 2 ],
        [ 9, 2 ],
        [ 10, 30 ],
        [ 9, 2 ],
        [ 8, 1 ],
        [ -1, -1 ]
    ],
    [
        /* RIGHTDIAG */
        [ 8, 2 ],
        [ 7, 2 ],
        [ 6, 30 ],
        [ 7, 2 ],
        [ 8, 1 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER1 */
        [ 8, 65 ],
        [ 9, 5 ],
        [ 10, 5 ],
        [ 11, 5 ],
        [ 12, 5 ],
        [ 13, 5 ],
        [ 14, 20 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER2 */
        [ 8, 65 ],
        [ 7, 5 ],
        [ 6, 5 ],
        [ 5, 5 ],
        [ 4, 5 ],
        [ 3, 5 ],
        [ 2, 20 ],
        [ -1, -1 ]
    ],
    [
	    /* ENTER3 */
        [ -1, -1 ]
    ],
    [
        /* ENTER4 */
        [ 10, 45 ],
        [ 11, 5 ],
        [ 12, 20 ],
        [ 13, 5 ],
        [ 14, 10 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER5 */
        [ 6, 45 ],
        [ 5, 5 ],
        [ 4, 20 ],
        [ 3, 5 ],
        [ 2, 10 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER6 */
        [ 8, 80 ],
        [ 6, 10 ],
        [ 4, 40 ],
        [ 0, 20 ],
        [ 14, 30 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER7 */
        [ 8, 80 ],
        [ 10, 10 ],
        [ 12, 40 ],
        [ 0, 20 ],
        [ 2, 30 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER8 */
        [ 0, 50 ],
        [ 2, 50 ],
        [ 3, 5 ],
        [ 4, 5 ],
        [ 5, 5 ],
        [ 6, 5 ],
        [ 7, 5 ],
        [ 8, 5 ],
        [ 9, 5 ],
        [ 10, 5 ],
        [ 11, 5 ],
        [ 12, 30 ],
        [ 13, 5 ],
        [ 14, 5 ],
        [ 15, 5 ],
        [ 0, 5 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER9 */
        [ 0, 50 ],
        [ 14, 50 ],
        [ 13, 5 ],
        [ 12, 5 ],
        [ 11, 5 ],
        [ 10, 5 ],
        [ 9, 5 ],
        [ 8, 5 ],
        [ 7, 5 ],
        [ 6, 5 ],
        [ 5, 5 ],
        [ 4, 30 ],
        [ 3, 5 ],
        [ 2, 5 ],
        [ 1, 5 ],
        [ 0, 5 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER10 */
        [ 4, 80 ],
        [ 10, 30 ],
        [ 0, 70 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER11 */
        [ 12, 80 ],
        [ 6, 30 ],
        [ 0, 70 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER12 */
        [ 14, 80 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER13 */
        [ 2, 80 ],
        [ -1, -1 ]
    ],
    [
        /* ENTER14 */
        [ 4, 8 ],
        [ 3, 6 ],
        [ 2, 8 ],
        [ 1, 10 ],
        [ 2, 8 ],
        [ 3, 6 ],
        [ 4, 4 ],
        [ 5, 6 ],
        [ 6, 8 ],
        [ 7, 10 ],
        [ 6, 8 ],
        [ 5, 6 ],
        [ 4, 4 ],
        [ 3, 6 ],
        [ 2, 8 ],
        [ 1, 10 ],
        [ 0, 20 ],
        [ -1, -1 ]
    ],
    [
        /* 15 */
        [ 12, 60 ],
        [ 11, 3 ],
        [ 10, 3 ],
        [ 9, 3 ],
        [ 8, 3 ],
        [ 7, 3 ],
        [ 6, 3 ],
        [ 5, 3 ],
        [ 4, 3 ],
        [ 3, 3 ],
        [ 2, 3 ],
        [ 1, 3 ],
        [ 0, 3 ],
        [ 15, 3 ],
        [ 14, 3 ],
        [ 13, 3 ],
        [ 12, 3 ],
        [ 11, 3 ],
        [ 10, 3 ],
        [ 9, 3 ],
        [ 8, 3 ],
        [ 7, 3 ],
        [ 6, 3 ],
        [ 5, 3 ],
        [ 4, 3 ],
        [ 3, 3 ],
        [ 2, 3 ],
        [ 1, 3 ],
        [ 0, 3 ],
        [ 15, 3 ],
        [ 14, 3 ],
        [ 13, 3 ],
        [ 12, 3 ],
        [ 11, 3 ],
        [ 10, 3 ],
        [ 9, 3 ],
        [ 8, 3 ],
        [ 7, 3 ],
        [ 6, 3 ],
        [ 5, 3 ],
        [ 4, 3 ],
        [ 3, 3 ],
        [ 2, 3 ],
        [ 1, 3 ],
        [ 0, 20 ],
        [ -1, -1 ]
    ],
    [
        /* 16 */
        [ 4, 60 ],
        [ 5, 3 ],
        [ 6, 3 ],
        [ 7, 3 ],
        [ 8, 3 ],
        [ 9, 3 ],
        [ 10, 3 ],
        [ 11, 3 ],
        [ 12, 3 ],
        [ 13, 3 ],
        [ 14, 3 ],
        [ 15, 3 ],
        [ 0, 3 ],
        [ 1, 3 ],
        [ 2, 3 ],
        [ 3, 3 ],
        [ 4, 3 ],
        [ 5, 3 ],
        [ 6, 3 ],
        [ 7, 3 ],
        [ 8, 3 ],
        [ 9, 3 ],
        [ 10, 3 ],
        [ 11, 3 ],
        [ 12, 3 ],
        [ 13, 3 ],
        [ 14, 3 ],
        [ 15, 3 ],
        [ 0, 3 ],
        [ 1, 3 ],
        [ 2, 3 ],
        [ 3, 3 ],
        [ 4, 3 ],
        [ 5, 3 ],
        [ 6, 3 ],
        [ 7, 3 ],
        [ 8, 3 ],
        [ 9, 3 ],
        [ 10, 3 ],
        [ 11, 3 ],
        [ 12, 3 ],
        [ 13, 3 ],
        [ 14, 3 ],
        [ 15, 3 ],
        [ 0, 20 ],
        [ -1, -1 ]
    ],
    [
        /* 17 */
        [ 7, 15 ],
        [ 8, 3 ],
        [ 9, 15 ],
        [ 8, 3 ],
        [ 7, 15 ],
        [ 8, 3 ],
        [ 9, 15 ],
        [ 8, 3 ],
        [ 7, 15 ],
        [ 8, 3 ],
        [ 9, 15 ],
        [ 8, 3 ],
    	[ -1, -1 ]
    ],
    [
        /* 18 */
        [ 12, 60 ],
        [ 4, 30 ],
        [ 12, 30 ],
        [ 4, 30 ],
        [ 12, 30 ],
        [ 8, 20 ],
        [ -1, -1 ]
    ],
    [
        /* 19 */
        [ 10, 80 ],
        [ -1, -1 ]
    ],
    [
        /* 20 */
        [ 6, 80 ],
        [ -1, -1 ]
    ]
];

/** Constant for path 'peel left'. @final @type {Number} */
xgalaga.P_PEELLEFT = 0;

/** Constant for path 'peel right'. @final @type {Number} */
xgalaga.P_PEELRIGHT = 1;

/** Constant for path 'loop'. @final @type {Number} */
xgalaga.P_LOOP = 2;

/** Constant for path 'swoop 1'. @final @type {Number} */
xgalaga.P_SWOOP1 = 3;

/** Constant for path 'swoop 2'. @final @type {Number} */
xgalaga.P_SWOOP2 = 4;

/** Constant for path 'zig zag'. @final @type {Number} */
xgalaga.P_ZIGZAG = 5;

/** Constant for path 'loop 2'. @final @type {Number} */
xgalaga.P_LOOP2  = 6;

/** Constant for path 'spin'. @final @type {Number} */
xgalaga.P_SPIN = 7;

/** Constant for path 'left diag'. @final @type {Number} */
xgalaga.P_LEFTDIAG = 8;

/** Constant for path 'right diag'. @final @type {Number} */
xgalaga.P_RIGHTDIAG = 9;

/** Constant for path 'enter 1'. @final @type {Number} */
xgalaga.P_ENTER1 = 10;

/** Constant for path 'enter 2'. @final @type {Number} */
xgalaga.P_ENTER2 = 11;

/** Constant for path 'enter 3'. @final @type {Number} */
xgalaga.P_ENTER3 = 12;

/** Constant for path 'enter 4'. @final @type {Number} */
xgalaga.P_ENTER4 = 13;

/** Constant for path 'enter 5'. @final @type {Number} */
xgalaga.P_ENTER5 = 14;

/** Constant for path 'enter 6'. @final @type {Number} */
xgalaga.P_ENTER6 = 15;

/** Constant for path 'enter 7'. @final @type {Number} */
xgalaga.P_ENTER7 = 16;

/** Constant for path 'enter 8'. @final @type {Number} */
xgalaga.P_ENTER8 = 17;

/** Constant for path 'enter 9'. @final @type {Number} */
xgalaga.P_ENTER9 = 18;

/** Constant for path 'enter 10'. @final @type {Number} */
xgalaga.P_ENTER10 = 19;

/** Constant for path 'enter 11'. @final @type {Number} */
xgalaga.P_ENTER11 = 20;

/** Constant for path 'enter 12'. @final @type {Number} */
xgalaga.P_ENTER12 = 21;

/** Constant for path 'enter 13'. @final @type {Number} */
xgalaga.P_ENTER13 = 22;

/** Constant for path 'enter 14'. @final @type {Number} */
xgalaga.P_ENTER14 = 23;

/** Constant for path 'enter 15'. @final @type {Number} */
xgalaga.P_ENTER15 = 24;

/** Constant for path 'enter 16'. @final @type {Number} */
xgalaga.P_ENTER16 = 25;

/** Constant for path 'enter 17'. @final @type {Number} */
xgalaga.P_ENTER17 = 26;

/** Constant for path 'enter 18'. @final @type {Number} */
xgalaga.P_ENTER18 = 27;

/** Constant for path 'enter 19'. @final @type {Number} */
xgalaga.P_ENTER19 = 28;

/** Constant for path 'enter 20'. @final @type {Number} */
xgalaga.P_ENTER20 = 29;

/** The number of paths. @final @type {NUmber} */
xgalaga.NUM_PATHS = 30;

/** Constant for singleshot weapon. @final @type {Number} */
xgalaga.WEAPON_SINGLESHOT = 0;

/** Constant for doubleshot weapon. @final @type {Number} */
xgalaga.WEAPON_DOUBLESHOT = 1;

/** Constant for tripleshot weapon. @final @type {Number} */
xgalaga.WEAPON_TRIPLESHOT = 2;

/** The roll center. @type {Number} */
xgalaga.ctrlRollCenter = 0;

/** The roll center. @type {Number} */
xgalaga.ctrlPitchCenter = 0;

/** The roll range in degree. @type {Number} */
xgalaga.ctrlRollRange = 45;

/** The roll range in degree. @type {Number} */
xgalaga.ctrlPitchRange = 45;

/** The pitch dead zone in degree. @type {Number} */
xgalaga.ctrlPitchDeadZone = 10;

/** The roll dead zone in degree. @type {Number} */
xgalaga.ctrlRollDeadZone = 10;

/** Keycodes for yaw right. @type {Number} */
xgalaga.ctrlRight = [ 76, 39 ];

/** Keycodes for yaw left. @type {Number} */
xgalaga.ctrlLeft = [ 75, 37 ];

/** Keycodes for fire. @type {Number} */
xgalaga.ctrlFire = [ 32, 81 ];

/** Keycodes for menu. @type {Number} */
xgalaga.ctrlMenu = [ 27, -1 ];
