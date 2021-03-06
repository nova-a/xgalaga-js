/**
 * Copyright (C) 2010 Klaus Reimer <k@ailis.de>
 * See LICENSE.TXT for licensing information
 * 
 * @require xgalaga.js
 */

/**
 * Constructs a new alien.
 *
 * @param {!xgalaga.Game} game
 *            The game
 * @param {number} alienId
 *            The alien ID
 * @constructor
 * @class An alien
 */
xgalaga.Alien = function(game, alienId)
{
    this.game = game;
    this.id = alienId;
};

/** 
 * The alien ID. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.id;

/** 
 * The game. 
 * @private 
 * @type {!xgalaga.Game} 
 */
xgalaga.Alien.prototype.game;

/** 
 * The current X position. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.x = 0;

/** 
 * The current Y position. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.y = 0;

/** 
 * The current direction. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.direction = 0;

/** 
 * The current steer. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.steer = 0;

/** 
 * If alien is alive. 
 * @private 
 * @type {boolean} 
 */
xgalaga.Alien.prototype.alive = false;

/** 
 * If alien is dying. 
 * @private 
 * @type {boolean} 
 */
xgalaga.Alien.prototype.dying = false;

/** 
 * The alien path. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.path = 0;

/** 
 * Current alien path position. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.pathPos = 0;

/** 
 * The alien this alien is currently escorting. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.escorting = -1;

/** 
 * If alien is currently entering. 
 * @private 
 * @type {boolean} 
 */
xgalaga.Alien.prototype.entering = false;

/** 
 * The enter delay. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.enterDelay = 0;

/** 
 * The HTML element (For HTML render mode). 
 * @private 
 * @type {?Element} 
 */
xgalaga.Alien.prototype.element = null;

/** 
 * The shape ID. 
 * @private 
 * @type {number} 
 */
xgalaga.Alien.prototype.shape = 0;

/** 
 * The alien image. 
 * @private 
 * @type {?Image} 
 */
xgalaga.Alien.prototype.image = null;



/**
 * Resets the alien.
 *
 * @param {!xgalaga.Level} level
 *            The level data
 * @param {number} metaLevel
 *            The meta level number
 */
xgalaga.Alien.prototype.reset = function(level, metaLevel)
{
    var shape, pathInfo, id, entry;

    id = this.id;
    shape = this.shape = level.getAlienShape(id);
    if (shape >= 0)
    {
        this.alive = true;
        this.image = new Image();
        this.image.src = "images/alien" + (shape + 1) + ".png";
        this.dying = false;
        this.entering = true;
        pathInfo = level.getPathInfo(id);
        this.x = parseInt(pathInfo.getStartX() * this.game.getWidth() / 400, 10);
        this.y = parseInt(pathInfo.getStartY() * this.game.getHeight() / 500, 10);
        this.enterDelay = parseInt(level.getAlienEnterDelay(id) /
            (1 + (parseInt((metaLevel - 1) * 0.5, 10))), 10);
        this.path = level.getAlienPath(id);
        this.pathPos = 0;
        entry = pathInfo.getEntry(0);
        this.direction = entry.getDirection();
        this.steer = parseInt(entry.getDuration() / (1 +
            (parseInt((metaLevel - 1) * 0.5, 10))), 10);
        this.escorting = -1;
    }
    else
    {
        this.alive = false;
        this.image = null;
    }
};

/**
 * Checks if alien is alive.
 *
 * @return {boolean} 
 *            True if alien is alive, false if not.
 */
xgalaga.Alien.prototype.isAlive = function()
{
    return this.alive;
};

/**
 * Returns the current alien direction. This is one of the xgalaga.DIR_*
 * constants.
 *
 * @return {number} 
 *            The alien direction.
 */
xgalaga.Alien.prototype.getDirection = function()
{
    return this.direction;
};

/**
 * Returns the ID of the alien this alien is currently escorting. Returns -1
 * if alien is not escorting.
 *
 * @return {number}
 *            The alien ID.
 */
xgalaga.Alien.prototype.getEscorting = function()
{
    return this.escorting;
};

/**
 * Sets the ID of the alien this alien is currently escorting. -1 means no
 * escorting.
 *
 * @param {number} escorting
 *            The alien ID to escort or -1 for none.
 */
