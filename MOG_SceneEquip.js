//=============================================================================
// MOG_SceneEquip.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Modifica a cena de equipamento.
 * @author Moghunter
 *
 * @param FontSize
 * @desc Definição do tamanho da fonte.
 * @default 20
 *
 * @param Help X-Axis
 * @desc Definição X-Axis da janela de ajuda.
 * @default 0
 *
 * @param Help Y-Axis
 * @desc Definição Y-Axis da janela de ajuda.
 * @default 516
 *
 * @param Help Layout X-Axis
 * @desc Definição X-Axis do layout da janela de ajuda.
 * @default 0
 *
 * @param Help Layout Y-Axis
 * @desc Definição Y-Axis do layout da janela de ajuda.
 * @default -67
 * 
 * @param Command X-Axis
 * @desc Definição X-Axis da janela de comando.
 * @default 312
 *
 * @param Command Y-Axis
 * @desc Definição Y-Axis da janela de comando.
 * @default 10
 *
 * @param Command Layout X-Axis
 * @desc Definição X-Axis do layout da janela de comando.
 * @default 15
 *
 * @param Command Layout Y-Axis
 * @desc Definição Y-Axis do layout da janela de comando.
 * @default 11
 * 
 * @param Slot X-Axis
 * @desc Definição X-Axis da janela de slot.
 * @default 312
 *
 * @param Slot Y-Axis
 * @desc Definição Y-Axis da janela de slot.
 * @default 70
 *
 * @param Slot Layout X-Axis
 * @desc Definição X-Axis do layout da janela de slot.
 * @default 22
 *
 * @param Slot Layout Y-Axis
 * @desc Definição Y-Axis do layout da janela de slot.
 * @default 8
 * 
 * @param List X-Axis
 * @desc Definição X-Axis da janela de lista de items.
 * @default 305
 *
 * @param List Y-Axis
 * @desc Definição Y-Axis da janela de lista de items.
 * @default 280
 *
 * @param List Layout X-Axis
 * @desc Definição X-Axis do layout da janela de lista de items.
 * @default 0
 *
 * @param List Layout Y-Axis
 * @desc Definição Y-Axis do layout da janela de lista de items.
 * @default 0
 * 
 * @param Status X-Axis
 * @desc Definição X-Axis da janela de status.
 * @default 10
 *
 * @param Status Y-Axis
 * @desc Definição Y-Axis da janela de  status.
 * @default 120
 *
 * @param Status Layout X-Axis
 * @desc Definição X-Axis do layout da janela de status.
 * @default 0
 *
 * @param Status Layout Y-Axis
 * @desc Definição Y-Axis do layout da janela de status.
 * @default 0
 * 		
 * @help  
 * =============================================================================
 * +++ MOG - Scene Equip (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Modifica a cena de equipamento.
 *
 * =============================================================================
 * UTILIZAÇÃO
 * =============================================================================
 * As imagens do sistema deverão ser gravados na pasta.
 *
 * /img/menus/equip/
 *
 * =============================================================================
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneEquip = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneEquip');  
    Moghunter.scEquip_FontSize = Number(Moghunter.parameters['FontSize'] || 20);
	Moghunter.scEquip_HelpWindowX = 300;//Number(Moghunter.parameters['Help X-Axis'] || 0);
	Moghunter.scEquip_HelpWindowY = 620;//Number(Moghunter.parameters['Help Y-Axis'] || 516);	
	Moghunter.scEquip_HelpLayoutX = 0;//Number(Moghunter.parameters['Help Layout X-Axis'] || 0);
	Moghunter.scEquip_HelpLayoutY = 0;//Number(Moghunter.parameters['Help Layout Y-Axis'] || -67);			
	Moghunter.scEquip_ComWindowX = 380;//Number(Moghunter.parameters['Command X-Axis'] || 312);
	Moghunter.scEquip_ComWindowY = 30;//Number(Moghunter.parameters['Command Y-Axis'] || 10);	
	Moghunter.scEquip_ComLayoutX = 20;//Number(Moghunter.parameters['Command Layout X-Axis'] || 15);
	Moghunter.scEquip_ComLayoutY = 20;//Number(Moghunter.parameters['Command Layout Y-Axis'] || 11);			
	Moghunter.scEquip_SlotWindowX = 400;//Number(Moghunter.parameters['Slot X-Axis'] || 312);
	Moghunter.scEquip_SlotWindowY = 150;//Number(Moghunter.parameters['Slot Y-Axis'] || 70);	
	Moghunter.scEquip_SlotLayoutX = 0;//Number(Moghunter.parameters['Slot Layout X-Axis'] || 22);
	Moghunter.scEquip_SlotLayoutY = -38;//Number(Moghunter.parameters['Slot Layout Y-Axis'] || 8);	
	Moghunter.scEquip_ItemWindowX = 920;//Number(Moghunter.parameters['List X-Axis'] || 305);
	Moghunter.scEquip_ItemWindowY = 150;//Number(Moghunter.parameters['List Y-Axis'] || 280);
	Moghunter.scEquip_ItemLayoutX = 0;//Number(Moghunter.parameters['List Layout X-Axis'] || 0);
	Moghunter.scEquip_ItemLayoutY = 6;//Number(Moghunter.parameters['List Layout Y-Axis'] || 0);	
	Moghunter.scEquip_StatusWindowX = 150;//Number(Moghunter.parameters['Status X-Axis'] || 10);
	Moghunter.scEquip_StatusWindowY = 130;//Number(Moghunter.parameters['Status Y-Axis'] || 120);
	Moghunter.scEquip_StatusLayoutX = 0;//Number(Moghunter.parameters['Status Layout X-Axis'] || 0);
	Moghunter.scEquip_StatusLayoutY = 0;//Number(Moghunter.parameters['Status Layout Y-Axis'] || 0);
		
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Equip
//==============================
ImageManager.loadMenusequip = function(filename) {
    return this.loadBitmap('img/menus/equip/', filename, 0, true);
};

//=============================================================================
// ** Scene Equip
//=============================================================================

//==============================
// * create Background
//==============================
var _mog_scEquip_createBackground = Scene_Equip.prototype.createBackground;
Scene_Equip.prototype.createBackground = function() {
	_mog_scEquip_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
};

//==============================
// * Create
//==============================
var _mog_scEquipM_create = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function() {
	_mog_scEquipM_create.call(this);
	this._helpWindow.x = Moghunter.scEquip_HelpWindowX;
	this._helpWindow.y = Moghunter.scEquip_HelpWindowY;	
	this._helpWindowOrg = [this._helpWindow.x,this._helpWindow.y];
	this._commandWindow.x = Moghunter.scEquip_ComWindowX;
	this._commandWindow.y = Moghunter.scEquip_ComWindowY;
	this._commandWindow.contents.fontSize = Moghunter.scEquip_FontSize;	
	this._commandWindowOrg = [this._commandWindow.x,this._commandWindow.y];
    this._slotWindow.x = Moghunter.scEquip_SlotWindowX;
	this._slotWindow.y = Moghunter.scEquip_SlotWindowY;
	this._slotWindowOrg = [this._slotWindow.x,this._slotWindow.y];
	this._itemWindow.x = Moghunter.scEquip_ItemWindowX;
	this._itemWindow.y = Moghunter.scEquip_ItemWindowY;
	this._itemWindow.width = this._slotWindow.width
	this._itemWindow.height = this._slotWindow.height;
	this._itemWindowOrg = [this._itemWindow.x,this._itemWindow.y];
	this._statusWindow.x = Moghunter.scEquip_StatusWindowX;
	this._statusWindow.y = Moghunter.scEquip_StatusWindowY;
	this._statusWindowOrg = [this._statusWindow.x,this._statusWindow.y];
	this.createSprites();
	this.resetPosition();
};

//==============================
// * On Actor Change
//==============================
var _mog_scsEquipM_onActorChange = Scene_Equip.prototype.onActorChange;
Scene_Equip.prototype.onActorChange = function() {
	_mog_scsEquipM_onActorChange.call(this);
	this.resetPosition();
	this.update();
};

//==============================
// * Create Sprites
//==============================
Scene_Equip.prototype.createSprites = function() {
	this.createLayout();
	this.createLayoutHelp();
	this.createLayoutCommand();
	this.createLayoutSlot();
	this.createLayoutItem();
	
	this.createCategoryIcons();

	this.createLayoutStatus();
};

Scene_Equip.prototype.createCategoryIcons = function() { //staticccast
	this._cat = [];
	this._catBitmaps = [];
	this._catpos = [];
	this._catzoom = [];
	this._catField = new Sprite();
	this._field.addChild(this._catField);
	for(var i = 0; i < this._actor.equips().length; i++) { //슬롯개수만큼
	this._catBitmaps[i] = ImageManager.loadMenusequip("c" + i); //그림 불러오기 c0 ~ c4
	this._cat[i] = new Sprite(this._catBitmaps[i]);
	
	this._cat[i].anchor.x = 0.5;
	this._cat[i].anchor.y = 0.5;
	this._cat[i].x = -50;
	this._cat[i].y = 360;
	this._cat[i].opacity = 180;
	this._catpos[i] = [471 + (i<3?(80*i):(80*(i%2))), 192 + (79*i)];
	this._catzoom[i] = 0;
	this._catField.addChild(this._cat[i]);
	}
};

Scene_Equip.prototype.catIconMoveTo = function(value, real_value, slower) { //staticccast
	if (value == real_value) {return value};
	var dnspeed = 3 + (Math.abs(value - real_value) / slower);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

Scene_Equip.prototype.updateCatIcon = function() {
	for(var i = 0; i < this._actor.equips().length; i++){
		if(this._commandWindow.active) this.resetCatIcon(i);
		if(this._itemWindow.active)
		{
			var chosen = this._itemWindow._slotId;
			this._cat[chosen].x = this.catIconMoveTo(this._cat[chosen].x, 70, 30);
			this._cat[chosen].y = this.catIconMoveTo(this._cat[chosen].y, 70, 30);
			this._cat[chosen].opacity = 255;
			this._cat[chosen].opacity = 255;
		}
		else
		{
			if(this._cat[i].x != this._catpos[i][0])
			this._cat[i].x = this.catIconMoveTo(this._cat[i].x, this._catpos[i][0], 20);
			if(this._cat[i].y != this._catpos[i][1])
			this._cat[i].y = this.catIconMoveTo(this._cat[i].y, this._catpos[i][1], 20);
	
			var onC = this._slotWindow._index;
			if(onC > -1)	//아무 항목이나 커서가 올라갔을경우
			{
				var lastIndex = onC;
				if(this._catzoom[onC] === 0)
				{
					this._cat[onC].scale.x += 0.005;
					if( this._cat[onC].scale.x >= 1.30 )
					this._catzoom[onC] = 1;
				}
				else
				{
					this._cat[onC].scale.x -= 0.005;
					if( this._cat[onC].scale.x < 1.00 )
					this._catzoom[onC] = 0;
				}
				this._cat[onC].scale.y = this._cat[onC].scale.x;
				this._cat[onC].opacity = 230;

				if(i != onC)
					this.resetCatIcon(i);
			}
		}
	}
};

Scene_Equip.prototype.resetCatIcon = function(index){// 범위 밖 값 인자로 안 오게 체크
	this._cat[index].opacity = 180;
	this._cat[index].scale.x = 1;
	this._cat[index].scale.y = 1;
}

Scene_Equip.prototype.updateCommIcon = function() {
	// Equip Command 커서 효과 (확대축소, 투명도 등)
	if(this._commandWindow.active)
	{
		if(this._commandWindow._index === 0)
		{
			var cursorOn = this._layoutCommand1;
			var cursorOff = this._layoutCommand2;
		}
		else
		{
			var cursorOn = this._layoutCommand2;
			var cursorOff = this._layoutCommand1;
		}
		
		if(cursorOn.commZoomDirec === 0)
		{
			cursorOn.scale.x += 0.005;
			if(cursorOn.scale.x > 1.100 )
			cursorOn.commZoomDirec = 1;
		}
		else
		{
			cursorOn.scale.x -= 0.005;
			if(cursorOn.scale.x < 1.000)
			cursorOn.commZoomDirec = 0;
		}
		cursorOn.scale.y = cursorOn.scale.x;
		cursorOn.opacity = 255;
		this.resetCommIcon(cursorOff);
	}
	else
	{
		if(this._commandWindow._index === 0)
		{
			this.resetCommIcon(this._layoutCommand2);
			this._layoutCommand1.scale.x = 1.100;
			this._layoutCommand1.scale.y = 1.100;
		}
	}
};

Scene_Equip.prototype.resetCommIcon = function(layoutCommObj) {
	layoutCommObj.scale.x = 1.000;
	layoutCommObj.scale.y = 1.000;
	layoutCommObj.opacity = 180;
}

//==============================
// * Create Layout
//==============================
Scene_Equip.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadMenusequip("Layout"));
	this._field.addChild(this._layout);	
};

