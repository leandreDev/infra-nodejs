"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  un noeud de menu de mongoEditor
*/
class Model_ui_menu_mongo_editor extends utils_1.Base {
    /**
      un noeud de menu de mongoEditor
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ui_menu_mongo_editor";
        /**
  icon
  */
        this["icon"] = "description";
        if (obj["label"] != undefined) {
            this["label"] = obj["label"].toString();
        }
        if (obj["path"] != undefined) {
            this["path"] = obj["path"].toString();
        }
        if (obj["icon"] != undefined) {
            this["icon"] = obj["icon"].toString();
        }
        if (obj["child"] != undefined && obj["child"] != null && _.isArray(obj["child"])) {
            this["child"] = obj["child"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["ui_menu_mongo_editor"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["label"] != null && target["label"] != undefined) {
                let _label = target["label"];
                if (!_.isString(_label)) {
                    throw new Error(path + "label is not a string");
                }
            }
            if (target["path"] != null && target["path"] != undefined) {
                let _path = target["path"];
                if (!_.isString(_path)) {
                    throw new Error(path + "path is not a string");
                }
            }
            if (target["icon"] != null && target["icon"] != undefined) {
                let _icon = target["icon"];
                if (!_.isString(_icon)) {
                    throw new Error(path + "icon is not a string");
                }
                let _enum_icon = ["3d_rotation", "accessibility", "accessible", "account_balance", "account_balance_wallet", "account_box", "account_circle", "add_shopping_cart", "alarm", "alarm_add", "alarm_off", "alarm_on", "all_out", "android", "announcement", "aspect_ratio", "assessment", "assignment", "assignment_ind", "assignment_late", "assignment_return", "assignment_returned", "assignment_turned_in", "autorenew", "backup", "book", "bookmark", "bookmark_border", "bug_report", "build", "cached", "camera_enhance", "card_giftcard", "card_membership", "card_travel", "change_history", "check_circle", "chrome_reader_mode", "class", "code", "compare_arrows", "copyright", "credit_card", "dashboard", "date_range", "delete", "delete_forever", "description", "dns", "done", "done_all", "donut_large", "donut_small", "eject", "euro_symbol", "event", "event_seat", "exit_to_app", "explore", "extension", "face", "favorite", "favorite_border", "feedback", "find_in_page", "find_replace", "fingerprint", "flight_land", "flight_takeoff", "flip_to_back", "flip_to_front", "g_translate", "gavel", "get_app", "gif", "grade", "group_work", "help", "help_outline", "highlight_off", "history", "home", "hourglass_empty", "hourglass_full", "http", "https", "important_devices", "info", "info_outline", "input", "invert_colors", "label", "label_outline", "language", "launch", "lightbulb_outline", "line_style", "line_weight", "list", "lock", "lock_open", "lock_outline", "loyalty", "markunread_mailbox", "motorcycle", "note_add", "offline_pin", "opacity", "open_in_browser", "open_in_new", "open_with", "pageview", "pan_tool", "payment", "perm_camera_mic", "perm_contact_calendar", "perm_data_setting", "perm_device_information", "perm_identity", "perm_media", "perm_phone_msg", "perm_scan_wifi", "pets", "picture_in_picture", "picture_in_picture_alt", "play_for_work", "polymer", "power_settings_new", "pregnant_woman", "print", "query_builder", "question_answer", "receipt", "record_voice_over", "redeem", "remove_shopping_cart", "reorder", "report_problem", "restore", "restore_page", "room", "rounded_corner", "rowing", "schedule", "search", "settings", "settings_applications", "settings_backup_restore", "settings_bluetooth", "settings_brightness", "settings_cell", "settings_ethernet", "settings_input_antenna", "settings_input_component", "settings_input_composite", "settings_input_hdmi", "settings_input_svideo", "settings_overscan", "settings_phone", "settings_power", "settings_remote", "settings_voice", "shop", "shop_two", "shopping_basket", "shopping_cart", "speaker_notes", "speaker_notes_off", "spellcheck", "star_rate", "stars", " "];
                if (_enum_icon.indexOf(_icon) == -1) {
                    throw new Error(path + "icon dont match one of 3d_rotation , accessibility , accessible , account_balance , account_balance_wallet , account_box , account_circle , add_shopping_cart , alarm , alarm_add , alarm_off , alarm_on , all_out , android , announcement , aspect_ratio , assessment , assignment , assignment_ind , assignment_late , assignment_return , assignment_returned , assignment_turned_in , autorenew , backup , book , bookmark , bookmark_border , bug_report , build , cached , camera_enhance , card_giftcard , card_membership , card_travel , change_history , check_circle , chrome_reader_mode , class , code , compare_arrows , copyright , credit_card , dashboard , date_range , delete , delete_forever , description , dns , done , done_all , donut_large , donut_small , eject , euro_symbol , event , event_seat , exit_to_app , explore , extension , face , favorite , favorite_border , feedback , find_in_page , find_replace , fingerprint , flight_land , flight_takeoff , flip_to_back , flip_to_front , g_translate , gavel , get_app , gif , grade , group_work , help , help_outline , highlight_off , history , home , hourglass_empty , hourglass_full , http , https , important_devices , info , info_outline , input , invert_colors , label , label_outline , language , launch , lightbulb_outline , line_style , line_weight , list , lock , lock_open , lock_outline , loyalty , markunread_mailbox , motorcycle , note_add , offline_pin , opacity , open_in_browser , open_in_new , open_with , pageview , pan_tool , payment , perm_camera_mic , perm_contact_calendar , perm_data_setting , perm_device_information , perm_identity , perm_media , perm_phone_msg , perm_scan_wifi , pets , picture_in_picture , picture_in_picture_alt , play_for_work , polymer , power_settings_new , pregnant_woman , print , query_builder , question_answer , receipt , record_voice_over , redeem , remove_shopping_cart , reorder , report_problem , restore , restore_page , room , rounded_corner , rowing , schedule , search , settings , settings_applications , settings_backup_restore , settings_bluetooth , settings_brightness , settings_cell , settings_ethernet , settings_input_antenna , settings_input_component , settings_input_composite , settings_input_hdmi , settings_input_svideo , settings_overscan , settings_phone , settings_power , settings_remote , settings_voice , shop , shop_two , shopping_basket , shopping_cart , speaker_notes , speaker_notes_off , spellcheck , star_rate , stars ,  ");
                }
            }
            if (target["child"] != null && target["child"] != undefined) {
                target["child"].forEach((_child, index) => {
                    promArr.push(Index["ui_menu_mongo_editor"].check(_child, isCompleteObj, path + "child.")
                        .catch((err) => {
                        throw new Error(path + "child index: " + index + "is not ui_menu_mongo_editor");
                    }));
                    if (_child._class != null && _child._class != undefined) {
                        promArr.push(Index[_child._class].check(_child, isCompleteObj, path + "child.")
                            .catch((err) => {
                            throw new Error(path + "child index: " + index + "is not a " + _child._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_ui_menu_mongo_editor.check(target, true, path).then(() => {
            return new Model_ui_menu_mongo_editor(target);
        });
    }
}
exports.Model_ui_menu_mongo_editor = Model_ui_menu_mongo_editor;
//# sourceMappingURL=Model_ui_menu_mongo_editor.js.map