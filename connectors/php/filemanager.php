<?php
/**
 *	Filemanager PHP connector
 *  Initial class, put your customizations here
 *
 *	@license	MIT License
 *	@author		Riaan Los <mail (at) riaanlos (dot) nl>
 *  @author		Simon Georget <simon (at) linea21 (dot) com>
 *  @author		Pavel Solomienko <https://github.com/servocoder/>
 *	@copyright	Authors
 */

// only for debug
// error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
// ini_set('display_errors', '1');

require_once('application/Fm.php');
require_once('application/FmHelper.php');

function auth()
{
    // IMPORTANT : by default Read and Write access is granted to everyone.
    // You can insert your own code over here to check if the user is authorized.
    // If you use a session variable, you've got to start the session first (session_start())
    return true;
}

function getFileBrowserFor($dataPath) {
    $config = array(
        "options" => [
            "serverRoot" => false,
            "fileRoot" => $dataPath,
        ],
    );

    $fm = Fm::app()->getInstance($config);
    $fm->setFileRoot($dataPath, true, false);

    // example to setup files root folder
    //$fm->setFileRoot('userfiles', true);

    // example to set list of allowed actions
    //$fm->setAllowedActions(["select", "move"]);
    return $fm;
    //$fm->handleRequest();
}