//==============================
// * Create LayoutHelp
//==============================
Scene_Equip.prototype.createLayoutHelp = function() {
	this._layoutHelp = new Sprite(ImageManager.loadMenusequip("LayoutHelp"));
	this._field.addChild(this._layoutHelp);	
};

//==============================
// * Create LayoutCommand
//==============================
Scene_Equip.prototype.createLayoutCommand = function() {
	this._layoutCommand1 = new Sprite(ImageManager.loadMenusequip("equipButton"));
	this._layoutCommand2 = new Sprite(ImageManager.loadMenusequip("optimizeButton"));
	this._layoutCommand1.anchor.x = 0.5;
	this._layoutCommand1.anchor.y = 0.5;
	this._layoutCommand2.anchor.x = 0.5;
	this._layoutCommand2.anchor.y = 0.5;
	this._layoutCommand1.commZoomDirec = 0;
	this._layoutCommand2.commZoomDirec = 0;
	this._field.addChild(this._layoutCommand1);	//각각 장비, 최적화 버튼 staticccast
	this._field.addChild(this._layoutCommand2);

};

//==============================
// * Create LayoutSlot
//==============================
Scene_Equip.prototype.createLayoutSlot = function() {
	this._layoutSlot = new Sprite(ImageManager.loadMenusequip("LayoutSlot"));
	this._field.addChild(this._layoutSlot);	
};

