"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_ui_menu_mongo_editor = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  un noeud de menu de mongoEditor
*/
class Entity_ui_menu_mongo_editor extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'ui_menu_mongo_editor' && ['ui_menu_mongo_editor_separateur',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["label"] != undefined) {
            obj["label"] = obj["label"].toString();
        }
        if (obj["path"] != undefined) {
            obj["path"] = obj["path"].toString();
        }
        if (obj["icon"] != undefined) {
            obj["icon"] = obj["icon"].toString();
        }
        if (obj["child"] != undefined && obj["child"] != null && _.isArray(obj["child"])) {
            obj["child"].forEach((value) => {
                Index.Entity_ui_menu_mongo_editor.cast(value);
            });
        }
    }
    static checklabel(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkpath(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkicon(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["3d_rotation", "accessibility", "accessible", "account_balance", "account_balance_wallet", "account_box", "account_circle", "add_shopping_cart", "alarm", "alarm_add", "alarm_off", "alarm_on", "all_out", "android", "announcement", "aspect_ratio", "assessment", "assignment", "assignment_ind", "assignment_late", "assignment_return", "assignment_returned", "assignment_turned_in", "autorenew", "backup", "book", "bookmark", "bookmark_border", "bug_report", "build", "cached", "camera_enhance", "card_giftcard", "card_membership", "card_travel", "change_history", "check_circle", "chrome_reader_mode", "class", "code", "compare_arrows", "copyright", "credit_card", "dashboard", "date_range", "delete", "delete_forever", "description", "dns", "done", "done_all", "donut_large", "donut_small", "eject", "euro_symbol", "event", "event_seat", "exit_to_app", "explore", "extension", "face", "favorite", "favorite_border", "feedback", "find_in_page", "find_replace", "fingerprint", "flight_land", "flight_takeoff", "flip_to_back", "flip_to_front", "g_translate", "gavel", "get_app", "gif", "grade", "group_work", "help", "help_outline", "highlight_off", "history", "home", "hourglass_empty", "hourglass_full", "http", "https", "important_devices", "info", "info_outline", "input", "invert_colors", "label", "label_outline", "language", "launch", "lightbulb_outline", "line_style", "line_weight", "list", "lock", "lock_open", "lock_outline", "loyalty", "markunread_mailbox", "motorcycle", "note_add", "offline_pin", "opacity", "open_in_browser", "open_in_new", "open_with", "pageview", "pan_tool", "payment", "perm_camera_mic", "perm_contact_calendar", "perm_data_setting", "perm_device_information", "perm_identity", "perm_media", "perm_phone_msg", "perm_scan_wifi", "pets", "picture_in_picture", "picture_in_picture_alt", "play_for_work", "polymer", "power_settings_new", "pregnant_woman", "print", "query_builder", "question_answer", "receipt", "record_voice_over", "redeem", "remove_shopping_cart", "reorder", "report_problem", "restore", "restore_page", "room", "rounded_corner", "rowing", "schedule", "search", "settings", "settings_applications", "settings_backup_restore", "settings_bluetooth", "settings_brightness", "settings_cell", "settings_ethernet", "settings_input_antenna", "settings_input_component", "settings_input_composite", "settings_input_hdmi", "settings_input_svideo", "settings_overscan", "settings_phone", "settings_power", "settings_remote", "settings_voice", "shop", "shop_two", "shopping_basket", "shopping_cart", "speaker_notes", "speaker_notes_off", "spellcheck", "star_rate", "stars", " "];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of 3d_rotation , accessibility , accessible , account_balance , account_balance_wallet , account_box , account_circle , add_shopping_cart , alarm , alarm_add , alarm_off , alarm_on , all_out , android , announcement , aspect_ratio , assessment , assignment , assignment_ind , assignment_late , assignment_return , assignment_returned , assignment_turned_in , autorenew , backup , book , bookmark , bookmark_border , bug_report , build , cached , camera_enhance , card_giftcard , card_membership , card_travel , change_history , check_circle , chrome_reader_mode , class , code , compare_arrows , copyright , credit_card , dashboard , date_range , delete , delete_forever , description , dns , done , done_all , donut_large , donut_small , eject , euro_symbol , event , event_seat , exit_to_app , explore , extension , face , favorite , favorite_border , feedback , find_in_page , find_replace , fingerprint , flight_land , flight_takeoff , flip_to_back , flip_to_front , g_translate , gavel , get_app , gif , grade , group_work , help , help_outline , highlight_off , history , home , hourglass_empty , hourglass_full , http , https , important_devices , info , info_outline , input , invert_colors , label , label_outline , language , launch , lightbulb_outline , line_style , line_weight , list , lock , lock_open , lock_outline , loyalty , markunread_mailbox , motorcycle , note_add , offline_pin , opacity , open_in_browser , open_in_new , open_with , pageview , pan_tool , payment , perm_camera_mic , perm_contact_calendar , perm_data_setting , perm_device_information , perm_identity , perm_media , perm_phone_msg , perm_scan_wifi , pets , picture_in_picture , picture_in_picture_alt , play_for_work , polymer , power_settings_new , pregnant_woman , print , query_builder , question_answer , receipt , record_voice_over , redeem , remove_shopping_cart , reorder , report_problem , restore , restore_page , room , rounded_corner , rowing , schedule , search , settings , settings_applications , settings_backup_restore , settings_bluetooth , settings_brightness , settings_cell , settings_ethernet , settings_input_antenna , settings_input_component , settings_input_composite , settings_input_hdmi , settings_input_svideo , settings_overscan , settings_phone , settings_power , settings_remote , settings_voice , shop , shop_two , shopping_basket , shopping_cart , speaker_notes , speaker_notes_off , spellcheck , star_rate , stars ,  `);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkchild(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_ui_menu_mongo_editor.check(val, false, path);
            //5921e0482486c0d57b0d663e
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        if (target.label != null && target.label != undefined) {
            res = Entity_ui_menu_mongo_editor.checklabel(target.label, `${path}.label`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.path != null && target.path != undefined) {
            res = Entity_ui_menu_mongo_editor.checkpath(target.path, `${path}.path`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.icon != null && target.icon != undefined) {
            res = Entity_ui_menu_mongo_editor.checkicon(target.icon, `${path}.icon`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.child != null && target.child != undefined) {
            target.child.forEach((data, index) => {
                res = Entity_ui_menu_mongo_editor.checkchild(target.child[index], `${path}.child.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        return err;
    }
    static castQueryParam(path, value) {
        let key = '';
        let subPath = '';
        if (value === null) {
            return null;
        }
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} ${value}`);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path} ${value}`);
        }
        switch (key) {
            case 'label':
                //string
                return new String(value).valueOf();
                break;
            case 'path':
                //string
                return new String(value).valueOf();
                break;
            case 'icon':
                //string
                return new String(value).valueOf();
                break;
            case 'child':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_ui_menu_mongo_editor.castQueryParam(subPath, value);
                }
                break;
            default:
                return utils_1.Entity.castQueryParam(key, value);
                break;
        }
    }
    static getClassNameOfProp(path) {
        let key = '';
        let subPath = '';
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} `);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path}`);
        }
        switch (key) {
            case 'label':
                return null;
            case 'path':
                return null;
            case 'icon':
                return null;
            case 'child':
                return Index.Entity_ui_menu_mongo_editor.getClassNameOfProp(subPath);
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_ui_menu_mongo_editor = Entity_ui_menu_mongo_editor;