xgalaga.Alien.prototype.setEscorting = function(escorting)
{
    this.escorting = escorting;
};

/**
 * Checks if this alien is currently entering.
 *
 * @return {boolean} True if alien is entering, false if not
 */
xgalaga.Alien.prototype.isEntering = function()
{
    return this.entering;
};

/**
 * Moves the alien by the specified deltas.
 *
 * @param {number} x
 *            The X delta.
 * @param {number} y
 *            The Y delta.
 */

xgalaga.Alien.prototype.move = function(x, y)
{
    this.x += x;
    this.y += y;
};

/**
 * Moves the alien by the specified X delta.
 *
 * @param {number} x
 *            The X delta.
 */
xgalaga.Alien.prototype.moveX = function(x)
{
    this.x += x;
};

/**
 * Moves the alien to the specified coordinate.
 *
 * @param {number} x
 *            The X coordinate.
 * @param {number} y
 *            The Y coordinate.
 */
xgalaga.Alien.prototype.moveTo = function(x, y)
{
    this.x = x;
    this.y = y;
};

/**
 * Returns the current X position.
 *
 * @return {number} 
 *            The current X position.
 */
xgalaga.Alien.prototype.getX = function()
{
    return this.x;
};

/**
 * Returns the current Y position.
 *
 * @return {number} 
 *            The current Y position.
 */
xgalaga.Alien.prototype.getY = function()
{
    return this.y;
};

/**
 * Sets the Y position.
 *
 * @param {number} y
 *            The Y position to set.
 */
xgalaga.Alien.prototype.setY = function(y)
{
    this.y = y;
};

/**
 * Sets the X position.
 *
 * @param {number} x
 *            The x position to set.
 */
xgalaga.Alien.prototype.setX = function(x)
{
    this.x = x;
};

/**
 * Sets the direction.
 *
 * @param {number} direction
 *            The direction to set.
 */
xgalaga.Alien.prototype.setDirection = function(direction)
{
    this.direction = direction;
};

/**
 * Sets the steer.
 *
 * @param {number} steer
 *            The steer to set.
 */
xgalaga.Alien.prototype.setSteer = function(steer)
{
    this.steer = steer;
};

/**
 * Decreases the steer by one.
 */
xgalaga.Alien.prototype.decreaseSteer = function()
{
    this.steer--;
};

/**
 * Move alien to the next path
 */
xgalaga.Alien.prototype.nextPath = function()
{
    var paths, path;

    this.pathPos++;
    paths = xgalaga.PATHS;
    path = paths[this.path][this.pathPos];
    this.direction = path[0];
    this.steer = path[1];
};

/**
 * Applies a path. Argument must be one of the xgalaga.P_* constants.
 *
 * @param {number} path
 *            The path to apply.
 */
xgalaga.Alien.prototype.applyPath = function(path)
{
    var paths, entry;

    this.path = path;
    paths = xgalaga.PATHS;
    entry = paths[path][0];
    this.direction = entry[0];
    this.steer = entry[1];
    this.pathPos = 0;
};

/**
 * Starts a path. Argument must be one of the xgalaga.P_* constants.
 *
 * @param {number} path
 *            The path to start.
 */
xgalaga.Alien.prototype.startPath = function(path)
{
    var i, paths;

    paths = xgalaga.PATHS[path];
    for (i = 0; ( i < xgalaga.MAX_PATH) && (paths[i][0] >= 0);i++)
    {
        if (paths[i][0] == this.direction)
            break;

        if (paths[i][0] < 0)
        {
            this.steer = xgalaga.TURN_SPEED;
            this.path = -1;
            return;
        }
    }

    if (i >= xgalaga.MAX_PATH)
    {
        this.steer = xgalaga.TURN_SPEED;
        this.path = -1;
        return;
    }

    this.path = path;
    this.pathPos = i;
    this.steer = paths[i][1];
};

/**
 * Move alien to the next enter path
 *
 * @param {!xgalaga.Level} level
 *            The level.
 */
