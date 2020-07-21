// This file is auto-generated
if (!window.FormIt) {
    // Wrapper for calling "native" code as async functions
    window.callAsyncAPI = args => {
        return new Promise(res => {
            FormItInterface.CallMethodDirect(args, json => res(JSON.parse(json)));
        });
    }
window.WSM = window.WSM || {};
    
    window.WSM.APIGetActiveHistory = function() {
        args = {
            TestAPI: "WSM.APIGetActiveHistory"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateHistory = function(nHistoryID,bNonTemporary) {
        args = {
            TestAPI: "WSM.APICreateHistory",
nHistoryID: nHistoryID,
    bNonTemporary: bNonTemporary
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIChangeHistoryID = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIChangeHistoryID",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDeleteHistory = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIDeleteHistory",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDeleteAllHistories = function() {
        args = {
            TestAPI: "WSM.APIDeleteAllHistories"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllHistoriesReadOnly = function(bWithTemporary) {
        args = {
            TestAPI: "WSM.APIGetAllHistoriesReadOnly",
bWithTemporary: bWithTemporary
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllReachableHistoriesReadOnly = function(nHistoryID,bGoUp) {
        args = {
            TestAPI: "WSM.APIGetAllReachableHistoriesReadOnly",
nHistoryID: nHistoryID,
    bGoUp: bGoUp
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIUndoHistory = function(nHistoryID,bAndDeleteRedo,nApplyOnDeltaID) {
        args = {
            TestAPI: "WSM.APIUndoHistory",
nHistoryID: nHistoryID,
    bAndDeleteRedo: bAndDeleteRedo,
    nApplyOnDeltaID: nApplyOnDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRedoHistory = function(nHistoryID,nApplyOnDeltaID) {
        args = {
            TestAPI: "WSM.APIRedoHistory",
nHistoryID: nHistoryID,
    nApplyOnDeltaID: nApplyOnDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIUndoHistoryToDelta = function(nHistoryID,nDeltaID) {
        args = {
            TestAPI: "WSM.APIUndoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRedoHistoryToDelta = function(nHistoryID,nDeltaID) {
        args = {
            TestAPI: "WSM.APIRedoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDeleteAllRedoHistory = function(nHistoryID,bReuseDiscardedObjectIDs) {
        args = {
            TestAPI: "WSM.APIDeleteAllRedoHistory",
nHistoryID: nHistoryID,
    bReuseDiscardedObjectIDs: bReuseDiscardedObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICanUndoHistoryReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APICanUndoHistoryReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICanRedoHistoryReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APICanRedoHistoryReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICanUndoHistoryToDeltaReadOnly = function(nHistoryID,nDeltaID) {
        args = {
            TestAPI: "WSM.APICanUndoHistoryToDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICanRedoHistoryToDeltaReadOnly = function(nHistoryID,nDeltaID) {
        args = {
            TestAPI: "WSM.APICanRedoHistoryToDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIUndoOrRedoHistoryToDelta = function(nHistoryID,nDeltaID,bAndDeleteRedo) {
        args = {
            TestAPI: "WSM.APIUndoOrRedoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID,
    bAndDeleteRedo: bAndDeleteRedo
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllHistoryDeltasReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIGetAllHistoryDeltasReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetHistoryDeltasReadOnly = function(nHistoryID,nStartDeltaID,nEndDeltaID) {
        args = {
            TestAPI: "WSM.APIGetHistoryDeltasReadOnly",
nHistoryID: nHistoryID,
    nStartDeltaID: nStartDeltaID,
    nEndDeltaID: nEndDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMergeDeltas = function(nHistoryID,nStartDeltaID,nEndDeltaID,bReuseDiscardedObjectIDs) {
        args = {
            TestAPI: "WSM.APIMergeDeltas",
nHistoryID: nHistoryID,
    nStartDeltaID: nStartDeltaID,
    nEndDeltaID: nEndDeltaID,
    bReuseDiscardedObjectIDs: bReuseDiscardedObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIReverseFaces = function(nHistoryID,aFaceIDs) {
        args = {
            TestAPI: "WSM.APIReverseFaces",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICheckValidityReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APICheckValidityReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICheckHistoryValidityReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APICheckHistoryValidityReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIComputeAreaReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIComputeAreaReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIComputeVolumeReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIComputeVolumeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICopyObject = function(nHistoryID,nToHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APICopyObject",
nHistoryID: nHistoryID,
    nToHistoryID: nToHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDragFace = function(nHistoryID,nObjectID,nDistance,bMerge) {
        args = {
            TestAPI: "WSM.APIDragFace",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    nDistance: nDistance,
    bMerge: bMerge
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDragFaces = function(nHistoryID,aaFaceIDs,aDists,aDirs,bMerge) {
        args = {
            TestAPI: "WSM.APIDragFaces",
nHistoryID: nHistoryID,
    aaFaceIDs: aaFaceIDs,
    aDists: aDists,
    aDirs: aDirs,
    bMerge: bMerge
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIScaleFace = function(nHistoryID,nFaceID,aScaleFactor) {
        args = {
            TestAPI: "WSM.APIScaleFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    aScaleFactor: aScaleFactor
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetObjectProperties = function(nHistoryID,nObjectID,sObjectName,bReportAreaByLevel,aDefaultLevelIDs) {
        args = {
            TestAPI: "WSM.APISetObjectProperties",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    sObjectName: sObjectName,
    bReportAreaByLevel: bReportAreaByLevel,
    aDefaultLevelIDs: aDefaultLevelIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIOffsetFace = function(nHistoryID,nFaceID,dOffsetDistance,bOffsetHolesToo,trans,bReadOnly) {
        args = {
            TestAPI: "WSM.APIOffsetFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    dOffsetDistance: dOffsetDistance,
    bOffsetHolesToo: bOffsetHolesToo,
    trans: trans,
    bReadOnly: bReadOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APITaperFace = function(nHistoryID,nFaceID,dRadians,axis) {
        args = {
            TestAPI: "WSM.APITaperFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    dRadians: dRadians,
    axis: axis
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRotateFace = function(nHistoryID,nFaceID,aRadian) {
        args = {
            TestAPI: "WSM.APIRotateFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    aRadian: aRadian
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRotateFaceBetweenPoints = function(nHistoryID,nFaceID,startPt,endPt) {
        args = {
            TestAPI: "WSM.APIRotateFaceBetweenPoints",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    startPt: startPt,
    endPt: endPt
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMergeBody = function(nHistoryID,nBodyID,dSmoothCosAngle) {
        args = {
            TestAPI: "WSM.APIMergeBody",
nHistoryID: nHistoryID,
    nBodyID: nBodyID,
    dSmoothCosAngle: dSmoothCosAngle
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateBlock = function(nHistoryID,point3d1,point3d2) {
        args = {
            TestAPI: "WSM.APICreateBlock",
nHistoryID: nHistoryID,
    point3d1: point3d1,
    point3d2: point3d2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateCircleOrArc = function(nHistoryID,radius,posCenter,xAxis,yAxis,dStartParam,dEndParam,accuracyORcount,bReadOnly,trans,nMinimumNumberOfFacets) {
        args = {
            TestAPI: "WSM.APICreateCircleOrArc",
nHistoryID: nHistoryID,
    radius: radius,
    posCenter: posCenter,
    xAxis: xAxis,
    yAxis: yAxis,
    dStartParam: dStartParam,
    dEndParam: dEndParam,
    accuracyORcount: accuracyORcount,
    bReadOnly: bReadOnly,
    trans: trans,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateCircleOrArcFromPoints = function(nHistoryID,arcStartPos,arcEndPos,thirdPoint,accuracyORcount,bReadOnly,trans,nMinimumNumberOfFacets,bCircle) {
        args = {
            TestAPI: "WSM.APICreateCircleOrArcFromPoints",
nHistoryID: nHistoryID,
    arcStartPos: arcStartPos,
    arcEndPos: arcEndPos,
    thirdPoint: thirdPoint,
    accuracyORcount: accuracyORcount,
    bReadOnly: bReadOnly,
    trans: trans,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets,
    bCircle: bCircle
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateHermiteSpline = function(nHistoryID,aControlPoints,bClosed,startTangent,endTangent,bReadOnly) {
        args = {
            TestAPI: "WSM.APICreateHermiteSpline",
nHistoryID: nHistoryID,
    aControlPoints: aControlPoints,
    bClosed: bClosed,
    startTangent: startTangent,
    endTangent: endTangent,
    bReadOnly: bReadOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateClampedHermiteSplineDataReadOnly = function(nHistoryID,aControlPointsOld,startTangentOld,endTangentOld,bClosedOld,aVertexIDsOnSpline,nNumberOfNewContolPoints) {
        args = {
            TestAPI: "WSM.APICreateClampedHermiteSplineDataReadOnly",
nHistoryID: nHistoryID,
    aControlPointsOld: aControlPointsOld,
    startTangentOld: startTangentOld,
    endTangentOld: endTangentOld,
    bClosedOld: bClosedOld,
    aVertexIDsOnSpline: aVertexIDsOnSpline,
    nNumberOfNewContolPoints: nNumberOfNewContolPoints
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateRectangle = function(nHistoryID,firstEdgePt1,firstEdgePt2,projectionPt,bReadOnly) {
        args = {
            TestAPI: "WSM.APICreateRectangle",
nHistoryID: nHistoryID,
    firstEdgePt1: firstEdgePt1,
    firstEdgePt2: firstEdgePt2,
    projectionPt: projectionPt,
    bReadOnly: bReadOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateHemisphere = function(nHistoryID,nRadius,centerPt,nAccuracyORcount) {
        args = {
            TestAPI: "WSM.APICreateHemisphere",
nHistoryID: nHistoryID,
    nRadius: nRadius,
    centerPt: centerPt,
    nAccuracyORcount: nAccuracyORcount
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateCone = function(nHistoryID,nRadius,nHeight,centerPt,nAccuracyORcount) {
        args = {
            TestAPI: "WSM.APICreateCone",
nHistoryID: nHistoryID,
    nRadius: nRadius,
    nHeight: nHeight,
    centerPt: centerPt,
    nAccuracyORcount: nAccuracyORcount
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISweep = function(nHistoryID,aProfile,aPath,bRemoveUnusedProfileAndPath) {
        args = {
            TestAPI: "WSM.APISweep",
nHistoryID: nHistoryID,
    aProfile: aProfile,
    aPath: aPath,
    bRemoveUnusedProfileAndPath: bRemoveUnusedProfileAndPath
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIOffset3d = function(nHistoryID,nObjectID,dDistance) {
        args = {
            TestAPI: "WSM.APIOffset3d",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    dDistance: dDistance
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIShell = function(nHistoryID,nBodyID,dDistance) {
        args = {
            TestAPI: "WSM.APIShell",
nHistoryID: nHistoryID,
    nBodyID: nBodyID,
    dDistance: dDistance
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIBlend = function(nHistoryID,dRadius,aPathIDs,accuracyORcount,nMinimumNumberOfFacets) {
        args = {
            TestAPI: "WSM.APIBlend",
nHistoryID: nHistoryID,
    dRadius: dRadius,
    aPathIDs: aPathIDs,
    accuracyORcount: accuracyORcount,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIOffsetEdges = function(nHistoryID,nEdgeIDs,dOffsetDistance,trans,bReadOnly) {
        args = {
            TestAPI: "WSM.APIOffsetEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    dOffsetDistance: dOffsetDistance,
    trans: trans,
    bReadOnly: bReadOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICover = function(nHistoryID,aEdgeIDs,bMerge) {
        args = {
            TestAPI: "WSM.APICover",
nHistoryID: nHistoryID,
    aEdgeIDs: aEdgeIDs,
    bMerge: bMerge
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoft = function(nHistoryID,aaProfileIDs,bDeleteInteriorProfileFaces) {
        args = {
            TestAPI: "WSM.APILoft",
nHistoryID: nHistoryID,
    aaProfileIDs: aaProfileIDs,
    bDeleteInteriorProfileFaces: bDeleteInteriorProfileFaces
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIExtrudeEdges = function(nHistoryID,aProfileIDs,t) {
        args = {
            TestAPI: "WSM.APIExtrudeEdges",
nHistoryID: nHistoryID,
    aProfileIDs: aProfileIDs,
    t: t
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadAXMFile = function(nHistoryID,sFilePath,isImport,logOutputPath) {
        args = {
            TestAPI: "WSM.APILoadAXMFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    isImport: isImport,
    logOutputPath: logOutputPath
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadMaterialsFromAXMFile = function(nHistoryID,sFilePath) {
        args = {
            TestAPI: "WSM.APILoadMaterialsFromAXMFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveToAXMFileReadOnly = function(nHistoryID,aObjectIDs,sFilePath,aPreviewImage,bWithChildren) {
        args = {
            TestAPI: "WSM.APISaveToAXMFileReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    sFilePath: sFilePath,
    aPreviewImage: aPreviewImage,
    bWithChildren: bWithChildren
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadFromFile = function(nHistoryID,sFilePath,eFileType,dMaxDistanceFromOrigin,dScaleFactor) {
        args = {
            TestAPI: "WSM.APILoadFromFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    eFileType: eFileType,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dScaleFactor: dScaleFactor
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadFromFacets = function(nHistoryID,facetsData,dMaxDistanceFromOrigin,dRemoveDuplicateTol) {
        args = {
            TestAPI: "WSM.APILoadFromFacets",
nHistoryID: nHistoryID,
    facetsData: facetsData,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dRemoveDuplicateTol: dRemoveDuplicateTol
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveLastDeltaToBinaryFile = function(nHistoryID,sFilePath) {
        args = {
            TestAPI: "WSM.APISaveLastDeltaToBinaryFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveDeltaToBinaryStringReadOnly = function(nHistoryID,nDeltaID) {
        args = {
            TestAPI: "WSM.APISaveDeltaToBinaryStringReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetLastDeltaIDReadOnly = function(nHistoryID,nBeforeLast) {
        args = {
            TestAPI: "WSM.APIGetLastDeltaIDReadOnly",
nHistoryID: nHistoryID,
    nBeforeLast: nBeforeLast
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveDeltaToSolidDefReadOnly = function(nHistoryID,bForUndo) {
        args = {
            TestAPI: "WSM.APISaveDeltaToSolidDefReadOnly",
nHistoryID: nHistoryID,
    bForUndo: bForUndo
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIAddSolidDefGuids = function(nHistoryID,aObjectIDs) {
        args = {
            TestAPI: "WSM.APIAddSolidDefGuids",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadDeltaFromBinaryString = function(nHistoryID,base64Str,nDeltaID,base64encoded) {
        args = {
            TestAPI: "WSM.APILoadDeltaFromBinaryString",
nHistoryID: nHistoryID,
    base64Str: base64Str,
    nDeltaID: nDeltaID,
    base64encoded: base64encoded
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveToFileReadOnly = function(nHistoryID,aObjectIDs,sFilePath,eFileType,bWithChildren,dExportScale,aExcludedObjects,aLayerDisplayedNegateVec) {
        args = {
            TestAPI: "WSM.APISaveToFileReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    sFilePath: sFilePath,
    eFileType: eFileType,
    bWithChildren: bWithChildren,
    dExportScale: dExportScale,
    aExcludedObjects: aExcludedObjects,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveAllActiveObjectsToBinaryFileReadOnly = function(nHistoryID,sFilePath) {
        args = {
            TestAPI: "WSM.APISaveAllActiveObjectsToBinaryFileReadOnly",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveHistoryToBinaryFileReadOnly = function(nHistoryID,sFilePath,aLayerDisplayedNegateVec) {
        args = {
            TestAPI: "WSM.APISaveHistoryToBinaryFileReadOnly",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveHistoryToBinaryStringReadOnly = function(nHistoryID,bBase64Encode,aLayerDisplayedNegateVec) {
        args = {
            TestAPI: "WSM.APISaveHistoryToBinaryStringReadOnly",
nHistoryID: nHistoryID,
    bBase64Encode: bBase64Encode,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISaveToStringReadOnly = function(nHistoryID,aObjectIDs,bWithChildren,aExcludedObjects,aLayerDisplayedNegateVec,eFileType) {
        args = {
            TestAPI: "WSM.APISaveToStringReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    bWithChildren: bWithChildren,
    aExcludedObjects: aExcludedObjects,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec,
    eFileType: eFileType
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadFromString = function(nHistoryID,saveString,eFileType,dMaxDistanceFromOrigin,dScaleFactor) {
        args = {
            TestAPI: "WSM.APILoadFromString",
nHistoryID: nHistoryID,
    saveString: saveString,
    eFileType: eFileType,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dScaleFactor: dScaleFactor
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadHistoryFromBinaryString = function(nHistoryID,base64Str,base64encoded) {
        args = {
            TestAPI: "WSM.APILoadHistoryFromBinaryString",
nHistoryID: nHistoryID,
    base64Str: base64Str,
    base64encoded: base64encoded
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILoadDeltaFromBinaryFile = function(nHistoryID,sFilePath) {
        args = {
            TestAPI: "WSM.APILoadDeltaFromBinaryFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreatePolyline = function(nHistoryID,aPoint3ds,bForceClosed) {
        args = {
            TestAPI: "WSM.APICreatePolyline",
nHistoryID: nHistoryID,
    aPoint3ds: aPoint3ds,
    bForceClosed: bForceClosed
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateExtrusion = function(nHistoryID,aPoint3ds,dist) {
        args = {
            TestAPI: "WSM.APICreateExtrusion",
nHistoryID: nHistoryID,
    aPoint3ds: aPoint3ds,
    dist: dist
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateCylinder = function(nHistoryID,aPosCenter,aRadius,aHeight,aAccuracyORcount,aAxis) {
        args = {
            TestAPI: "WSM.APICreateCylinder",
nHistoryID: nHistoryID,
    aPosCenter: aPosCenter,
    aRadius: aRadius,
    aHeight: aHeight,
    aAccuracyORcount: aAccuracyORcount,
    aAxis: aAxis
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetBodyFacesReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetBodyFacesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRegisterProgressCallbacksReadOnly = function(startCbkStr,progressCbkStr,finishCbkStr,progressIncrement,progressStart,progressEnd) {
        args = {
            TestAPI: "WSM.APIRegisterProgressCallbacksReadOnly",
startCbkStr: startCbkStr,
    progressCbkStr: progressCbkStr,
    finishCbkStr: finishCbkStr,
    progressIncrement: progressIncrement,
    progressStart: progressStart,
    progressEnd: progressEnd
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetTopLevelOwnersReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetTopLevelOwnersReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectsByTypeReadOnly = function(nHistoryID,nObjectID,nType,bUpstream) {
        args = {
            TestAPI: "WSM.APIGetObjectsByTypeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    nType: nType,
    bUpstream: bUpstream
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllObjectsByTypeReadOnly = function(nHistoryID,nType) {
        args = {
            TestAPI: "WSM.APIGetAllObjectsByTypeReadOnly",
nHistoryID: nHistoryID,
    nType: nType
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectTypeReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectTypeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectNameReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectNameReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectPropertiesReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectPropertiesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetCreatedChangedAndDeletedInActiveDeltaReadOnly = function(nHistoryID,nObjectType,bForUndo) {
        args = {
            TestAPI: "WSM.APIGetCreatedChangedAndDeletedInActiveDeltaReadOnly",
nHistoryID: nHistoryID,
    nObjectType: nObjectType,
    bForUndo: bForUndo
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly = function(nHistoryID,nStartDelta,nEndDelta,aObjectTypes) {
        args = {
            TestAPI: "WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly",
nHistoryID: nHistoryID,
    nStartDelta: nStartDelta,
    nEndDelta: nEndDelta,
    aObjectTypes: aObjectTypes
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetEdgeOrVertexMarkedSmoothReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetEdgeOrVertexMarkedSmoothReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetEdgesOrVerticesMarkedSmooth = function(nHistoryID,aObjectIDs,bSmooth) {
        args = {
            TestAPI: "WSM.APISetEdgesOrVerticesMarkedSmooth",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    bSmooth: bSmooth
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsEdgeSilhouetteReadOnly = function(nHistoryID,nEdgeID,cameraPos,cameraDir,bPerspectiveView) {
        args = {
            TestAPI: "WSM.APIIsEdgeSilhouetteReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDetectSilhouettesReadOnly = function(nHistoryID,nEdgeIDs,cameraPos,cameraDir,bPerspectiveView,bSmoothOnly) {
        args = {
            TestAPI: "WSM.APIDetectSilhouettesReadOnly",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView,
    bSmoothOnly: bSmoothOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDetectFreeEdgesReadOnly = function(nHistoryID,nEdgeIDs) {
        args = {
            TestAPI: "WSM.APIDetectFreeEdgesReadOnly",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsEdgeManifoldReadOnly = function(nHistoryID,nEdgeID) {
        args = {
            TestAPI: "WSM.APIIsEdgeManifoldReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFacePlaneReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetFacePlaneReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceCentroidPoint3dReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetFaceCentroidPoint3dReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceConnectedComponentReadOnly = function(nHistoryID,nFaceID,bUseVertices,bSmooth) {
        args = {
            TestAPI: "WSM.APIGetFaceConnectedComponentReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bUseVertices: bUseVertices,
    bSmooth: bSmooth
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceVariantReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetFaceVariantReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceVertexNormalsReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetFaceVertexNormalsReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetVertexPoint3dReadOnly = function(nHistoryID,nVertexID) {
        args = {
            TestAPI: "WSM.APIGetVertexPoint3dReadOnly",
nHistoryID: nHistoryID,
    nVertexID: nVertexID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetIdOfActiveDeltaReadOnly = function(nHistoryID,nDeltaOffset) {
        args = {
            TestAPI: "WSM.APIGetIdOfActiveDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaOffset: nDeltaOffset
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetBodyEdgesReadOnly = function(nHistoryID,nBodyID) {
        args = {
            TestAPI: "WSM.APIGetBodyEdgesReadOnly",
nHistoryID: nHistoryID,
    nBodyID: nBodyID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllNonOwnedReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIGetAllNonOwnedReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllConnectedNonOwnedReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetAllConnectedNonOwnedReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRayFireReadOnly = function(nHistoryID,line3dPickRay,dRayRadius,bVertices,bEdges,bFaces) {
        args = {
            TestAPI: "WSM.APIRayFireReadOnly",
nHistoryID: nHistoryID,
    line3dPickRay: line3dPickRay,
    dRayRadius: dRayRadius,
    bVertices: bVertices,
    bEdges: bEdges,
    bFaces: bFaces
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRayFireSortedReadOnly = function(nHistoryID,line3dPickRay,dRayRadius,bVertices,bEdges,bFaces,dMaxParam,bSearchInGroups) {
        args = {
            TestAPI: "WSM.APIRayFireSortedReadOnly",
nHistoryID: nHistoryID,
    line3dPickRay: line3dPickRay,
    dRayRadius: dRayRadius,
    bVertices: bVertices,
    bEdges: bEdges,
    bFaces: bFaces,
    dMaxParam: dMaxParam,
    bSearchInGroups: bSearchInGroups
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIntersectsNegativeSideOfPlanesReadOnly = function(nHistoryID,aPlanes,dTol,bVertices,bEdges,bFaces,bStrict,line3dPickRay,bSearchInGroups,bPickInstances) {
        args = {
            TestAPI: "WSM.APIIntersectsNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    aPlanes: aPlanes,
    dTol: dTol,
    bVertices: bVertices,
    bEdges: bEdges,
    bFaces: bFaces,
    bStrict: bStrict,
    line3dPickRay: line3dPickRay,
    bSearchInGroups: bSearchInGroups,
    bPickInstances: bPickInstances
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APITransformObject = function(nHistoryID,nObjectID,transf3d) {
        args = {
            TestAPI: "WSM.APITransformObject",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    transf3d: transf3d
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APITransformObjects = function(nHistoryID,aObjectIDs,transf3d) {
        args = {
            TestAPI: "WSM.APITransformObjects",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    transf3d: transf3d
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDeleteObject = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIDeleteObject",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDeleteObjects = function(nHistoryID,aObjectIDs) {
        args = {
            TestAPI: "WSM.APIDeleteObjects",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateEmptyBody = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APICreateEmptyBody",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIAddFaceComponentToBody = function(nHistoryID,nFaceID,nBodyID) {
        args = {
            TestAPI: "WSM.APIAddFaceComponentToBody",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    nBodyID: nBodyID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMoveVertices = function(nHistoryID,aVertexIDs,aNewVertexPositions) {
        args = {
            TestAPI: "WSM.APIMoveVertices",
nHistoryID: nHistoryID,
    aVertexIDs: aVertexIDs,
    aNewVertexPositions: aNewVertexPositions
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMoveObject = function(nHistoryID,objectID,displacement) {
        args = {
            TestAPI: "WSM.APIMoveObject",
nHistoryID: nHistoryID,
    objectID: objectID,
    displacement: displacement
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMoveObjects = function(nHistoryID,objectIDs,transf3d) {
        args = {
            TestAPI: "WSM.APIMoveObjects",
nHistoryID: nHistoryID,
    objectIDs: objectIDs,
    transf3d: transf3d
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDumpResults = function() {
        args = {
            TestAPI: "WSM.APIDumpResults"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetResultsCount = function() {
        args = {
            TestAPI: "WSM.APIGetResultsCount"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIClearResults = function() {
        args = {
            TestAPI: "WSM.APIClearResults"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIConnectPoint3ds = function(nHistoryID,point3d1,point3d2) {
        args = {
            TestAPI: "WSM.APIConnectPoint3ds",
nHistoryID: nHistoryID,
    point3d1: point3d1,
    point3d2: point3d2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIConnectVertexAndPoint3d = function(nHistoryID,nVertexID,point3d) {
        args = {
            TestAPI: "WSM.APIConnectVertexAndPoint3d",
nHistoryID: nHistoryID,
    nVertexID: nVertexID,
    point3d: point3d
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIConnectVertices = function(nHistoryID,nVertexID1,nVertexID2) {
        args = {
            TestAPI: "WSM.APIConnectVertices",
nHistoryID: nHistoryID,
    nVertexID1: nVertexID1,
    nVertexID2: nVertexID2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIImprint = function(nHistoryID,nObjectID1,nObjectID2,bChangeBoth) {
        args = {
            TestAPI: "WSM.APIImprint",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    bChangeBoth: bChangeBoth
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIImprintWithPlane = function(nHistoryID,nObjectID,plane) {
        args = {
            TestAPI: "WSM.APIImprintWithPlane",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    plane: plane
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsEdgeOnCircleReadOnly = function(nHistoryID,nEdgeID) {
        args = {
            TestAPI: "WSM.APIIsEdgeOnCircleReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIEditCircleEdges = function(nHistoryID,nEdgeIDs,radius,center,normal,xaxis,angle) {
        args = {
            TestAPI: "WSM.APIEditCircleEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    radius: radius,
    center: center,
    normal: normal,
    xaxis: xaxis,
    angle: angle
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsEdgeOnSplineReadOnly = function(nHistoryID,nEdgeID) {
        args = {
            TestAPI: "WSM.APIIsEdgeOnSplineReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIEditSplineEdges = function(nHistoryID,nEdgeIDs,aControlPoints,bClosed,startTangent,endTangent) {
        args = {
            TestAPI: "WSM.APIEditSplineEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    aControlPoints: aControlPoints,
    bClosed: bClosed,
    startTangent: startTangent,
    endTangent: endTangent
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsFaceOnCylinderReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIIsFaceOnCylinderReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIEditCylinderFaces = function(nHistoryID,nFaceIDs,radius,center,normal,xaxis) {
        args = {
            TestAPI: "WSM.APIEditCylinderFaces",
nHistoryID: nHistoryID,
    nFaceIDs: nFaceIDs,
    radius: radius,
    center: center,
    normal: normal,
    xaxis: xaxis
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsFaceOnSphereReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIIsFaceOnSphereReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIEditSphereFaces = function(nHistoryID,nFaceIDs,radius,center,normal,xaxis) {
        args = {
            TestAPI: "WSM.APIEditSphereFaces",
nHistoryID: nHistoryID,
    nFaceIDs: nFaceIDs,
    radius: radius,
    center: center,
    normal: normal,
    xaxis: xaxis
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsFaceOnExtrudeReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIIsFaceOnExtrudeReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsFaceOnBlendReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIIsFaceOnBlendReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIUnite = function(nHistoryID,nObjectID1,nObjectID2,aExtraObjectsIDs) {
        args = {
            TestAPI: "WSM.APIUnite",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    aExtraObjectsIDs: aExtraObjectsIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISubtract = function(nHistoryID,nObjectID1,nObjectID2,aExtraObjectsIDs) {
        args = {
            TestAPI: "WSM.APISubtract",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    aExtraObjectsIDs: aExtraObjectsIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIUniteNonDestructive = function(blank,tools) {
        args = {
            TestAPI: "WSM.APIUniteNonDestructive",
blank: blank,
    tools: tools
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISubtractNonDestructive = function(blank,tools) {
        args = {
            TestAPI: "WSM.APISubtractNonDestructive",
blank: blank,
    tools: tools
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISeparate = function(nHistoryID,nBodyID) {
        args = {
            TestAPI: "WSM.APISeparate",
nHistoryID: nHistoryID,
    nBodyID: nBodyID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISlice = function(nHistoryID,nDestinationHistoryID,nObjectID,plane) {
        args = {
            TestAPI: "WSM.APISlice",
nHistoryID: nHistoryID,
    nDestinationHistoryID: nDestinationHistoryID,
    nObjectID: nObjectID,
    plane: plane
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetMemorySizeReadOnly = function(nHistoryID,bCollapsedHistoryWithLiveObjsOnly) {
        args = {
            TestAPI: "WSM.APIGetMemorySizeReadOnly",
nHistoryID: nHistoryID,
    bCollapsedHistoryWithLiveObjsOnly: bCollapsedHistoryWithLiveObjsOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetVersionReadOnly = function() {
        args = {
            TestAPI: "WSM.APIGetVersionReadOnly"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetBoxReadOnly = function(nHistoryID,nObjectID,transf) {
        args = {
            TestAPI: "WSM.APIGetBoxReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    transf: transf
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIEnableJournaling = function(nHistoryID,sFilePath,bIncludeReadOnly) {
        args = {
            TestAPI: "WSM.APIEnableJournaling",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    bIncludeReadOnly: bIncludeReadOnly
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIEnableJournalingTypes = function(aTypes) {
        args = {
            TestAPI: "WSM.APIEnableJournalingTypes",
aTypes: aTypes
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDisableJournaling = function() {
        args = {
            TestAPI: "WSM.APIDisableJournaling"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIFaceContainsPointReadOnly = function(nHistoryID,nFaceID,point) {
        args = {
            TestAPI: "WSM.APIFaceContainsPointReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    point: point
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetInvalidID = function() {
        args = {
            TestAPI: "WSM.APIGetInvalidID"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIValidID = function(nID) {
        args = {
            TestAPI: "WSM.APIValidID",
nID: nID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.FacetsBodyData = function(m_points,m_polygonIndices,m_polygonSmoothingIds,m_colors,m_polygonColorIndices,m_pointColors) {
        args = {
            TestAPI: "WSM.FacetsBodyData",
m_points: m_points,
    m_polygonIndices: m_polygonIndices,
    m_polygonSmoothingIds: m_polygonSmoothingIds,
    m_colors: m_colors,
    m_polygonColorIndices: m_polygonColorIndices,
    m_pointColors: m_pointColors
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.GroupInstancePath = function(objectIDs) {
        args = {
            TestAPI: "WSM.GroupInstancePath",
objectIDs: objectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.GroupInstancePathAreEqual = function(path1,path2) {
        args = {
            TestAPI: "WSM.GroupInstancePathAreEqual",
path1: path1,
    path2: path2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.ObjectHistoryID = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.ObjectHistoryID",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.ObjectHistoryIDAreEqual = function(id1,id2) {
        args = {
            TestAPI: "WSM.ObjectHistoryIDAreEqual",
id1: id1,
    id2: id2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.Color = function(r,g,b,a) {
        args = {
            TestAPI: "WSM.Color",
r: r,
    g: g,
    b: b,
    a: a
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.ColorAreEqual = function(c1,c2) {
        args = {
            TestAPI: "WSM.ColorAreEqual",
c1: c1,
    c2: c2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetCoedgeDirectionReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetCoedgeDirectionReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetConvexityReadOnly = function(nHistoryID,nEdgeOrLoopID) {
        args = {
            TestAPI: "WSM.APIGetConvexityReadOnly",
nHistoryID: nHistoryID,
    nEdgeOrLoopID: nEdgeOrLoopID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetConvexityConnectedComponentReadOnly = function(nHistoryID,nLoopOrFaceID,nConvexity) {
        args = {
            TestAPI: "WSM.APIGetConvexityConnectedComponentReadOnly",
nHistoryID: nHistoryID,
    nLoopOrFaceID: nLoopOrFaceID,
    nConvexity: nConvexity
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICopyOrSketchAndTransformObjects = function(nFromHistoryID,nToHistoryID,aFromObjectIDs,transform,nNumCopies,bGroupBodies,groupTransf3d) {
        args = {
            TestAPI: "WSM.APICopyOrSketchAndTransformObjects",
nFromHistoryID: nFromHistoryID,
    nToHistoryID: nToHistoryID,
    aFromObjectIDs: aFromObjectIDs,
    transform: transform,
    nNumCopies: nNumCopies,
    bGroupBodies: bGroupBodies,
    groupTransf3d: groupTransf3d
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetObjectsMaterial = function(nHistoryID,aObjectIDs,nMaterialID) {
        args = {
            TestAPI: "WSM.APISetObjectsMaterial",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    nMaterialID: nMaterialID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetFaceBacksideMaterial = function(nHistoryID,aFaceIDs,nMaterialID) {
        args = {
            TestAPI: "WSM.APISetFaceBacksideMaterial",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    nMaterialID: nMaterialID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceBacksideMaterialReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetFaceBacksideMaterialReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectAttributesReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectAttributesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectMaterialReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetObjectMaterialReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateMaterial = function(nHistoryID,nColor,dHorizonalScale,dVerticalScale,nTextureID,sMaterialName,sMaterialIdentifier,aAdditionalRenderData,aAdditionalTextures) {
        args = {
            TestAPI: "WSM.APICreateMaterial",
nHistoryID: nHistoryID,
    nColor: nColor,
    dHorizonalScale: dHorizonalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID,
    sMaterialName: sMaterialName,
    sMaterialIdentifier: sMaterialIdentifier,
    aAdditionalRenderData: aAdditionalRenderData,
    aAdditionalTextures: aAdditionalTextures
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateMaterialWithTexture = function(nHistoryID,nColor,dHorizonalScale,dVerticalScale,aBitmapData,bUseBitmapAlpha,sMaterialName,sMaterialIdentifier,aAdditionalRenderData,aAdditionalTextures,sTextureName) {
        args = {
            TestAPI: "WSM.APICreateMaterialWithTexture",
nHistoryID: nHistoryID,
    nColor: nColor,
    dHorizonalScale: dHorizonalScale,
    dVerticalScale: dVerticalScale,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha,
    sMaterialName: sMaterialName,
    sMaterialIdentifier: sMaterialIdentifier,
    aAdditionalRenderData: aAdditionalRenderData,
    aAdditionalTextures: aAdditionalTextures,
    sTextureName: sTextureName
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetMaterialColor = function(nHistoryID,nMaterialID,nColor) {
        args = {
            TestAPI: "WSM.APISetMaterialColor",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    nColor: nColor
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetMaterialData = function(nHistoryID,nMaterialID,nColor,dHorizontalScale,dVerticalScale,nTextureID) {
        args = {
            TestAPI: "WSM.APISetMaterialData",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    nColor: nColor,
    dHorizontalScale: dHorizontalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetMaterialTexture = function(nHistoryID,nMaterialID,dHorizontalScale,dVerticalScale,nTextureID) {
        args = {
            TestAPI: "WSM.APISetMaterialTexture",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    dHorizontalScale: dHorizontalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetMaterialDataReadOnly = function(nHistoryID,nMaterialID) {
        args = {
            TestAPI: "WSM.APIGetMaterialDataReadOnly",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateTexture = function(nHistoryID,aBitmapData,bUseBitmapAlpha,sTextureName) {
        args = {
            TestAPI: "WSM.APICreateTexture",
nHistoryID: nHistoryID,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha,
    sTextureName: sTextureName
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetTextureDataReadOnly = function(nHistoryID,nTextureID) {
        args = {
            TestAPI: "WSM.APIGetTextureDataReadOnly",
nHistoryID: nHistoryID,
    nTextureID: nTextureID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetTextureData = function(nHistoryID,nTextureID,aBitmapData,bUseBitmapAlpha) {
        args = {
            TestAPI: "WSM.APISetTextureData",
nHistoryID: nHistoryID,
    nTextureID: nTextureID,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectTextureCoordinatesReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectTextureCoordinatesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateLevelObjects = function(nHistoryID,aLevelsData) {
        args = {
            TestAPI: "WSM.APICreateLevelObjects",
nHistoryID: nHistoryID,
    aLevelsData: aLevelsData
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetLevelsData = function(nHistoryID,aLevelIDs,aLevelsData) {
        args = {
            TestAPI: "WSM.APISetLevelsData",
nHistoryID: nHistoryID,
    aLevelIDs: aLevelIDs,
    aLevelsData: aLevelsData
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetLevelDataReadOnly = function(nHistoryID,nLevelID) {
        args = {
            TestAPI: "WSM.APIGetLevelDataReadOnly",
nHistoryID: nHistoryID,
    nLevelID: nLevelID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetObjectsLevels = function(nHistoryID,aObjectIDs,aLevelsIDs) {
        args = {
            TestAPI: "WSM.APISetObjectsLevels",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    aLevelsIDs: aLevelsIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectLayersReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectLayersReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetObjectLevelsReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIGetObjectLevelsReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsObjectLiveReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIIsObjectLiveReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsHistoryLiveReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIIsHistoryLiveReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsNonOwnedReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIIsNonOwnedReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetLocalCoordinateSystemReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIGetLocalCoordinateSystemReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetLocalCoordinateSystem = function(nHistoryID,transf3d) {
        args = {
            TestAPI: "WSM.APISetLocalCoordinateSystem",
nHistoryID: nHistoryID,
    transf3d: transf3d
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateImageObject = function(nHistoryID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector) {
        args = {
            TestAPI: "WSM.APICreateImageObject",
nHistoryID: nHistoryID,
    sName: sName,
    nTextureID: nTextureID,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateImageObjectWithTexture = function(nHistoryID,sName,fAlphaValue,bFeaturesVisible,aCornersVector,aBitmapData,sTextureName) {
        args = {
            TestAPI: "WSM.APICreateImageObjectWithTexture",
nHistoryID: nHistoryID,
    sName: sName,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector,
    aBitmapData: aBitmapData,
    sTextureName: sTextureName
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateSatelliteImageObject = function(nHistoryID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector,coordinates,coordinatesSpan,aPixelDimensionsVector) {
        args = {
            TestAPI: "WSM.APICreateSatelliteImageObject",
nHistoryID: nHistoryID,
    sName: sName,
    nTextureID: nTextureID,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector,
    coordinates: coordinates,
    coordinatesSpan: coordinatesSpan,
    aPixelDimensionsVector: aPixelDimensionsVector
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMoveImage = function(nHistoryID,nImageID,nShift) {
        args = {
            TestAPI: "WSM.APIMoveImage",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    nShift: nShift
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetImageData = function(nHistoryID,nImageID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector) {
        args = {
            TestAPI: "WSM.APISetImageData",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    sName: sName,
    nTextureID: nTextureID,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceFacetsReadOnly = function(nHistoryID,nFaceID) {
        args = {
            TestAPI: "WSM.APIGetFaceFacetsReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetSatelliteData = function(nHistoryID,nImageID,coordinates,coordinatesSpan,aPixelDimensions) {
        args = {
            TestAPI: "WSM.APISetSatelliteData",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    coordinates: coordinates,
    coordinatesSpan: coordinatesSpan,
    aPixelDimensions: aPixelDimensions
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRemoveSatelliteData = function(nHistoryID,nImageID) {
        args = {
            TestAPI: "WSM.APIRemoveSatelliteData",
nHistoryID: nHistoryID,
    nImageID: nImageID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetImageDataReadOnly = function(nHistoryID,nImageID) {
        args = {
            TestAPI: "WSM.APIGetImageDataReadOnly",
nHistoryID: nHistoryID,
    nImageID: nImageID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetSatelliteDataReadOnly = function(nHistoryID,nImageID) {
        args = {
            TestAPI: "WSM.APIGetSatelliteDataReadOnly",
nHistoryID: nHistoryID,
    nImageID: nImageID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateGroup = function(nHistoryID,aObjectIDs,aInstanceTransforms,nReferencedHistoryID,transGeometry) {
        args = {
            TestAPI: "WSM.APICreateGroup",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    aInstanceTransforms: aInstanceTransforms,
    nReferencedHistoryID: nReferencedHistoryID,
    transGeometry: transGeometry
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetRevitFamilyInformationReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIGetRevitFamilyInformationReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetRevitFamilyInformation = function(nHistoryID,bIsGeneratedFromRFA,bIsGeneratedFromBuiltinRFA,familyCategory,familyReference,familyType,familyExtraData) {
        args = {
            TestAPI: "WSM.APISetRevitFamilyInformation",
nHistoryID: nHistoryID,
    bIsGeneratedFromRFA: bIsGeneratedFromRFA,
    bIsGeneratedFromBuiltinRFA: bIsGeneratedFromBuiltinRFA,
    familyCategory: familyCategory,
    familyReference: familyReference,
    familyType: familyType,
    familyExtraData: familyExtraData
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetGroupReferencedHistoryReadOnly = function(nHistoryID,nGroupID) {
        args = {
            TestAPI: "WSM.APIGetGroupReferencedHistoryReadOnly",
nHistoryID: nHistoryID,
    nGroupID: nGroupID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetAllAggregateTransf3dsReadOnly = function(nReferencedHistoryID,nTopMostHistoryID) {
        args = {
            TestAPI: "WSM.APIGetAllAggregateTransf3dsReadOnly",
nReferencedHistoryID: nReferencedHistoryID,
    nTopMostHistoryID: nTopMostHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIFlattenGroupsOrInstances = function(nHistoryID,aGroupOrInstanceIDs,bRecursive) {
        args = {
            TestAPI: "WSM.APIFlattenGroupsOrInstances",
nHistoryID: nHistoryID,
    aGroupOrInstanceIDs: aGroupOrInstanceIDs,
    bRecursive: bRecursive
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIAddInstancesToGroup = function(nHistoryID,nGroupID,aTransforms) {
        args = {
            TestAPI: "WSM.APIAddInstancesToGroup",
nHistoryID: nHistoryID,
    nGroupID: nGroupID,
    aTransforms: aTransforms
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateSeparateHistoriesForInstances = function(nHistoryID,aInstanceIDs,bNewGroupPerInstance) {
        args = {
            TestAPI: "WSM.APICreateSeparateHistoriesForInstances",
nHistoryID: nHistoryID,
    aInstanceIDs: aInstanceIDs,
    bNewGroupPerInstance: bNewGroupPerInstance
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateStringAttribute = function(nHistoryID,sKey,sValue,aObjIDs,nCopyBehavior,bIsSharedOnSplit) {
        args = {
            TestAPI: "WSM.APICreateStringAttribute",
nHistoryID: nHistoryID,
    sKey: sKey,
    sValue: sValue,
    aObjIDs: aObjIDs,
    nCopyBehavior: nCopyBehavior,
    bIsSharedOnSplit: bIsSharedOnSplit
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetStringAttributeKeyValueReadOnly = function(nHistoryID,nStringAttributeID) {
        args = {
            TestAPI: "WSM.APIGetStringAttributeKeyValueReadOnly",
nHistoryID: nHistoryID,
    nStringAttributeID: nStringAttributeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetStringAttributeValue = function(nHistoryID,nStringAttributeID,sValue) {
        args = {
            TestAPI: "WSM.APISetStringAttributeValue",
nHistoryID: nHistoryID,
    nStringAttributeID: nStringAttributeID,
    sValue: sValue
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetStringAttributesByKeyReadOnly = function(nHistoryID,nObjectID,sKey) {
        args = {
            TestAPI: "WSM.APIGetStringAttributesByKeyReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    sKey: sKey
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetRenderableFaceReadOnly = function(nHistoryID,nFaceID,bCalculateTexCoords,bBackSide) {
        args = {
            TestAPI: "WSM.APIGetRenderableFaceReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bCalculateTexCoords: bCalculateTexCoords,
    bBackSide: bBackSide
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetFaceUVDataAttributes = function(nHistoryID,aFaceIDs,rTransf3d,bReplaceTransform,tformCenter) {
        args = {
            TestAPI: "WSM.APISetFaceUVDataAttributes",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    rTransf3d: rTransf3d,
    bReplaceTransform: bReplaceTransform,
    tformCenter: tformCenter
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceUVDataTransformReadOnly = function(nHistoryID,nFaceID,bBackSide) {
        args = {
            TestAPI: "WSM.APIGetFaceUVDataTransformReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bBackSide: bBackSide
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetFaceUVDataAttributeUVsReadOnly = function(nHistoryID,nFaceUVDataAttributeID) {
        args = {
            TestAPI: "WSM.APIGetFaceUVDataAttributeUVsReadOnly",
nHistoryID: nHistoryID,
    nFaceUVDataAttributeID: nFaceUVDataAttributeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetEdgePointsReadOnly = function(nHistoryID,nEdgeID) {
        args = {
            TestAPI: "WSM.APIGetEdgePointsReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsHistoryNonTemporaryReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIIsHistoryNonTemporaryReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateLayer = function(nHistoryID,name,bDisplayed) {
        args = {
            TestAPI: "WSM.APICreateLayer",
nHistoryID: nHistoryID,
    name: name,
    bDisplayed: bDisplayed
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetLayerDataReadOnly = function(nHistoryID,nLayerID) {
        args = {
            TestAPI: "WSM.APIGetLayerDataReadOnly",
nHistoryID: nHistoryID,
    nLayerID: nLayerID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetLayerData = function(nHistoryID,nLayerID,name,bDisplayed) {
        args = {
            TestAPI: "WSM.APISetLayerData",
nHistoryID: nHistoryID,
    nLayerID: nLayerID,
    name: name,
    bDisplayed: bDisplayed
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetLayersDisplayed = function(nHistoryID,aLayerIDs,bDisplayed) {
        args = {
            TestAPI: "WSM.APISetLayersDisplayed",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    bDisplayed: bDisplayed
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIAddObjectsLayers = function(nHistoryID,aLayerIDs,aObjectIDs) {
        args = {
            TestAPI: "WSM.APIAddObjectsLayers",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    aObjectIDs: aObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIRemoveObjectsLayers = function(nHistoryID,aLayerIDs,aObjectIDs) {
        args = {
            TestAPI: "WSM.APIRemoveObjectsLayers",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    aObjectIDs: aObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIAddRemoveObjectsLayers = function(nHistoryID,aAddLayerIDs,aRemoveLayerIDs,aObjectIDs) {
        args = {
            TestAPI: "WSM.APIAddRemoveObjectsLayers",
nHistoryID: nHistoryID,
    aAddLayerIDs: aAddLayerIDs,
    aRemoveLayerIDs: aRemoveLayerIDs,
    aObjectIDs: aObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateGeometryFromData = function(nHistoryID,aTextures,aMaterials,aLayers,aInstances,aFaceCollections,aEdges,aCurves,aImages,aGroupName,bCreateMesh) {
        args = {
            TestAPI: "WSM.APICreateGeometryFromData",
nHistoryID: nHistoryID,
    aTextures: aTextures,
    aMaterials: aMaterials,
    aLayers: aLayers,
    aInstances: aInstances,
    aFaceCollections: aFaceCollections,
    aEdges: aEdges,
    aCurves: aCurves,
    aImages: aImages,
    aGroupName: aGroupName,
    bCreateMesh: bCreateMesh
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateEdgesFromData = function(nHistoryID,aLayers,aEdges,aCurves,bCreateMesh,accuracyORcount) {
        args = {
            TestAPI: "WSM.APICreateEdgesFromData",
nHistoryID: nHistoryID,
    aLayers: aLayers,
    aEdges: aEdges,
    aCurves: aCurves,
    bCreateMesh: bCreateMesh,
    accuracyORcount: accuracyORcount
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsEdgeMergeableReadOnly = function(nHistoryID,nEdgeID,bUseMaterial) {
        args = {
            TestAPI: "WSM.APIIsEdgeMergeableReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    bUseMaterial: bUseMaterial
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetEdgeStyleReadOnly = function(nHistoryID,nEdgeID) {
        args = {
            TestAPI: "WSM.APIGetEdgeStyleReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetEdgesStyle = function(nHistoryID,aEdgeIDs,nColor) {
        args = {
            TestAPI: "WSM.APISetEdgesStyle",
nHistoryID: nHistoryID,
    aEdgeIDs: aEdgeIDs,
    nColor: nColor
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsExactMatchReadOnly = function(nHistoryID1,nHistoryID2,nObjectID1,nObjectID2) {
        args = {
            TestAPI: "WSM.APIIsExactMatchReadOnly",
nHistoryID1: nHistoryID1,
    nHistoryID2: nHistoryID2,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIDebugObjectReadOnly = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.APIDebugObjectReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetDynamoModelInformationReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIGetDynamoModelInformationReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APISetDynamoModelInformation = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APISetDynamoModelInformation",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.Is32Bit = function() {
        args = {
            TestAPI: "WSM.Is32Bit"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetConnectedEdgesReadOnly = function(nHistoryID,nEdgeID,bBreakOnNonSmooth) {
        args = {
            TestAPI: "WSM.APIGetConnectedEdgesReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    bBreakOnNonSmooth: bBreakOnNonSmooth
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetEnabledJournalingTypesReadOnly = function() {
        args = {
            TestAPI: "WSM.APIGetEnabledJournalingTypesReadOnly"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetHistoryReferencingGroupsReadOnly = function(nHistoryID) {
        args = {
            TestAPI: "WSM.APIGetHistoryReferencingGroupsReadOnly",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetInstanceTransf3dReadOnly = function(nHistoryID,nInstanceID) {
        args = {
            TestAPI: "WSM.APIGetInstanceTransf3dReadOnly",
nHistoryID: nHistoryID,
    nInstanceID: nInstanceID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetPointsFromObjectIDsReadOnly = function(nHistoryID,aIDs) {
        args = {
            TestAPI: "WSM.APIGetPointsFromObjectIDsReadOnly",
nHistoryID: nHistoryID,
    aIDs: aIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsJournalingReadOnly = function() {
        args = {
            TestAPI: "WSM.APIIsJournalingReadOnly"
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICleanModel = function(nHistoryID,dEdgeTol) {
        args = {
            TestAPI: "WSM.APICleanModel",
nHistoryID: nHistoryID,
    dEdgeTol: dEdgeTol
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateMesh = function(nHistoryID,aPoints,aTriangles,aNormals,aUVs,aColors) {
        args = {
            TestAPI: "WSM.APICreateMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints,
    aTriangles: aTriangles,
    aNormals: aNormals,
    aUVs: aUVs,
    aColors: aColors
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetMeshDataReadOnly = function(nHistoryID,nMeshID) {
        args = {
            TestAPI: "WSM.APIGetMeshDataReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMeshContainsPointReadOnly = function(nHistoryID,nMeshID,point) {
        args = {
            TestAPI: "WSM.APIMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    point: point
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMeshPointOnOrInsideIfManifoldReadOnly = function(nHistoryID,nMeshID,point) {
        args = {
            TestAPI: "WSM.APIMeshPointOnOrInsideIfManifoldReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    point: point
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMeshComputeSilhouetteEdgesReadOnly = function(nHistoryID,nMeshID,cameraPos,cameraDir,bPerspectiveView) {
        args = {
            TestAPI: "WSM.APIMeshComputeSilhouetteEdgesReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIMeshComputeNonSmoothEdgesReadOnly = function(nHistoryID,nMeshID,dCosSmoothAngle) {
        args = {
            TestAPI: "WSM.APIMeshComputeNonSmoothEdgesReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    dCosSmoothAngle: dCosSmoothAngle
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIConvertMeshesToObjects = function(nHistoryID,aMeshIDs,dCosSmoothAngle) {
        args = {
            TestAPI: "WSM.APIConvertMeshesToObjects",
nHistoryID: nHistoryID,
    aMeshIDs: aMeshIDs,
    dCosSmoothAngle: dCosSmoothAngle
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILinkMeshesForConversion = function(nHistoryID,aMeshIDs) {
        args = {
            TestAPI: "WSM.APILinkMeshesForConversion",
nHistoryID: nHistoryID,
    aMeshIDs: aMeshIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIConvertObjectsToMeshes = function(nHistoryID,aObjectIDs) {
        args = {
            TestAPI: "WSM.APIConvertObjectsToMeshes",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateVertex = function(nHistoryID,position) {
        args = {
            TestAPI: "WSM.APICreateVertex",
nHistoryID: nHistoryID,
    position: position
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIFlattenFaces = function(nHistoryID,aFaceIDs,dTol) {
        args = {
            TestAPI: "WSM.APIFlattenFaces",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    dTol: dTol
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreateLineMesh = function(nHistoryID,aPoints,aIndices,aCounts) {
        args = {
            TestAPI: "WSM.APICreateLineMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints,
    aIndices: aIndices,
    aCounts: aCounts
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetLineMeshDataReadOnly = function(nHistoryID,nLineMeshID) {
        args = {
            TestAPI: "WSM.APIGetLineMeshDataReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILineMeshContainsPointReadOnly = function(nHistoryID,nLineMeshID,point) {
        args = {
            TestAPI: "WSM.APILineMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID,
    point: point
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APILineMeshGetPointsOnNegativeSideOfPlanesReadOnly = function(nHistoryID,nLineMeshID,aPlanes,line3dPickRay,dTol) {
        args = {
            TestAPI: "WSM.APILineMeshGetPointsOnNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID,
    aPlanes: aPlanes,
    line3dPickRay: line3dPickRay,
    dTol: dTol
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APICreatePointMesh = function(nHistoryID,aPoints) {
        args = {
            TestAPI: "WSM.APICreatePointMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIGetPointMeshDataReadOnly = function(nHistoryID,nPointMeshID) {
        args = {
            TestAPI: "WSM.APIGetPointMeshDataReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIPointMeshContainsPointReadOnly = function(nHistoryID,nPointMeshID,point) {
        args = {
            TestAPI: "WSM.APIPointMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID,
    point: point
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIIsMeshManifoldReadOnly = function(nHistoryID,nMeshID) {
        args = {
            TestAPI: "WSM.APIIsMeshManifoldReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID
        };
        return callAsyncAPI(args);
    };

    
    window.WSM.APIPointMeshGetPointsOnNegativeSideOfPlanesReadOnly = function(nHistoryID,nPointMeshID,aPlanes,dTol) {
        args = {
            TestAPI: "WSM.APIPointMeshGetPointsOnNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID,
    aPlanes: aPlanes,
    dTol: dTol
        };
        return callAsyncAPI(args);
    };

window.WSM.InferenceEngine = window.WSM.InferenceEngine || {};
        
    window.WSM.InferenceEngine.FindInputPoint = function(pickRay,previousInputPoint) {
        args = {
            TestAPI: "WSM.InferenceEngine.FindInputPoint",
pickRay: pickRay,
        previousInputPoint: previousInputPoint
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.Reset = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.Reset"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.Reset = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.Reset"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.FindInputPoint = function(pickRay,previousInputPoint) {
        args = {
            TestAPI: "WSM.InferenceEngine.FindInputPoint",
pickRay: pickRay,
        previousInputPoint: previousInputPoint
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.InputPointsAreEqual = function(inputPoint1,inputPoint2) {
        args = {
            TestAPI: "WSM.InferenceEngine.InputPointsAreEqual",
inputPoint1: inputPoint1,
        inputPoint2: inputPoint2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.DisableHoveredInferences = function(disable) {
        args = {
            TestAPI: "WSM.InferenceEngine.DisableHoveredInferences",
disable: disable
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.PushHoveredLineInference = function(inference) {
        args = {
            TestAPI: "WSM.InferenceEngine.PushHoveredLineInference",
inference: inference
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.PushHoveredPointInference = function(inference) {
        args = {
            TestAPI: "WSM.InferenceEngine.PushHoveredPointInference",
inference: inference
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.AddPointInference = function(inference) {
        args = {
            TestAPI: "WSM.InferenceEngine.AddPointInference",
inference: inference
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.AddLineInference = function(inference) {
        args = {
            TestAPI: "WSM.InferenceEngine.AddLineInference",
inference: inference
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.AddPlaneInference = function(inference) {
        args = {
            TestAPI: "WSM.InferenceEngine.AddPlaneInference",
inference: inference
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.LockInference = function(inference) {
        args = {
            TestAPI: "WSM.InferenceEngine.LockInference",
inference: inference
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.ReleaseLockedInference = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.ReleaseLockedInference"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.HaveLockedInference = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.HaveLockedInference"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.SetVertexSnappingOnSplines = function(snap) {
        args = {
            TestAPI: "WSM.InferenceEngine.SetVertexSnappingOnSplines",
snap: snap
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.SetUseExternalInputPointFinder = function(use) {
        args = {
            TestAPI: "WSM.InferenceEngine.SetUseExternalInputPointFinder",
use: use
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.SetUseExternalInputPointFinderForTesting = function(use) {
        args = {
            TestAPI: "WSM.InferenceEngine.SetUseExternalInputPointFinderForTesting",
use: use
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.IgnoreObject = function(nObjectID,andChildren) {
        args = {
            TestAPI: "WSM.InferenceEngine.IgnoreObject",
nObjectID: nObjectID,
        andChildren: andChildren
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.ClearIgnoreObjects = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.ClearIgnoreObjects"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.UseAsObscuringObject = function(nObjectID,andChildren) {
        args = {
            TestAPI: "WSM.InferenceEngine.UseAsObscuringObject",
nObjectID: nObjectID,
        andChildren: andChildren
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.LineInference = function(line3d,lineInferenceType) {
        args = {
            TestAPI: "WSM.InferenceEngine.LineInference",
line3d: line3d,
        lineInferenceType: lineInferenceType
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.PointInference = function(point3d) {
        args = {
            TestAPI: "WSM.InferenceEngine.PointInference",
point3d: point3d
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.InputPoint = function(point3d) {
        args = {
            TestAPI: "WSM.InferenceEngine.InputPoint",
point3d: point3d
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.AddLineInferencesForObject = function(groupInstancePath) {
        args = {
            TestAPI: "WSM.InferenceEngine.AddLineInferencesForObject",
groupInstancePath: groupInstancePath
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.SetHoveredInferencesEnabled = function(enabled) {
        args = {
            TestAPI: "WSM.InferenceEngine.SetHoveredInferencesEnabled",
enabled: enabled
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.ClearCustomPointInferences = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.ClearCustomPointInferences"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.ClearCustomLineInferences = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.ClearCustomLineInferences"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.InferenceEngine.ClearCustomPlaneInference = function() {
        args = {
            TestAPI: "WSM.InferenceEngine.ClearCustomPlaneInference"
        };
        return callAsyncAPI(args);
    };

window.WSM.Geom = window.WSM.Geom || {};
        
    window.WSM.Geom.Interval3d = function(minPoint3d,maxPoint3d) {
        args = {
            TestAPI: "WSM.Geom.Interval3d",
minPoint3d: minPoint3d,
        maxPoint3d: maxPoint3d
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Interval3dAreEqual = function(interval3d1,interval3d2) {
        args = {
            TestAPI: "WSM.Geom.Interval3dAreEqual",
interval3d1: interval3d1,
        interval3d2: interval3d2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.MakeRotationTransform = function(axis,angle) {
        args = {
            TestAPI: "WSM.Geom.MakeRotationTransform",
axis: axis,
        angle: angle
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.MakeScalingTransform = function(scaleCenter,factorVec) {
        args = {
            TestAPI: "WSM.Geom.MakeScalingTransform",
scaleCenter: scaleCenter,
        factorVec: factorVec
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.MakeRigidTransform = function(origin,xDir,yDir,zDir) {
        args = {
            TestAPI: "WSM.Geom.MakeRigidTransform",
origin: origin,
        xDir: xDir,
        yDir: yDir,
        zDir: zDir
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.TranslateTransform = function(trans,moveVec) {
        args = {
            TestAPI: "WSM.Geom.TranslateTransform",
trans: trans,
        moveVec: moveVec
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Transf3d = function() {
        args = {
            TestAPI: "WSM.Geom.Transf3d"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.InvertTransform = function(trans) {
        args = {
            TestAPI: "WSM.Geom.InvertTransform",
trans: trans
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.IsIdentityTransform = function(trans) {
        args = {
            TestAPI: "WSM.Geom.IsIdentityTransform",
trans: trans
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Transf3dAreEqual = function(trans1,trans2) {
        args = {
            TestAPI: "WSM.Geom.Transf3dAreEqual",
trans1: trans1,
        trans2: trans2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Point2d = function(x,y) {
        args = {
            TestAPI: "WSM.Geom.Point2d",
x: x,
        y: y
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Point2dAreEqual = function(pt1,pt2) {
        args = {
            TestAPI: "WSM.Geom.Point2dAreEqual",
pt1: pt1,
        pt2: pt2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Point3d = function(x,y,z) {
        args = {
            TestAPI: "WSM.Geom.Point3d",
x: x,
        y: y,
        z: z
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Point3dAreEqual = function(pt1,pt2) {
        args = {
            TestAPI: "WSM.Geom.Point3dAreEqual",
pt1: pt1,
        pt2: pt2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Line3d = function(point3d) {
        args = {
            TestAPI: "WSM.Geom.Line3d",
point3d: point3d
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Line3dAreEqual = function(line1,line2) {
        args = {
            TestAPI: "WSM.Geom.Line3dAreEqual",
line1: line1,
        line2: line2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Vector3d = function(x,y,z) {
        args = {
            TestAPI: "WSM.Geom.Vector3d",
x: x,
        y: y,
        z: z
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Vector3dAreEqual = function(v1,v2) {
        args = {
            TestAPI: "WSM.Geom.Vector3dAreEqual",
v1: v1,
        v2: v2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.UnitVector3d = function(x,y,z) {
        args = {
            TestAPI: "WSM.Geom.UnitVector3d",
x: x,
        y: y,
        z: z
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.UnitVector3dAreEqual = function(v1,v2) {
        args = {
            TestAPI: "WSM.Geom.UnitVector3dAreEqual",
v1: v1,
        v2: v2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Plane = function(pt,normal) {
        args = {
            TestAPI: "WSM.Geom.Plane",
pt: pt,
        normal: normal
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.PlaneAreEqual = function(plane1,plane2) {
        args = {
            TestAPI: "WSM.Geom.PlaneAreEqual",
plane1: plane1,
        plane2: plane2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Vector2d = function(x,y) {
        args = {
            TestAPI: "WSM.Geom.Vector2d",
x: x,
        y: y
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.Vector2dAreEqual = function(v1,v2) {
        args = {
            TestAPI: "WSM.Geom.Vector2dAreEqual",
v1: v1,
        v2: v2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.IsPoint3d = function() {
        args = {
            TestAPI: "WSM.Geom.IsPoint3d"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.IsVector3d = function() {
        args = {
            TestAPI: "WSM.Geom.IsVector3d"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.IsTransf3d = function() {
        args = {
            TestAPI: "WSM.Geom.IsTransf3d"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.IsLine3d = function() {
        args = {
            TestAPI: "WSM.Geom.IsLine3d"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Geom.IsPlane = function() {
        args = {
            TestAPI: "WSM.Geom.IsPlane"
        };
        return callAsyncAPI(args);
    };

window.WSM.Utils = window.WSM.Utils || {};
        
    window.WSM.Utils.AngleFullCircleInRadians = function(normal,vecA,vecB,returnPositive) {
        args = {
            TestAPI: "WSM.Utils.AngleFullCircleInRadians",
normal: normal,
        vecA: vecA,
        vecB: vecB,
        returnPositive: returnPositive
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.AppendSelectionToGroupInstancePathArray = function(aInput,aOutput) {
        args = {
            TestAPI: "WSM.Utils.AppendSelectionToGroupInstancePathArray",
aInput: aInput,
        aOutput: aOutput
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.AppendToGroupInstancePathArray = function(nHistoryID,aInput,aOutput) {
        args = {
            TestAPI: "WSM.Utils.AppendToGroupInstancePathArray",
nHistoryID: nHistoryID,
        aInput: aInput,
        aOutput: aOutput
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ComputeFaceCentroid = function(historyID,faceID) {
        args = {
            TestAPI: "WSM.Utils.ComputeFaceCentroid",
historyID: historyID,
        faceID: faceID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ComputeFaceNormal = function(historyID,faceID) {
        args = {
            TestAPI: "WSM.Utils.ComputeFaceNormal",
historyID: historyID,
        faceID: faceID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ConvertToFaces = function(aPaths) {
        args = {
            TestAPI: "WSM.Utils.ConvertToFaces",
aPaths: aPaths
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ConvertToTopLevel = function(nHistoryID,aObjectIDs,bAllowInstances,bAllowOwnedFaces) {
        args = {
            TestAPI: "WSM.Utils.ConvertToTopLevel",
nHistoryID: nHistoryID,
        aObjectIDs: aObjectIDs,
        bAllowInstances: bAllowInstances,
        bAllowOwnedFaces: bAllowOwnedFaces
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ConvertToTopLevelPaths = function(aPaths,bAllowInstances,bAllowOwnedFaces) {
        args = {
            TestAPI: "WSM.Utils.ConvertToTopLevelPaths",
aPaths: aPaths,
        bAllowInstances: bAllowInstances,
        bAllowOwnedFaces: bAllowOwnedFaces
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.DeleteObjectsIncludeSmoothAttachments = function(nHistoryID,toDelete) {
        args = {
            TestAPI: "WSM.Utils.DeleteObjectsIncludeSmoothAttachments",
nHistoryID: nHistoryID,
        toDelete: toDelete
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ExpandSelection = function(path,selectionlevel,filter,bCanExpandInstances) {
        args = {
            TestAPI: "WSM.Utils.ExpandSelection",
path: path,
        selectionlevel: selectionlevel,
        filter: filter,
        bCanExpandInstances: bCanExpandInstances
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetAllNonOwnedGeometricObjects = function(nHistoryID) {
        args = {
            TestAPI: "WSM.Utils.GetAllNonOwnedGeometricObjects",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetAxisAlignedBoundingBox = function(aObjectIDs,CS) {
        args = {
            TestAPI: "WSM.Utils.GetAxisAlignedBoundingBox",
aObjectIDs: aObjectIDs,
        CS: CS
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetCoedgePoints = function(nHistoryID,coedgeID) {
        args = {
            TestAPI: "WSM.Utils.GetCoedgePoints",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetEdgeCurveType = function(nHistoryID,edgeId) {
        args = {
            TestAPI: "WSM.Utils.GetEdgeCurveType",
nHistoryID: nHistoryID,
        edgeId: edgeId
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetEdgeIDFromCoedge = function(nHistoryID,coedgeID) {
        args = {
            TestAPI: "WSM.Utils.GetEdgeIDFromCoedge",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetEdgeLine = function(nHistoryID,edge) {
        args = {
            TestAPI: "WSM.Utils.GetEdgeLine",
nHistoryID: nHistoryID,
        edge: edge
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetFaceIDFromCoedge = function(nHistoryID,coedgeID) {
        args = {
            TestAPI: "WSM.Utils.GetFaceIDFromCoedge",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetFacePoints = function(facePath) {
        args = {
            TestAPI: "WSM.Utils.GetFacePoints",
facePath: facePath
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetGroupInstanceNonOwnedGeometricObjects = function(instance) {
        args = {
            TestAPI: "WSM.Utils.GetGroupInstanceNonOwnedGeometricObjects",
instance: instance
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetMemoryInfo = function(nHistoryID) {
        args = {
            TestAPI: "WSM.Utils.GetMemoryInfo",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetVertexCurveAttributes = function(historyID,vertexID) {
        args = {
            TestAPI: "WSM.Utils.GetVertexCurveAttributes",
historyID: historyID,
        vertexID: vertexID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.HasSmoothEdge = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.Utils.HasSmoothEdge",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsBackFace = function(path,cameraPos,cameraDir,perspectiveView) {
        args = {
            TestAPI: "WSM.Utils.IsBackFace",
path: path,
        cameraPos: cameraPos,
        cameraDir: cameraDir,
        perspectiveView: perspectiveView
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsLayerHidden = function(nHistoryID,id) {
        args = {
            TestAPI: "WSM.Utils.IsLayerHidden",
nHistoryID: nHistoryID,
        id: id
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsObjectHidden = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.Utils.IsObjectHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsObjectHiddenByPath = function(path) {
        args = {
            TestAPI: "WSM.Utils.IsObjectHiddenByPath",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsObjectType = function(path,nObjectTypes) {
        args = {
            TestAPI: "WSM.Utils.IsObjectType",
path: path,
        nObjectTypes: nObjectTypes
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsOnCurveJunction = function(nHistoryID,nVertexID,bInferencing) {
        args = {
            TestAPI: "WSM.Utils.IsOnCurveJunction",
nHistoryID: nHistoryID,
        nVertexID: nVertexID,
        bInferencing: bInferencing
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsSelectAllConnected = function(nHistoryID,selectedObjectIDs) {
        args = {
            TestAPI: "WSM.Utils.IsSelectAllConnected",
nHistoryID: nHistoryID,
        selectedObjectIDs: selectedObjectIDs
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsSilhouetteEdge = function(nHistoryID,edgeId,cameraPos,cameraDir,perspectiveView) {
        args = {
            TestAPI: "WSM.Utils.IsSilhouetteEdge",
nHistoryID: nHistoryID,
        edgeId: edgeId,
        cameraPos: cameraPos,
        cameraDir: cameraDir,
        perspectiveView: perspectiveView
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsSmooth = function(path) {
        args = {
            TestAPI: "WSM.Utils.IsSmooth",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsTopLevelObjectHidden = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.Utils.IsTopLevelObjectHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsTopLevelObjectHiddenByPath = function(path) {
        args = {
            TestAPI: "WSM.Utils.IsTopLevelObjectHiddenByPath",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsVertexEditable = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.Utils.IsVertexEditable",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.IsVertexOnCurve = function(historyID,vertexID) {
        args = {
            TestAPI: "WSM.Utils.IsVertexOnCurve",
historyID: historyID,
        vertexID: vertexID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.MakePickRayFromWindow = function(firstWindowSelectPoint,secondWindowSelectPoint) {
        args = {
            TestAPI: "WSM.Utils.MakePickRayFromWindow",
firstWindowSelectPoint: firstWindowSelectPoint,
        secondWindowSelectPoint: secondWindowSelectPoint
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.MatchesSelectionType = function(selectedObjectIDs,aNewSelectedObjects,bSelectAll) {
        args = {
            TestAPI: "WSM.Utils.MatchesSelectionType",
selectedObjectIDs: selectedObjectIDs,
        aNewSelectedObjects: aNewSelectedObjects,
        bSelectAll: bSelectAll
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ObjectCanBeHidden = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.Utils.ObjectCanBeHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickBody = function(pickray) {
        args = {
            TestAPI: "WSM.Utils.PickBody",
pickray: pickray
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickGeometry = function(pickray,pickFilter,bAllowAdjustRayRadius) {
        args = {
            TestAPI: "WSM.Utils.PickGeometry",
pickray: pickray,
        pickFilter: pickFilter,
        bAllowAdjustRayRadius: bAllowAdjustRayRadius
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickObjectsWithFilter = function(pickray,filter,currentSelectionLevel) {
        args = {
            TestAPI: "WSM.Utils.PickObjectsWithFilter",
pickray: pickray,
        filter: filter,
        currentSelectionLevel: currentSelectionLevel
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickObjectsWithRay = function(pickray,pickFilter,bAllowAdjustRayRadius,bIgnoreInContext) {
        args = {
            TestAPI: "WSM.Utils.PickObjectsWithRay",
pickray: pickray,
        pickFilter: pickFilter,
        bAllowAdjustRayRadius: bAllowAdjustRayRadius,
        bIgnoreInContext: bIgnoreInContext
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.RayFireWithObjects = function(objectIds,ray) {
        args = {
            TestAPI: "WSM.Utils.RayFireWithObjects",
objectIds: objectIds,
        ray: ray
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.RemoveHiddenObjects = function(nHistoryID,aObjectIDs,aObjectsInGroupsVec) {
        args = {
            TestAPI: "WSM.Utils.RemoveHiddenObjects",
nHistoryID: nHistoryID,
        aObjectIDs: aObjectIDs,
        aObjectsInGroupsVec: aObjectsInGroupsVec
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.SelectionFromGroupInstancePathArray = function(aInput) {
        args = {
            TestAPI: "WSM.Utils.SelectionFromGroupInstancePathArray",
aInput: aInput
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.SelectionToGroupInstancePath = function(nObjectID) {
        args = {
            TestAPI: "WSM.Utils.SelectionToGroupInstancePath",
nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.SelectionToGroupInstancePathArray = function(aInput) {
        args = {
            TestAPI: "WSM.Utils.SelectionToGroupInstancePathArray",
aInput: aInput
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.SetToOwnerBody = function(path) {
        args = {
            TestAPI: "WSM.Utils.SetToOwnerBody",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.TestPickImages = function(nHistoryID,imageIds,pickRay) {
        args = {
            TestAPI: "WSM.Utils.TestPickImages",
nHistoryID: nHistoryID,
        imageIds: imageIds,
        pickRay: pickRay
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ObjectIDsAreEqual = function(id1,id2) {
        args = {
            TestAPI: "WSM.Utils.ObjectIDsAreEqual",
id1: id1,
        id2: id2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GroupInstancePathsAreEqual = function(path1,path2) {
        args = {
            TestAPI: "WSM.Utils.GroupInstancePathsAreEqual",
path1: path1,
        path2: path2
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickRay = function(pickrayLine,planes,screenPickRayRadius,perspectiveScaleFactor,baseRadius,normalizedScreenPoint) {
        args = {
            TestAPI: "WSM.Utils.PickRay",
pickrayLine: pickrayLine,
        planes: planes,
        screenPickRayRadius: screenPickRayRadius,
        perspectiveScaleFactor: perspectiveScaleFactor,
        baseRadius: baseRadius,
        normalizedScreenPoint: normalizedScreenPoint
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickRayFromLine = function(pickrayLine) {
        args = {
            TestAPI: "WSM.Utils.PickRayFromLine",
pickrayLine: pickrayLine
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.PickRayFromNormalizedScreenPoint = function(ptX,ptY,yUp) {
        args = {
            TestAPI: "WSM.Utils.PickRayFromNormalizedScreenPoint",
ptX: ptX,
        ptY: ptY,
        yUp: yUp
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GroupInstancePathArray = function() {
        args = {
            TestAPI: "WSM.Utils.GroupInstancePathArray"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetGroupInstancePathFinalObjectHistoryID = function(ObjectIDs) {
        args = {
            TestAPI: "WSM.Utils.GetGroupInstancePathFinalObjectHistoryID",
ObjectIDs: ObjectIDs
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ObjectHistoryIDArray = function() {
        args = {
            TestAPI: "WSM.Utils.ObjectHistoryIDArray"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ObjectIDArray = function(objectIDs) {
        args = {
            TestAPI: "WSM.Utils.ObjectIDArray",
objectIDs: objectIDs
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.SetOrCreateStringAttributeForObject = function(nHistoryID,nObjectID,key,value,nCB,bIsSharedOnSplit) {
        args = {
            TestAPI: "WSM.Utils.SetOrCreateStringAttributeForObject",
nHistoryID: nHistoryID,
        nObjectID: nObjectID,
        key: key,
        value: value,
        nCB: nCB,
        bIsSharedOnSplit: bIsSharedOnSplit
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetStringAttributeForObject = function(nHistoryID,nObjectID,key) {
        args = {
            TestAPI: "WSM.Utils.GetStringAttributeForObject",
nHistoryID: nHistoryID,
        nObjectID: nObjectID,
        key: key
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ObjectTypeFilter = function() {
        args = {
            TestAPI: "WSM.Utils.ObjectTypeFilter"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.ObjectHistoryID = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "WSM.Utils.ObjectHistoryID",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

window.WSM.AppHelper = window.WSM.AppHelper || {};
        
    window.WSM.AppHelper.Initialize = function() {
        args = {
            TestAPI: "WSM.AppHelper.Initialize"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.AppHelper.GetHistoryID = function() {
        args = {
            TestAPI: "WSM.AppHelper.GetHistoryID"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.AppHelper.GetDisplayHistoryID = function() {
        args = {
            TestAPI: "WSM.AppHelper.GetDisplayHistoryID"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.AppHelper.NewModel = function() {
        args = {
            TestAPI: "WSM.AppHelper.NewModel"
        };
        return callAsyncAPI(args);
    };

window.WSM.Atf = window.WSM.Atf || {};
        
    window.WSM.Atf.APITestAtfLoopBack = function(nFromHistoryID,nToHistoryID,defaultColorVec,aNonOwnedObjectIDs,aExcludedObjects,bWantPolygonMeshFromBrep,aLayerDisplayedNegateVec) {
        args = {
            TestAPI: "WSM.Atf.APITestAtfLoopBack",
nFromHistoryID: nFromHistoryID,
        nToHistoryID: nToHistoryID,
        defaultColorVec: defaultColorVec,
        aNonOwnedObjectIDs: aNonOwnedObjectIDs,
        aExcludedObjects: aExcludedObjects,
        bWantPolygonMeshFromBrep: bWantPolygonMeshFromBrep,
        aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Atf.APILoadWithATF = function(nHistoryID,sFilePath,eFileType,nOptions,nUnits) {
        args = {
            TestAPI: "WSM.Atf.APILoadWithATF",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        nOptions: nOptions,
        nUnits: nUnits
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Atf.APIWriteWithATF = function(nHistoryID,sFilePath,eFileType,aNonOwnedObjectIDs,aExcludedObjects,defaultColorVec,cameraVec,aLayerDisplayedNegateVec) {
        args = {
            TestAPI: "WSM.Atf.APIWriteWithATF",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        aNonOwnedObjectIDs: aNonOwnedObjectIDs,
        aExcludedObjects: aExcludedObjects,
        defaultColorVec: defaultColorVec,
        cameraVec: cameraVec,
        aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
        };
        return callAsyncAPI(args);
    };

window.WSM.RenderHelper = window.WSM.RenderHelper || {};
        
    window.WSM.RenderHelper.APIGetObjectFacesRenderDataReadOnly = function(historyID,objectID) {
        args = {
            TestAPI: "WSM.RenderHelper.APIGetObjectFacesRenderDataReadOnly",
historyID: historyID,
        objectID: objectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.RenderHelper.APIGetFacesRenderDataReadOnly = function(historyID,faceIDs) {
        args = {
            TestAPI: "WSM.RenderHelper.APIGetFacesRenderDataReadOnly",
historyID: historyID,
        faceIDs: faceIDs
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.RenderHelper.APIGetEdgesRenderDataReadOnly = function(historyID,edgeIDs,includeSmooth) {
        args = {
            TestAPI: "WSM.RenderHelper.APIGetEdgesRenderDataReadOnly",
historyID: historyID,
        edgeIDs: edgeIDs,
        includeSmooth: includeSmooth
        };
        return callAsyncAPI(args);
    };

window.WSM.Sat = window.WSM.Sat || {};
        
    window.WSM.Sat.APILoadSatFile = function(nHistoryID,sFilePath) {
        args = {
            TestAPI: "WSM.Sat.APILoadSatFile",
nHistoryID: nHistoryID,
        sFilePath: sFilePath
        };
        return callAsyncAPI(args);
    };

window.WSM.GroupInstancePath = window.WSM.GroupInstancePath || {};
        
    window.WSM.GroupInstancePath.IsValid = function(groupInstancePath) {
        args = {
            TestAPI: "WSM.GroupInstancePath.IsValid",
groupInstancePath: groupInstancePath
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.GroupInstancePath.GetFinalObjectHistoryID = function(groupInstancePath) {
        args = {
            TestAPI: "WSM.GroupInstancePath.GetFinalObjectHistoryID",
groupInstancePath: groupInstancePath
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.GroupInstancePath.GetTopObjectHistoryID = function(groupInstancePath) {
        args = {
            TestAPI: "WSM.GroupInstancePath.GetTopObjectHistoryID",
groupInstancePath: groupInstancePath
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.GroupInstancePath.AppendObjectHistoryID = function(groupInstancePath,nObjectID) {
        args = {
            TestAPI: "WSM.GroupInstancePath.AppendObjectHistoryID",
groupInstancePath: groupInstancePath,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.GroupInstancePath.GetObjectTransform = function(groupInstancePath) {
        args = {
            TestAPI: "WSM.GroupInstancePath.GetObjectTransform",
groupInstancePath: groupInstancePath
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.GroupInstancePath.IsPrefixOf = function(path1,path2) {
        args = {
            TestAPI: "WSM.GroupInstancePath.IsPrefixOf",
path1: path1,
        path2: path2
        };
        return callAsyncAPI(args);
    };

window.WSM.Test = window.WSM.Test || {};
        
    window.WSM.Test.AnyDictionaryRoundTrip = function(dict) {
        args = {
            TestAPI: "WSM.Test.AnyDictionaryRoundTrip",
dict: dict
        };
        return callAsyncAPI(args);
    };

window.WSM.Skup = window.WSM.Skup || {};
        
    window.WSM.Skup.APIReadSketchupFile = function(nHistoryID,filename) {
        args = {
            TestAPI: "WSM.Skup.APIReadSketchupFile",
nHistoryID: nHistoryID,
        filename: filename
        };
        return callAsyncAPI(args);
    };

window.WSM.Tools = window.WSM.Tools || {};
        
    window.WSM.Tools.CompareOutputFiles = function(sGoodFile,sResultFile) {
        args = {
            TestAPI: "WSM.Tools.CompareOutputFiles",
sGoodFile: sGoodFile,
        sResultFile: sResultFile
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIReset = function() {
        args = {
            TestAPI: "WSM.Tools.APIReset"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APICreateTool = function(nType,toolArgs) {
        args = {
            TestAPI: "WSM.Tools.APICreateTool",
nType: nType,
        toolArgs: toolArgs
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIDestroyTool = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIDestroyTool",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIGetAllLiveToolsReadOnly = function() {
        args = {
            TestAPI: "WSM.Tools.APIGetAllLiveToolsReadOnly"
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIGetToolTypeReadOnly = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIGetToolTypeReadOnly",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIGetResultDescriptionReadOnly = function(nResult) {
        args = {
            TestAPI: "WSM.Tools.APIGetResultDescriptionReadOnly",
nResult: nResult
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIGetToolStateReadOnly = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIGetToolStateReadOnly",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIResetTool = function(nToolID,nReason) {
        args = {
            TestAPI: "WSM.Tools.APIResetTool",
nToolID: nToolID,
        nReason: nReason
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIResetToolModelChange = function(nToolID,data) {
        args = {
            TestAPI: "WSM.Tools.APIResetToolModelChange",
nToolID: nToolID,
        data: data
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIUpdateCurrentPoint = function(nToolID,pickray) {
        args = {
            TestAPI: "WSM.Tools.APIUpdateCurrentPoint",
nToolID: nToolID,
        pickray: pickray
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIUpdatePointPick = function(nToolID,nPointIndex,pickray,bFinal) {
        args = {
            TestAPI: "WSM.Tools.APIUpdatePointPick",
nToolID: nToolID,
        nPointIndex: nPointIndex,
        pickray: pickray,
        bFinal: bFinal
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIUpdatePoint = function(nToolID,nPointIndex,pInputPoint,bFinal) {
        args = {
            TestAPI: "WSM.Tools.APIUpdatePoint",
nToolID: nToolID,
        nPointIndex: nPointIndex,
        pInputPoint: pInputPoint,
        bFinal: bFinal
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APILockInference = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APILockInference",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIUnlockInference = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIUnlockInference",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIPickAndPlacePoint = function(nToolID,pickray) {
        args = {
            TestAPI: "WSM.Tools.APIPickAndPlacePoint",
nToolID: nToolID,
        pickray: pickray
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIPlacePoint = function(nToolID,pInputPoint) {
        args = {
            TestAPI: "WSM.Tools.APIPlacePoint",
nToolID: nToolID,
        pInputPoint: pInputPoint
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIFinalize = function(nToolID,pickray) {
        args = {
            TestAPI: "WSM.Tools.APIFinalize",
nToolID: nToolID,
        pickray: pickray
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIGetCurrentPointReadOnly = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIGetCurrentPointReadOnly",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIGetPointReadOnly = function(nToolID,nPointIndex) {
        args = {
            TestAPI: "WSM.Tools.APIGetPointReadOnly",
nToolID: nToolID,
        nPointIndex: nPointIndex
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APISetOperationMode = function(nToolID,nMode) {
        args = {
            TestAPI: "WSM.Tools.APISetOperationMode",
nToolID: nToolID,
        nMode: nMode
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIResetCurrentPoint = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIResetCurrentPoint",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APISetDefaultPoints = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APISetDefaultPoints",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APISetEditingMode = function(nToolID,bEditingMode) {
        args = {
            TestAPI: "WSM.Tools.APISetEditingMode",
nToolID: nToolID,
        bEditingMode: bEditingMode
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APICreateGeometry = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APICreateGeometry",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModResetModel = function(nToolID,bDeleteRedo) {
        args = {
            TestAPI: "WSM.Tools.APIModResetModel",
nToolID: nToolID,
        bDeleteRedo: bDeleteRedo
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModSetObjectsToModify = function(nToolID,aObjectsToModify) {
        args = {
            TestAPI: "WSM.Tools.APIModSetObjectsToModify",
nToolID: nToolID,
        aObjectsToModify: aObjectsToModify
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModSetObjectsToModifyGroupInstancePath = function(nToolID,aObjectsToModify) {
        args = {
            TestAPI: "WSM.Tools.APIModSetObjectsToModifyGroupInstancePath",
nToolID: nToolID,
        aObjectsToModify: aObjectsToModify
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModIsInteractiveReadOnly = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIModIsInteractiveReadOnly",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModFiltersInitialSelectionReadOnly = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIModFiltersInitialSelectionReadOnly",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModDoModification = function(nToolID,bEndOfContinuous) {
        args = {
            TestAPI: "WSM.Tools.APIModDoModification",
nToolID: nToolID,
        bEndOfContinuous: bEndOfContinuous
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APIModGetFinishMessageReadOnly = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APIModGetFinishMessageReadOnly",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Tools.APICameraChanged = function(nToolID) {
        args = {
            TestAPI: "WSM.Tools.APICameraChanged",
nToolID: nToolID
        };
        return callAsyncAPI(args);
    };

window.FormIt = window.FormIt || {};
    
    window.FormIt.GetSnap = function() {
        args = {
            TestAPI: "FormIt.GetSnap"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetSnap = function(bSnap) {
        args = {
            TestAPI: "FormIt.SetSnap",
bSnap: bSnap
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetTouchEnabled = function() {
        args = {
            TestAPI: "FormIt.GetTouchEnabled"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetTouchEnabled = function(bTouchEnabled) {
        args = {
            TestAPI: "FormIt.SetTouchEnabled",
bTouchEnabled: bTouchEnabled
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.ImportFile = function(sFileName,bGroupImport,nHistoryID) {
        args = {
            TestAPI: "FormIt.ImportFile",
sFileName: sFileName,
    bGroupImport: bGroupImport,
    nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.OpenFile = function(sFileName) {
        args = {
            TestAPI: "FormIt.OpenFile",
sFileName: sFileName
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.LoadPreviewImage = function(sFileName) {
        args = {
            TestAPI: "FormIt.LoadPreviewImage",
sFileName: sFileName
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.OpenFile = function(sFileName) {
        args = {
            TestAPI: "FormIt.OpenFile",
sFileName: sFileName
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SaveFile = function(sFileName,saveOptions,previewImage,forSave) {
        args = {
            TestAPI: "FormIt.SaveFile",
sFileName: sFileName,
    saveOptions: saveOptions,
    previewImage: previewImage,
    forSave: forSave
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SaveFileForEnergyAnalysis = function(sFileName) {
        args = {
            TestAPI: "FormIt.SaveFileForEnergyAnalysis",
sFileName: sFileName
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetGeoLocationData = function(geodata) {
        args = {
            TestAPI: "FormIt.SetGeoLocationData",
geodata: geodata
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetRenderData = function(renderdata) {
        args = {
            TestAPI: "FormIt.SetRenderData",
renderdata: renderdata
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetTimeNow = function() {
        args = {
            TestAPI: "FormIt.GetTimeNow"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.FitToModel = function(aIncludeImage,withTransition) {
        args = {
            TestAPI: "FormIt.FitToModel",
aIncludeImage: aIncludeImage,
    withTransition: withTransition
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.FitToSelection = function(withTransition) {
        args = {
            TestAPI: "FormIt.FitToSelection",
withTransition: withTransition
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.HomeView3d = function(withTransition) {
        args = {
            TestAPI: "FormIt.HomeView3d",
withTransition: withTransition
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.TopView = function() {
        args = {
            TestAPI: "FormIt.TopView"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetViewDirection = function(type) {
        args = {
            TestAPI: "FormIt.SetViewDirection",
type: type
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetViewDirection = function() {
        args = {
            TestAPI: "FormIt.GetViewDirection"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.NewFile = function(forced) {
        args = {
            TestAPI: "FormIt.NewFile",
forced: forced
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.Version = function() {
        args = {
            TestAPI: "FormIt.Version"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetCurveAccuracyOrCountDefault = function(accuracyORcount) {
        args = {
            TestAPI: "FormIt.SetCurveAccuracyOrCountDefault",
accuracyORcount: accuracyORcount
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetCurveAccuracyOrCountDefault = function() {
        args = {
            TestAPI: "FormIt.GetCurveAccuracyOrCountDefault"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetSurfaceAccuracyOrCountDefault = function(accuracyORcount) {
        args = {
            TestAPI: "FormIt.SetSurfaceAccuracyOrCountDefault",
accuracyORcount: accuracyORcount
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetSurfaceAccuracyOrCountDefault = function() {
        args = {
            TestAPI: "FormIt.GetSurfaceAccuracyOrCountDefault"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetUnitTypeDefault = function() {
        args = {
            TestAPI: "FormIt.GetUnitTypeDefault"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetUnitTypeDefault = function(unitType) {
        args = {
            TestAPI: "FormIt.SetUnitTypeDefault",
unitType: unitType
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.IsWSRAvailable = function() {
        args = {
            TestAPI: "FormIt.IsWSRAvailable"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SuspendMessaging = function(bSuppress,nTopLevelHistory) {
        args = {
            TestAPI: "FormIt.SuspendMessaging",
bSuppress: bSuppress,
    nTopLevelHistory: nTopLevelHistory
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.ResumeMessaging = function() {
        args = {
            TestAPI: "FormIt.ResumeMessaging"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.ChangeTargetBuildableArea = function(value) {
        args = {
            TestAPI: "FormIt.ChangeTargetBuildableArea",
value: value
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetBuildingType = function() {
        args = {
            TestAPI: "FormIt.GetBuildingType"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetBuildingType = function(value) {
        args = {
            TestAPI: "FormIt.SetBuildingType",
value: value
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.WriteAppDefaultContentToFile = function(id,path) {
        args = {
            TestAPI: "FormIt.WriteAppDefaultContentToFile",
id: id,
    path: path
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.DeleteImage = function(nHistoryID,imageID) {
        args = {
            TestAPI: "FormIt.DeleteImage",
nHistoryID: nHistoryID,
    imageID: imageID
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.HandleHUDTextInput = function(dimensionID,inputText) {
        args = {
            TestAPI: "FormIt.HandleHUDTextInput",
dimensionID: dimensionID,
    inputText: inputText
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetAppDefaultContentsWithoutAXM = function() {
        args = {
            TestAPI: "FormIt.GetAppDefaultContentsWithoutAXM"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetKeyboardShortcutsEnabled = function(enabled) {
        args = {
            TestAPI: "FormIt.SetKeyboardShortcutsEnabled",
enabled: enabled
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetShowEditableDimensions = function() {
        args = {
            TestAPI: "FormIt.GetShowEditableDimensions"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetShowEditableDimensions = function(show) {
        args = {
            TestAPI: "FormIt.SetShowEditableDimensions",
show: show
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetVersion = function() {
        args = {
            TestAPI: "FormIt.GetVersion"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetAlwaysShowInferences = function() {
        args = {
            TestAPI: "FormIt.GetAlwaysShowInferences"
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.SetAlwaysShowInferences = function(bAlwaysShowInferences) {
        args = {
            TestAPI: "FormIt.SetAlwaysShowInferences",
bAlwaysShowInferences: bAlwaysShowInferences
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.ImportToGroup = function(sFileType,sFilePath) {
        args = {
            TestAPI: "FormIt.ImportToGroup",
sFileType: sFileType,
    sFilePath: sFilePath
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.CallJS = function(funcName,paramsJSON) {
        args = {
            TestAPI: "FormIt.CallJS",
funcName: funcName,
    paramsJSON: paramsJSON
        };
        return callAsyncAPI(args);
    };

    
    window.FormIt.GetContextMenuOptions = function() {
        args = {
            TestAPI: "FormIt.GetContextMenuOptions"
        };
        return callAsyncAPI(args);
    };

window.FormIt.Analysis = window.FormIt.Analysis || {};
window.FormIt.Analysis.Solar = window.FormIt.Analysis.Solar || {};
            
    window.FormIt.Analysis.Solar.EnterAnalysisMode = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.EnterAnalysisMode"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.ToggleAnalysisMode = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.ToggleAnalysisMode"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.ExitAnalysisMode = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.ExitAnalysisMode"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.ToggleFaceSelections = function(aFacePaths) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.ToggleFaceSelections",
aFacePaths: aFacePaths
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.ResetAnalysis = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.ResetAnalysis"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.SetMethod = function(bMonthlyPeak) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.SetMethod",
bMonthlyPeak: bMonthlyPeak
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.SetPeakMonth = function(month) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.SetPeakMonth",
month: month
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetPeakMonth = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetPeakMonth"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetMethod = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetMethod"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetLimits = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetLimits"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetUnitString = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetUnitString"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.IsInSolarAnalysisMode = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.IsInSolarAnalysisMode"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.IsNewAnalysisEnabled = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.IsNewAnalysisEnabled"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.IsAnalysisInProgress = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.IsAnalysisInProgress"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.CanAnalyze = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.CanAnalyze"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetWeatherDataStatus = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetWeatherDataStatus"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.SetWeatherDataStatus = function(status) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.SetWeatherDataStatus",
status: status
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetNumTooltipsToShow = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetNumTooltipsToShow"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.SetNumTooltipsToShow = function(numToolTips) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.SetNumTooltipsToShow",
numToolTips: numToolTips
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.Analyze = function(bNeedInterrupt,dInterruptTime,nPreviousStep) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.Analyze",
bNeedInterrupt: bNeedInterrupt,
            dInterruptTime: dInterruptTime,
            nPreviousStep: nPreviousStep
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.CancelAnalysis = function() {
        args = {
            TestAPI: "FormIt.Analysis.Solar.CancelAnalysis"
        };
        return callAsyncAPI(args);
    };

            
    window.FormIt.Analysis.Solar.GetValueFromFaceAtPoint = function(face,pt) {
        args = {
            TestAPI: "FormIt.Analysis.Solar.GetValueFromFaceAtPoint",
face: face,
            pt: pt
        };
        return callAsyncAPI(args);
    };

window.FormIt.AutoSave = window.FormIt.AutoSave || {};
        
    window.FormIt.AutoSave.Enable = function() {
        args = {
            TestAPI: "FormIt.AutoSave.Enable"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.Disable = function() {
        args = {
            TestAPI: "FormIt.AutoSave.Disable"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.IsEnabled = function() {
        args = {
            TestAPI: "FormIt.AutoSave.IsEnabled"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.SetConfig = function(config) {
        args = {
            TestAPI: "FormIt.AutoSave.SetConfig",
config: config
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.SetConfigFromPath = function(path) {
        args = {
            TestAPI: "FormIt.AutoSave.SetConfigFromPath",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.GetConfig = function() {
        args = {
            TestAPI: "FormIt.AutoSave.GetConfig"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.GetDefaultConfig = function() {
        args = {
            TestAPI: "FormIt.AutoSave.GetDefaultConfig"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.StartSignalThread = function() {
        args = {
            TestAPI: "FormIt.AutoSave.StartSignalThread"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.StopSignalThread = function() {
        args = {
            TestAPI: "FormIt.AutoSave.StopSignalThread"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.Save = function(force) {
        args = {
            TestAPI: "FormIt.AutoSave.Save",
force: force
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.GetExistingBackupFile = function(path) {
        args = {
            TestAPI: "FormIt.AutoSave.GetExistingBackupFile",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.Cleanup = function(force) {
        args = {
            TestAPI: "FormIt.AutoSave.Cleanup",
force: force
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.AddProtectedFile = function(path) {
        args = {
            TestAPI: "FormIt.AutoSave.AddProtectedFile",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.ClearProtectedFiles = function() {
        args = {
            TestAPI: "FormIt.AutoSave.ClearProtectedFiles"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.AutoSave.IsFileProtected = function(path) {
        args = {
            TestAPI: "FormIt.AutoSave.IsFileProtected",
path: path
        };
        return callAsyncAPI(args);
    };

window.FormIt.Cameras = window.FormIt.Cameras || {};
        
    window.FormIt.Cameras.GetCameraData = function() {
        args = {
            TestAPI: "FormIt.Cameras.GetCameraData"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Cameras.SetCameraData = function(cameraData) {
        args = {
            TestAPI: "FormIt.Cameras.SetCameraData",
cameraData: cameraData
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Cameras.AlignWithFace = function(facePath,withTransition) {
        args = {
            TestAPI: "FormIt.Cameras.AlignWithFace",
facePath: facePath,
        withTransition: withTransition
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Cameras.GetViewportSize = function() {
        args = {
            TestAPI: "FormIt.Cameras.GetViewportSize"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Cameras.SetViewportSize = function(x,y) {
        args = {
            TestAPI: "FormIt.Cameras.SetViewportSize",
x: x,
        y: y
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Cameras.SetProjectionType = function(projectionType) {
        args = {
            TestAPI: "FormIt.Cameras.SetProjectionType",
projectionType: projectionType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Cameras.GetProjectionType = function() {
        args = {
            TestAPI: "FormIt.Cameras.GetProjectionType"
        };
        return callAsyncAPI(args);
    };

window.FormIt.Clipboard = window.FormIt.Clipboard || {};
        
    window.FormIt.Clipboard.GetJSONStringForClipboard = function() {
        args = {
            TestAPI: "FormIt.Clipboard.GetJSONStringForClipboard"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Clipboard.SetJSONStringFromClipboard = function(str) {
        args = {
            TestAPI: "FormIt.Clipboard.SetJSONStringFromClipboard",
str: str
        };
        return callAsyncAPI(args);
    };

window.FormIt.Collaboration = window.FormIt.Collaboration || {};
        
    window.FormIt.Collaboration.Connect = function(sSessionLink) {
        args = {
            TestAPI: "FormIt.Collaboration.Connect",
sSessionLink: sSessionLink
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.IsConnected = function() {
        args = {
            TestAPI: "FormIt.Collaboration.IsConnected"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.Disconnect = function() {
        args = {
            TestAPI: "FormIt.Collaboration.Disconnect"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.GetSessionId = function() {
        args = {
            TestAPI: "FormIt.Collaboration.GetSessionId"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.IsSessionOwner = function() {
        args = {
            TestAPI: "FormIt.Collaboration.IsSessionOwner"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.IsFollowingCamera = function() {
        args = {
            TestAPI: "FormIt.Collaboration.IsFollowingCamera"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.FollowCamera = function(sUserId) {
        args = {
            TestAPI: "FormIt.Collaboration.FollowCamera",
sUserId: sUserId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.GetFollowingCameraUserID = function() {
        args = {
            TestAPI: "FormIt.Collaboration.GetFollowingCameraUserID"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.UnFollowCamera = function() {
        args = {
            TestAPI: "FormIt.Collaboration.UnFollowCamera"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.ReceiveCreateRefHistory = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Collaboration.ReceiveCreateRefHistory",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.ReceiveHistory = function(nHistoryID,sBase64History,bIsOwner) {
        args = {
            TestAPI: "FormIt.Collaboration.ReceiveHistory",
nHistoryID: nHistoryID,
        sBase64History: sBase64History,
        bIsOwner: bIsOwner
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.ReceiveDelta = function(nHistoryID,nDeltaID,sBase64Delta) {
        args = {
            TestAPI: "FormIt.Collaboration.ReceiveDelta",
nHistoryID: nHistoryID,
        nDeltaID: nDeltaID,
        sBase64Delta: sBase64Delta
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.ReceiveUndoRedo = function(nHistoryID,nUndoValue,nBaseDeltaID,sBase64Delta) {
        args = {
            TestAPI: "FormIt.Collaboration.ReceiveUndoRedo",
nHistoryID: nHistoryID,
        nUndoValue: nUndoValue,
        nBaseDeltaID: nBaseDeltaID,
        sBase64Delta: sBase64Delta
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Collaboration.ReceiveDataAcceptance = function(nHistoryID,nDataType,nDeltaID,bAccepted) {
        args = {
            TestAPI: "FormIt.Collaboration.ReceiveDataAcceptance",
nHistoryID: nHistoryID,
        nDataType: nDataType,
        nDeltaID: nDeltaID,
        bAccepted: bAccepted
        };
        return callAsyncAPI(args);
    };

window.FormIt.Configuration = window.FormIt.Configuration || {};
        
    window.FormIt.Configuration.GetToolGroupUUIDs = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetToolGroupUUIDs"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetContextMenuToolUUIDs = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetContextMenuToolUUIDs"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetContextMenuToolUUIDFromActionId = function(actionId) {
        args = {
            TestAPI: "FormIt.Configuration.GetContextMenuToolUUIDFromActionId",
actionId: actionId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetContextMenuActionIdFromToolUUID = function(toolUUID) {
        args = {
            TestAPI: "FormIt.Configuration.GetContextMenuActionIdFromToolUUID",
toolUUID: toolUUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetToolGroupInfo = function(toolGroupUUID) {
        args = {
            TestAPI: "FormIt.Configuration.GetToolGroupInfo",
toolGroupUUID: toolGroupUUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetToolInfo = function(toolUUID) {
        args = {
            TestAPI: "FormIt.Configuration.GetToolInfo",
toolUUID: toolUUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.IsPaletteConfigured = function(paletteUUID) {
        args = {
            TestAPI: "FormIt.Configuration.IsPaletteConfigured",
paletteUUID: paletteUUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.IsProjectBarConfigured = function(projectBarUUID) {
        args = {
            TestAPI: "FormIt.Configuration.IsProjectBarConfigured",
projectBarUUID: projectBarUUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.ConfigureFromJSON = function(configurationJSON) {
        args = {
            TestAPI: "FormIt.Configuration.ConfigureFromJSON",
configurationJSON: configurationJSON
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetAllPalettes = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetAllPalettes"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetAllProjectBarItems = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetAllProjectBarItems"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetAllToolGroups = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetAllToolGroups"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetAllToolGroupTools = function(toolGroupUUID) {
        args = {
            TestAPI: "FormIt.Configuration.GetAllToolGroupTools",
toolGroupUUID: toolGroupUUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetAllContextMenuTools = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetAllContextMenuTools"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.GetAllImplicitTools = function() {
        args = {
            TestAPI: "FormIt.Configuration.GetAllImplicitTools"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Configuration.IsShortcutCommandConfigured = function(commandName) {
        args = {
            TestAPI: "FormIt.Configuration.IsShortcutCommandConfigured",
commandName: commandName
        };
        return callAsyncAPI(args);
    };

window.FormIt.Dynamo = window.FormIt.Dynamo || {};
        
    window.FormIt.Dynamo.HasFormItBakeToFormItNode = function(dynFileName) {
        args = {
            TestAPI: "FormIt.Dynamo.HasFormItBakeToFormItNode",
dynFileName: dynFileName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.HasFormItSelectionNodes = function(dynFileName) {
        args = {
            TestAPI: "FormIt.Dynamo.HasFormItSelectionNodes",
dynFileName: dynFileName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.IsDynamoHistory = function(historyId) {
        args = {
            TestAPI: "FormIt.Dynamo.IsDynamoHistory",
historyId: historyId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.GetUuid = function(historyId) {
        args = {
            TestAPI: "FormIt.Dynamo.GetUuid",
historyId: historyId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.GetSelectedDynamoHistory = function() {
        args = {
            TestAPI: "FormIt.Dynamo.GetSelectedDynamoHistory"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.IsDynamoHistory = function(historyId) {
        args = {
            TestAPI: "FormIt.Dynamo.IsDynamoHistory",
historyId: historyId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.GetDynamoFile = function(historyId) {
        args = {
            TestAPI: "FormIt.Dynamo.GetDynamoFile",
historyId: historyId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.SetDynamoFile = function(historyId,script,GUID) {
        args = {
            TestAPI: "FormIt.Dynamo.SetDynamoFile",
historyId: historyId,
        script: script,
        GUID: GUID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.GetDynamoGroupName = function(historyId) {
        args = {
            TestAPI: "FormIt.Dynamo.GetDynamoGroupName",
historyId: historyId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.WriteDYNFile = function(historyId,path) {
        args = {
            TestAPI: "FormIt.Dynamo.WriteDYNFile",
historyId: historyId,
        path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.GetInputNodes = function(historyId,bIsSetAsInput) {
        args = {
            TestAPI: "FormIt.Dynamo.GetInputNodes",
historyId: historyId,
        bIsSetAsInput: bIsSetAsInput
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.GetDynamoFileBakeNodes = function(DYNFileName) {
        args = {
            TestAPI: "FormIt.Dynamo.GetDynamoFileBakeNodes",
DYNFileName: DYNFileName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.DYNRemoveBakeNodesSATFiles = function(DYNFileName) {
        args = {
            TestAPI: "FormIt.Dynamo.DYNRemoveBakeNodesSATFiles",
DYNFileName: DYNFileName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Dynamo.DYNBakeNodesSATFilesExist = function(DYNFileName) {
        args = {
            TestAPI: "FormIt.Dynamo.DYNBakeNodesSATFilesExist",
DYNFileName: DYNFileName
        };
        return callAsyncAPI(args);
    };

window.FormIt.Files = window.FormIt.Files || {};
        
    window.FormIt.Files.GetSupportedFilesList = function(action,type,dialogType) {
        args = {
            TestAPI: "FormIt.Files.GetSupportedFilesList",
action: action,
        type: type,
        dialogType: dialogType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Files.IsFileSupported = function(extension,action,type,dialogType) {
        args = {
            TestAPI: "FormIt.Files.IsFileSupported",
extension: extension,
        action: action,
        type: type,
        dialogType: dialogType
        };
        return callAsyncAPI(args);
    };

window.FormIt.FileSystem = window.FormIt.FileSystem || {};
        
    window.FormIt.FileSystem.FileExists = function(path) {
        args = {
            TestAPI: "FormIt.FileSystem.FileExists",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.FileSystem.Remove = function(path) {
        args = {
            TestAPI: "FormIt.FileSystem.Remove",
path: path
        };
        return callAsyncAPI(args);
    };

window.FormIt.Forge = window.FormIt.Forge || {};
window.FormIt.Forge.UI = window.FormIt.Forge.UI || {};
            
    window.FormIt.Forge.UI.ErrorCodeToUIMessage = function(code) {
        args = {
            TestAPI: "FormIt.Forge.UI.ErrorCodeToUIMessage",
code: code
        };
        return callAsyncAPI(args);
    };

window.FormIt.GroupEdit = window.FormIt.GroupEdit || {};
        
    window.FormIt.GroupEdit.GetEditingHistoryID = function() {
        args = {
            TestAPI: "FormIt.GroupEdit.GetEditingHistoryID"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.GetInContextEditingPath = function() {
        args = {
            TestAPI: "FormIt.GroupEdit.GetInContextEditingPath"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.SetInContextEditingPath = function(path) {
        args = {
            TestAPI: "FormIt.GroupEdit.SetInContextEditingPath",
path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.IsEditingInContext = function() {
        args = {
            TestAPI: "FormIt.GroupEdit.IsEditingInContext"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.EndEditInContext = function() {
        args = {
            TestAPI: "FormIt.GroupEdit.EndEditInContext"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.ExitToParentContext = function() {
        args = {
            TestAPI: "FormIt.GroupEdit.ExitToParentContext"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.GetShowEditedGroupOnly = function() {
        args = {
            TestAPI: "FormIt.GroupEdit.GetShowEditedGroupOnly"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.GroupEdit.SetShowEditedGroupOnly = function(show) {
        args = {
            TestAPI: "FormIt.GroupEdit.SetShowEditedGroupOnly",
show: show
        };
        return callAsyncAPI(args);
    };

window.FormIt.HUDManager = window.FormIt.HUDManager || {};
        
    window.FormIt.HUDManager.GetNumWidgets = function() {
        args = {
            TestAPI: "FormIt.HUDManager.GetNumWidgets"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.HUDManager.WidgetTextInput = function(widgetID,text) {
        args = {
            TestAPI: "FormIt.HUDManager.WidgetTextInput",
widgetID: widgetID,
        text: text
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.HUDManager.ResetHUD = function() {
        args = {
            TestAPI: "FormIt.HUDManager.ResetHUD"
        };
        return callAsyncAPI(args);
    };

window.FormIt.ImageManager = window.FormIt.ImageManager || {};
        
    window.FormIt.ImageManager.ReloadImageLayerWithImage = function(nHistoryID,nLayerID,imageFile) {
        args = {
            TestAPI: "FormIt.ImageManager.ReloadImageLayerWithImage",
nHistoryID: nHistoryID,
        nLayerID: nLayerID,
        imageFile: imageFile
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.ReloadImageLayerWithPlaceholder = function(nHistoryID,nLayerID) {
        args = {
            TestAPI: "FormIt.ImageManager.ReloadImageLayerWithPlaceholder",
nHistoryID: nHistoryID,
        nLayerID: nLayerID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.GetData = function(nHistoryID,nImageID,aIncludeSatelliteData) {
        args = {
            TestAPI: "FormIt.ImageManager.GetData",
nHistoryID: nHistoryID,
        nImageID: nImageID,
        aIncludeSatelliteData: aIncludeSatelliteData
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.GetAllImages = function(nHistoryID,nSort) {
        args = {
            TestAPI: "FormIt.ImageManager.GetAllImages",
nHistoryID: nHistoryID,
        nSort: nSort
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.ImportImage = function(nHistoryID,fileName,pixelWidth,pixelHeight,worldWidth,worldHeight,isSatelliteImage,addToSelections) {
        args = {
            TestAPI: "FormIt.ImageManager.ImportImage",
nHistoryID: nHistoryID,
        fileName: fileName,
        pixelWidth: pixelWidth,
        pixelHeight: pixelHeight,
        worldWidth: worldWidth,
        worldHeight: worldHeight,
        isSatelliteImage: isSatelliteImage,
        addToSelections: addToSelections
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.SetImageName = function(nHistoryID,imageID,name) {
        args = {
            TestAPI: "FormIt.ImageManager.SetImageName",
nHistoryID: nHistoryID,
        imageID: imageID,
        name: name
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.SetImageAlpha = function(nHistoryID,imageID,fAlpha,bFinalChange) {
        args = {
            TestAPI: "FormIt.ImageManager.SetImageAlpha",
nHistoryID: nHistoryID,
        imageID: imageID,
        fAlpha: fAlpha,
        bFinalChange: bFinalChange
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.SetImagePosition = function(nHistoryID,imageID,nPosition) {
        args = {
            TestAPI: "FormIt.ImageManager.SetImagePosition",
nHistoryID: nHistoryID,
        imageID: imageID,
        nPosition: nPosition
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.ImageManager.ReloadTerrain = function(nHistoryID,nImageID,imageFile,nRows,nCols,elevations) {
        args = {
            TestAPI: "FormIt.ImageManager.ReloadTerrain",
nHistoryID: nHistoryID,
        nImageID: nImageID,
        imageFile: imageFile,
        nRows: nRows,
        nCols: nCols,
        elevations: elevations
        };
        return callAsyncAPI(args);
    };

window.FormIt.Layers = window.FormIt.Layers || {};
        
    window.FormIt.Layers.GetAllLayers = function() {
        args = {
            TestAPI: "FormIt.Layers.GetAllLayers"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.GetLayerData = function(layerID) {
        args = {
            TestAPI: "FormIt.Layers.GetLayerData",
layerID: layerID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.GetAllLayerData = function() {
        args = {
            TestAPI: "FormIt.Layers.GetAllLayerData"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.AddLayer = function(historyID,layerName,visible) {
        args = {
            TestAPI: "FormIt.Layers.AddLayer",
historyID: historyID,
        layerName: layerName,
        visible: visible
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.IsValid = function(layerID) {
        args = {
            TestAPI: "FormIt.Layers.IsValid",
layerID: layerID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.SetLayersVisibility = function(aLayersVisibility) {
        args = {
            TestAPI: "FormIt.Layers.SetLayersVisibility",
aLayersVisibility: aLayersVisibility
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.SetLayerVisibility = function(layerName,visibility) {
        args = {
            TestAPI: "FormIt.Layers.SetLayerVisibility",
layerName: layerName,
        visibility: visibility
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.LayerExists = function(layerName) {
        args = {
            TestAPI: "FormIt.Layers.LayerExists",
layerName: layerName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.DeleteLayers = function(aLayerIDs) {
        args = {
            TestAPI: "FormIt.Layers.DeleteLayers",
aLayerIDs: aLayerIDs
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.IsValidLayerName = function(layerID,newLayerName) {
        args = {
            TestAPI: "FormIt.Layers.IsValidLayerName",
layerID: layerID,
        newLayerName: newLayerName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.SetLayerName = function(layerID,newLayerName) {
        args = {
            TestAPI: "FormIt.Layers.SetLayerName",
layerID: layerID,
        newLayerName: newLayerName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.AssignLayerToObjects = function(layerID,aObjects) {
        args = {
            TestAPI: "FormIt.Layers.AssignLayerToObjects",
layerID: layerID,
        aObjects: aObjects
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.RemoveLayersFromObjects = function(layerIDs,aObjects) {
        args = {
            TestAPI: "FormIt.Layers.RemoveLayersFromObjects",
layerIDs: layerIDs,
        aObjects: aObjects
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.GetAllObjectsOnLayers = function(layerIDs) {
        args = {
            TestAPI: "FormIt.Layers.GetAllObjectsOnLayers",
layerIDs: layerIDs
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.ChangeLayerOrder = function(layerID,newPosition) {
        args = {
            TestAPI: "FormIt.Layers.ChangeLayerOrder",
layerID: layerID,
        newPosition: newPosition
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.GetObjectLayerID = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "FormIt.Layers.GetObjectLayerID",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.IsValidObjectForLayerAssignment = function(nHistoryID,nObjectID) {
        args = {
            TestAPI: "FormIt.Layers.IsValidObjectForLayerAssignment",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.GetLayerList = function() {
        args = {
            TestAPI: "FormIt.Layers.GetLayerList"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Layers.GetLayerID = function(layerName) {
        args = {
            TestAPI: "FormIt.Layers.GetLayerID",
layerName: layerName
        };
        return callAsyncAPI(args);
    };

window.FormIt.Levels = window.FormIt.Levels || {};
        
    window.FormIt.Levels.AddLevels = function(nHistoryID,numLevels,startElevation,deltaElevation) {
        args = {
            TestAPI: "FormIt.Levels.AddLevels",
nHistoryID: nHistoryID,
        numLevels: numLevels,
        startElevation: startElevation,
        deltaElevation: deltaElevation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.AutoRenameLevels = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Levels.AutoRenameLevels",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.ChangeLevelElevation = function(nHistoryID,levelID,newElevation) {
        args = {
            TestAPI: "FormIt.Levels.ChangeLevelElevation",
nHistoryID: nHistoryID,
        levelID: levelID,
        newElevation: newElevation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.ChangeLevelName = function(levelID,levelName) {
        args = {
            TestAPI: "FormIt.Levels.ChangeLevelName",
levelID: levelID,
        levelName: levelName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.CreateDefaultLevels = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Levels.CreateDefaultLevels",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.DeleteLevels = function(nHistoryID,aLevelIDs) {
        args = {
            TestAPI: "FormIt.Levels.DeleteLevels",
nHistoryID: nHistoryID,
        aLevelIDs: aLevelIDs
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetDefaultLevelHeight = function() {
        args = {
            TestAPI: "FormIt.Levels.GetDefaultLevelHeight"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetLevels = function(nHistoryID,sortByElevation) {
        args = {
            TestAPI: "FormIt.Levels.GetLevels",
nHistoryID: nHistoryID,
        sortByElevation: sortByElevation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetLevelsVisible = function() {
        args = {
            TestAPI: "FormIt.Levels.GetLevelsVisible"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetNumLevels = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Levels.GetNumLevels",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetMinLevelElevation = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Levels.GetMinLevelElevation",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetMaxLevelElevation = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Levels.GetMaxLevelElevation",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetLevelData = function(nHistoryID,levelID) {
        args = {
            TestAPI: "FormIt.Levels.GetLevelData",
nHistoryID: nHistoryID,
        levelID: levelID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetLevelsData = function(nHistoryID,sortByElevation) {
        args = {
            TestAPI: "FormIt.Levels.GetLevelsData",
nHistoryID: nHistoryID,
        sortByElevation: sortByElevation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetLevelIDsFromSelectedObjects = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Levels.GetLevelIDsFromSelectedObjects",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.HasLevelsInProject = function(checkVisibleOnly) {
        args = {
            TestAPI: "FormIt.Levels.HasLevelsInProject",
checkVisibleOnly: checkVisibleOnly
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.IsExistingLevel = function(nHistoryID,levelName) {
        args = {
            TestAPI: "FormIt.Levels.IsExistingLevel",
nHistoryID: nHistoryID,
        levelName: levelName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.IsExistingLevelByElevation = function(nHistoryID,elevation) {
        args = {
            TestAPI: "FormIt.Levels.IsExistingLevelByElevation",
nHistoryID: nHistoryID,
        elevation: elevation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.IsValidLevelDeltaElevation = function(nHistoryID,deltaElevationString,numLevels) {
        args = {
            TestAPI: "FormIt.Levels.IsValidLevelDeltaElevation",
nHistoryID: nHistoryID,
        deltaElevationString: deltaElevationString,
        numLevels: numLevels
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.IsValidLevelElevation = function(nHistoryID,levelId,elevationString) {
        args = {
            TestAPI: "FormIt.Levels.IsValidLevelElevation",
nHistoryID: nHistoryID,
        levelId: levelId,
        elevationString: elevationString
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.IsValidLevelName = function(levelID,levelName) {
        args = {
            TestAPI: "FormIt.Levels.IsValidLevelName",
levelID: levelID,
        levelName: levelName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.IsValidNumberOfLevelsToAdd = function(nHistoryID,numLevelsString,deltaElevation) {
        args = {
            TestAPI: "FormIt.Levels.IsValidNumberOfLevelsToAdd",
nHistoryID: nHistoryID,
        numLevelsString: numLevelsString,
        deltaElevation: deltaElevation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.SetLevelsToSelectedObjects = function(nHistoryID,aLevelList) {
        args = {
            TestAPI: "FormIt.Levels.SetLevelsToSelectedObjects",
nHistoryID: nHistoryID,
        aLevelList: aLevelList
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.SetLevelsVisible = function(aVisible) {
        args = {
            TestAPI: "FormIt.Levels.SetLevelsVisible",
aVisible: aVisible
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.SetReportAreaByLevelsOnSelection = function(bON) {
        args = {
            TestAPI: "FormIt.Levels.SetReportAreaByLevelsOnSelection",
bON: bON
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Levels.GetAreaForObjects = function(nHistoryID,aLevelId,aObjectIds) {
        args = {
            TestAPI: "FormIt.Levels.GetAreaForObjects",
nHistoryID: nHistoryID,
        aLevelId: aLevelId,
        aObjectIds: aObjectIds
        };
        return callAsyncAPI(args);
    };

window.FormIt.MaterialProvider = window.FormIt.MaterialProvider || {};
        
    window.FormIt.MaterialProvider.MaterialData = function(color,textureData,scale,useAlpha,materialName,materialIdentifier,textureName,aAdditionalRenderData,aAdditionalTextures) {
        args = {
            TestAPI: "FormIt.MaterialProvider.MaterialData",
color: color,
        textureData: textureData,
        scale: scale,
        useAlpha: useAlpha,
        materialName: materialName,
        materialIdentifier: materialIdentifier,
        textureName: textureName,
        aAdditionalRenderData: aAdditionalRenderData,
        aAdditionalTextures: aAdditionalTextures
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.CreateMaterial = function(libraryType,materialData) {
        args = {
            TestAPI: "FormIt.MaterialProvider.CreateMaterial",
libraryType: libraryType,
        materialData: materialData
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.GetMaterialData = function(libraryType,materialId) {
        args = {
            TestAPI: "FormIt.MaterialProvider.GetMaterialData",
libraryType: libraryType,
        materialId: materialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.SetMaterialData = function(libraryType,materialId,materialData) {
        args = {
            TestAPI: "FormIt.MaterialProvider.SetMaterialData",
libraryType: libraryType,
        materialId: materialId,
        materialData: materialData
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.GetMaterialName = function(libraryType,materialId) {
        args = {
            TestAPI: "FormIt.MaterialProvider.GetMaterialName",
libraryType: libraryType,
        materialId: materialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.GetMaterials = function(libraryType) {
        args = {
            TestAPI: "FormIt.MaterialProvider.GetMaterials",
libraryType: libraryType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.DeleteMaterials = function(libraryType,materialIds) {
        args = {
            TestAPI: "FormIt.MaterialProvider.DeleteMaterials",
libraryType: libraryType,
        materialIds: materialIds
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.GetMaterialPreviewImage = function(libraryType,materialId) {
        args = {
            TestAPI: "FormIt.MaterialProvider.GetMaterialPreviewImage",
libraryType: libraryType,
        materialId: materialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.IsValidMaterialName = function(libraryType,materialId,newName) {
        args = {
            TestAPI: "FormIt.MaterialProvider.IsValidMaterialName",
libraryType: libraryType,
        materialId: materialId,
        newName: newName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.GetNewMaterialName = function(libraryType,baseName) {
        args = {
            TestAPI: "FormIt.MaterialProvider.GetNewMaterialName",
libraryType: libraryType,
        baseName: baseName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.IsValidMaterial = function(libraryType,materialId) {
        args = {
            TestAPI: "FormIt.MaterialProvider.IsValidMaterial",
libraryType: libraryType,
        materialId: materialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.MaterialProvider.CanModify = function(libraryType,materialId) {
        args = {
            TestAPI: "FormIt.MaterialProvider.CanModify",
libraryType: libraryType,
        materialId: materialId
        };
        return callAsyncAPI(args);
    };

window.FormIt.Messaging = window.FormIt.Messaging || {};
        
    window.FormIt.Messaging.GetMessages = function() {
        args = {
            TestAPI: "FormIt.Messaging.GetMessages"
        };
        return callAsyncAPI(args);
    };

window.FormIt.Model = window.FormIt.Model || {};
        
    window.FormIt.Model.GetHistoryID = function() {
        args = {
            TestAPI: "FormIt.Model.GetHistoryID"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetMemorySize = function(bCollapsedHistoryWithLiveObjsOnly) {
        args = {
            TestAPI: "FormIt.Model.GetMemorySize",
bCollapsedHistoryWithLiveObjsOnly: bCollapsedHistoryWithLiveObjsOnly
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetUnitTypeCurrent = function() {
        args = {
            TestAPI: "FormIt.Model.GetUnitTypeCurrent"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetUnitType = function() {
        args = {
            TestAPI: "FormIt.Model.GetUnitType"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetUnitTypeCurrent = function(unitType) {
        args = {
            TestAPI: "FormIt.Model.SetUnitTypeCurrent",
unitType: unitType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetUnitType = function(unitType) {
        args = {
            TestAPI: "FormIt.Model.SetUnitType",
unitType: unitType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.IsImperialUnitType = function(unitType) {
        args = {
            TestAPI: "FormIt.Model.IsImperialUnitType",
unitType: unitType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetGroupHistoryName = function(nHistoryID) {
        args = {
            TestAPI: "FormIt.Model.GetGroupHistoryName",
nHistoryID: nHistoryID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetGroupHistoryName = function(nHistoryID,sHistoryName) {
        args = {
            TestAPI: "FormIt.Model.SetGroupHistoryName",
nHistoryID: nHistoryID,
        sHistoryName: sHistoryName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.IsModified = function() {
        args = {
            TestAPI: "FormIt.Model.IsModified"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.ResetModified = function() {
        args = {
            TestAPI: "FormIt.Model.ResetModified"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetCurveAccuracyOrCountCurrent = function(accuracyORcount) {
        args = {
            TestAPI: "FormIt.Model.SetCurveAccuracyOrCountCurrent",
accuracyORcount: accuracyORcount
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetCurveAccuracyOrCountCurrent = function() {
        args = {
            TestAPI: "FormIt.Model.GetCurveAccuracyOrCountCurrent"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetPropertiesForHistory = function(nHistoryID,editingPath) {
        args = {
            TestAPI: "FormIt.Model.GetPropertiesForHistory",
nHistoryID: nHistoryID,
        editingPath: editingPath
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetPropertiesForSelected = function() {
        args = {
            TestAPI: "FormIt.Model.GetPropertiesForSelected"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetObjectName = function(objectID) {
        args = {
            TestAPI: "FormIt.Model.GetObjectName",
objectID: objectID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetObjectName = function(objectID,name) {
        args = {
            TestAPI: "FormIt.Model.SetObjectName",
objectID: objectID,
        name: name
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.ObjectReportsAreaByLevel = function(objectID) {
        args = {
            TestAPI: "FormIt.Model.ObjectReportsAreaByLevel",
objectID: objectID
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetSurfaceAccuracyOrCountCurrent = function(accuracy) {
        args = {
            TestAPI: "FormIt.Model.SetSurfaceAccuracyOrCountCurrent",
accuracy: accuracy
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetSurfaceAccuracyOrCountCurrent = function() {
        args = {
            TestAPI: "FormIt.Model.GetSurfaceAccuracyOrCountCurrent"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetProjectSiteArea = function() {
        args = {
            TestAPI: "FormIt.Model.GetProjectSiteArea"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.SetTotalAreaOfSite = function(area) {
        args = {
            TestAPI: "FormIt.Model.SetTotalAreaOfSite",
area: area
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetProjectTargetArea = function() {
        args = {
            TestAPI: "FormIt.Model.GetProjectTargetArea"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Model.GetTotalGrossArea = function() {
        args = {
            TestAPI: "FormIt.Model.GetTotalGrossArea"
        };
        return callAsyncAPI(args);
    };

window.FormIt.Scenes = window.FormIt.Scenes || {};
        
    window.FormIt.Scenes.SceneNameExists = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.SceneNameExists",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.IsValidSceneName = function(oldSceneName,newSceneName) {
        args = {
            TestAPI: "FormIt.Scenes.IsValidSceneName",
oldSceneName: oldSceneName,
        newSceneName: newSceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetSceneName = function(oldSceneName,newSceneName) {
        args = {
            TestAPI: "FormIt.Scenes.SetSceneName",
oldSceneName: oldSceneName,
        newSceneName: newSceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.AddNewScene = function(afterSceneName) {
        args = {
            TestAPI: "FormIt.Scenes.AddNewScene",
afterSceneName: afterSceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetScene = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetScene",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetScenes = function() {
        args = {
            TestAPI: "FormIt.Scenes.GetScenes"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetScenes = function(scenes) {
        args = {
            TestAPI: "FormIt.Scenes.SetScenes",
scenes: scenes
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.AddScene = function(scene,afterSceneName) {
        args = {
            TestAPI: "FormIt.Scenes.AddScene",
scene: scene,
        afterSceneName: afterSceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.RemoveScene = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.RemoveScene",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.DuplicateScene = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.DuplicateScene",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetSceneNames = function() {
        args = {
            TestAPI: "FormIt.Scenes.GetSceneNames"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.ScenesAreEqual = function(sceneName,scene) {
        args = {
            TestAPI: "FormIt.Scenes.ScenesAreEqual",
sceneName: sceneName,
        scene: scene
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetPresentationMode = function(start,sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.SetPresentationMode",
start: start,
        sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.IsPresenting = function() {
        args = {
            TestAPI: "FormIt.Scenes.IsPresenting"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.UpdateScene = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.UpdateScene",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetPropertiesToCapture = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetPropertiesToCapture",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetPropertiesToCapture = function(sceneName,properties) {
        args = {
            TestAPI: "FormIt.Scenes.SetPropertiesToCapture",
sceneName: sceneName,
        properties: properties
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.ActivateScene = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.ActivateScene",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.MoveSceneUp = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.MoveSceneUp",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.MoveSceneDown = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.MoveSceneDown",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.RearrangeScenes = function(oldPos,newPos) {
        args = {
            TestAPI: "FormIt.Scenes.RearrangeScenes",
oldPos: oldPos,
        newPos: newPos
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetNumberOfScenes = function() {
        args = {
            TestAPI: "FormIt.Scenes.GetNumberOfScenes"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetNumberOfScenesWithAnimation = function() {
        args = {
            TestAPI: "FormIt.Scenes.GetNumberOfScenesWithAnimation"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetPauseTime = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetPauseTime",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetPauseTime = function(sceneName,pauseTime) {
        args = {
            TestAPI: "FormIt.Scenes.SetPauseTime",
sceneName: sceneName,
        pauseTime: pauseTime
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.IsValidScenePauseTime = function(pauseTimeString) {
        args = {
            TestAPI: "FormIt.Scenes.IsValidScenePauseTime",
pauseTimeString: pauseTimeString
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.IsValidSceneTransitionTime = function(transitionTimeString) {
        args = {
            TestAPI: "FormIt.Scenes.IsValidSceneTransitionTime",
transitionTimeString: transitionTimeString
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.IsValidSceneCameraSpeed = function(speedString) {
        args = {
            TestAPI: "FormIt.Scenes.IsValidSceneCameraSpeed",
speedString: speedString
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetTransitionTime = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetTransitionTime",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetTransitionTime = function(sceneName,transitionTime) {
        args = {
            TestAPI: "FormIt.Scenes.SetTransitionTime",
sceneName: sceneName,
        transitionTime: transitionTime
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetCameraSpeed = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetCameraSpeed",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetCameraSpeed = function(sceneName,cameraSpeed) {
        args = {
            TestAPI: "FormIt.Scenes.SetCameraSpeed",
sceneName: sceneName,
        cameraSpeed: cameraSpeed
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetIncludeInAnimation = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetIncludeInAnimation",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetIncludeInAnimation = function(sceneName,bIncludeInAnimation) {
        args = {
            TestAPI: "FormIt.Scenes.SetIncludeInAnimation",
sceneName: sceneName,
        bIncludeInAnimation: bIncludeInAnimation
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetUseCameraSpeed = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetUseCameraSpeed",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetUseCameraSpeed = function(sceneName,bUseCameraSpeed) {
        args = {
            TestAPI: "FormIt.Scenes.SetUseCameraSpeed",
sceneName: sceneName,
        bUseCameraSpeed: bUseCameraSpeed
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetTransitionTimeUsed = function(sceneName) {
        args = {
            TestAPI: "FormIt.Scenes.GetTransitionTimeUsed",
sceneName: sceneName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.SetEditCameras = function(bEditCameras) {
        args = {
            TestAPI: "FormIt.Scenes.SetEditCameras",
bEditCameras: bEditCameras
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Scenes.GetEditCameras = function() {
        args = {
            TestAPI: "FormIt.Scenes.GetEditCameras"
        };
        return callAsyncAPI(args);
    };

window.FormIt.StringConversion = window.FormIt.StringConversion || {};
        
    window.FormIt.StringConversion.LinearValueToString = function(val,forceFeetOrMeter) {
        args = {
            TestAPI: "FormIt.StringConversion.LinearValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.StringConversion.StringToLinearValue = function(val,forceFeetOrMeter) {
        args = {
            TestAPI: "FormIt.StringConversion.StringToLinearValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.StringConversion.AreaValueToString = function(val,forceFeetOrMeter) {
        args = {
            TestAPI: "FormIt.StringConversion.AreaValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.StringConversion.StringToAreaValue = function(val,forceFeetOrMeter) {
        args = {
            TestAPI: "FormIt.StringConversion.StringToAreaValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.StringConversion.VolumeValueToString = function(val,forceFeetOrMeter) {
        args = {
            TestAPI: "FormIt.StringConversion.VolumeValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.StringConversion.StringToVolumeValue = function(val,forceFeetOrMeter) {
        args = {
            TestAPI: "FormIt.StringConversion.StringToVolumeValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
        };
        return callAsyncAPI(args);
    };

window.FormIt.SectionPlanes = window.FormIt.SectionPlanes || {};
        
    window.FormIt.SectionPlanes.Clear = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.Clear"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SetPlanes = function(planes) {
        args = {
            TestAPI: "FormIt.SectionPlanes.SetPlanes",
planes: planes
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.GetPlanes = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.GetPlanes"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.GetInstances = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.GetInstances"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SetOutlineColor = function(color) {
        args = {
            TestAPI: "FormIt.SectionPlanes.SetOutlineColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.GetOutlineColor = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.GetOutlineColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SetOutlineSize = function(s) {
        args = {
            TestAPI: "FormIt.SectionPlanes.SetOutlineSize",
s: s
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.GetOutlineSize = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.GetOutlineSize"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SetSectionIndicatorsVisibility = function(visible) {
        args = {
            TestAPI: "FormIt.SectionPlanes.SetSectionIndicatorsVisibility",
visible: visible
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SetPocheColor = function(color) {
        args = {
            TestAPI: "FormIt.SectionPlanes.SetPocheColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.GetPocheColor = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.GetPocheColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.EnablePocheColor = function(enable) {
        args = {
            TestAPI: "FormIt.SectionPlanes.EnablePocheColor",
enable: enable
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.IsPocheColorEnabled = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.IsPocheColorEnabled"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SectionPlaneHistoryChanged = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.SectionPlaneHistoryChanged"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.SetLastSectionRefHistory = function(historyId) {
        args = {
            TestAPI: "FormIt.SectionPlanes.SetLastSectionRefHistory",
historyId: historyId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SectionPlanes.GetLastSectionRefHistory = function() {
        args = {
            TestAPI: "FormIt.SectionPlanes.GetLastSectionRefHistory"
        };
        return callAsyncAPI(args);
    };

window.FormIt.Selection = window.FormIt.Selection || {};
        
    window.FormIt.Selection.GetObjectTypeFilter = function() {
        args = {
            TestAPI: "FormIt.Selection.GetObjectTypeFilter"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.SetObjectTypeFilter = function(objectTypeFilter) {
        args = {
            TestAPI: "FormIt.Selection.SetObjectTypeFilter",
objectTypeFilter: objectTypeFilter
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.ClearSelections = function() {
        args = {
            TestAPI: "FormIt.Selection.ClearSelections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.AddSelections = function(aSelection) {
        args = {
            TestAPI: "FormIt.Selection.AddSelections",
aSelection: aSelection
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.GetSelections = function() {
        args = {
            TestAPI: "FormIt.Selection.GetSelections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.SetSelections = function(selections) {
        args = {
            TestAPI: "FormIt.Selection.SetSelections",
selections: selections
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.SetPreSelections = function(firstPreselection,selections) {
        args = {
            TestAPI: "FormIt.Selection.SetPreSelections",
firstPreselection: firstPreselection,
        selections: selections
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.HasPreSelections = function() {
        args = {
            TestAPI: "FormIt.Selection.HasPreSelections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.GetFirstPreSelectedObject = function() {
        args = {
            TestAPI: "FormIt.Selection.GetFirstPreSelectedObject"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.GetFirstSelectedObject = function() {
        args = {
            TestAPI: "FormIt.Selection.GetFirstSelectedObject"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.GetContextMenuObject = function() {
        args = {
            TestAPI: "FormIt.Selection.GetContextMenuObject"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.ClearPreSelections = function() {
        args = {
            TestAPI: "FormIt.Selection.ClearPreSelections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.IsSelected = function(objPath) {
        args = {
            TestAPI: "FormIt.Selection.IsSelected",
objPath: objPath
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.SelectAll = function() {
        args = {
            TestAPI: "FormIt.Selection.SelectAll"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.HasSelections = function() {
        args = {
            TestAPI: "FormIt.Selection.HasSelections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.GetPreSelections = function() {
        args = {
            TestAPI: "FormIt.Selection.GetPreSelections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.CommitPreselections = function() {
        args = {
            TestAPI: "FormIt.Selection.CommitPreselections"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.CompareSelections = function(selection1,selection2) {
        args = {
            TestAPI: "FormIt.Selection.CompareSelections",
selection1: selection1,
        selection2: selection2
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.ToggleObjects = function(selections) {
        args = {
            TestAPI: "FormIt.Selection.ToggleObjects",
selections: selections
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Selection.ApplyMaterialToSelection = function(id,backside) {
        args = {
            TestAPI: "FormIt.Selection.ApplyMaterialToSelection",
id: id,
        backside: backside
        };
        return callAsyncAPI(args);
    };

window.FormIt.Shortcuts = window.FormIt.Shortcuts || {};
        
    window.FormIt.Shortcuts.GetShortcutKeys = function() {
        args = {
            TestAPI: "FormIt.Shortcuts.GetShortcutKeys"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Shortcuts.RestoreFromJSON = function(jsonStr) {
        args = {
            TestAPI: "FormIt.Shortcuts.RestoreFromJSON",
jsonStr: jsonStr
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Shortcuts.GetJSON = function() {
        args = {
            TestAPI: "FormIt.Shortcuts.GetJSON"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Shortcuts.GetKeycodeString = function(key,modifier) {
        args = {
            TestAPI: "FormIt.Shortcuts.GetKeycodeString",
key: key,
        modifier: modifier
        };
        return callAsyncAPI(args);
    };

window.FormIt.Commands = window.FormIt.Commands || {};
        
    window.FormIt.Commands.GetCommands = function() {
        args = {
            TestAPI: "FormIt.Commands.GetCommands"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Commands.DoCommand = function(command) {
        args = {
            TestAPI: "FormIt.Commands.DoCommand",
command: command
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Commands.RegisterJSCommand = function(command) {
        args = {
            TestAPI: "FormIt.Commands.RegisterJSCommand",
command: command
        };
        return callAsyncAPI(args);
    };

window.FormIt.SketchMaterials = window.FormIt.SketchMaterials || {};
        
    window.FormIt.SketchMaterials.GetWSMMaterialForHistory = function(historyId,materialId) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetWSMMaterialForHistory",
historyId: historyId,
        materialId: materialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.GetSketchMaterialFromWSMMaterial = function(historyId,wsmMaterialId) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetSketchMaterialFromWSMMaterial",
historyId: historyId,
        wsmMaterialId: wsmMaterialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.GetMaterialIDsFromObjects = function(aObjects) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetMaterialIDsFromObjects",
aObjects: aObjects
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.AssignMaterialToObjects = function(materialId,aObjects,uvTransf3d) {
        args = {
            TestAPI: "FormIt.SketchMaterials.AssignMaterialToObjects",
materialId: materialId,
        aObjects: aObjects,
        uvTransf3d: uvTransf3d
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.ChangeMaterialOrder = function(materialId,newPos) {
        args = {
            TestAPI: "FormIt.SketchMaterials.ChangeMaterialOrder",
materialId: materialId,
        newPos: newPos
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.IsMaterialUsed = function(materialId) {
        args = {
            TestAPI: "FormIt.SketchMaterials.IsMaterialUsed",
materialId: materialId
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.GetDefaultMaterialData = function(bBack) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetDefaultMaterialData",
bBack: bBack
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.SetDefaultMaterialData = function(bBack,materialData) {
        args = {
            TestAPI: "FormIt.SketchMaterials.SetDefaultMaterialData",
bBack: bBack,
        materialData: materialData
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.GetMaterialDataAttribute = function(materialData,attributeType) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetMaterialDataAttribute",
materialData: materialData,
        attributeType: attributeType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.SetMaterialDataAttribute = function(materialData,attributeType,value) {
        args = {
            TestAPI: "FormIt.SketchMaterials.SetMaterialDataAttribute",
materialData: materialData,
        attributeType: attributeType,
        value: value
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.GetMaterialDataMap = function(materialData,mapType) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetMaterialDataMap",
materialData: materialData,
        mapType: mapType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.SetMaterialDataMap = function(materialData,mapType,map) {
        args = {
            TestAPI: "FormIt.SketchMaterials.SetMaterialDataMap",
materialData: materialData,
        mapType: mapType,
        map: map
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.GetAllObjectsUsingMaterials = function(materialIds) {
        args = {
            TestAPI: "FormIt.SketchMaterials.GetAllObjectsUsingMaterials",
materialIds: materialIds
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SketchMaterials.UpdateMaterialFromParameters = function(materialID,parameters) {
        args = {
            TestAPI: "FormIt.SketchMaterials.UpdateMaterialFromParameters",
materialID: materialID,
        parameters: parameters
        };
        return callAsyncAPI(args);
    };

window.FormIt.Statistics = window.FormIt.Statistics || {};
        
    window.FormIt.Statistics.OptOutTracking = function(isOptingOut) {
        args = {
            TestAPI: "FormIt.Statistics.OptOutTracking",
isOptingOut: isOptingOut
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Statistics.Log = function(UITrackingType) {
        args = {
            TestAPI: "FormIt.Statistics.Log",
UITrackingType: UITrackingType
        };
        return callAsyncAPI(args);
    };

window.FormIt.SunAndLocation = window.FormIt.SunAndLocation || {};
        
    window.FormIt.SunAndLocation.AddSatelliteImage = function(centerLat,centerLon,latSpan,lonSpan,pixelWidth,pixelHeight,physicalWidth,physicalHeight,address,xOffset,yOffset) {
        args = {
            TestAPI: "FormIt.SunAndLocation.AddSatelliteImage",
centerLat: centerLat,
        centerLon: centerLon,
        latSpan: latSpan,
        lonSpan: lonSpan,
        pixelWidth: pixelWidth,
        pixelHeight: pixelHeight,
        physicalWidth: physicalWidth,
        physicalHeight: physicalHeight,
        address: address,
        xOffset: xOffset,
        yOffset: yOffset
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.SetProjectAddress = function(address) {
        args = {
            TestAPI: "FormIt.SunAndLocation.SetProjectAddress",
address: address
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.GetProjectAddress = function() {
        args = {
            TestAPI: "FormIt.SunAndLocation.GetProjectAddress"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.SetLocation = function(longitude,latitude) {
        args = {
            TestAPI: "FormIt.SunAndLocation.SetLocation",
longitude: longitude,
        latitude: latitude
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.SetTimeOfDay = function(dTimeOfDay,bUpdateRender) {
        args = {
            TestAPI: "FormIt.SunAndLocation.SetTimeOfDay",
dTimeOfDay: dTimeOfDay,
        bUpdateRender: bUpdateRender
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.SetDate = function(nDay,nMonth,nYear,bUpdateRender) {
        args = {
            TestAPI: "FormIt.SunAndLocation.SetDate",
nDay: nDay,
        nMonth: nMonth,
        nYear: nYear,
        bUpdateRender: bUpdateRender
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.GetDaylightSavingTime = function() {
        args = {
            TestAPI: "FormIt.SunAndLocation.GetDaylightSavingTime"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.SetDaylightSavingTime = function(bEnable,bUpdateRender) {
        args = {
            TestAPI: "FormIt.SunAndLocation.SetDaylightSavingTime",
bEnable: bEnable,
        bUpdateRender: bUpdateRender
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.GetLocationDateTime = function() {
        args = {
            TestAPI: "FormIt.SunAndLocation.GetLocationDateTime"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.SunAndLocation.GetSunRiseAndSet = function() {
        args = {
            TestAPI: "FormIt.SunAndLocation.GetSunRiseAndSet"
        };
        return callAsyncAPI(args);
    };

window.FormIt.Tools = window.FormIt.Tools || {};
        
    window.FormIt.Tools.ClearTools = function() {
        args = {
            TestAPI: "FormIt.Tools.ClearTools"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.GetActiveToolType = function() {
        args = {
            TestAPI: "FormIt.Tools.GetActiveToolType"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.GetActiveToolSubType = function() {
        args = {
            TestAPI: "FormIt.Tools.GetActiveToolSubType"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.IsInContinuousAction = function() {
        args = {
            TestAPI: "FormIt.Tools.IsInContinuousAction"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.StartTool = function(toolType) {
        args = {
            TestAPI: "FormIt.Tools.StartTool",
toolType: toolType
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.BlendFacesOrEdges = function(val) {
        args = {
            TestAPI: "FormIt.Tools.BlendFacesOrEdges",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.FlattenGroups = function() {
        args = {
            TestAPI: "FormIt.Tools.FlattenGroups"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.OffsetBody = function(val) {
        args = {
            TestAPI: "FormIt.Tools.OffsetBody",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.Paintbrush = function(materialID,backside) {
        args = {
            TestAPI: "FormIt.Tools.Paintbrush",
materialID: materialID,
        backside: backside
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.ShellBodyOrFaces = function(val) {
        args = {
            TestAPI: "FormIt.Tools.ShellBodyOrFaces",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.ClearAllInferences = function() {
        args = {
            TestAPI: "FormIt.Tools.ClearAllInferences"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.InitToolsAPI = function() {
        args = {
            TestAPI: "FormIt.Tools.InitToolsAPI"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.SelectArrayTool = function(numCopies,copyDivide,groupBeforeCopy,radial) {
        args = {
            TestAPI: "FormIt.Tools.SelectArrayTool",
numCopies: numCopies,
        copyDivide: copyDivide,
        groupBeforeCopy: groupBeforeCopy,
        radial: radial
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Tools.GetSecondaryTool = function() {
        args = {
            TestAPI: "FormIt.Tools.GetSecondaryTool"
        };
        return callAsyncAPI(args);
    };

window.FormIt.UI = window.FormIt.UI || {};
        
    window.FormIt.UI.LoadLangPack = function(filename) {
        args = {
            TestAPI: "FormIt.UI.LoadLangPack",
filename: filename
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UI.CreatePanel = function(title,url) {
        args = {
            TestAPI: "FormIt.UI.CreatePanel",
title: title,
        url: url
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UI.CreateToolbar = function(tbJSON,URL) {
        args = {
            TestAPI: "FormIt.UI.CreateToolbar",
tbJSON: tbJSON,
        URL: URL
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UI.ShowNotification = function(message,notificationType,nTimeout) {
        args = {
            TestAPI: "FormIt.UI.ShowNotification",
message: message,
        notificationType: notificationType,
        nTimeout: nTimeout
        };
        return callAsyncAPI(args);
    };

window.FormIt.UndoManagement = window.FormIt.UndoManagement || {};
        
    window.FormIt.UndoManagement.BeginState = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.BeginState"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.EndState = function(name,userName) {
        args = {
            TestAPI: "FormIt.UndoManagement.EndState",
name: name,
        userName: userName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.RejectState = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.RejectState"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.CanGlobalRedo = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.CanGlobalRedo"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GlobalRedo = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.GlobalRedo"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GlobalUndo = function(bAndDeleteRedo) {
        args = {
            TestAPI: "FormIt.UndoManagement.GlobalUndo",
bAndDeleteRedo: bAndDeleteRedo
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.CanGlobalUndo = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.CanGlobalUndo"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.CanRedo = function(nStates) {
        args = {
            TestAPI: "FormIt.UndoManagement.CanRedo",
nStates: nStates
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.CanUndo = function(nStates) {
        args = {
            TestAPI: "FormIt.UndoManagement.CanUndo",
nStates: nStates
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GetCurrentState = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.GetCurrentState"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GetHistoryIDs = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.GetHistoryIDs"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GetHistoryStates = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.GetHistoryStates"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GetStateData = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.GetStateData"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.GetStateHistories = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.GetStateHistories"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.MergeCurrentStates = function(histories) {
        args = {
            TestAPI: "FormIt.UndoManagement.MergeCurrentStates",
histories: histories
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.MergeStateRange = function() {
        args = {
            TestAPI: "FormIt.UndoManagement.MergeStateRange"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.MergeStates = function(states) {
        args = {
            TestAPI: "FormIt.UndoManagement.MergeStates",
states: states
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.NoteState = function(name,aHistories) {
        args = {
            TestAPI: "FormIt.UndoManagement.NoteState",
name: name,
        aHistories: aHistories
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.Redo = function(nStates) {
        args = {
            TestAPI: "FormIt.UndoManagement.Redo",
nStates: nStates
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.RollTo = function(bAndDeleteRedo) {
        args = {
            TestAPI: "FormIt.UndoManagement.RollTo",
bAndDeleteRedo: bAndDeleteRedo
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.SetLastStateName = function(stateName) {
        args = {
            TestAPI: "FormIt.UndoManagement.SetLastStateName",
stateName: stateName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.SetStateName = function(stateName) {
        args = {
            TestAPI: "FormIt.UndoManagement.SetStateName",
stateName: stateName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.UndoManagement.Undo = function(nStates,bAndDeleteRedo) {
        args = {
            TestAPI: "FormIt.UndoManagement.Undo",
nStates: nStates,
        bAndDeleteRedo: bAndDeleteRedo
        };
        return callAsyncAPI(args);
    };

window.FormIt.Utils = window.FormIt.Utils || {};
        
    window.FormIt.Utils.DecodeBase64Bytes = function(decodeBytes) {
        args = {
            TestAPI: "FormIt.Utils.DecodeBase64Bytes",
decodeBytes: decodeBytes
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Utils.EncodeBase64Bytes = function(encodeBytes) {
        args = {
            TestAPI: "FormIt.Utils.EncodeBase64Bytes",
encodeBytes: encodeBytes
        };
        return callAsyncAPI(args);
    };

window.FormIt.VisualStyles = window.FormIt.VisualStyles || {};
        
    window.FormIt.VisualStyles.GetShadowsVisible = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetShadowsVisible"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetShadowsVisible = function(val) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetShadowsVisible",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetAlwaysDrawInstanceBoxes = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetAlwaysDrawInstanceBoxes"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetAlwaysDrawInstanceBoxes = function(val) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetAlwaysDrawInstanceBoxes",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsGroundPlaneVisible = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.IsGroundPlaneVisible"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetGroundPlaneVisible = function(val) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetGroundPlaneVisible",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsWorkPlaneVisible = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.IsWorkPlaneVisible"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetWorkPlaneVisible = function(val) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetWorkPlaneVisible",
val: val
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetNorthArrowDisplay = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetNorthArrowDisplay"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetNorthArrowDisplay = function(bOn) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetNorthArrowDisplay",
bOn: bOn
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.ToggleNorthArrowDisplay = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.ToggleNorthArrowDisplay"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsNorthArrowVisible = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.IsNorthArrowVisible"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetShowAxes = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetShowAxes"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetShowAxes = function(bShow) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetShowAxes",
bShow: bShow
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetShowSilhouettes = function(bShow) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetShowSilhouettes",
bShow: bShow
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetShowEdges = function(bShow) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetShowEdges",
bShow: bShow
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsGridVisible = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.IsGridVisible"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetGridVisible = function(bVisible) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetGridVisible",
bVisible: bVisible
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetHighlightPreselect = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetHighlightPreselect"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetHighlightPreselect = function(bHighlight) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetHighlightPreselect",
bHighlight: bHighlight
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetAmbientColorIntensity = function(i) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetAmbientColorIntensity",
i: i
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetAmbientColorIntensity = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetAmbientColorIntensity"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetAmbientTextureIntensity = function(i) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetAmbientTextureIntensity",
i: i
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetAmbientTextureIntensity = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetAmbientTextureIntensity"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetAmbientMaterialIntensity = function(i) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetAmbientMaterialIntensity",
i: i
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetSunShading = function(i) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetSunShading",
i: i
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetSunShading = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetSunShading"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetShadowIntensity = function(i) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetShadowIntensity",
i: i
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetShadowIntensity = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetShadowIntensity"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetAdvancedMaterialShaderType = function(type) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetAdvancedMaterialShaderType",
type: type
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetAdvancedMaterialShaderType = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetAdvancedMaterialShaderType"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsSkyRendered = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.IsSkyRendered"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetSkyRendered = function(b) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetSkyRendered",
b: b
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsFogRendered = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.IsFogRendered"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetFogRendered = function(b) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetFogRendered",
b: b
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetSkyLowerColor = function(color) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetSkyLowerColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetSkyLowerColor = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetSkyLowerColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetSkyUpperColor = function(color) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetSkyUpperColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetSkyUpperColor = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetSkyUpperColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetBackgroundColor = function(color) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetBackgroundColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetBackgroundColor = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetBackgroundColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetGroundPlaneColor = function(color) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetGroundPlaneColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetGroundPlaneColor = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetGroundPlaneColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetWorkPlaneColor = function(color) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetWorkPlaneColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetWorkPlaneColor = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetWorkPlaneColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetSunEditorEnabled = function(bEnabled) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetSunEditorEnabled",
bEnabled: bEnabled
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetSunEditorEnabled = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetSunEditorEnabled"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetEdgeWeight = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetEdgeWeight"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetEdgeWeight = function(weight) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetEdgeWeight",
weight: weight
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetEdgeColor = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetEdgeColor"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetEdgeColor = function(color) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetEdgeColor",
color: color
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.GetSilhouetteWeight = function() {
        args = {
            TestAPI: "FormIt.VisualStyles.GetSilhouetteWeight"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetSilhouetteWeight = function(weight) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetSilhouetteWeight",
weight: weight
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.IsRenderSettingActive = function(flag) {
        args = {
            TestAPI: "FormIt.VisualStyles.IsRenderSettingActive",
flag: flag
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.VisualStyles.SetRenderSettingFlags = function(flag,b) {
        args = {
            TestAPI: "FormIt.VisualStyles.SetRenderSettingFlags",
flag: flag,
        b: b
        };
        return callAsyncAPI(args);
    };

window.FormIt.Events = window.FormIt.Events || {};
        
    window.FormIt.Events.AreaSelectBegan = function(pt,mods) {
        args = {
            TestAPI: "FormIt.Events.AreaSelectBegan",
pt: pt,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.AreaSelectChanged = function(pt,mods) {
        args = {
            TestAPI: "FormIt.Events.AreaSelectChanged",
pt: pt,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.AreaSelectEnded = function(mods) {
        args = {
            TestAPI: "FormIt.Events.AreaSelectEnded",
mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.DoubleTap = function(pt,mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.DoubleTap",
pt: pt,
        mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.DoubleTapTwoTouches = function(pt,mods) {
        args = {
            TestAPI: "FormIt.Events.DoubleTapTwoTouches",
pt: pt,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.HandleEvent = function(event) {
        args = {
            TestAPI: "FormIt.Events.HandleEvent",
event: event
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.KeyDown = function(keyCode,mods) {
        args = {
            TestAPI: "FormIt.Events.KeyDown",
keyCode: keyCode,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.KeyUp = function(keyCode,mods) {
        args = {
            TestAPI: "FormIt.Events.KeyUp",
keyCode: keyCode,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.LongPress = function(pt,mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.LongPress",
pt: pt,
        mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.MouseDown = function(pt,button,mods) {
        args = {
            TestAPI: "FormIt.Events.MouseDown",
pt: pt,
        button: button,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.MouseMove = function(pt,button,mods) {
        args = {
            TestAPI: "FormIt.Events.MouseMove",
pt: pt,
        button: button,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.MouseOut = function(pt,button,mods) {
        args = {
            TestAPI: "FormIt.Events.MouseOut",
pt: pt,
        button: button,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.MouseOver = function(pt,button,mods) {
        args = {
            TestAPI: "FormIt.Events.MouseOver",
pt: pt,
        button: button,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.MouseUp = function(pt,button,mods) {
        args = {
            TestAPI: "FormIt.Events.MouseUp",
pt: pt,
        button: button,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.MouseWheel = function(pt,delta,button,mods) {
        args = {
            TestAPI: "FormIt.Events.MouseWheel",
pt: pt,
        delta: delta,
        button: button,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.PanBegin = function(pt,nTouches,mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.PanBegin",
pt: pt,
        nTouches: nTouches,
        mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.PanChanged = function(vec,nTouches,mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.PanChanged",
vec: vec,
        nTouches: nTouches,
        mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.PanEnded = function(mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.PanEnded",
mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.PinchBegan = function(pt,mods) {
        args = {
            TestAPI: "FormIt.Events.PinchBegan",
pt: pt,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.PinchChanged = function(dDelta,mods) {
        args = {
            TestAPI: "FormIt.Events.PinchChanged",
dDelta: dDelta,
        mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.PinchEnded = function(mods) {
        args = {
            TestAPI: "FormIt.Events.PinchEnded",
mods: mods
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.SingleTap = function(pt,mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.SingleTap",
pt: pt,
        mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Events.TouchBegan = function(pt,mods,isStylus) {
        args = {
            TestAPI: "FormIt.Events.TouchBegan",
pt: pt,
        mods: mods,
        isStylus: isStylus
        };
        return callAsyncAPI(args);
    };

window.FormIt.Testing = window.FormIt.Testing || {};
        
    window.FormIt.Testing.DisableMessaging = function() {
        args = {
            TestAPI: "FormIt.Testing.DisableMessaging"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.EnableMessaging = function() {
        args = {
            TestAPI: "FormIt.Testing.EnableMessaging"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.IsMessagingEnabled = function() {
        args = {
            TestAPI: "FormIt.Testing.IsMessagingEnabled"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.IsRunning = function() {
        args = {
            TestAPI: "FormIt.Testing.IsRunning"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.SetIsRunning = function(running) {
        args = {
            TestAPI: "FormIt.Testing.SetIsRunning",
running: running
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.LoadFileAndCompare = function(sTestFile,sExtension,sCompareFileName) {
        args = {
            TestAPI: "FormIt.Testing.LoadFileAndCompare",
sTestFile: sTestFile,
        sExtension: sExtension,
        sCompareFileName: sCompareFileName
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.RunNativeTests = function() {
        args = {
            TestAPI: "FormIt.Testing.RunNativeTests"
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.SetForgeMode = function(mode,path) {
        args = {
            TestAPI: "FormIt.Testing.SetForgeMode",
mode: mode,
        path: path
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.DownloadFile = function(token,fileInfo) {
        args = {
            TestAPI: "FormIt.Testing.DownloadFile",
token: token,
        fileInfo: fileInfo
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.GetHubsWithProjects = function(token) {
        args = {
            TestAPI: "FormIt.Testing.GetHubsWithProjects",
token: token
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Testing.CheckEntitlements = function(token) {
        args = {
            TestAPI: "FormIt.Testing.CheckEntitlements",
token: token
        };
        return callAsyncAPI(args);
    };

window.FormIt.Settings = window.FormIt.Settings || {};
        
    window.FormIt.Settings.SetNoInferenceSmoothEdgesAndPoints = function(bNoInference) {
        args = {
            TestAPI: "FormIt.Settings.SetNoInferenceSmoothEdgesAndPoints",
bNoInference: bNoInference
        };
        return callAsyncAPI(args);
    };

        
    window.FormIt.Settings.GetNoInferenceSmoothEdgesAndPoints = function() {
        args = {
            TestAPI: "FormIt.Settings.GetNoInferenceSmoothEdgesAndPoints"
        };
        return callAsyncAPI(args);
    };

window.WSM = window.WSM || {};
window.WSM.Utils = window.WSM.Utils || {};
        
    window.WSM.Utils.GetBoundsForVisibleHistoryBoundsHelper = function(paths,ExcludeImages,ExcludeSectionPlanes) {
        args = {
            TestAPI: "WSM.Utils.GetBoundsForVisibleHistoryBoundsHelper",
paths: paths,
        ExcludeImages: ExcludeImages,
        ExcludeSectionPlanes: ExcludeSectionPlanes
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Utils.GetUTCOffset = function(longitude,latitude) {
        args = {
            TestAPI: "WSM.Utils.GetUTCOffset",
longitude: longitude,
        latitude: latitude
        };
        return callAsyncAPI(args);
    };

window.WSM.Test = window.WSM.Test || {};
        
    window.WSM.Test.HistoryObjects = function(historyObjects) {
        args = {
            TestAPI: "WSM.Test.HistoryObjects",
historyObjects: historyObjects
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Test.Size_t = function(nID,nArrayIDs) {
        args = {
            TestAPI: "WSM.Test.Size_t",
nID: nID,
        nArrayIDs: nArrayIDs
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Test.LoadFromFileWithSuspend = function(nHistoryID,sFilePath,eFileType,dMaxDistanceFromOrigin) {
        args = {
            TestAPI: "WSM.Test.LoadFromFileWithSuspend",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        dMaxDistanceFromOrigin: dMaxDistanceFromOrigin
        };
        return callAsyncAPI(args);
    };

        
    window.WSM.Test.ResetActiveHistory = function() {
        args = {
            TestAPI: "WSM.Test.ResetActiveHistory"
        };
        return callAsyncAPI(args);
    };

}