//==============================
// * Create LayoutItem
//==============================
Scene_Equip.prototype.createLayoutItem = function() {
	this._layoutItem = new Sprite(ImageManager.loadMenusequip("LayoutItem"));
	this._field.addChild(this._layoutItem);	
};

//==============================
// * Create LayoutStatus
//==============================
Scene_Equip.prototype.createLayoutStatus = function() {
	this._layoutStatus = new Sprite(ImageManager.loadMenusequip("LayoutStatus"));
	this._field.addChild(this._layoutStatus);	
};

//==============================
// * update Sprites
//==============================
Scene_Equip.prototype.updateSprites = function() {
	 this.updateSlide();
     this.updateLayout()	
};

//==============================
// * reset Position
//==============================
Scene_Equip.prototype.resetPosition = function() {
	var slide = 100
	this._helpWindow.y = this._helpWindowOrg[1] + slide;
	this._commandWindow.y = this._commandWindowOrg[1] - slide;
	this._slotWindow.x = this._slotWindowOrg[0] + slide;
	this._itemWindow.x = this._itemWindowOrg[0] + slide + 0;
	this._statusWindow.x = this._statusWindowOrg[0] - slide - 0;;	
	this._helpWindow.contentsOpacity = 0;
	this._helpWindow.contentsOpacity = 0;
	this._commandWindow.contentsOpacity = 0;
	this._slotWindow.contentsOpacity = 0;
	this._itemWindow.contentsOpacity = 0;
	this._statusWindow.contentsOpacity = 0;
};