xgalaga.Alien.prototype.nextEnterPath = function(level)
{
    var pathInfo, pathEntry;

    this.pathPos++;
    pathInfo = level.getPathInfo(this.id);
    pathEntry = pathInfo.getEntry(this.pathPos);
    this.direction = pathEntry ? pathEntry.getDirection() : -1;
    this.steer = pathEntry ? pathEntry.getDuration() : -1;
};

/**
 * Rotates the alien to the right.
 */
xgalaga.Alien.prototype.rotateRight = function()
{
    this.direction++;
    if (this.direction > 15) this.direction = 0;
};

/**
 * Rotates the alien to the left.
 */
xgalaga.Alien.prototype.rotateLeft = function()
{
    this.direction--;
    if (this.direction < 0) this.direction = 15;
};

/**
 * Returns the enter delay.
 *
 * @return {number} The enter delay
 */
xgalaga.Alien.prototype.getEnterDelay = function()
{
    return this.enterDelay;
};

/**
 * Decreases the enter delay.
 */
xgalaga.Alien.prototype.decreaseEnterDelay = function()
{
    this.enterDelay--;
};

/**
 * Returns the path id.
 *
 * @return {number} 
 *            The path id.
 */
xgalaga.Alien.prototype.getPath = function()
{
    return this.path;
};

/**
 * Sets the path.
 *
 * @param {number} path
 *           The path to set.
 */
xgalaga.Alien.prototype.setPath = function(path)
{
    this.path = path;
};

/**
 * Returns the steer.
 * 
 * @return {number} 
 *            The steer.
 */
xgalaga.Alien.prototype.getSteer = function()
{
    return this.steer;
};

/**
 * Sets the entering flag.
 *
 * @param {boolean} entering
 *            The entering flag to set.
 */
xgalaga.Alien.prototype.setEntering = function(entering)
{
    this.entering = entering;
};

/**
 * Destroys the alien.
 *
 * TODO Dying flag seems to be unnecessary.
 */
xgalaga.Alien.prototype.destroy = function()
{
    this.dying = false;
    this.alive = false;
};

/**
 * Checks if this alien is dying.
 * 
 * @return {boolean} True if alien is dying, false if not
 */
xgalaga.Alien.prototype.isDying = function()
{
    return this.dying;
};

/**
 * Renders the alien.
 *
 * @param {(!HTMLElement|!CanvasRenderingContext2D)} ctx
 *            The graphics context. This is either a HTML container element
 *            (For HTML render mode) or a canvas 2D context (For Canvas render
 *            mode)
 */
xgalaga.Alien.prototype.render = function(ctx)
{
    var e, s, tmp, img;

    switch (this.game.getRenderMode())
    {
        case xgalaga.RENDER_MODE_CANVAS:
            if (!this.alive) return;
            img = this.image;
            if (!img.width || !img.height) return;
            ctx.drawImage(img, 0, Math.max(0, this.direction) * 20, 20, 20,
                this.x - 10, this.y - 10, 20, 20);
            break;

        default:
            e = this.element;
            if (!e)
            {
                e = this.element = document.createElement("div");
                ctx.appendChild(e);
                s = e.style;
                s.left = "-20px";
                s.top = "-20px";
                s.width = "20px";
                s.height = "20px";
                s.overflow = "hidden";
                s.position = "absolute";
                s.display = "none";
                e["prevAlive"] = false;
                e["prevShape"] = -1;
                e["prevX"] = -20;
                e["prevY"] = -20;
                e["prevDirection"] = -1;
            } 
            else s = e.style;

            if ((tmp = this.alive) != !!e["prevAlive"])
                s.display = (e["prevAlive"] = tmp) ? "block" : "none";
            if (tmp)
            {
                if ((tmp = this.shape) != +e["prevShape"])
                    s.backgroundImage = "url(images/alien" + ((e["prevShape"] = tmp) +
                        1) + ".png)";
                if ((tmp = this.x) != +e["prevX"])
                    s.left = ((e["prevX"] = tmp) - 10) + "px";
                if ((tmp = this.y) != +e["prevY"])
                    s.top = ((e["prevY"] = tmp) - 10) + "px";
                if ((tmp = this.direction) != +e["prevDirection"])
                    s.backgroundPosition = "0 " + (-(Math.max(0,
                    (e["prevDirection"] = tmp)) * 20)) + "px";
            }
    }
};
