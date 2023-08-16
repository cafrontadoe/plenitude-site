interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {

  [key: string]: any;
}

/*
 * Remove all the deprecated code below if you're using import.meta.env (recommended)
 */

/****************************** DEPREACTED **************************/
/**
 * @deprecated process.env usage
 * prefer using import.meta.env
 * */
declare var process: {
  env: {
    [key: string]: any;
  };
};


/*********************************************************************/