//==============================
// * update Slide
//==============================
Scene_Equip.prototype.updateSlide = function() {
	var slideSpeed = 5;
	var opcSpeed = 10;	
	this._helpWindow.contentsOpacity += opcSpeed;
	this._commandWindow.contentsOpacity += opcSpeed;
	this._slotWindow.contentsOpacity += opcSpeed;
	this._statusWindow.contentsOpacity += opcSpeed;	
	
    if (this._helpWindow.y > this._helpWindowOrg[1]) {
		this._helpWindow.y -= slideSpeed;
		if (this._helpWindow.y < this._helpWindowOrg[1]) {this._helpWindow.y = this._helpWindowOrg[1]};
	};
    if (this._commandWindow.y < this._commandWindowOrg[1]) {
		this._commandWindow.y += slideSpeed;
		if (this._commandWindow.y > this._commandWindowOrg[1]) {this._commandWindow.y = this._commandWindowOrg[1]};
	};	
    if (this._slotWindow.x > this._slotWindowOrg[0]) {
		this._slotWindow.x -= slideSpeed;
		if (this._slotWindow.x < this._slotWindowOrg[0]) {this._slotWindow.x = this._slotWindowOrg[0]};
	};

    if (this._statusWindow.x < this._statusWindowOrg[0]) {
		this._statusWindow.x += slideSpeed;
		if (this._statusWindow.x > this._statusWindowOrg[0]) {this._statusWindow.x = this._statusWindowOrg[0]};
	};		
};

