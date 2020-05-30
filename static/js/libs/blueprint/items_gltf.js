$(document).ready(function () {
	var items = [{
		"name": "Simplecabinet",
		"image": "/static/models/thumbnails_new/SimpleCabinet.png",
		"model": "/static/models/gltf/SimpleCabinet.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bathroomcabinet",
		"image": "/static/models/thumbnails_new/bathroomCabinet.png",
		"model": "/static/models/gltf/bathroomCabinet.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Bathroomcabinetdrawer",
		"image": "/static/models/thumbnails_new/bathroomCabinetDrawer.png",
		"model": "/static/models/gltf/bathroomCabinetDrawer.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bathroommirror",
		"image": "/static/models/thumbnails_new/bathroomMirror.png",
		"model": "/static/models/gltf/bathroomMirror.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Bathroomsink",
		"image": "/static/models/thumbnails_new/bathroomSink.png",
		"model": "/static/models/gltf/bathroomSink.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bathroomsinksquare",
		"image": "/static/models/thumbnails_new/bathroomSinkSquare.png",
		"model": "/static/models/gltf/bathroomSinkSquare.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bathtub",
		"image": "/static/models/thumbnails_new/bathtub.png",
		"model": "/static/models/gltf/bathtub.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Bear",
		"image": "/static/models/thumbnails_new/bear.png",
		"model": "/static/models/gltf/bear.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Bedbunk",
		"image": "/static/models/thumbnails_new/bedBunk.png",
		"model": "/static/models/gltf/bedBunk.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Beddouble",
		"image": "/static/models/thumbnails_new/bedDouble.png",
		"model": "/static/models/gltf/bedDouble.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Bedsingle",
		"image": "/static/models/thumbnails_new/bedSingle.png",
		"model": "/static/models/gltf/bedSingle.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Bench",
		"image": "/static/models/thumbnails_new/bench.png",
		"model": "/static/models/gltf/bench.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Benchcushion",
		"image": "/static/models/thumbnails_new/benchCushion.png",
		"model": "/static/models/gltf/benchCushion.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Benchcushionlow",
		"image": "/static/models/thumbnails_new/benchCushionLow.png",
		"model": "/static/models/gltf/benchCushionLow.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Bookcaseclosed",
		"image": "/static/models/thumbnails_new/bookcaseClosed.png",
		"model": "/static/models/gltf/bookcaseClosed.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bookcasecloseddoors",
		"image": "/static/models/thumbnails_new/bookcaseClosedDoors.png",
		"model": "/static/models/gltf/bookcaseClosedDoors.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bookcaseclosedwide",
		"image": "/static/models/thumbnails_new/bookcaseClosedWide.png",
		"model": "/static/models/gltf/bookcaseClosedWide.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Bookcaseopen",
		"image": "/static/models/thumbnails_new/bookcaseOpen.png",
		"model": "/static/models/gltf/bookcaseOpen.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Bookcaseopenlow",
		"image": "/static/models/thumbnails_new/bookcaseOpenLow.png",
		"model": "/static/models/gltf/bookcaseOpenLow.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Books",
		"image": "/static/models/thumbnails_new/books.png",
		"model": "/static/models/gltf/books.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Cabinetbed",
		"image": "/static/models/thumbnails_new/cabinetBed.png",
		"model": "/static/models/gltf/cabinetBed.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Cabinetbeddrawer",
		"image": "/static/models/thumbnails_new/cabinetBedDrawer.png",
		"model": "/static/models/gltf/cabinetBedDrawer.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Cabinetbeddrawertable",
		"image": "/static/models/thumbnails_new/cabinetBedDrawerTable.png",
		"model": "/static/models/gltf/cabinetBedDrawerTable.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Cabinettelevision",
		"image": "/static/models/thumbnails_new/cabinetTelevision.png",
		"model": "/static/models/gltf/cabinetTelevision.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Cabinettelevisiondoors",
		"image": "/static/models/thumbnails_new/cabinetTelevisionDoors.png",
		"model": "/static/models/gltf/cabinetTelevisionDoors.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Cardboardboxclosed",
		"image": "/static/models/thumbnails_new/cardboardBoxClosed.png",
		"model": "/static/models/gltf/cardboardBoxClosed.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Cardboardboxopen",
		"image": "/static/models/thumbnails_new/cardboardBoxOpen.png",
		"model": "/static/models/gltf/cardboardBoxOpen.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Ceilingfan",
		"image": "/static/models/thumbnails_new/ceilingFan.png",
		"model": "/static/models/gltf/ceilingFan.gltf",
		"type": "4",
		"format": "gltf"
	}, {
		"name": "Chair",
		"image": "/static/models/thumbnails_new/chair.png",
		"model": "/static/models/gltf/chair.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Chaircushion",
		"image": "/static/models/thumbnails_new/chairCushion.png",
		"model": "/static/models/gltf/chairCushion.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Chairdesk",
		"image": "/static/models/thumbnails_new/chairDesk.png",
		"model": "/static/models/gltf/chairDesk.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Chairmoderncushion",
		"image": "/static/models/thumbnails_new/chairModernCushion.png",
		"model": "/static/models/gltf/chairModernCushion.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Chairmodernframecushion",
		"image": "/static/models/thumbnails_new/chairModernFrameCushion.png",
		"model": "/static/models/gltf/chairModernFrameCushion.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Chairrounded",
		"image": "/static/models/thumbnails_new/chairRounded.png",
		"model": "/static/models/gltf/chairRounded.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Chandelier",
		"image": "/static/models/thumbnails_new/nopreview.png",
		"model": "/static/models/gltf/chandelier.gltf",
		"type": "4",
		"format": "gltf"
	}, {
		"name": "Coatrack",
		"image": "/static/models/thumbnails_new/coatRack.png",
		"model": "/static/models/gltf/coatRack.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Coatrackstanding",
		"image": "/static/models/thumbnails_new/coatRackStanding.png",
		"model": "/static/models/gltf/coatRackStanding.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Computerkeyboard",
		"image": "/static/models/thumbnails_new/computerKeyboard.png",
		"model": "/static/models/gltf/computerKeyboard.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Computermouse",
		"image": "/static/models/thumbnails_new/computerMouse.png",
		"model": "/static/models/gltf/computerMouse.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Computerscreen",
		"image": "/static/models/thumbnails_new/computerScreen.png",
		"model": "/static/models/gltf/computerScreen.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Desk",
		"image": "/static/models/thumbnails_new/desk.png",
		"model": "/static/models/gltf/desk.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Deskcorner",
		"image": "/static/models/thumbnails_new/deskCorner.png",
		"model": "/static/models/gltf/deskCorner.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Doorway",
		"image": "/static/models/thumbnails_new/doorway.png",
		"model": "/static/models/gltf/doorway.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Doorwayfront",
		"image": "/static/models/thumbnails_new/doorwayFront.png",
		"model": "/static/models/gltf/doorwayFront.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Doorwayopen",
		"image": "/static/models/thumbnails_new/doorwayOpen.png",
		"model": "/static/models/gltf/doorwayOpen.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Dryer",
		"image": "/static/models/thumbnails_new/dryer.png",
		"model": "/static/models/gltf/dryer.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Floorcorner",
		"image": "/static/models/thumbnails_new/floorCorner.png",
		"model": "/static/models/gltf/floorCorner.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Floorcornerround",
		"image": "/static/models/thumbnails_new/floorCornerRound.png",
		"model": "/static/models/gltf/floorCornerRound.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Floorfull",
		"image": "/static/models/thumbnails_new/floorFull.png",
		"model": "/static/models/gltf/floorFull.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Floorhalf",
		"image": "/static/models/thumbnails_new/floorHalf.png",
		"model": "/static/models/gltf/floorHalf.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Hoodlarge",
		"image": "/static/models/thumbnails_new/hoodLarge.png",
		"model": "/static/models/gltf/hoodLarge.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Hoodmodern",
		"image": "/static/models/thumbnails_new/hoodModern.png",
		"model": "/static/models/gltf/hoodModern.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Kitchenbar",
		"image": "/static/models/thumbnails_new/kitchenBar.png",
		"model": "/static/models/gltf/kitchenBar.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Kitchenbarend",
		"image": "/static/models/thumbnails_new/kitchenBarEnd.png",
		"model": "/static/models/gltf/kitchenBarEnd.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Kitchenblender",
		"image": "/static/models/thumbnails_new/kitchenBlender.png",
		"model": "/static/models/gltf/kitchenBlender.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Kitchencabinet",
		"image": "/static/models/thumbnails_new/kitchenCabinet.png",
		"model": "/static/models/gltf/kitchenCabinet.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetcornerinner",
		"image": "/static/models/thumbnails_new/kitchenCabinetCornerInner.png",
		"model": "/static/models/gltf/kitchenCabinetCornerInner.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetcornerround",
		"image": "/static/models/thumbnails_new/kitchenCabinetCornerRound.png",
		"model": "/static/models/gltf/kitchenCabinetCornerRound.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetdrawer",
		"image": "/static/models/thumbnails_new/kitchenCabinetDrawer.png",
		"model": "/static/models/gltf/kitchenCabinetDrawer.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetupper",
		"image": "/static/models/thumbnails_new/kitchenCabinetUpper.png",
		"model": "/static/models/gltf/kitchenCabinetUpper.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetuppercorner",
		"image": "/static/models/thumbnails_new/kitchenCabinetUpperCorner.png",
		"model": "/static/models/gltf/kitchenCabinetUpperCorner.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetupperdouble",
		"image": "/static/models/thumbnails_new/kitchenCabinetUpperDouble.png",
		"model": "/static/models/gltf/kitchenCabinetUpperDouble.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Kitchencabinetupperlow",
		"image": "/static/models/thumbnails_new/kitchenCabinetUpperLow.png",
		"model": "/static/models/gltf/kitchenCabinetUpperLow.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Kitchencoffeemachine",
		"image": "/static/models/thumbnails_new/kitchenCoffeeMachine.png",
		"model": "/static/models/gltf/kitchenCoffeeMachine.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Kitchenfridge",
		"image": "/static/models/thumbnails_new/kitchenFridge.png",
		"model": "/static/models/gltf/kitchenFridge.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Kitchenfridgebuiltin",
		"image": "/static/models/thumbnails_new/kitchenFridgeBuiltIn.png",
		"model": "/static/models/gltf/kitchenFridgeBuiltIn.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Kitchenfridgelarge",
		"image": "/static/models/thumbnails_new/kitchenFridgeLarge.png",
		"model": "/static/models/gltf/kitchenFridgeLarge.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Kitchenfridgesmall",
		"image": "/static/models/thumbnails_new/kitchenFridgeSmall.png",
		"model": "/static/models/gltf/kitchenFridgeSmall.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Kitchenmicrowave",
		"image": "/static/models/thumbnails_new/kitchenMicrowave.png",
		"model": "/static/models/gltf/kitchenMicrowave.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Kitchensink",
		"image": "/static/models/thumbnails_new/kitchenSink.png",
		"model": "/static/models/gltf/kitchenSink.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Kitchenstove",
		"image": "/static/models/thumbnails_new/kitchenStove.png",
		"model": "/static/models/gltf/kitchenStove.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Kitchenstoveelectric",
		"image": "/static/models/thumbnails_new/kitchenStoveElectric.png",
		"model": "/static/models/gltf/kitchenStoveElectric.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Lamproundfloor",
		"image": "/static/models/thumbnails_new/lampRoundFloor.png",
		"model": "/static/models/gltf/lampRoundFloor.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Lamproundtable",
		"image": "/static/models/thumbnails_new/lampRoundTable.png",
		"model": "/static/models/gltf/lampRoundTable.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Lampsquareceiling",
		"image": "/static/models/thumbnails_new/lampSquareCeiling.png",
		"model": "/static/models/gltf/lampSquareCeiling.glb",
		"type": "4",
		"format": "gltf"
	}, {
		"name": "Lampsquarefloor",
		"image": "/static/models/thumbnails_new/lampSquareFloor.png",
		"model": "/static/models/gltf/lampSquareFloor.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Lampsquaretable",
		"image": "/static/models/thumbnails_new/lampSquareTable.png",
		"model": "/static/models/gltf/lampSquareTable.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Lampwall",
		"image": "/static/models/thumbnails_new/lampWall.png",
		"model": "/static/models/gltf/lampWall.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Laptop",
		"image": "/static/models/thumbnails_new/laptop.png",
		"model": "/static/models/gltf/laptop.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Loungechair",
		"image": "/static/models/thumbnails_new/loungeChair.png",
		"model": "/static/models/gltf/loungeChair.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Loungechairrelax",
		"image": "/static/models/thumbnails_new/loungeChairRelax.png",
		"model": "/static/models/gltf/loungeChairRelax.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Loungedesignchair",
		"image": "/static/models/thumbnails_new/loungeDesignChair.png",
		"model": "/static/models/gltf/loungeDesignChair.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Loungedesignsofa",
		"image": "/static/models/thumbnails_new/loungeDesignSofa.png",
		"model": "/static/models/gltf/loungeDesignSofa.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Loungedesignsofacorner",
		"image": "/static/models/thumbnails_new/loungeDesignSofaCorner.png",
		"model": "/static/models/gltf/loungeDesignSofaCorner.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Loungesofa",
		"image": "/static/models/thumbnails_new/loungeSofa.png",
		"model": "/static/models/gltf/loungeSofa.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Loungesofacorner",
		"image": "/static/models/thumbnails_new/loungeSofaCorner.png",
		"model": "/static/models/gltf/loungeSofaCorner.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Loungesofalong",
		"image": "/static/models/thumbnails_new/loungeSofaLong.png",
		"model": "/static/models/gltf/loungeSofaLong.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Loungesofaottoman",
		"image": "/static/models/thumbnails_new/loungeSofaOttoman.png",
		"model": "/static/models/gltf/loungeSofaOttoman.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Paneling",
		"image": "/static/models/thumbnails_new/paneling.png",
		"model": "/static/models/gltf/paneling.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Pillow",
		"image": "/static/models/thumbnails_new/pillow.png",
		"model": "/static/models/gltf/pillow.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Pillowblue",
		"image": "/static/models/thumbnails_new/pillowBlue.png",
		"model": "/static/models/gltf/pillowBlue.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Pillowbluelong",
		"image": "/static/models/thumbnails_new/pillowBlueLong.png",
		"model": "/static/models/gltf/pillowBlueLong.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Pillowlong",
		"image": "/static/models/thumbnails_new/pillowLong.png",
		"model": "/static/models/gltf/pillowLong.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Plantsmall1",
		"image": "/static/models/thumbnails_new/plantSmall1.png",
		"model": "/static/models/gltf/plantSmall1.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Plantsmall2",
		"image": "/static/models/thumbnails_new/plantSmall2.png",
		"model": "/static/models/gltf/plantSmall2.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Plantsmall3",
		"image": "/static/models/thumbnails_new/plantSmall3.png",
		"model": "/static/models/gltf/plantSmall3.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Pottedplant",
		"image": "/static/models/thumbnails_new/pottedPlant.png",
		"model": "/static/models/gltf/pottedPlant.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Radio",
		"image": "/static/models/thumbnails_new/radio.png",
		"model": "/static/models/gltf/radio.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Rugdoormat",
		"image": "/static/models/thumbnails_new/rugDoormat.png",
		"model": "/static/models/gltf/rugDoormat.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Rugrectangle",
		"image": "/static/models/thumbnails_new/rugRectangle.png",
		"model": "/static/models/gltf/rugRectangle.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Ruground",
		"image": "/static/models/thumbnails_new/rugRound.png",
		"model": "/static/models/gltf/rugRound.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Rugrounded",
		"image": "/static/models/thumbnails_new/rugRounded.png",
		"model": "/static/models/gltf/rugRounded.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Rugsquare",
		"image": "/static/models/thumbnails_new/rugSquare.png",
		"model": "/static/models/gltf/rugSquare.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Shower",
		"image": "/static/models/thumbnails_new/shower.png",
		"model": "/static/models/gltf/shower.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Showerround",
		"image": "/static/models/thumbnails_new/showerRound.png",
		"model": "/static/models/gltf/showerRound.glb",
		"type": "9",
		"format": "gltf"
	}, {
		"name": "Sidetable",
		"image": "/static/models/thumbnails_new/sideTable.png",
		"model": "/static/models/gltf/sideTable.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Sidetabledrawers",
		"image": "/static/models/thumbnails_new/sideTableDrawers.png",
		"model": "/static/models/gltf/sideTableDrawers.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Speaker",
		"image": "/static/models/thumbnails_new/speaker.png",
		"model": "/static/models/gltf/speaker.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Speakersmall",
		"image": "/static/models/thumbnails_new/speakerSmall.png",
		"model": "/static/models/gltf/speakerSmall.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Stairs",
		"image": "/static/models/thumbnails_new/stairs.png",
		"model": "/static/models/gltf/stairs.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Stairscorner",
		"image": "/static/models/thumbnails_new/stairsCorner.png",
		"model": "/static/models/gltf/stairsCorner.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Stairsopen",
		"image": "/static/models/thumbnails_new/stairsOpen.png",
		"model": "/static/models/gltf/stairsOpen.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Stairsopensingle",
		"image": "/static/models/thumbnails_new/stairsOpenSingle.png",
		"model": "/static/models/gltf/stairsOpenSingle.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Stoolbar",
		"image": "/static/models/thumbnails_new/stoolBar.png",
		"model": "/static/models/gltf/stoolBar.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Stoolbarsquare",
		"image": "/static/models/thumbnails_new/stoolBarSquare.png",
		"model": "/static/models/gltf/stoolBarSquare.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Table",
		"image": "/static/models/thumbnails_new/table.png",
		"model": "/static/models/gltf/table.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecloth",
		"image": "/static/models/thumbnails_new/tableCloth.png",
		"model": "/static/models/gltf/tableCloth.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecoffee",
		"image": "/static/models/thumbnails_new/tableCoffee.png",
		"model": "/static/models/gltf/tableCoffee.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecoffeeglass",
		"image": "/static/models/thumbnails_new/tableCoffeeGlass.png",
		"model": "/static/models/gltf/tableCoffeeGlass.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecoffeeglasssquare",
		"image": "/static/models/thumbnails_new/tableCoffeeGlassSquare.png",
		"model": "/static/models/gltf/tableCoffeeGlassSquare.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecoffeesquare",
		"image": "/static/models/thumbnails_new/tableCoffeeSquare.png",
		"model": "/static/models/gltf/tableCoffeeSquare.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecross",
		"image": "/static/models/thumbnails_new/tableCross.png",
		"model": "/static/models/gltf/tableCross.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tablecrosscloth",
		"image": "/static/models/thumbnails_new/tableCrossCloth.png",
		"model": "/static/models/gltf/tableCrossCloth.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tableglass",
		"image": "/static/models/thumbnails_new/tableGlass.png",
		"model": "/static/models/gltf/tableGlass.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Tableround",
		"image": "/static/models/thumbnails_new/tableRound.png",
		"model": "/static/models/gltf/tableRound.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Televisionantenna",
		"image": "/static/models/thumbnails_new/televisionAntenna.png",
		"model": "/static/models/gltf/televisionAntenna.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Televisionmodern",
		"image": "/static/models/thumbnails_new/televisionModern.png",
		"model": "/static/models/gltf/televisionModern.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Televisionvintage",
		"image": "/static/models/thumbnails_new/televisionVintage.png",
		"model": "/static/models/gltf/televisionVintage.glb",
		"type": "2",
		"format": "gltf"
	}, {
		"name": "Toaster",
		"image": "/static/models/thumbnails_new/toaster.png",
		"model": "/static/models/gltf/toaster.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Toilet",
		"image": "/static/models/thumbnails_new/toilet.png",
		"model": "/static/models/gltf/toilet.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Toiletsquare",
		"image": "/static/models/thumbnails_new/toiletSquare.png",
		"model": "/static/models/gltf/toiletSquare.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Trashcan",
		"image": "/static/models/thumbnails_new/trashcan.png",
		"model": "/static/models/gltf/trashcan.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Wall",
		"image": "/static/models/thumbnails_new/wall.png",
		"model": "/static/models/gltf/wall.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Wallcorner",
		"image": "/static/models/thumbnails_new/wallCorner.png",
		"model": "/static/models/gltf/wallCorner.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Wallcornerrond",
		"image": "/static/models/thumbnails_new/wallCornerRond.png",
		"model": "/static/models/gltf/wallCornerRond.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Walldoorway",
		"image": "/static/models/thumbnails_new/wallDoorway.png",
		"model": "/static/models/gltf/wallDoorway.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Walldoorwaywide",
		"image": "/static/models/thumbnails_new/wallDoorwayWide.png",
		"model": "/static/models/gltf/wallDoorwayWide.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Wallhalf",
		"image": "/static/models/thumbnails_new/wallHalf.png",
		"model": "/static/models/gltf/wallHalf.glb",
		"type": "0",
		"format": "gltf"
	}, {
		"name": "Wallwindow",
		"image": "/static/models/thumbnails_new/wallWindow.png",
		"model": "/static/models/gltf/wallWindow.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Wallwindowslide",
		"image": "/static/models/thumbnails_new/wallWindowSlide.png",
		"model": "/static/models/gltf/wallWindowSlide.glb",
		"type": "3",
		"format": "gltf"
	}, {
		"name": "Washer",
		"image": "/static/models/thumbnails_new/washer.png",
		"model": "/static/models/gltf/washer.glb",
		"type": "1",
		"format": "gltf"
	}, {
		"name": "Washerdryerstacked",
		"image": "/static/models/thumbnails_new/washerDryerStacked.png",
		"model": "/static/models/gltf/washerDryerStacked.glb",
		"type": "1",
		"format": "gltf"
	}]
	var modelTypesNum = ["0", "1", "2", "3", "4", "7", "8", "9"];

	var modelTypesIds = ["item-items", "floor-items", "wall-items", "in-wall-items", "roof-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items"];

	var itemsDiv = $("#items-wrapper");

	for (var i = 0; i < items.length; i++) {

		var item = items[i];

		itemsDiv = $("#" + modelTypesIds[modelTypesNum.indexOf(item.type)] + "-wrapper");

		var modelformat = (item.format) ? ' model-format="' + item.format + '"' : "";

		var html = '<div class="col-sm-4">' + '<a href="#" class="thumbnail add-item"' + ' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item"   data-dismiss="modal" width="96" height="96"> ' + item.name + '</a></div>';

		itemsDiv.append(html);

	}

});