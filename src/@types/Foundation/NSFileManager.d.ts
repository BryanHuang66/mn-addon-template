export {}
declare global {
  class NSFileManager {
    static defaultManager():NSFileManager

    createDirectoryAtPathWithIntermediateDirectoriesAttributes(
        path:string,
        createIndermidiates:boolean,
        attributes:NSDictionary
    ):boolean
    contentsOfDirectoryAtPath(
      path:string
    ):Array<any>
    subpathsOfDirectoryAtPath(
      path:string
    ):Array<any>
    attributesOfItemAtPath(
      path:string
    ):NSDictionary
    attributesOfFileSystemForPath(
      path:string
    ):NSDictionary
    copyItemAtPathToPath(
      scrPath:string,
      dstPath:string
    ):boolean
    moveItemAtPathToPath(
      scrPath:string,
      dstPath:string
    ):boolean
    fileAttributesAtPathtraverseLink(
      path:string,
      yorn:boolean
    ):NSDictionary
    directoryContentsAtPath(
      path:string
    ):Array<any>
    fileSystemAttributesAtPath(
      path:string
    ):NSDictionary
    pathContentOfSymbolicLinkAtPath(
      path:string
    ):string
    createDirectoryAtPathAttributes(
      path:string,
      attributes:NSDictionary
    ):boolean
    fileExistsAtPath(
      path:string
    ):boolean
    isDirectoryAtPath(
      path:string
    ):boolean
    isReadableFileAtPath(
      path:string
    ):boolean
    isWritableFileAtPath(
      path:string
    ):boolean 
    isExecutableFileAtPath(
      path:string
    ):boolean
    isDeletableFileAtPath(
      path:string
    ):boolean
    contentsEqualAtPathAndPath(
      path1:string,
      path2:string
    ):boolean
    displayNameAtPath(
      path:string
    ):string
    componentsToDisplayForPath(
      path:string
    ):Array<any>
    subpathsAtPath(
      path:string
    ):Array<any>
    contentsAtPath(
      path:string
    ):NSData
  }
}