Scene_Equip.prototype.updateSlide4itemWindow = function() { //staticccast
	var slideSpeed = 12;
	var opcSpeed = 15;	
	this._itemWindow.contentsOpacity += opcSpeed;
	if (this._itemWindow.x > this._itemWindowOrg[0]) {
		this._itemWindow.x -= slideSpeed;
		if (this._itemWindow.x < this._itemWindowOrg[0]) {this._itemWindow.x = this._itemWindowOrg[0]};
	};
};

Scene_Equip.prototype.updateSlide4itemWindowGone = function() { //staticccast
	var slideSpeed = 8;
	var opcSpeed = 15;
	var disappearToX = this._itemWindowOrg[0] + 300;
	this._itemWindow.contentsOpacity -= opcSpeed;
	if (this._itemWindow.x < disappearToX) {
		this._itemWindow.x += slideSpeed;
		if (this._itemWindow.x > disappearToX) {this._itemWindow.x = disappearToX};
	};
};

//==============================
// * update Layout
//==============================
Scene_Equip.prototype.updateLayout = function() {
	this._layoutHelp.x = this._helpWindow.x + Moghunter.scEquip_HelpLayoutX;
	this._layoutHelp.y = this._helpWindow.y + Moghunter.scEquip_HelpLayoutY;
	this._layoutHelp.opacity = this._helpWindow.contentsOpacity
	this._helpWindow.opacity = 0;

	//장비, 최적화 버튼 이미지 위치 조절 staticccast
	this._layoutCommand1.x = 725;
	this._layoutCommand1.y = 70;
	this._layoutCommand1.opacity = this._commandWindow.contentsOpacity;

	this._layoutCommand2.x = this._layoutCommand1.x + 155;
	this._layoutCommand2.y = this._layoutCommand1.y
	this._layoutCommand2.opacity = this._commandWindow.contentsOpacity;

    this._commandWindow.opacity = 0;	
	this._layoutSlot.x = this._slotWindow.x + Moghunter.scEquip_SlotLayoutX;
	this._layoutSlot.y = this._slotWindow.y + Moghunter.scEquip_SlotLayoutY;
	this._layoutSlot.opacity = this._slotWindow.contentsOpacity;
    this._slotWindow.opacity = 0;		
	this._layoutItem.x = this._itemWindow.x + Moghunter.scEquip_ItemLayoutX;
	this._layoutItem.y = this._itemWindow.y + Moghunter.scEquip_ItemLayoutY;
	this._layoutItem.opacity = this._itemWindow.contentsOpacity;
    this._itemWindow.opacity = 0;	
	this._layoutStatus.x = this._statusWindow.x + Moghunter.scEquip_StatusLayoutX;
	this._layoutStatus.y = this._statusWindow.y + Moghunter.scEquip_StatusLayoutY;
	this._layoutStatus.opacity = this._statusWindow.contentsOpacity;
	this._statusWindow.opacity = 0;	
	
	this.updateCatIcon();
	//staticccast
	this.updateCommIcon();
};

//==============================
// * Update
//==============================
var _mog_scEquipM_update = Scene_Equip.prototype.update;
Scene_Equip.prototype.update = function() {
	_mog_scEquipM_update.call(this);
	if (this._layout) {this.updateSprites()};
	if (this._itemWindow.active) {this.updateSlide4itemWindow();}
	else {this.updateSlide4itemWindowGone();};
	if (this._selection) {this.updateSelection()}; //staticccast update 함수는 메뉴에서 무한실행
};

//=============================================================================
// ** Window Equip Slot
//=============================================================================

//==============================
// * Window Equip Item
//==============================
Window_EquipSlot.prototype.drawItem = function(index) {
	this.contents.fontSize = Moghunter.scEquip_FontSize + 5;
    if (this._actor) {
		var rect = this.itemRectForText(index); //수정시 글자 잘림 확인 staticccast
		rect.x = -40 + (index<3?(80*index):(80*(index%2)+10));
		rect.y = (79*index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawItemName(this._actor.equips()[index], rect.x + 138, rect.y);
		this.changePaintOpacity(true);
		
    }
};

//Selectable의 동명의 함수 오버라이딩
Window_EquipSlot.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = 60;
	rect.x = -80 + (index<3?(80*index):(80*(index%2)+10));
	rect.y = -15 + (80*index);
    return rect;
};


Window_EquipSlot.prototype.setCursorRect = function(){
	//Window 클래스 동명 함수 오버라이드
	//커서 제거 목적
	//staticccast
};


//=============================================================================
// ** Window Equip Command
//=============================================================================

//==============================
// * draw Text
//==============================

Window_EquipCommand.prototype.drawText = function(text, x, y, maxWidth, align) {
};
//장착, 최적화 버튼 글자를 숨김 staticccast


Window_EquipCommand.prototype.setCursorRect = function(text, x, y, maxWidth, align) {
	//Window 클래스 동명 함수 오버라이드
	//커서 제거 목적
	//staticccast
};



//=============================================================================
// ** Window Equip Status
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_scequip_westatus_initialize = Window_EquipStatus.prototype.initialize;
Window_EquipStatus.prototype.initialize = function(x, y) {
    _mog_scequip_westatus_initialize.call(this, x, y);
	this._parImg = ImageManager.loadMenusequip("Par");
	this._parData = [0,0];
};

//==============================
// * draw Text
//==============================
Window_EquipStatus.prototype.createFaceSprite = function() {
	this._faceSprite = new Sprite();
	this._faceSprite.x = 93;
	this._faceSprite.y = 55;
	this.addChild(this._faceSprite);
};

Window_EquipStatus.prototype.drawActorName = function(actor, x, y, width) {
    this.changeTextColor(this.hpColor(actor));
	this.drawTextAligned(actor.name(), 25, 0, 200);
}; //Windows_Base의 동명의 함수 오버라이딩

Window_EquipStatus.prototype.drawTextAligned = function(text, x, y, width) {
	var fontSizeBak = this.contents.fontSize;
	this.contents.fontSize = 30;
	this.drawText(text, x, y, width, 'center');
	this.contents.fontSize = fontSizeBak;
}; // 액터 이름을 위한 가운데정렬 텍스트 함수 staticccast

//==============================
// * refresh
//==============================
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
	this.contents.fontSize = Moghunter.scEquip_FontSize;
    if (this._actor) {
		this._parData[0] = this._parImg.width / 3;
		this._parData[1] = this._parImg.height;
    	if (!this._faceSprite) {this.createFaceSprite()};
		this.refreshFaceSprite();
		this.drawActorName(this._actor, 95, 0, 150);
		
		var fontSizeBak = this.contents.fontSize;
		this.contents.fontSize = 23;
        for (var i = 0; i < 6; i++) {
            this.drawItem(0, 120 + this.lineHeight() * (1 + i), 2 + i);
		}
		this.contents.fontSize = fontSizeBak;
    }
};

//==============================
// * refresh Face Sprite
//==============================
Window_EquipStatus.prototype.refreshFaceSprite = function() {
	 this._faceSprite.bitmap = ImageManager.loadMenusFaces1("Actor_" + this._actor._actorId);
};

//==============================
// * window Height
//==============================
Window_EquipStatus.prototype.windowHeight = function() {
    return 460;
};

//==============================
// * draw Par Name
//==============================
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
};

//==============================
// * draw Right Arrow
//==============================
Window_EquipStatus.prototype.drawRightArrowM = function(x, y,paramId) {

    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId); 
    if (diffvalue > 0) {
		 var sx = this._parData[0];
	} else if (diffvalue < 0) {
		var sx = this._parData[0] * 2;
	} else {
	    var sx = 0	
	};		
    this.contents.blt(this._parImg, sx, 0, this._parData[0], this._parData[1], x, y);	
	 
};

//==============================
// * draw Item
//==============================
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    this.drawParamName(x + this.textPadding(), y, paramId);
    if (this._actor) {
        this.drawCurrentParam(x + 50, y, paramId);
		if (this._tempActor) {this.drawRightArrowM(x + 110, y + 7,paramId)};
    }
    if (this._tempActor) {
        this.drawNewParam(x + 130, y, paramId);
    }
};

//==============================
// * update
//==============================
var _mog_scnEquipUpdate = Window_EquipStatus.prototype.update;
Window_EquipStatus.prototype.update = function() {
    _mog_scnEquipUpdate.call(this);
	this._faceSprite.opacity = this.contentsOpacity;
};

//=============================================================================
// ** Window Equip Item
//=============================================================================

//==============================
// * Window Equip Item
//==============================
var _mog_scEquip_Wequip_drawItemName = Window_EquipItem.prototype.drawItemName;
Window_EquipItem.prototype.drawItemName = function(item, x, y, width) {
	this.contents.fontSize = Moghunter.scEquip_FontSize;
    _mog_scEquip_Wequip_drawItemName.call(this,item, x, y, width);
};

Window_EquipItem.prototype.itemWidth = function(){
	return 340;
}

//==============================
// * max Cols
//==============================
Window_EquipItem.prototype.maxCols = function() {
    return 1;
};

//==============================
//	For Overriding rpg_windows.js
//==============================

Window_EquipCommand.prototype.lineHeight = function() {
    return 51;
}

Window_EquipCommand.prototype.itemRect = function(index) { //staticccast
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = 90;
    rect.height = 50;
    rect.x = 280 + index*155;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY +1;
    return rect;
};

Window_EquipCommand.prototype.windowWidth = function() {
    //return this._windowWidth; 208x48 -> 541x48 in total staticccast 
    return 600;
};

Window_EquipCommand.prototype.windowHeight = function() {
    return 100;
};

Window_EquipCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.equip2,   'equip');
    this.addCommand(TextManager.optimize, 'optimize');
    //this.addCommand(TextManager.clear,    'clear'); staticccast
};



//==============================
//	For Overriding rpg_scene.js
//==============================

Scene_Equip.prototype.createSlotWindow = function() {
    var wx = this._statusWindow.width;
    var wy = this._commandWindow.y + this._commandWindow.height;
    var ww = 540;
    var wh = 440;
    this._slotWindow = new Window_EquipSlot(wx, wy, ww, wh);
    this._slotWindow.setHelpWindow(this._helpWindow);
    this._slotWindow.setStatusWindow(this._statusWindow);
    this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
    this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
    this.addWindow(this._slotWindow);
};
/*
Scene_Equip.prototype.createCommandWindow = function() {
    var wx = 0;
    var wy = this._helpWindow.height;
    var ww = 500;
    
    this._commandWindow = new Window_EquipCommand(wx, wy, ww);
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.setHandler('equip',    this.commandEquip.bind(this));
    this._commandWindow.setHandler('optimize', this.commandOptimize.bind(this));
    this._commandWindow.setHandler('clear',    this.commandClear.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._commandWindow);
};
*/