{
    "global_params": {},
    "user_header": {
        "audio_ext": ".wav",
        "author": "I839731",
        "comment": "",
        "language": "en-US",
        "mastery_score_percent": "80",
        "max_score_percent": "100",
        "shelftype": "standard",
        "title": "Update Employee Information using MSS",
        "version": "10.0.0"
    },
    "tourstops": [{
        "index": 0,
        "title": "Start",
        "audio": "",
        "uid": "TS_6D546665BCBC43E6A86F4BE9AB32F4A9",
        "jumpable": false,
        "visible": true,
        "callable": false,
        "duration": 9,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "start_unit",
            "time": 0,
            "duration": 10,
            "uid": "MAC_B1E2B25750746484",
            "possible_points": 63,
            "mastery_score": 51,
            "task_text": "",
            "task_width": 240,
            "task_height": 0,
            "task_orientation": "NW",
            "task_bgcolor": "#ffffb7",
            "in_practice": false,
            "in_test": true,
            "config_templates": "<CTRoot>\n<CTFile name=\"IExplorerDefault\">\n<ConfigurationTemplate>\r\n    <CTHeader webcompat=\"0\" proc_error_correction=\"0\" revision=\"$Id: header.xml,v 1.18 2011-03-10 16:50:39 stefanh Exp $\" text_recognition_mode=\"3\" text_recognition_methods=\"\" profile_language=\"eng\">\r\n        <Header threshold=\"0.800000\">\r\n            <PageID>\r\n                <Attributes>\r\n                    <HTML value=\"url\"\/>\r\n                    <WINDOWS value=\"class,ex_style,text\"\/>\r\n                <\/Attributes>\r\n            <\/PageID>\r\n            <ContextID object_attribute=\"\" context_attribute_name=\"\" rule=\"0\"\/>\r\n            <Ident classname=\"\" exename=\"iexplore\" urls=\"\" version=\"\" caption=\"\"\/>\r\n        <\/Header>\r\n        <Global min_w=\"-1\" min_h=\"-1\" max_w=\"-1\" max_h=\"-1\">\r\n            <SAP recursion_level=\"3\" has_context_info=\"1\" find_embedded=\"0\" access_check=\"0\"\/>\r\n            <JAVA use_jab_watcher=\"0\" jab_tab_lookuplevel=\"3\" jab_tree_lookuplevel=\"3\" enable_jab_button_handler=\"0\" jab_rerecognition_use_name=\"0\" max_sl_edit_jab_height=\"0\" init_with_setpage=\"0\" jab_generate_path=\"1\" java_rere_use_empty_name=\"1\" java_use_fast_path=\"1\" access_check=\"0\"\/>\r\n            <MSAA generate_path=\"1\" max_name_objs=\"0\" msaa_tab_lookuplevel=\"3\" msaa_tree_lookuplevel=\"3\" rerecognition_use_names=\"0\">\r\n                <ObjectCorrections>\r\n                    <ObjectCorrection id=\"42\" classname=\"Internet Explorer_Server\" action=\"1\">\r\n                        <CorrectControls value=\"17,29,30,37,40,44,45,46,47,53,56,57,58,61,62,64\"\/>\r\n                    <\/ObjectCorrection>\r\n                <\/ObjectCorrections>\r\n            <\/MSAA>\r\n            <UIAutomation uia_tab_lookuplevel=\"3\" uia_tree_lookuplevel=\"3\" unique_ids=\"0\" rerecognition_use_names=\"0\" uia_generate_path=\"1\" max_name_objs=\"0\"\/>\r\n            <UIACOM caching=\"0\" generate_path=\"1\" max_name_objs=\"200\"\/>\r\n            <HTML handle_zoom=\"1\" has_context_info=\"0\" batch_rerecognition=\"1\" pgkey_fback=\"0\" set_attrb=\"0\" capture_multiple_dlg=\"0\" ignore_dynamic_ids=\"1\">\r\n                <KeyExtractor script=\"dgo_elem_xtype(dgo_ctx_control)\" in_context=\"0\"\/>\r\n                <GlobalScript>\nvar elem_index_within_frame = -1;\nvar current_rerecognition_elem_index = -1;\nvar rerecognized_frame = null;\n\nfunction dgo_check_handler(type) {\n    if (\n        \"BODY\"    == type ||\n        \"INPUTsubmit\"    == type ||\n        \"INPUTpassword\"    == type ||\n        \"INPUTbutton\"    == type ||\n        \"A\"    == type ||\n        \"DIV\"    == type ||\n        \"SPAN\" == type ||\n        \"SELECT\"    == type ||\n        \"INPUTtext\"    == type ||\n        \"TEXTAREA\"    == type ||\n        \"INPUTradio\"    == type ||\n        \"INPUTcheckbox\"    == type ||\n        \"INPUTcheckboxOn\"    == type ||\n        \"INPUTcheckboxOff\"    == type ||\n        \"TDListItem\"    == type ||\n        \"TDalvc\"    == type ||\n        \"TDCalM\"    == type ||\n        \"INPUTimage\/\/closeButton\"    == type ||\n        \"INPUTimage\/\/\"    == type ||\n        \"AurBtnStd\"    == type ||\n        \"SPANbutton_inner\" == type ||\n        \"SPANcheckbox\" == type ||\n        \"IMGA:\" == type ||\n        \"IMGSPAN:\"    == type ||\n        \"IMGTDINPUTX\"     == type ||\n        \"IMGTDTX_XS\"   == type ||\n        \"IMGTDINPUT\"     == type ||\n        \"INPUTfile\"    == type ||\n        \/\/ ================================ scrollers =============================\n        \"hscroll\" == type ||\n        \"vscroll\" == type ||\n        \/\/ ================================ scrollers from c++ ==============================\n        \"BODYHScrollBar\" == type ||\n        \"BODYHScrollBtnL\" == type ||\n        \"BODYHScrollBtnR\" == type ||\n        \"BODYHScrollAreaL\" == type ||\n        \"BODYHScrollAreaR\" == type ||\n        \"BODYVScrollBar\" == type ||\n        \"BODYVScrollBtnT\" == type ||\n        \"BODYVScrollBtnB\" == type ||\n        \"BODYVScrollAreaT\" == type ||\n        \"BODYVScrollAreaB\" == type ||\n        \"HTMLHScrollBar\" == type ||\n        \"HTMLHScrollBtnL\" == type ||\n        \"HTMLHScrollBtnR\" == type ||\n        \"HTMLHScrollAreaL\" == type ||\n        \"HTMLHScrollAreaR\" == type ||\n        \"HTMLVScrollBar\" == type ||\n        \"HTMLVScrollBtnT\" == type ||\n        \"HTMLVScrollBtnB\" == type ||\n        \"HTMLVScrollAreaT\" == type ||\n        \"HTMLVScrollAreaB\" == type ||\n        \"DIVHScrollBar\" == type ||\n        \"DIVHScrollBtnL\" == type ||\n        \"DIVHScrollBtnR\" == type ||\n        \"DIVHScrollAreaL\" == type ||\n        \"DIVHScrollAreaR\" == type ||\n        \"DIVVScrollBar\" == type ||\n        \"DIVVScrollBtnT\" == type ||\n        \"DIVVScrollBtnB\" == type ||\n        \"DIVVScrollAreaT\" == type ||\n        \"DIVVScrollAreaB\" == type||\n        \"SELECTVScrollBtnB\" == type ||\n        \"SELECTVScrollBtnT\" == type ||\n        \"SELECTVScrollAreaB\" == type ||\n        \"SELECTVScrollAreaT\" == type ||\n        \"SELECTVScrollBar\" == type ||\n        \"SELECTHScrollAreaL\" == type ||\n        \"SELECTHScrollAreaR\" == type ||\n        \"SELECTHScrollBar\" == type ||\n        \"SELECTHScrollBtnL\" == type ||\n        \"SELECTHScrollBtnR\" == type)\n    {\n        return true;\n    }\n\n    return false;\n}\n\nfunction dgo_convert_to_compat(type) {\n\n    var my_type = type;\n    if (type == \"INPUTsubmit\") {\n        my_type = \"INPUTbutton\";\n    } else if (type == \"SPAN\") {\n        my_type = \"A\";\n    }  else if (type == \"HScroll\") {\n        my_type = \"hscroll\";\n    } else if (type == \"VScroll\") {\n        my_type = \"vscroll\";\n    } else if (type == \"SPANbutton_inner\" || type == \"H2\") {\n        my_type = \"AurBtnStd\";\n    }\n    return my_type;\n}\n\nfunction dgo_elem_xtype(e) {\n    var elem = e;\n    var tagname = elem.tagName;\n    var type = tagname;\n\n    if (type == \"B\"|| type == \"U\" || type == \"NOBR\" || type == \"STRONG\" || type == \"FONT\") {\n\n        if (elem.parentNode != null) {\n            elem = elem.parentNode;\n            type = elem.tagName;\n        }\n    }\n\n    if (type == \"INPUT\") {\n        type = type + elem.type;\n        tagname = type;\n        if (type == \"INPUTimage\") {\n            var ntype = type + \"\/\" + elem.id;\n            if (dgo_check_handler(ntype)) {\n                type = ntype;\n            } else {\n                type = type + \"\/\";\n            }\n        }\n        if (type == \"INPUTimage\/\") {\n            var ntype = type + \"\/\" + elem.parentNode.id;\n            if (dgo_check_handler(ntype)) {\n                type = ntype;\n            } else {\n                type = type + \"\/\";\n            }\n        }\n        if (type == \"INPUTtext\") {\n            type = type + elem.className;\n        }\n    } else if (type == \"IMG\") {\n        type = type + elem.parentNode.tagName;\n\n        if (type == \"IMGA\" || type == \"IMGSPAN\") {\n            type = type + elem.className + \":\" + elem.parentNode.className;\n\n        } else if (type == \"IMGTD\") {\n            type = type + elem.className;\n\n            if (type == \"IMGTD\") {\n                type = type + elem.parentNode.className;\n            }\n            if (type == \"IMGTD\") {\n                if (elem.previousSibling != null) {\n                    type = type + elem.previousSibling.tagName;\n                }\n            }\n            if (type == \"IMGTDINPUT\") {\n                if (elem.previousSibling != null) {\n                    type = type + elem.previousSibling.value;\n                }\n            }\n            if (type.match(\"IMGTDListItem*\")) {\n                type = \"IMGTDListItem\";\n                var img = elem.href;\n                if (img.match(\"list.*2_5.*\")) {\n                    type = type + \"-open\";\n                } else if (img.match(\"list.*2_4.*\")) {\n                    type = type + \"-closed\";\n                } else if (img.match(\"list.*1_0.*\")) {\n                    type = type + \"-leaf\";\n                }\n\n                \/\/ assume leaf for everything else\n                if (type == \"IMGTDListItem\") {\n                    type = \"IMGTDListItem-leaf\";\n                }\n            }\n\n        } else if (type == \"IMGDIV\") {\n\n            if (type == \"IMGDIV\") {\n                type = type + elem.className;\n            }\n            if (type == \"IMGDIV\") {\n                type = type + elem.parentNode.className;\n            }\n            if (type == \"IMGDIV\") {\n                type = type + elem.parentNode.id;\n            }\n        } else if (type == \"IMGLABEL\") {\n            type = type + elem.className;\n            if (type == \"IMGLABEL\") {\n                type = type + elem.parentNode.className;\n            }\n        }\n    } else if (type == \"TD\") {\n        type = type + elem.className;\n\n        if (type.match(\"TDListItem*\")) {\n            type = \"TDListItem\";\n        } else if (type.match(\"TDalvc.*\")) {\n            type = \"TDalvc\";\n        } else if (type.match(\"TDCalM.*\")) {\n            type = \"TDCalM\";\n        }\n    } else if (type == \"A\") {\n        if(is_button_class(elem)) {\n             type = \"INPUTbutton\";\n        } else {\n             type = type + elem.className;\n        }\n    } else if (type == \"BUTTON\") {\n        type = type + elem.className;\n    } else if (type == \"DIV\") {\n          if (elem.parentNode &amp;&amp; elem.parentNode.tagName == \"SPAN\") {\n                if(elem.parentNode.role == \"checkbox\") {\n                    elem = elem.parentNode;\n                        type = elem.tagName;\n                    type = type + elem.role;\n                 }\n            }\n        if ((elem.parentNode &amp;&amp; elem.parentNode.id == \"psyButtons\") || elem.className == \"drag-button\" || elem.role == \"button\") {\n                  type = \"INPUTbutton\";\n              }\n              if(elem.className == \"goog-inline-block jfk-button jfk-button-action\" &amp;&amp; elem.role == \"button\" ) {\n                  type = \"INPUTbutton\";\n              }\n              if(is_button_class(elem)) {\n                  elem = elem.parentNode;\n                  type = \"INPUTbutton\";\n              }\n        if(type == \"DIV\") {\n                  type = type + elem.className;\n                  if (type == \"DIV\") {\n                      type = type + elem.currentStyle.overflow;\n                   }\n              }\n    } else if (type == \"SPAN\") {\n        var parent = elem.parentNode;\n        if (parent &amp;&amp; parent.tagName == \"DIV\" &amp;&amp; parent.role == \"button\") {\n                  type = \"INPUTbutton\";\n              }else if(parent &amp;&amp; parent.tagName == \"DIV\" &amp;&amp; parent.role == \"radio\") {\n                type = \"INPUTradio\";\n        }\n    } else if (type == \"LABEL\") {\n        type = type + elem.className;\n    }\n\n \/\/alert(type);\n    \/\/ fallback to tagname if no special type found\n    if (!dgo_check_handler(type)) {\n        \/\/alert();\n        if (tagname == \"A\" || tagname == \"BUTTON\" || tagname == \"OPTION\") {\n            type = tagname;\n        } else if (tagname == \"INPUTtext\" || tagname == \"TEXTAREA\") {\n            type = tagname;\n        } else if (tagname == \"IMG\") {\n            type = \"IMGA:\";\n        } else if (tagname == \"DIV\") {\n            type = \"DIV\";\n        } else if (tagname == \"SPAN\") {\n            type = \"A\";\n        } else if (tagname != \"BODY\" &amp;&amp; tagname != \"HTML\") {\n            type = \"A\";\n        }\n    }\n\n    type = dgo_convert_to_compat(type);\n \/\/alert(type);\n \/\/alert(e.outerHTML);\n \/\/alert(e.parentElement.outerHTML);\n\n    return type;\n}\n\nfunction is_button_class(elem) {\n    if(elem.className == \"kd-button kd-button-submit\" ||\n       elem.className == \"kd-button dir-button\" ||\n       elem.className == \"kd-button print-button left small\" ||\n       elem.className == \"kd-button print-button left small\" ||\n       elem.className == \"kd-button permalink-button right small\" ||\n       elem.className == \"kd-button anchor-selected\"||\n       elem.className == \"goog-inline-block goog-flat-menu-button-caption\" ||\n       elem.className == \"goog-inline-block goog-flat-menu-button-dropdown\")\n     {\n             return true;\n     }\n     return false;\n}\n\nfunction dgo_get_info(e) {\n    var l = 0;\n    var t = 0;\n    var c = e;\n    var txt = '';\n\n    if (e.tagName!='SELECT') txt = e.innerText;\n\n    while (c &amp;&amp; typeof(c.offsetLeft) != 'undefined') {\n        l += c.offsetLeft;\n        t += c.offsetTop;\n        c = c.offsetParent;\n    }\n\n    return { l:l, t:t, w:e.offsetWidth, tag:e.tagName, text:txt};\n}\n\nfunction dgo_get_fn(e, x_item, y_item, w_item, flag) {\n    if (e == null) return null;\n\n    var s_label = dgo_get_info(e);\n    var x_label = s_label.l;\n    var y_label = s_label.t;\n    var fn = s_label.text;\n    var tag = s_label.tag;\n\n    if (fn == \"\" || fn == \"undefined\" || fn == \" \") {\n        return null;\n    }\n    if ((typeof(flag) != \"undefined\") &amp;&amp; (flag == \"right\")) {\n        if(x_item &gt; x_label) {\n           return null;\n        }\n    } else if (x_item &lt; x_label) {\n        return null;\n    }\n\n    if (x_label &gt; 10 + x_item + w_item) {\n        return null;\n    }\n\n    if (y_label &gt; y_item + 7) {\n        return null;\n    }\n\n    \/*if (tag == \"SELECT\") {\n        return null;\n    }*\/\n\n    if (fn.substr(0, 1) == '*') {\n        fn = fn.substr(1);\n    }\n\n    if (fn.substr(fn.length - 1, 1) == ':') {\n        fn = fn.substr(0, fn.length - 1);\n    }\n\n    while (fn.length &gt; 0 &amp;&amp; fn.substr(0, 1) == ' ') {\n        fn = fn.substr(1);\n    }\n\n    while (fn.length &gt; 0 &amp;&amp; fn.substr(fn.length - 1, 1) == ' ') {\n        fn = fn.substr(0, fn.length - 1);\n    }\n\n    return fn;\n}\n\nfunction check_rect_boundry_conditions(e, fn_e, flag) {\n    try{\n        if(!check_element(fn_e)) {\n            return false;\n        }\n        var r_e =  e.getBoundingClientRect();\n        var r_fn_e =  fn_e.getBoundingClientRect();\n        var h_e =(r_e.bottom - r_e.top);\n        var h_fn_e = (r_fn_e.bottom - r_fn_e.top);\n\n        if (flag == \"left\" &amp;&amp; (r_fn_e.right &lt;= r_e.right) &amp;&amp;\n            (( h_e * 3) &gt; h_fn_e)) {\n            return true;\n        }\n        if (flag == \"top\" &amp;&amp; (r_fn_e.bottom &lt;= r_e.top)) {\n            return true;\n        }\n        if (flag == \"right\" &amp;&amp; (r_e.right &lt;= r_fn_e.left) &amp;&amp;\n            (( h_e * 3) &gt; h_fn_e)) {\n            return true;\n        }\n    } catch(err) {\n    }\n    return false;\n}\n\nfunction dgo_get_fn_from_pos(doc, start_x, start_y, delta_x, delta_y, iterations,\n         s_item, e, flag) {\n    var fn = null;\n\n    if (doc == null) return null;\n\n    var it = 0;\n    var fn_e = null;\n    var x_item = s_item.l;\n    var y_item = s_item.t;\n    var w_item = s_item.w;\n\n    do {\n        fn_e = doc.elementFromPoint(start_x, start_y);\n        if(fn_e &amp;&amp; !is_valid_control_tagname(fn_e) &amp;&amp;\n            is_valid_fn_element(fn_e, flag)) {\n            if(check_rect_boundry_conditions(e, fn_e, flag)) {\n                fn = dgo_get_fn(fn_e, x_item, y_item, w_item, flag);\n                if(!is_valid_fieldname(fn)) {\n                    fn = \"\";\n                }\n            }\n        }\n        start_x += delta_x;\n        start_y += delta_y;\n\n        it++;\n    } while (fn_e != null &amp;&amp; !dgo_valid_string(fn) &amp;&amp;\n         start_x &gt; 0 &amp;&amp; start_y &gt; 0 &amp;&amp; it &lt; iterations);\n    if (!dgo_valid_string(fn)) fn = null;\n    return fn;\n}\n\nfunction dgo_get_elem_offset(e) {\n    var l = 0;\n    var t = 0;\n    var my_e = e;\n    var doc = e.document;\n    \/*\n    while (my_e &amp;&amp; typeof(my_e.offsetLeft) != 'undefined' &amp;&amp; my_e != doc) {\n        l += my_e.offsetLeft;\n        t += my_e.offsetTop;\n        my_e = my_e.offsetParent;\n    }\n    *\/\n\n    var r = e.getBoundingClientRect();\n\n    l = r.left;\n    t = r.top;\n\n    return { l:l, t:t};\n}\n\nfunction dgo_get_fn_from_left_if_cnlt_present(e, no_of_times_travers) {\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var fn = \"\";\n    if (e == null || typeof(e.document) == 'undefined') {\n        return fn;\n    }\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n    var s_item = dgo_get_info(e);\n    var it = 0;\n    var fn_e = null;\n    var x_item = s_item.l;\n    var y_item = s_item.t;\n    var w_item = s_item.w; \n    var start_x =  elem_offset.l - 10;\n    var start_y = elem_offset.t + e.offsetHeight\/2\n    var delta_x = -10;\n    var delta_y = 0;             \n    do {\n        fn_e = doc.elementFromPoint(start_x, start_y);\n        if(fn_e &amp;&amp; fn_e.tagName == \"INPUT\" &amp;&amp; fn_e.type == \"text\") {\n            var rect =fn_e.getBoundingClientRect();\n            start_x = rect.left;\n            start_y = rect.top + (rect.bottom - rect.top)\/2;\n        }              \n        if(fn_e &amp;&amp; check_rect_boundry_conditions(e, fn_e, \"left\")) {\n            fn = dgo_get_fn(fn_e, x_item, y_item, w_item, \"left\");\n            if(!is_valid_fieldname(fn)) {\n                fn = \"\";\n            }\n        }\n        start_x += delta_x;\n        start_y += delta_y;\n        it++;\n    } while (fn_e != null &amp;&amp;\n             !dgo_valid_string(fn) &amp;&amp; \n             (start_x &gt; 0) &amp;&amp;\n             (start_y &gt; 0) &amp;&amp;\n             (it &lt; no_of_times_travers));\n    if (!dgo_valid_string(fn) || !isNaN(fn)) {\n         fn = \"\";\n    }\n    return fn;\n}\n\nfunction dgo_get_fn_left(e, no_of_times_travers, no_of_travers_done) {\n\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var temp = 0;\n\n    if(typeof(no_of_travers_done) != \"undefined\") {\n        temp = no_of_travers_done * 10;\n    }\n\n    var fn = \"\";\n\n    if (e == null || typeof(e.document) == 'undefined') return fn;\n\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n\n    fn = dgo_get_fn_from_pos(doc, elem_offset.l - 10 -temp, elem_offset.t + e.offsetHeight\/2, -10,\n         0, no_of_times_travers, dgo_get_info(e), e , \"left\");\n\n    if(!isNaN(fn)) {\n        fn = \"\";\n    }\n\n    return fn;\n\n}\n\nfunction dgo_get_fn_right(e, no_of_times_travers, no_of_travers_done) {\n\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var temp = 0;\n\n    if(typeof(no_of_travers_done) != \"undefined\") {\n        temp = no_of_travers_done * 10;\n    }\n\n    var fn = \"\";\n\n    if (e == null || typeof(e.document) == 'undefined') return fn;\n\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n\n    fn = dgo_get_fn_from_pos(doc, elem_offset.l + e.offsetWidth + 10,\n         elem_offset.t + e.offsetHeight\/2, 10, 0, no_of_times_travers, dgo_get_info(e), e , \"right\");   \/\/10\n\n    if(!isNaN(fn)) {\n        fn = \"\";\n    }\n\n    return fn;\n\n}\n\nfunction dgo_get_fn_top(e, no_of_times_travers, no_of_travers_done) {\n\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var temp = 0;\n\n    if(typeof(no_of_travers_done) != \"undefined\") {\n        temp = no_of_travers_done * 10;\n    }\n    var fn = \"\";\n\n    if (e == null || typeof(e.document) == 'undefined') return fn;\n\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n    fn = dgo_get_fn_from_pos(doc, elem_offset.l, elem_offset.t - 10, 0, -10, no_of_times_travers,\n         dgo_get_info(e), e, \"top\");\n\n    if(!isNaN(fn)) {\n        fn = \"\";\n    }\n\n    return fn;\n\n}\n\nfunction dgo_get_elem_index(e) {\n    if (e == null || e.parentElement == null) return -1;\n\n    for (var i = 0; i &lt; e.parentElement.children.length; i++) {\n\n        if (e.parentElement.children(i) == e) {\n            return i;\n        }\n    }\n\n    return -1;\n}\n\nfunction dgo_get_distant_child(root, r3, r2, r1) {\n    if (root == null || r3 &lt; 0 || r2 &lt; 0 || r1 &lt; 0) return null;\n\n    if (root.children.length &lt;= r3) return null;\n\n    var e = root.children(r3);\n\n    if (e.children.length &lt;= r2) return null;\n\n    e = e.children(r2);\n\n    if (e.children.length &lt;= r1) return null;\n\n    return e.children(r1);\n}\n\n                                         \/\/=============BUG FIXING=====================\/\/\n\nfunction get_control_fn_from_point_traverse(e) {\n    var fn = \"\";\n    if(\"radio\" == e.type || \"checkbox\" == e.type) {\n         if (!(fn = dgo_get_fn_right(e, 15))) {\n            fn = dgo_get_fn_left(e, 5);\n            return fn;\n        }\n    } else {\n        if (fn = dgo_get_fn_left(e, 12)) return fn;\n        if (fn = dgo_get_fn_top(e, 5)) return fn;\n        if (fn = dgo_get_fn_left(e, 20, 12)) return fn;\n    }\n    return \"\";\n}\n\nfunction dgo_get_control_fieldname(e) {\n    var field_name = \"\";\n    try {\n        if(!check_element(e)) {\n            return false;\n        }\n        switch(e.tagName) {\n            case \"INPUT\":\n                if(\"radio\" == e.type || \"checkbox\" == e.type) {\n                    field_name = dgo_get_INPUTradio_or_INPUTcheckbox_fieldname(e);\n                } else if (\"text\" == e.type || \"textarea\" == e.type || \"password\" == e.type || \"file\" == e.type) {\n                    field_name = dgo_get_INPUTtext_or_INPUTpassword_fieldname(e);\n                }\n                break;\n            case \"SELECT\":\n                field_name = dgo_get_SELECT_fieldname(e);\n                break;\n            case \"TEXTAREA\":\n                field_name = dgo_get_INPUTtext_or_INPUTpassword_fieldname(e);\n                break;\n            default:\n        }\n        if(null == field_name || \" \" == field_name || \"\" == field_name) {\n            field_name = get_control_parent_caption(e);\n        }\n        if(!is_valid_fieldname(field_name)) {\n            field_name = \"\";\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return field_name;\n}\n\nfunction dgo_get_INPUTradio_or_INPUTcheckbox_fieldname(e) {\n    var res_text = \"\";\n    try {\n        if((\"\" != (res_text = dgo_get_sibling_inner_text(e))) ||\n           (\"\" != (res_text = get_control_fn_from_point_traverse(e))) ||\n           (\"\" != (res_text = dgo_get_text_from_child(e))) ||\n           (\"\" != (res_text = (e.nextSibling.data || e.nextSibling.nodeValue))))\n        {\n            return res_text;\n        }\n    } catch(err) {\n        return \"\";\n    }\n    return res_text;\n}\n\nfunction dgo_get_INPUTtext_or_INPUTpassword_fieldname(e) {\n    var res_text = \"\";\n    var sibling = \"\";\n    try {\n        if((\"\" != (res_text = dgo_get_text_from_child(e))) ||\n           (\"\" != (res_text = get_control_fn_from_point_traverse(e))))\n        {\n            return res_text;\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return res_text;\n}\n\n\nfunction dgo_get_SELECT_fieldname (e) {\n    try {\n        var res_text = \"\";\n        if( (\"\" != (res_text = dgo_get_sibling_inner_text(e))) ||\n            (\"\" != (res_text = dgo_get_text_from_child (e))) ||\n            (\"\" != (res_text = get_control_fn_from_point_traverse(e))) ||\n            (\"\" != (res_text = dgo_get_fn_right(e))))\n        {\n            return res_text;\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return res_text;\n}\n\nfunction check_element(e) {\n    try {\n        if (typeof(e.document) == 'undefined' || e == null) {\n            return false;\n        }\n    } catch(err) {\n        return false;\n    }\n    return true;\n}\n\nfunction check_id(e) {\n    try {\n        if (typeof(e.id) == \"undefined\" || e.id == \"\" || e.id == \" \") {\n            return false;\n        }\n    } catch(err) {\n        return false;\n    }\n    return true;\n}\n\nfunction check_name(e) {\n    try {\n        if (typeof(e.name) == \"undefined\" || e.name == \"\" || e.name == \" \") {\n            return false;\n        }\n    } catch(err) {\n        return false;\n    }\n    return true;\n}\n\nfunction dgo_get_sibling_inner_text(e) {\n    try {\n        var sibling = e.nextSibling;\n        var id = e.id;\n        if((sibling != null) &amp;&amp; check_id(e)) {\n            var sibling_tag = sibling.tagName;\n            var sibling_id = sibling.htmlFor;\n            if(typeof(sibling_tag) == \"undefined\" || typeof(sibling_id) == \"undefined\") {\n                 return \"\";\n            }\n            if ((\"LABEL\" == sibling_tag) &amp;&amp; (id == sibling_id)) {\n                 return sibling.innerText;\n            }\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return \"\";\n}\n\nfunction dgo_get_text_from_child(e) {\n    try {\n        var parent = e.parentNode;\n        if(!parent) {\n            return \"\";\n        }\n        var label_coll = parent.getElementsByTagName(\"LABEL\");\n        var count = label_coll.length;\n        if( 0 == count) {\n            if(!parent.parentElement) {\n                return \"\";\n            }\n            label_coll = parent.parentElement.getElementsByTagName(\"LABEL\");\n            count = label_coll.length;\n            if( 0 == count)return \"\";\n        }\n        for(var i = 0; i &lt; count; i++) {\n            var child_elem = label_coll[i];\n            var child_id = child_elem.htmlFor;\n            if(child_id == e.id || child_id == e.name) {\n                return child_elem.innerText;\n            }\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return \"\";\n}\n\nfunction get_control_parent_caption(e) {\n    var elem = e;\n    var it = 0;\n    var r_elem = elem.getBoundingClientRect();\n    try {\n        do {\n            var parent = elem.parentNode;\n            if(!parent) {\n                return \"\";\n            }\n            var label_coll = parent.getElementsByTagName(\"LABEL\");\n            if(!label_coll) {\n                return \"\";\n            }\n            var label_child = label_coll.length;\n            if(1 == label_child) {\n                var r_label = label_coll[0].getBoundingClientRect();\n                if(r_elem.bottom &gt; r_label.top) {\n                     return label_coll[0].innerText;\n                }\n                return \"\";\n            } else if(label_child &gt; 1) {\n                break;\n            }\n            elem = parent;\n            it++;\n        } while(it &lt; 3);\n    } catch (err) {\n    }\n    return \"\";\n}\n\nfunction is_valid_fieldname(field_name) {\n    if(isNaN(field_name) &amp;&amp;\n       (field_name != \":\") &amp;&amp;\n       (field_name != \" \") &amp;&amp;\n       (field_name != \"*\") &amp;&amp;\n       (field_name != \"—\") &amp;&amp;\n       (field_name.search(\"&gt;\") == -1) &amp;&amp;\n       (field_name.search(\"&lt;\") == -1))\n    {\n        return true;\n    }\n    return false;\n}\n\nfunction dgo_check_accessKey(e) {\n    try {\n        var inner_txt = e.innerText;\n        if(inner_txt.length == 1) {\n            p_e = e.parentElement;\n            if(!check_element(p_e)) {\n                return e;\n            }\n            var accessKy = p_e.accessKey;\n            if(typeof(accessKy) == \"undefined\") {\n                return e;\n            }\n            if(inner_txt == accessKy) {\n                return p_e;\n            }\n        }\n    } catch(err) {\n    }\n    return e;\n}\n\nfunction is_valid_control_tagname(e) {\n    try {\n        switch(e.tagName) {\n            case \"INPUT\":\n            case \"TEXTAREA\":\n            case \"SELECT\":\n            case \"A\":\n                return true;\n            default:\n                return false;\n        }\n    } catch(err) {\n    }\n    return false;\n}\n\nfunction is_valid_fn_element(e, flag) {\n    try {\n        if(flag == \"left\" &amp;&amp; (e.getElementsByTagName(\"INPUT\").length ||\n           e.getElementsByTagName(\"SELECT\").length || e.getElementsByTagName(\"IMG\").length ||\n           e.getElementsByTagName(\"TEXTAREA\").length)) {\n            return false;\n        }\n        if(flag == \"top\" &amp;&amp; (e.getElementsByTagName(\"TABLE\").length ||\n           e.getElementsByTagName(\"IMG\").length ||  e.getElementsByTagName(\"A\").length)) {\n           return false;\n        }\n        return true;\n    } catch(err) {\n    }\n    return false;\n}\n\/\/==================== GENERAL FUNCTIONS==============\/\/\n\nvar dgo_webcompat = false;\nvar dgo_zoomlevel = 100;\nvar dgo_ie_version = \"-1\";\n\nfunction get_ie_zoom_level() {\n    try {\n        if(\"-1\" == dgo_ie_version) {\n            dgo_ie_version = navigator.appVersion.match(\/MSIE (\\d+)\/)[1];\n        }\n        if (dgo_ie_version == \"7\") {\n            var rect = document.body.getBoundingClientRect();\n            dgo_zoomlevel = Math.ceil((rect.right-rect.left)\/document.body.clientWidth * 100);\n        } else if (dgo_ie_version &gt;= \"8\"){\n            dgo_zoomlevel = Math.ceil(window.screen.deviceXDPI\/window.screen.logicalXDPI*100);\n        }\n    } catch (e) {\n        dgo_zoomlevel = 100;\n    }\n}\n\nfunction dgo_set_ie_info(ie_info) {\n    try {\n        ie_info = extract_info_from_string(ie_info, \"IEinfo\", \"={\", \";\");\n        var ie_info_map = convert_from_string_to_map(ie_info, \",\")\n        if(ie_info_map.IEversion) {\n            dgo_ie_version = ie_info_map.IEversion;\n        }\n        if(ie_info_map.Webcompat) {\n            if (\"true\" == ie_info_map.Webcompat) {\n                dgo_webcompat = true;\n            }\n        }\n        return true;\n    } catch(err) {\n        return false;\n    }\n}\n\nfunction dgo_page_attr_url() {\n    return document.URL;\n}\n\nfunction offset_rect (source_rect, left, top) {\n    source_rect.left += left;\n    source_rect.top += top;\n    source_rect.right += left;\n    source_rect.bottom += top;\n    return source_rect;\n}\n\nfunction convert_from_string_to_map(string, delimiter) {\n    try {\n        var params = string.split(delimiter);\n        var map = {};\n        for (var i = 0; i &lt; params.length; i++) {\n            var parts = params[i].split(':');\n            map[parts[0]] = parts[1].substr(1, parts[1].length - 2);\n        }\n        return map;\n    } catch(err) {\n        throw err;\n    }\n}\n\nfunction extract_info_from_string(str, startToken, middleToken, endToken) {\n    try {\n        var start_pos = str.search(startToken);\n        if(-1 == start_pos){\n            return \"\";\n        }\n        start_pos = str.indexOf(middleToken, start_pos);\n        var end_pos = str.indexOf(endToken, start_pos);\n        var res = str.substring(start_pos+2 , end_pos-1);\n        if(!isNaN(res)) {\n            return Number(res);\n        }\n        return res;\n    } catch(err) {\n        throw err;\n    }\n}\n\n\/\/======================================Enable or disable controls========================\/\/\n\nfunction dgo_get_state(element) {\n   try {\n        if(typeof(element.disabled) != 'undefined') {\n            if(element.disabled) {\n                return 1;  \/\/true\n            }\n        }\n   } catch(err) {\n       return -1   \/\/\"exception\";\n   }\n   return 0; \/\/false\n}\n\nfunction dgo_set_state(element, state) {\n    try {\n        if(typeof(element.disabled) != 'undefined') {\n            element.disabled = state;\n            return 1; \/\/true\n        }\n      } catch(err) {\n            return -1\/\/\"exception\";\n    }\n   return 0; \/\/false\n}\n\n\n\/\/================================RECOGNITION================================\/\/\n\nvar delimiter = \"|##|\";\nvar rerecognition_frame_offset_x = 0;\nvar rerecognition_frame_offset_y = 0;\nvar elem_with_frame_path = \"window\";\n\nfunction HTMLElementRecognition() {\n\n}\n\nHTMLElementRecognition.prototype.element_path = \"\";\nHTMLElementRecognition.prototype.element_index_path = \"\";\nHTMLElementRecognition.prototype.element_rect = null;\nHTMLElementRecognition.prototype.bc_rect = null;\nHTMLElementRecognition.prototype.element = null;\nHTMLElementRecognition.prototype.window_frame = null;\nHTMLElementRecognition.prototype.doc = null;\nHTMLElementRecognition.prototype.current_doc = null;\nHTMLElementRecognition.prototype.eep = \"\";\nHTMLElementRecognition.prototype.object_type = \"\";\nHTMLElementRecognition.prototype.object_sub_type = \"\";\nHTMLElementRecognition.prototype.element_rect_str = \"\";\nHTMLElementRecognition.prototype.client_x = null;\nHTMLElementRecognition.prototype.client_y = null;\nHTMLElementRecognition.prototype.frame_offset_x = 0;\nHTMLElementRecognition.prototype.frame_offset_y = 0;\nHTMLElementRecognition.prototype.frame_path = \"\";\nHTMLElementRecognition.prototype.gen_path = 1;\nfunction dgo_element_recognition_process (point_x, point_y,\n         top_frame_left, top_frame_top,gen_path, win_frame) {\n    try {\n        var html_rec_obj = new HTMLElementRecognition();\n        html_rec_obj.check_input(point_x, point_y, top_frame_left, top_frame_top,win_frame);\n        html_rec_obj.init(point_x, point_y, top_frame_left, top_frame_top,gen_path, win_frame);\n        html_rec_obj.get_element_from_point(point_x, point_y, top_frame_left, top_frame_top);\n        html_rec_obj.get_element_path();\n        html_rec_obj.get_bc_rect();\n         if (html_rec_obj.gen_path == 1) {html_rec_obj.get_element_eep();}\n        html_rec_obj.element_rect_str = html_rec_obj.execute_self_handler(point_x-top_frame_left,\n                                               point_y-top_frame_top, html_rec_obj.element);\n        html_rec_obj.get_element_object_type();\n        return html_rec_obj.recognition_output();\n    } catch (err) {\n        if(err == false) {\n            return false;\n        }\n        return err.name + \",\" + err.description+ \",\"+ err.number ;\n    }\n}\n\nHTMLElementRecognition.prototype.check_input = function(point_x, point_y, top_frame_left,\n                                                        top_frame_top, win_frame) {\n    if(win_frame == null || win_frame.document == null) {\n        throw false;\n    }\n}\n\nHTMLElementRecognition.prototype.init = function(point_x, point_y, top_frame_left,\n                                                 top_frame_top,gen_path, win_frame) {\n    this.window_frame = win_frame;\n    this.doc = win_frame.document;\n    this.gen_path = gen_path;\n    this.element_rect = new Object();\n    this.bc_rect = new Object();\n    this.client_x = point_x - top_frame_left;\n    this.client_y = point_y - top_frame_top;\n    get_ie_zoom_level();\n}\n\nHTMLElementRecognition.prototype.get_element_from_point = function(point_x, point_y,\n                                                               top_frame_left, top_frame_top) {\n    var last_doc = this.doc;\n    point_x -= top_frame_left;\n    point_y -= top_frame_top;\n    this.frame_offset_x = 0;\n    this.frame_offset_y = 0;\n    var found = false;\n    do {\n        found = true;\n        this.current_doc = last_doc;\n        var client_x = point_x - this.frame_offset_x;\n        var client_y = point_y - this.frame_offset_y;\n        if(!this.current_doc) {\n            throw false;\n        }\n        if (Math.abs(dgo_zoomlevel - 100) &gt; 4) {\n            client_x = Math.ceil(client_x * 100 \/ dgo_zoomlevel);\n            client_y = Math.ceil(client_y * 100 \/ dgo_zoomlevel);\n        }\n        if (!(this.element = this.current_doc.elementFromPoint(client_x, client_y))) {\n            throw false;\n        }\n        var tagname = this.element.tagName;\n        if (tagname == \"FRAME\" || tagname == \"IFRAME\") {\n            this.element_rect = this.element.getBoundingClientRect();\n            this.frame_offset_x += this.element_rect.left;\n            this.frame_offset_y += this.element_rect.top;\n            var contDoc = (this.element.contentWindow || this.element.contentDocument);\n            if (!contDoc.document) {\n                throw false;\n            }\n            contDoc =contDoc.document;\n            last_doc = contDoc;\n            found = false;\n        }\n    } while(!found);\n    this.element = dgo_check_accessKey(this.element);\n    if(this.element.tagName == \"B\") {\n        this.element = this.element.parentElement;\n    }\n}\n\nHTMLElementRecognition.prototype.get_element_path = function() {\n    var tagname = this.element.tagName;\n    var tag_coll = this.current_doc.getElementsByTagName(tagname);\n    var tag_coll_length = tag_coll.length;\n    for (var i = 0; i &lt; tag_coll_length; i++) {\n        var child = tag_coll.item(i);\n        if(this.element == child) {\n            this.element_path = \"document.all.tags(\\\"\" + tagname + \"\\\")\" + \"[\" + i + \"]\";\n            return true;\n         }\n    }\n    throw false;\n}\n\nHTMLElementRecognition.prototype.get_bc_rect = function() {\n    this.element_rect = this.element.getBoundingClientRect();\n    var node = this.element;\n    if (node &amp;&amp; node.parentNode) {\n        var p_node = node.parentNode;\n        var p_elem = p_node;\n        if (p_elem &amp;&amp;  \"clipper\" ==  p_elem.tagName) {\n            if (p_node.parentNode) {\n                p_node = p_node.parentNode;\n            }\n            this.element_rect = p_node.getBoundingClientRect();\n        }\n    }\n    this.element_rect = offset_rect(this.element_rect, this.frame_offset_x, this.frame_offset_y);\n}\n\nHTMLElementRecognition.prototype.get_element_object_type = function() {\n    this.object_type = dgo_elem_xtype(this.element) + this.object_sub_type;\n}\n\nHTMLElementRecognition.prototype.execute_self_handler = function(clickptx, clickpty, elem) {\n    \/\/these points are wrt client co-ordinate i.e. after offsetting loff_\n    \/\/Call dgo_self_handler and update type and rect if applicable\n    var ret_val = \"nonscrollable\";\n    if (dgo_isscrollable_element(elem)) {\n        ret_val = \"scrollable\";\n        var client_h = elem.clientHeight;\n        var client_w = elem.clientWidth;\n        if (client_w &lt; 30 || client_h &lt; 30) {\n            return ret_val;  \/\/ insanity check, found collapsed dd lists matching scrollbar\n        }\n        var b_rect = elem.getBoundingClientRect();\n        b_rect = offset_rect(b_rect, this.frame_offset_x, this.frame_offset_y);\n        var client_l = elem.clientLeft;\n        var client_t = elem.clientTop;\n        var scroll_w = elem.scrollWidth;\n        var scroll_h = elem.scrollHeight;\n        var scroll_l = elem.scrollLeft;\n        var scroll_t = elem.scrollTop;\n        if (scroll_w &gt; client_w) {\n            var hb_rect = new Object();\n\n            hb_rect.left = b_rect.left;\n            hb_rect.top = b_rect.top + client_h;\n            hb_rect.right = hb_rect.left + client_w;\n            hb_rect.bottom = b_rect.bottom;\n\n            \/\/ if click point falls in scroll area, do the processing otherwise return it\n            if (clickpty &gt; hb_rect.top &amp;&amp; clickpty &lt; hb_rect.bottom ) {\n                var fac = 0.0;\n                if (clickptx &gt; hb_rect.left &amp;&amp; clickptx &lt; (hb_rect.left + 16)) {\n                    this.object_sub_type = \"HScrollBtnL\";\n                    return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left+15) + \",\" +\n                     hb_rect.bottom;\n                }\n                if (clickptx &gt; (hb_rect.right - 16) &amp;&amp;\n                    clickptx &lt; hb_rect.right) {\n                    this.object_sub_type = \"HScrollBtnR\";\n                    return (hb_rect.right - 16) + \",\" + hb_rect.top + \",\" + hb_rect.right +\n                             \",\" + hb_rect.bottom;\n                }\n                hb_rect.left += 16;\n                hb_rect.right -= 16;\n                if (scroll_h &gt; 0) {\n                    fac = (client_w - 16)\/scroll_w;\n                } else {\n                    fac = 1;\n                }\n                var hb_wdth = Math.round(fac * (client_w - 16));\n                if (scroll_l &gt; 0 &amp;&amp; clickptx &gt; hb_rect.left &amp;&amp;\n                    clickptx &lt; (hb_rect.left + Math.ceil(scroll_l * fac))) {\n                    this.object_sub_type = \"HScrollAreaL\";\n                    return hb_rect.left + \",\" + hb_rect.top + \",\" +\n                           (hb_rect.left + Math.round(scroll_l * fac)) + \",\" + hb_rect.bottom;\n                }\n                hb_rect.left += Math.round(scroll_l * fac);\n                if (hb_rect.right &gt; (hb_rect.left + hb_wdth) &amp;&amp;\n                    clickptx &gt; (hb_rect.left + hb_wdth) &amp;&amp;\n                    clickptx &lt; hb_rect.right) {\n                    this.object_sub_type = \"HScrollAreaR\";\n                    return (hb_rect.left + hb_wdth) + \",\" + hb_rect.top + \",\" +\n                            hb_rect.right + \",\" + hb_rect.bottom;\n                }\n                else if (clickptx &gt; hb_rect.left &amp;&amp;\n                         clickptx &lt; (hb_rect.left + hb_wdth)) {\n                    this.object_sub_type = \"HScrollBar\";\n                    return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left + hb_wdth) +\n                           \",\" + hb_rect.bottom;\n                }\n            }\n        }\n        if (scroll_h &gt; client_h) {\n            var vb_rect = new Object();\n            vb_rect.left = b_rect.left + client_w;\n            vb_rect.top = b_rect.top;\n            vb_rect.right = b_rect.right;\n            vb_rect.bottom = vb_rect.top + client_h;\n\n            \/\/ if click point falls in scroll area, do the processing otherwise return it\n            if ((clickptx &gt; vb_rect.left) &amp;&amp; (vb_rect.right &gt; clickptx) ) {\n\n                var fac = 0.0;\n                if (clickpty &gt; vb_rect.top &amp;&amp; clickpty &lt; (vb_rect.top + 16)) {\n                    this.object_sub_type = \"VScrollBtnT\";\n                    return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                           (vb_rect.top + 15);\n                }\n                if (clickpty &gt; (vb_rect.bottom - 16) &amp;&amp;\n                    clickpty &lt; vb_rect.bottom) {\n                    this.object_sub_type = \"VScrollBtnB\";\n                    return vb_rect.left + \",\" + (vb_rect.bottom - 15) + \",\" +\n                           vb_rect.right + \",\" + vb_rect.bottom;\n                }\n                vb_rect.top += 16;\n                vb_rect.bottom -= 16;\n                if (scroll_h &gt; 0) {\n                    fac = (client_h - 16)\/scroll_h;\n                } else {\n                    fac = 1;\n                }\n                var vb_hght = Math.round(fac * (client_h - 16));\n                if (scroll_t &gt; 0 &amp;&amp; clickpty &gt; vb_rect.top &amp;&amp;\n                    clickpty &lt; (vb_rect.top + Math.ceil(scroll_t * fac))) {\n                    this.object_sub_type = \"VScrollAreaT\";\n                    return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                           (vb_rect.top + Math.round(scroll_t * fac));\n                }\n                vb_rect.top += Math.round(scroll_t * fac);\n                if (vb_rect.bottom &gt; (vb_rect.top + vb_hght) &amp;&amp;\n                    clickpty &gt; (vb_rect.top + vb_hght) &amp;&amp;\n                    clickpty &lt; vb_rect.bottom) {\n                    this.object_sub_type = \"VScrollAreaB\";\n                    return vb_rect.left + \",\" + (vb_rect.top + vb_hght) + \",\" +\n                           vb_rect.right + \",\" + vb_rect.bottom;\n                }\n                else if (clickpty &gt; vb_rect.top &amp;&amp;\n                         clickpty &lt; (vb_rect.top + vb_hght)) {\n                    this.object_sub_type = \"VScrollBar\";\n                    return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                           (vb_rect.top + vb_hght);\n                }\n            }\n        }\n    }\n    return ret_val;\n}\n\nHTMLElementRecognition.prototype.get_element_eep = function() {\n    var elem_path_webcompat = \"\";\n    if(dgo_webcompat) {\n        this.get_element_index_path();\n        elem_path_webcompat = this.element_index_path;\n    }\n    this.frame_path = Eep_getFramePathString(this.current_doc.parentWindow,\n                                            this.current_doc.parentWindow.top);\n    this.eep = 'eep_frame=\\\"' + this.frame_path\n                + '\\\";eep_simple_path=\\\"' + elem_path_webcompat\n                + '\\\";' + Eep_generate(this.element, this.current_doc.parentWindow)\n                + 'client_x=\\\"' + this.client_x\n                + '\\\";client_y=\\\"' + this.client_y + '\\\";';\n    if (this.frame_path == \"\") {\n        this.frame_path = \"-1\";\n    }\n}\n\nHTMLElementRecognition.prototype.recognition_output = function() {\n    var obj_rect = \"\";\n    if (this.object_sub_type == \"\") {\n        obj_rect = this.element_rect.left + \",\" + this.element_rect.top + \",\" +\n                  this.element_rect.right + \",\" + this.element_rect.bottom;\n    } else {\n        obj_rect = this.element_rect_str;\n    }\n    return ( this.element_path + delimiter + this.object_type + delimiter +\n             obj_rect + delimiter + this.eep + delimiter + this.get_element_with_frame_path());\n}\n\nHTMLElementRecognition.prototype.get_element_with_frame_path = function() {\n    if(elem_with_frame_path) {\n        return (elem_with_frame_path + \".\" + this.element_path);\n\t}\n\treturn \"\";\n}\n\nHTMLElementRecognition.prototype.get_element_index_path = function() {\n    var element_path = [];\n    var delimiter = \":\";\n    this.get_index_path_recursive(this.element, this.window_frame.document.body, element_path);\n    var length = element_path.length;\n    for(var i = 0; i &lt; length; i++){\n        if(i == length-1) {\n            delimiter = \"\";\n        }\n        this.element_index_path = this.element_index_path + element_path[i] + delimiter;\n    }\n}\n\nHTMLElementRecognition.prototype.get_index_path_recursive = function(element, root, path) {\n    if (root == 0) return false;\n    if (element == root) return true;\n    var collection = root.children;\n    if (collection == 0) return false;\n    var length = collection.length;\n    for (var i = 0; i &lt; length; i++) {\n        path.push(i);\n        var item = collection.item(i);\n        if (this.get_index_path_recursive(element, item, path)) return true;\n        path.pop(i);\n    }\n    return false;\n}\n\nfunction string_to_map_of_map(string, outer_dlm, inner_dlm) {\n    try {\n        var params = string.split(outer_dlm);\n        var map = new Array();\n        for (var i = 0; i &lt; params.length; i++) {\n            var parts = params[i].split(inner_dlm);\n            map[i] = new Array();\n            for (var j = 0; j &lt; parts.length; j++) {\n                map[i].push(parts[j]);\n            }\n        }\n        return map;\n    } catch (err) {\n        throw err;\n    }\n}\n\n\/\/============================RERECOGNITION==============================\/\/\n\n\/\/ret_status = -1 exception\n\/\/ret_status = 0 false\n\/\/ret_status = 1 true\n\/\/ret_status = 2 hidden\n\nfunction dgo_element_batch_rerecognition_process(multipaths, check_names, win_frame) {\n    \/\/ First get the map of delimited paths\n    var elements = string_to_map_of_map(multipaths,\"|PP|\",\"|PT|\");\n    var ret_val = '';\n    var count = elements.length;\n    for (var iter = 0; iter &lt; count; iter++) {\n        var ret_status = dgo_element_rerecognition_process(elements[iter][0],\n                                                   elements[iter][1],check_names,win_frame);\n        if (ret_status != -1 &amp;&amp; ret_status != 0) {\n            if(ret_status == 2) {\n                ret_val +=\"HIDDEN\";\n            } else {\n                ret_val += ret_status;\n            }\n        } else {\n            ret_val +=\"FAILED\";\n        }\n        if(iter+1 != count) {\n            ret_val += \"|+|\";\n        }\n    }\n    return ret_val;\n}\n\nfunction HTMLElementRerecognition () {\n}\n\nHTMLElementRerecognition.prototype.recording_element_type = \"\";\nHTMLElementRerecognition.prototype.element_path = \"\";\nHTMLElementRerecognition.prototype.element_index_path = \"\";\nHTMLElementRerecognition.prototype.eep = \"\";\nHTMLElementRerecognition.prototype.element_rect = null;\nHTMLElementRerecognition.prototype.element_rect_str = \"\";\nHTMLElementRerecognition.prototype.element = null;\nHTMLElementRerecognition.prototype.window_frame = null;\nHTMLElementRerecognition.prototype.doc = null;\nHTMLElementRerecognition.prototype.object_type = \"\";\nHTMLElementRerecognition.prototype.object_sub_type = \"\";\nHTMLElementRerecognition.prototype.client_x = null;\nHTMLElementRerecognition.prototype.client_y = null;\nHTMLElementRerecognition.prototype.check_names = \"\";\nHTMLElementRerecognition.prototype.recording_element_info_map = null;\nHTMLElementRerecognition.prototype.rerecognition_eep_frame = \"\";\n\nfunction dgo_element_rerecognition_process(eepInput, obj_type, check_names, win_frame) {\n    try {\n        var html_rerec_obj = new HTMLElementRerecognition();\n        html_rerec_obj.check_input(eepInput, win_frame);\n        html_rerec_obj.init(eepInput, obj_type, check_names, win_frame);\n        if(!html_rerec_obj.get_elem_from_index_path()) {\n            if(!html_rerec_obj.get_element_by_client_pt() ||\n               !html_rerec_obj.check_element_info()) {\n                throw false;\n            }\n        }\n        if(IsObjectHidden(html_rerec_obj.element)) {\n            return 2;\n        }\n        if (html_rerec_obj.element_path == \"\") {\n            html_rerec_obj.get_element_path();\n        }\n        html_rerec_obj.get_rerecognition_eep_frame();\n        html_rerec_obj.get_element_object_type();\n        html_rerec_obj.get_rect();\n        return html_rerec_obj.rerecognition_output();\n    } catch(err) {\n        if(err == false) {\n            return 0;\n        }\n        return -1;\n    }\n}\n\nHTMLElementRerecognition.prototype.check_input = function(eepInput, win_frame) {\n    if(win_frame == null || eepInput == null || win_frame.document == null) {\n        throw false;\n    }\n}\n\nHTMLElementRerecognition.prototype.init = function(eepInput, obj_type, check_names, win_frame) {\n    this.window_frame = win_frame;\n    this.doc = win_frame.document;\n    this.recording_element_type = obj_type;\n    elem_index_within_frame = -1;\n    rerecognized_frame = null;\n    this.element_path = extract_info_from_string(eepInput, \"element_path\", \"=\", \";\");\n    this.client_x = extract_info_from_string(eepInput, \"client_x\", \"=\", \";\");\n    this.client_y = extract_info_from_string(eepInput, \"client_y\", \"=\", \";\");\n\n    var start_pos = eepInput.search(\"element_path\");\n    if (-1 == start_pos) {\n        this.eep = eepInput;\n    } else {\n        this.eep = eepInput.substring(0,start_pos);\n    }\n    this.element_rect = new Object();\n    this.check_names = check_names;\n    this.recording_element_info_map = {};\n}\n\nHTMLElementRerecognition.prototype.get_element_by_client_pt = function() {\n    if (this.client_x == \"\" || this.client_y == \"\") {\n        return false;\n    }\n    try {\n        this.element = this.doc.elementFromPoint(Number(this.client_x), Number(this.client_y));\n        if(this.element) {\n            this.element_rect_str = this.execute_self_handler(this.recording_element_type,\n                                                            this.element);\n            return true;\n        }\n    } catch (err) {\n        return false;\n    }\n    return false;\n}\n\nHTMLElementRerecognition.prototype.get_element_path = function() {\n    var tagname = this.element.tagName;\n    if (-1 == elem_index_within_frame) {\n        var tag_coll = null;\n        if(rerecognized_frame &amp;&amp; rerecognized_frame.document) {\n             tag_coll = rerecognized_frame.document.getElementsByTagName(tagname);\n        } else {\n             tag_coll = this.doc.getElementsByTagName(tagname);\n        }\n        var tag_coll_length = tag_coll.length;\n        for (var i = 0; i &lt; tag_coll_length; i++) {\n            var child = tag_coll.item(i);\n            if(this.element == child) {\n                this.element_path = \"document.all.tags(\\\"\" + tagname +\n                                   \"\\\")\" + \"[\" + i + \"]\";\n                return true;\n             }\n        }\n        this.element_path = \"document.all.tags(\\\"\" + tagname + \"\\\")\" + \"[0]\";\n    } else {\n        this.element_path = \"document.all.tags(\\\"\" + tagname + \"\\\")[\" +\n                            elem_index_within_frame + \"]\";\n    }\n    return true;\n}\n\nHTMLElementRerecognition.prototype.get_rerecognition_eep_frame = function() {\n    if (rerecognized_frame) {\n        this.rerecognition_eep_frame = Eep_getFramePathString(rerecognized_frame,\n                                                              rerecognized_frame.top)\n    }\n    if (this.rerecognition_eep_frame == '') {\n        this.rerecognition_eep_frame = \"-1\";\n    }\n}\n\nHTMLElementRerecognition.prototype.execute_self_handler = function(obj_type, elem) {\n    var ret_val = \"\";\n    if (dgo_isscrollable_element(elem)) {\n        var sub_type = this.recording_element_type.substr(elem.tagName.length);\n        var client_h = elem.clientHeight;\n        var client_w = elem.clientWidth;\n        var b_rect = elem.getBoundingClientRect();\n        var client_l = elem.clientLeft;\n        var client_t = elem.clientTop;\n        var scroll_w = elem.scrollWidth;\n        var scroll_h = elem.scrollHeight;\n        var scroll_l = elem.scrollLeft;\n        var scroll_t = elem.scrollTop;\n\n        if (sub_type.charAt(0) == 'H') {\n            this.object_sub_type = sub_type;\n            var hb_rect = new Object();\n\n            hb_rect.left = b_rect.left;\n            hb_rect.top = b_rect.top + client_h;\n            hb_rect.right = hb_rect.left + client_w;\n            hb_rect.bottom = b_rect.bottom;\n\n            var fac = 0.0;\n            if (sub_type == \"HScrollBtnL\") {\n                return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left+15) + \",\" +\n                       hb_rect.bottom;\n            }\n            if (sub_type == \"HScrollBtnR\") {\n                return (hb_rect.right - 16) + \",\" + hb_rect.top + \",\" + hb_rect.right +\n                        \",\" + hb_rect.bottom;\n            }\n            var temp_rect = b_rect;\n            hb_rect.left += 16;\n            hb_rect.right -= 16;\n            if (scroll_h &gt; 0) {\n                fac = (client_w - 16)\/scroll_w;\n            } else {\n                fac = 1;\n            }\n            var hb_wdth = Math.round(fac * (client_w - 16));\n            if (sub_type == \"HScrollAreaL\") {\n                return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left +\n                       Math.round(scroll_l * fac)) + \",\" + hb_rect.bottom;\n            }\n            hb_rect.left += Math.round(scroll_l * fac);\n            if (sub_type == \"HScrollAreaR\") {\n                return (hb_rect.left + hb_wdth) + \",\" + hb_rect.top + \",\" +\n                        hb_rect.right + \",\" + hb_rect.bottom;\n            }\n            if (sub_type == \"HScrollBar\") {\n                return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left + hb_wdth) +\n                       \",\" + hb_rect.bottom;\n            }\n        }\n        if (sub_type.charAt(0) == 'V') {\n            this.object_sub_type = sub_type;\n            var vb_rect = new Object();\n            vb_rect.left = b_rect.left + client_w;\n            vb_rect.top = b_rect.top;\n            vb_rect.right = b_rect.right;\n            vb_rect.bottom = vb_rect.top + client_h;\n\n            var fac = 0.0;\n            if (sub_type == \"VScrollBtnT\") {\n                return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                       (vb_rect.top + 15);\n            }\n            if (sub_type == \"VScrollBtnB\") {\n                return vb_rect.left + \",\" + (vb_rect.bottom - 15) + \",\" + vb_rect.right +\n                       \",\" + vb_rect.bottom;\n            }\n            var temp_rect = b_rect;\n            vb_rect.top += 16;\n            vb_rect.bottom -= 16;\n            if (scroll_h &gt; 0) {\n                fac = (client_h - 16)\/scroll_h;\n            } else {\n                fac = 1;\n            }\n            var vb_hght = Math.round(fac * (client_h - 16));\n            if (sub_type == \"VScrollAreaT\") {\n                return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                       (vb_rect.top + Math.round(scroll_t * fac));\n            }\n            vb_rect.top += Math.round(scroll_t * fac);\n            if (sub_type == \"VScrollAreaB\") {\n                return vb_rect.left + \",\" + (vb_rect.top + vb_hght) + \",\" + vb_rect.right +\n                       \",\" + vb_rect.bottom;\n            }\n            if (sub_type == \"VScrollBar\") {\n                return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                       (vb_rect.top + vb_hght);\n            }\n        }\n    }\n    return ret_val;\n}\n\nHTMLElementRerecognition.prototype.check_element_info = function () {\n    try {\n        var eep_resolveOptions = {\n              eep_first_text_re: null\n            , eep_use_text: this.check_names\n            , eep_version: '6.1.1'\n        };\n        if(true == Eep_qaElement_(this.element, this.recording_element_info_map,\n                                  eep_resolveOptions)) {\n           return true;\n        }\n    }catch(err) {\n    }\n    return false;\n}\n\nHTMLElementRerecognition.prototype.get_frame_index = function() {\n    var frame_path = \"\";\n    var frame_path_pos = this.eep.search(\"eep_frame=\\\"\");\n    if (frame_path_pos == -1) {\n         throw false;\n    }\n    var frame_path_endpos = this.eep.search(\";\", frame_path_pos+1);\n    if (frame_path_endpos &gt; frame_path_pos) {\n        frame_path = this.eep.substr(frame_path_pos, frame_path_endpos - frame_path_pos);\n        frame_path_pos = frame_path.search(\"\\\"\");\n        frame_path = frame_path.substr(frame_path_pos+1, frame_path.length - frame_path_pos - 2);\n    }\n    if (frame_path.length &gt; 0) {\n        var start_pos = 0;\n        while (start_pos &lt; frame_path.length) {\n            var pos = frame_path.search(\":\", start_pos);\n            var num_chars = 0;\n            if (pos != -1) {\n                num_chars = pos - start_pos;\n            } else {\n                num_chars = frame_path.length - start_pos;\n            }\n            var frame_index =frame_path.substr(start_pos, num_chars);\n            \/\/push_frame(frame_index);\n            start_pos += (num_chars+1);\n        }\n    }\n}\n\nHTMLElementRerecognition.prototype.get_elem_from_index_path = function() {\n    try {\n        this.element = Eep_resolve2simpleelement(this.eep, '', 0, 0, 0, this.check_names);\n        if (this.element) {\n            this.element_rect_str = this.execute_self_handler(this.recording_element_type,\n                                                            this.element);\n            return true;\n        }\n    } catch (err) {\n    }\n    return false;\n}\n\nHTMLElementRerecognition.prototype.get_rect = function() {\n    try {\n        this.element_rect.left = this.element.getBoundingClientRect().left +\n                                rerecognition_frame_offset_x;\n        this.element_rect.right = this.element.getBoundingClientRect().right +\n                                 rerecognition_frame_offset_x;\n        this.element_rect.top = this.element.getBoundingClientRect().top +\n                               rerecognition_frame_offset_y;\n        this.element_rect.bottom = this.element.getBoundingClientRect().bottom +\n                                  rerecognition_frame_offset_y;\n    } catch (err) {\n        return false;\n    }\n}\n\nHTMLElementRerecognition.prototype.get_element_object_type = function() {\n    this.object_type = dgo_elem_xtype(this.element) + this.object_sub_type;\n}\n\nHTMLElementRerecognition.prototype.rerecognition_output = function() {\n    var obj_rect = \"\";\n    if (this.object_sub_type == \"\") {\n        obj_rect = this.element_rect.left + \",\" + this.element_rect.top + \",\" +\n                  this.element_rect.right + \",\" + this.element_rect.bottom;\n    } else {\n        obj_rect = this.element_rect_str;\n    }\n    return (this.object_type + delimiter + obj_rect + delimiter + this.element_path +\n            delimiter + this.rerecognition_eep_frame);\n}\n\n\nfunction dgo_isscrollable_element(element) {\n    var scrollable = false;\n    if(element != null) {\n        \/\/Need to add combo also (only multi select)\n        if (element.tagName == \"BODY\" ||\n            element.tagName == \"HTML\" ||\n            element.tagName == \"DIV\" ||\n            element.tagName == \"TEXTAREA\" ||\n           (element.tagName == \"SELECT\" &amp;&amp; element.type == \"select-multiple\" ))\n        {\n            scrollable = true;\n        }\n    }\n    return scrollable;\n}\n\nfunction dgo_standard_fieldname(e) {\n    var fn = \"\";\n    if (fn = dgo_get_control_fieldname(e)) return fn;\n    if (is_valid_control_tagname(e)) return \"\";\n    if (e == null || e.parentElement == null || e.parentElement.parentElement == null ||\n        e.parentElement.parentElement.parentElement == null) return '';\n\n    \/\/alert(e.tagName + \" - \" + dgo_elem_xtype(e));\n    var s_item = dgo_get_info(e);\n    var x_item = s_item.l;\n    var y_item = s_item.t;\n    var w_item = s_item.w;\n\n    var root = e.parentElement.parentElement.parentElement;\n    var r3 = dgo_get_elem_index(e.parentElement.parentElement);\n    var r2 = dgo_get_elem_index(e.parentElement);\n    var r1 = dgo_get_elem_index(e);\n\n    if (r3 == -1 || r2 == -1 || r1 == -1) return fn;\n\n\n    var f_e = dgo_get_distant_child(root, r3 + 2, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 - 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 - 2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 2, r2 - 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 2, r2 - 2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 3, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 + 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 + 2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2 - 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2 - 1, r1 - 1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 - 1, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2, r1 - 2);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2, r1 - 1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    return \"\";\n}\n\nfunction dgo_valid_string(str) {\n    if (!str || str == \"\" || str == \"undefined\" || str == \" \" || str == \"  \" ||\n        str == \"   \" || str == \"    \" || str.length &gt; 80) {\n        return false;\n    }\n    return true;\n}\n\nfunction dgo_inner_text(e) {\n    if (e != null) {\n        if(e.tagName == \"B\" &amp;&amp; e.parentElement) {\n            return e.parentElement.innerText;\n        }\n        return e.innerText;\n    }\n    return \"\";\n}\n\nfunction dgo_RADIO_fieldname(e, type) {\n    \/\/alert(\"calling radio\");\n    var fn = \"\";\n    if (fn = dgo_get_control_fieldname(e)) return fn;\n   \/\/ if (fn = dgo_get_fn_right(e)) return fn;\n\n    if (type == \"INPUTradio\") {\n        if (e.nextSibling != null) {\n            if (e.nextSibling.nextSibling != null) {\n                fn = e.nextSibling.nextSibling.innerText;\n            } else {\n                fn = e.parentNode.innerText;\n            }\n        } else {\n            fn = e.parentNode.innerText;\n        }\n    } else {\n        fn = e.parentNode.innerText;\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.previousSibling != null) {\n            fn = e.parentNode.previousSibling.innerText;\n        }\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.nextSibling != null) {\n            fn = e.parentNode.nextSibling.innerText;\n        }\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.nextSibling != null) {\n            if (e.parentNode.nextSibling.nextSibling != null) {\n                fn = e.parentNode.nextSibling.nextSibling.innerText;\n            }\n        }\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.parentNode != null) {\n          if (e.parentNode.parentNode.parentNode != null) {\n            if (e.parentNode.parentNode.parentNode.previousSibling != null) {\n              if (e.parentNode.parentNode.parentNode.previousSibling.children.length &gt; 0) {\n                fn = e.parentNode.parentNode.parentNode.previousSibling.children(0).innerText;\n                if (fn.substr(fn.length - 1, 1) == ':') {\n                  fn = fn.substr(0, fn.length - 1);\n                }\n              }\n            }\n          }\n        }\n    }\n\n    if (fn == \"undefined\" || fn.length &gt; 80) {\n        fn = \"\";\n    }\n    return fn;\n}\n\nfunction dgo_set_value(e, val) {\n\/\/alert(\"dgo_set_value\");\n    var res = \"&lt;error&gt;\";\n\n    if (e) {\n\n        if (e.tagName == \"SELECT\" &amp;&amp; e.options) {\n            for (var i = 0; i &lt; e.options.length; i++) {\n\n                if (e.options(i).text == val) {\n                    e.options(i).selected = true;\n                    e.onchange();\n                    res = \"ok\";\n                    break;\n                }\n            }\n        } else if (e.tagName == \"INPUT\") {\n            if (e.type == \"radio\" || e.type == \"checkbox\") {\n\n                if (val == \"checked\") {\n                    e.checked = true;\n                } else if (val == \"unchecked\") {\n                    e.checked = false;\n                }\n            } else \/*if (e.value)*\/ {\n                e.value = val;\n            }\n            res = \"ok\";\n        }\n    }\n    \/\/alert(\"dgo_set_value 6\" + res);\n\n    return res;\n}\n\nfunction dgo_get_value(e) {\n    var res = \"\";\n\n    if (e) {\n        if (e.tagName == \"SELECT\" &amp;&amp; e.options) {\n\n            for (var i = 0; i &lt; e.options.length; i++) {\n\n                if (e.options(i).selected) {\n                    res += \"{*}\";\n                }\n\n                res = res + e.options(i).text + \"\\n\";\n            }\n        } else if (e.tagName == \"INPUT\" &amp;&amp; e.value) {\n            res = e.value;\n        }\n    }\n\n    return res;\n}\n\nfunction dgo_font_weight(e) {\n    if(e &amp;&amp; e.currentStyle &amp;&amp; e.currentStyle.fontWeight &gt;= 600) {\n        return 1;\n    }\n    return 0;\n}\n\n\nfunction dgo_font_size(e) {\n    try {\n        if(!check_element(e)) {\n            return -1;\n        }\n        var fn_size = \"\";\n        if (e.currentStyle &amp;&amp; e.currentStyle.fontSize) {\n            fn_size = get_font_size(e.currentStyle.fontSize, false);\n        }\n        if((-1 == fn_size) &amp;&amp; e.runtimeStyle &amp;&amp; e.runtimeStyle.fontSize) {\n            fn_size = get_font_size(e.runtimeStyle.fontSize, false);\n        }\n        return fn_size;\n    } catch (err) {\n    }\n    return -1;\n}\n\n\/* pt: points — the points used by CSS are equal to 1\/72nd of 1in.\npc: picas — 1pc is equal to 12pt.\npx: pixel units — 1px is equal to 0.75pt.\n*\/\n\nfunction get_absolute_font_size(size) {\n     try {\n          if (size.indexOf(\"pt\") != -1) {\n              return parseInt(size);\n          } else if(size.indexOf(\"px\") != -1) {\n              return Math.round(parseInt(size)* 0.75);\n          }\n      }catch (e) {\n      }\n      return -1;\n}\n\nfunction get_relative_font_size(size) {\n    try {\n        if(size.indexOf(\"em\") != -1) {\n            return parseFloat(size);\n        } else if(size.indexOf(\"%\") != -1) {\n            return parseFloat(size)\/100;\n        }\n    }catch (e) {\n    }\n    return 1;\n}\n\nfunction get_font_size(size, body_elm) {\n    try {\n        if(size.length &lt;= 0) {\n            return -1;\n        }\n        var abs_font = get_absolute_font_size(size);\n        if (abs_font != -1) {\n            return abs_font;\n        } else {\n            var rel_font = get_relative_font_size(size);\n            var base_font = 0;\n            if (body_elm) {\n                if (window.document.documentElement.currentStyle &amp;&amp; window.document.documentElement.currentStyle.fontSize) {\n                    base_font = parseInt(window.document.documentElement.currentStyle.fontSize);\n                }\n            } else {\n                base_font = get_font_size(window.document.body.currentStyle.fontSize, true);\n            }\n            return Math.round(base_font * rel_font);\n        }\n    }catch (e) {\n    }\n    return -1;\n}\n\nfunction dgo_font_family(e) {\n    if (e &amp;&amp; e.currentStyle) {\n        return \"\" + e.currentStyle.fontFamily;\n    } else if(e &amp;&amp; e.runtimeStyle) {\n        return \"\" + e.runtimeStyle.fontFamily;\n    }\n\n    return \"\";\n}\n\nfunction to_hex(n) {\n    try {\n        n = parseInt(n,10);\n        if (isNaN(n)) return \"00\";\n        n = Math.max(0,Math.min(n,255));\n        return \"0123456789ABCDEF\".charAt((n-n%16)\/16) + \"0123456789ABCDEF\".charAt(n%16);\n    } catch (err) {\n    }\n    return \"00\";\n}\n\nfunction rgb_to_hex(str) {\n    try {\n        var font_color = \"#\"\n        var start = str.indexOf(\"(\");\n        var end = str.indexOf(\",\");\n        var i = 0;\n        while(i &lt; 3) {\n            var r = str.substring(start+1,end);\n            font_color = font_color + to_hex(r);\n            start = end;\n            str = str.replace(\",\", \";\");\n            end = str.indexOf(\",\");\n            if(end == -1) {\n                end = str.indexOf(\")\");\n            }\n            i++;\n        }\n        return font_color;\n    } catch (err) {\n    }\n    return \"\";\n}\n\nfunction dgo_font_color(e) {\n    if (e &amp;&amp; e.currentStyle) {\n        var font_color = e.currentStyle.color;\n        if (-1 == font_color.search(\/rgb\/i)) {\n            return \"\" + e.currentStyle.color;\n        } else {\n            return rgb_to_hex(font_color);\n        }\n    }\n    return \"\";\n}\n\nfunction dgo_bg_color(e) {\n\n    if (e &amp;&amp; e.currentStyle &amp;&amp; e.currentStyle.backgroundColor != \"\") {\n        return \"#\" + e.currentStyle.backgroundColor;\n    } else {\n        return \"#ffffff\";\n    }\n\n    return \"\";\n}\n\nfunction dgo_get_state(e) {\n    var state = \"unchecked\";\n    if (e != null &amp;&amp; e.tagName == \"INPUT\" &amp;&amp; (e.type == \"radio\" || e.type == \"checkbox\")) {\n\n        if (e.checked) {\n            state = \"checked\";\n        }\n    }\n\n    var p_e = e.parentNode;\n    if (p_e &amp;&amp; p_e.tagName == \"SPAN\" &amp;&amp; p_e.role == \"checkbox\") {\n        if (p_e.getAttribute(\"aria-checked\")== \"true\") {\n            state = \"checked\";\n        }\n    }\n\n    return state;\n}\n\nfunction IsObjectHidden(obj) {\n    var hidden = false;\n    if (typeof (obj) == 'object') {\n        var frame_rect = new Object();\n        if(document &amp;&amp; document.documentElement) {\n            frame_rect = document.documentElement.getBoundingClientRect();\n        } else {\n            frame_rect = obj.document.body.getBoundingClientRect();\n        }\n        var obj_rect = obj.getBoundingClientRect();\n        if((obj_rect.right &lt;= obj_rect.left) || (obj_rect.bottom &lt;= obj_rect.top)){\n            hidden = true;\n        }\n        if ((obj_rect.bottom &lt; frame_rect.top) || (obj_rect.right &lt; frame_rect.left) ||\n            (obj_rect.top &gt; frame_rect.bottom) || (obj_rect.left &gt; frame_rect.right))\n        {\n            hidden = true;\n        }\n    }\n    return hidden;\n}\n\nfunction Eep_resolve2simple(eepString_, frame_path_, win_, options_, log_obj_, check_names) {\n    if(!win_) {\n        win_ = window;\n    }\n    var eep_resolveOptions = {\n          eep_first_text_re: null\n        , eep_use_text: check_names\n        , eep_version: '6.1.1'\n    };\n    var eep = new Eep(eepString_, eep_resolveOptions);\n    rerecognition_frame_offset_x = 0;\n    rerecognition_frame_offset_y = 0;\n    var frame = Eep_resolveFrameSimple(eep.eep_frame, win_.top);\n    if (!frame) {\n        return -1;\n    }\n    var obj = eep.eep_resolve(frame, log_obj_);\n\n    if (typeof(obj) == 'object' &amp;&amp; IsObjectHidden(obj)) {\n        return -1;\n    }\n\n    return (typeof(obj) == 'object' ? Eep_getPathString(obj, options_) : obj);\n}\n\nfunction Eep_resolve2simpleelement(eepString_, frame_path_, win_, options_, log_obj_, check_names) {\n    var eep_resolveOptions = {\n        eep_first_text_re: null\n        , eep_use_text: check_names\n        , eep_version: '6.1.1'\n    };\n    var eep = new Eep(eepString_, eep_resolveOptions);\n    rerecognition_frame_offset_x = 0;\n    rerecognition_frame_offset_y = 0;\n    var frame = Eep_resolveFrameSimple(eep.eep_frame, win_);\n    if (!frame) {\n        return -1;\n    }\n    var obj = eep.eep_resolve(frame, log_obj_);\n\n    if (typeof (obj) != 'object' &amp;&amp; (eep.eep_frame != '')) {\n        var frame_rect = frame.frameElement.getBoundingClientRect();\n        rerecognition_frame_offset_x -= frame_rect.left;\n        rerecognition_frame_offset_y -= frame_rect.top;\n        var path = eep.eep_frame.split(':');\n        var coll_length = frame.parent.frames.length;\n        if (path.length &lt; 1) {\n            return null;\n        }\n        var orig_index = path[path.length-1] - 0;\n        var iter = 1;\n        var keep_checking = true;\n        while (keep_checking) {\n            var trial_index = orig_index - iter;\n            if (trial_index &gt;= 0) {\n                frame = frame.parent.frames[trial_index];\n                if (frame) {\n                    obj = eep.eep_resolve(frame, log_obj_);\n                    if (typeof (obj) == 'object') {\n                        break;\n                    }\n                }\n            }\n            trial_index = orig_index + iter;\n            if (trial_index &lt; coll_length) {\n                frame = frame.parent.frames[trial_index];\n                if (frame) {\n                    obj = eep.eep_resolve(frame, log_obj_);\n                    if (typeof (obj) == 'object') {\n                        break;\n                    }\n                }\n            } else if (iter &gt; orig_index) {\n                keep_checking = false;\n            }\n            iter++;\n        }\n        var frame_rect = frame.frameElement.getBoundingClientRect();\n        rerecognition_frame_offset_x += frame_rect.left;\n        rerecognition_frame_offset_y += frame_rect.top;\n    }\n    rerecognized_frame = frame;\n\n    return (typeof (obj) == 'object' ? obj : null);\n}\n\nvar Eep_resolve;\nvar eep_resolveOptions = {\n      eep_first_text_re: null\n    , eep_use_text: true\n    , eep_version: '6.1.1'\n};\nEep_resolve = function(eepString_, frame_, log_obj_) {\n    var eep = new Eep(eepString_, eep_resolveOptions);\n    return eep.eep_resolve(frame_, log_obj_);\n}\n\nfunction Eep_getWinAndFramePathString(agent_, frame_) {\n    if (!agent_) {\n        return null;\n    }\n\n    if (typeof(frame_) != 'object' || !frame_ || frame_ != frame_.self) {\n        return null;\n    }\n\n    if (frame_ == agent_.getGuiWindow()) {\n        return '-1';\n    }\n\n    var top_frame = agent_.getTop4Frame(frame_);\n    var window_no = agent_.getWindowContainer().getWindowNo4Window(top_frame);\n    var fp = Eep_getFramePathString(frame_, top_frame);\n\n    if (typeof(fp) != 'string') {\n        return null;\n    }\n\n    if (window_no) {\n        return window_no + (fp ? ':' + fp : '');\n    }\n\n    return false;\n}\n\nfunction Eep_getFramePathString(frame_, top_) {\n\n    var i = 1;\n    var path = '';\n    var frame = frame_;\n    var parent = frame_.parent;\n    var frame_path = \"\";\n    while (parent &amp;&amp; frame != parent &amp;&amp; frame != top_ &amp;&amp;\n           (!frame.window || frame.window != top_ \/*.window*\/))\n    {\n        var searching = true;\n        for (var ii = 0;\n             ii &lt; parent.frames.length &amp;&amp; searching;\n             ++ii)\n        {\n            try {\n                if (frame == parent.frames[ii] ||\n                    (frame.window &amp;&amp; (frame.window == parent.frames[ii].window)))\n                {\n                    searching = false;\n\t\t\t\t\t\n\t\t\t\t\tframe_path = \".\" + \"frames\" + \"[\" + ii + \"]\" + frame_path;\n\t\t\t\t\t\n                    path = ':' + ii + path;\n                }\n            } catch (exc_) {\n            }\n        }\n        frame = parent;\n        parent = frame.parent;\n        ++i;\n    }\n\telem_with_frame_path = elem_with_frame_path  + frame_path;\n    return path.substr(1);\n}\n\nfunction Eep_getRe4FirstText_(first_text_, options_) {\n    if (!options_ ||\n        !options_.eep_first_text_re ||\n        typeof(options_.eep_first_text_re.exec) != 'function')\n    {\n        return null;\n    }\n\n    var rc = options_.eep_first_text_re.exec(first_text_);\n\n    if (!rc || rc.length &lt;= 1) {\n        return '';\n    }\n\n    var ret_val = '';\n\n    for (var i = 1; i &lt; rc.length; ++i) {\n        ret_val += rc[i];\n    }\n\n    return ret_val;\n}\n\nfunction Eep_qaInputElement_(obj_, atts_) {\n    if (!obj_)\n        return false;\n\n    if (atts_.type) {\n        if (!obj_.type || (obj_.type &amp;&amp; obj_.type != atts_.type)) {\n            return '!=TYPE';\n        }\n    } else if (obj_.type) {\n        return '!=TYPE';\n    }\n    return true;\n}\n\nfunction Eep_qaElement_(obj_, atts_, options_) {\n    var rc;\n    try {\n            if (true !== (rc = Eep_qaInputElement_(obj_, atts_))) {\n                return rc;\n            }\n\n            if (atts_.id) {\n                if ((obj_.id &amp;&amp; !Eep_isDgoId_(atts_.id) &amp;&amp; obj_.id != atts_.id) || !obj_.id) {\n                    return '!=ID';\n                }\n            } else if (obj_.id) {\n                    if(obj_.document) {\n                            var coll = obj_.document.all[obj_.id];\n                            if(coll &amp;&amp; coll.length == 0) {\n                                return '!=ID';\n                            }\n                        }\n             }\n\n            if (atts_.name) {\n                if ((obj_.name &amp;&amp; obj_.name != atts_.name) || !obj_.name) {\n                    return '!=NAME';\n                }\n            } else if (obj_.name) {\n                          if(obj_.document) {\n                            var coll = obj_.document.all[obj_.name];\n                            if(coll &amp;&amp; coll.length == 0) {\n                                return '!=NAME';\n                            }\n                        }\n            }\n\n              if (!options_ || options_ &amp;&amp; options_.eep_use_text == true) {\n                if (true !== (rc = Eep_qaElementText_(obj_, atts_, options_))) {\n                    return rc;\n                }\n            }\n\n            if (atts_.mnames) {\n              if(obj_.name &amp;&amp; atts_.mnames != obj_.name) {\n                  return false;\n              } else if (!obj_.name){\n                  return false;\n              }\n         }\n        } catch (err) {\n        }\n\n    return true;\n}\n\nfunction Eep(eepString_, resolveOptions_) {\n    with (this) {\n        options_ = resolveOptions_ || {};\n        eep_ori_ = eepString_;\n        eval(eepString_);\n        path_ = eep_path;\n        coll_ = (typeof(eep_coll) == 'object' &amp;&amp; eep_coll ?\n            {collection: eep_coll.n, index: eep_coll.i, subindex: eep_coll.ii} :\n            {collection: '', index: 0, subindex: -1});\n        ok = true;\n    }\n}\n\nvar Eep_dgoID1_ = 'dgo_##_id_';\nvar Eep_dgoID2_ = 'dgo_::_id_';\n\nfunction Eep_isDgoId_(id_) {\n    var id = id_.substr(0, Eep_dgoID1_.length);\n    return id == Eep_dgoID1_ || id == Eep_dgoID2_;\n}\n\nEep.prototype = {\n\nok: false,\neep_path: null,\neep_options: null,\neep_atts: null,\neep_coll: null,\neep_parents: null,\neep_siblingTags2: null,\neep_elem_index: null,\neep_elem_tag: null,\neep_frame: null,\n\neep_resolve: function(frame_, log_obj_) {\n    this.log_obj_ = log_obj_ || new Object;\n    this.log_obj_.log = '';\n\n    if (this.options_.eep_version) {\n        this.log_('Version \"' + this.options_.eep_version + '\"' +\n            (this.options_.eep_use_text ? '; use text' : '') +\n            (this.options_.eep_first_text_re ? ('; textRe ' +\n                this.options_.eep_first_text_re) : ''));\n    }\n\n    if (!this.eep_path) {\n        this.log_('Path \"\": BODY');\n        return frame_.document.body;\n    }\n\n    if (!this.eep_atts.tagName) {\n        this.log_('tagName \"\": BODY');\n        return frame_.document.body;\n    }\n\n    var obj, msg, rc;\n\n    if (this.eep_atts.id) {\n        obj = Eep_resolveId_(frame_, this.eep_atts.id, false\/*noforce*\/);\n        msg = 'ID: ' + Eep_getNodeHtml(obj);\n\n        if (typeof(obj) == 'number') {\n            this.log_(msg + ': ' + obj + ' DUP');\n        }\n        else if (typeof(obj) == 'string') {\n            this.log_(msg + ': warn \"' + obj + '\"');\n        }\n        else if (obj) {\n            if (true === (rc = this.qaInputElement_(obj))) {\n                this.log_(msg);\n                return obj;\n            }\n\n            this.log_(msg + ' rej \"' + rc + '\"');\n\n            obj = Eep_resolveInputValue_(frame_,\n                this.eep_atts.tagName, this.eep_atts.type,\n                this.eep_atts.name, this.eep_atts.value);\n\n            if (obj) {\n                this.log_('VALUE: ' + Eep_getNodeHtml(obj));\n                return obj;\n            }\n        }\n        else {\n            this.log_(msg);\n        }\n    }\n\n    obj = Eep_resolveName_(frame_,\n        this.eep_atts.name, this.eep_atts.tagName, true \/*unique*\/);\n\n    if (obj) {\n        this.log_('NAME: ' + Eep_getNodeHtml(obj));\n        return obj;\n    }\n\n    obj = Eep_resolveSimple(frame_, this.path_, this.eep_options);\n    msg = 'EP \"' + this.path_ + '\": ' + Eep_getNodeHtml(obj);\n\n    if (true === (rc = this.qaElementAndPath_(obj))) {\n        this.log_(msg);\n        return obj;\n    }\n\n    this.log_(msg + ' rej \"' + rc + '\"');\n\n    if (this.options_.eep_use_text) {\n        obj = Eep_resolveFirstText_(frame_, this.eep_atts.tagName,\n            this.eep_atts.firstText, this.options_, this.eep_atts.L || 0);\n        msg = 'TEXT \"' + this.eep_atts.firstText + '\"' +\n            (this.eep_atts.L || '') + ': ' + Eep_getNodeHtml(obj);\n\n        if (true === (rc = this.qaElement_(obj))) {\n            this.log_(msg);\n            return obj;\n        }\n\n        this.log_(msg + ' rej \"' + rc + '\"');\n    }\n\n    obj = Eep_resolveCollection_(frame_, this.eep_atts.tagName, this.coll_);\n\n    if (obj) {\n        this.log_('COLL: ' + Eep_getNodeHtml(obj));\n        return obj;\n    }\n\n    if (this.eep_elem_tag) {\n        obj = this.Eep_resolveTagIndex_(frame_);\n\n        if (obj) {\n            this.log_('TAG Index: ' + Eep_getNodeHtml(obj));\n            return obj;\n        }\n    }\n\n    if (this.correctPathTopDown_(frame_)) {\n        obj = Eep_resolveSimple(frame_, this.path_, this.eep_options);\n        msg = 'corrEP \"' + this.path_ + '\": ' + Eep_getNodeHtml(obj);\n\n        if (true === (rc = this.qaElement_(obj))) {\n            this.log_(msg);\n            return obj;\n        }\n\n        this.log_(msg + ' rej \"' + rc + '\"');\n    }\n\n    if (this.eep_atts.id &amp;&amp; Eep_isDgoId_(this.eep_atts.id)) {\n        obj = Eep_resolveId_(frame_, this.eep_atts.id, true\/*force dgo ID*\/);\n        msg = 'DGO ID ' + this.eep_atts.id + ': ' + Eep_getNodeHtml(obj);\n\n        if (typeof(obj) == 'object' &amp;&amp; obj) {\n            if (true === (rc = this.qaElement_(obj))) {\n                this.log_(msg);\n                return obj;\n            }\n\n            this.log_(msg + ' rej \"' + rc + '\"');\n        }\n        else {\n            this.log_(msg);\n        }\n    }\n\n    this.log_('(-1==cannot find) ' + this);\n    return -1;\n},\n\nEep_resolveTagIndex_: function(frame_) {\n    var obj = null;\n    var tag_coll = frame_.document.getElementsByTagName(this.eep_elem_tag);\n    if (tag_coll) {\n        var coll_length = tag_coll.length;\n        obj = tag_coll.item(Number(this.eep_elem_index));\n        msg = 'ID: ' + Eep_getNodeHtml(obj);\n        current_rerecognition_elem_index = Number(this.eep_elem_index);\n        if (true === (rc = this.qaElement_(obj))) {\n            this.log_(msg);\n            elem_index_within_frame = Number(this.eep_elem_index);\n            return obj;\n        } else {\n            var orig_index = Number(this.eep_elem_index);\n            var iter = 1;\n            var keep_checking = true;\n            while (keep_checking) {\n                var trial_index = orig_index - iter;\n                if (trial_index &gt;= 0) {\n                    obj = tag_coll.item(trial_index);\n                    msg = 'ID: ' + Eep_getNodeHtml(obj);\n                    current_rerecognition_elem_index = trial_index;\n                    if (true === (rc = this.qaElement_(obj))) {\n                        this.log_(msg);\n                        elem_index_within_frame = trial_index;\n                        return obj;\n                    }\n                }\n                trial_index = orig_index + iter;\n                if (trial_index &lt; coll_length) {\n                    obj = tag_coll.item(trial_index);\n                    msg = 'ID: ' + Eep_getNodeHtml(obj);\n                    current_rerecognition_elem_index = trial_index;\n                    if (true === (rc = this.qaElement_(obj))) {\n                        this.log_(msg);\n                        elem_index_within_frame = trial_index;\n                        return obj;\n                    }\n                } else if (iter &gt; orig_index) {\n                    keep_checking = false;\n                }\n                iter++;\n                if (iter &gt; 50) {\n                    keep_checking = false;\n                }\n            }\n        }\n    }\n    return obj;\n},\n\ntoString: function() {\n    if (this.eep_ori_) {\n        return 'Eep={path:\"' + this.path_ +\n               '\",opt:\"' + this.options_ +\n               '\",ori:\"' + this.eep_ori_ + '\"}';\n    }\n\n    return 'Eep=' + DHtml_dumpObj(this);\n},\n\nvalueOf: function() {\n    return this.toString();\n},\n\noptions_: null,\npath_: null,\ncoll_: null,\neep_ori_: null,\nlog_obj_: null,\n\nlog_: function(msg_, flagNoLF_) {\n    this.log_obj_.log += msg_;\n    if (flagNoLF_)\n        return;\n    this.log_obj_.log += '\\r\\n';\n},\n\nqaElement_: function(obj_) {\n    return Eep_qaElement_(obj_, this.eep_atts, this.options_);\n},\n\nqaInputElement_: function(obj_) {\n    return Eep_qaInputElement_(obj_, this.eep_atts);\n},\n\nqaElementAndPath_: function(obj_) {\n    var rc;\n\n    if (true !== (rc = this.qaElement_(obj_))) {\n        return rc;\n    }\n\n    return this.qaPath_(obj_);\n}\n\n}\n\nvar String_ltrimRE_ = \/^[ \\r\\n\\t\\xA0]*(.*$)\/m;\nvar String_rtrimRE_ = \/[ \\r\\n\\t\\xA0]*$\/m;\n\nString.prototype.ltrim = function() {\n    return String_ltrimRE_.exec(this)[1];\n}\n\nString.prototype.rtrim = function() {\n    var match = String_rtrimRE_.exec(this);\n    return this.substr(0, this.length - match[0].length);\n}\n\nString.prototype.alltrim = function() {\n    var ret_val = this.ltrim();\n    return ret_val.rtrim();\n}\n\nString.prototype.asJSstring = function() {\n    ret_val = new String(this);\n    ret_val = ret_val.replace(\/[\\\\]\/g, \"\\\\\\\\\");\n    ret_val = ret_val.replace(\/[\"\"]\/g, '\\\\\"');\n    ret_val = ret_val.replace(\/[\\n]\/g, '\\\\n');\n    ret_val = ret_val.replace(\/[\\r]\/g, '\\\\r');\n    ret_val = ret_val.replace(\/[\\t]\/g, '\\\\t');\n    ret_val = ret_val.replace(\"'\", '');\n    return '\"' + ret_val + '\"';\n}\n\nfunction Eep_resolveFrameSimple(path_, win_, options_) {\n    var frame = win_ || window.top;\n\n    if (path_ == '') {\n        return frame;\n    }\n\n    var options = options_ || 0;\n    var path = path_.split(':');\n\n    for (var i = 0; frame &amp;&amp; i &lt; path.length; ++i) {\n        var idx = path[i] - 0;\n        if (i == (path.length -1)) {\n            frame = (idx &lt; frame.frames.length ? frame.frames[idx] : frame.frames[frame.frames.length-1]);\n        } else {\n            frame = (idx &lt; frame.frames.length ? frame.frames[idx] : frame);\n        }\n        var frame_rect = frame.frameElement.getBoundingClientRect();\n        rerecognition_frame_offset_x += frame_rect.left;\n        rerecognition_frame_offset_y += frame_rect.top;\n    }\n    return frame;\n}\n\nfunction Eep_resolveSimple(frame_, path_, options_, log_obj_, base_el_) {\n    var el = frame_.document.body;\n\n    if (path_ == '')\n        return el;\n\n    el = base_el_ || el;\n\n    var options = options_ || 0;\n    var log_obj = log_obj_ || new Object;\n    log_obj.log = 'frame ' + frame_.name + ' = \"' + frame_.location.href + '\"; ';\n    var path = path_.split(':');\n    var i, idx, children, ii, child, type;\n\n    for (i = 0; el &amp;&amp; i &lt; path.length; ++i) {\n        idx = path[i] - 0;\n\n        children = (options &amp; 1\n            ? el.childNodes \/*W3C Std*\/\n            : el.children \/*IE*\/ || el.childNodes \/*W3C Std*\/);\n\n        el = null;\n        log_obj.log += (i + 1) + '.) ' + children.length + ' children.\\r\\n';\n\n        for (ii = 0; el == null &amp;&amp; ii &lt; children.length; ++ii) {\n            child = children[ii];\n            type = (options &amp; 1 &amp;&amp; child.tagName &amp;&amp; child.tagName == '!' ?\n                    8 \/*comment*\/ : child.nodeType);\n\n            log_obj.log += '  ' + ii + '\/' + idx + ': ' + Eep_getNodeHtml(child);\n\n            if (type == 1 &amp;&amp; idx == 0) {\n                log_obj.log += ' ok.';\n                el = child;\n            }\n            else {\n                if (options &amp; 1) {\n                    if (type == 1) {\n                        --idx;\n                    }\n                } else {\n                    if (type != 3) {\n                        --idx;\n                    }\n                }\n            }\n\n            log_obj.log += '\\r\\n';\n        }\n    }\n\n    return el;\n}\n\nfunction Eep_generate(obj_, frame_) {\n    var eep_useInnerText = ':A:TD:SPAN:NOBR:LABEL:STRONG:FONT:B:U:';\n    var eep_textTruncation = 50;\n    var obj = (obj_.nodeType == 3 ? obj_.parentNode : obj_);\n\n    var options = 1 + (eep_useInnerText ? 2 : 0);\n    var eepString = 'eep_path=\"' + Eep_getPathString(obj, 1) + '\";\\r\\n';\n    eepString += 'eep_options=' + options + ';eep_version=\"6.1.1\";\\r\\n';\n    eepString += ('eep_atts={' + Eep_generateAttsString_(\n        obj, frame_, options, eep_useInnerText, eep_textTruncation) + '};\\r\\n');\n    eepString += ('eep_coll={' + Eep_generateCollectionString_(\n        obj, frame_) + '};\\r\\n');\n    eepString += ('eep_parents=[' + Eep_generateParentsString_(\n        obj, frame_, options) + '];');\n    eepString += '\\r\\neep_siblingTags2=\"' +\n        Eep_generateSiblingsString_(obj) + '\";';\n    eepString += '\\r\\n' + Eep_generateExtraInfo_(obj);\n    return eepString;\n}\n\nfunction Eep_generateExtraInfo_(obj_) {\n    if (!obj_) {\n        return '';\n    }\n    var str = '';\n    var tagname = obj_.tagName;\n    var tag_coll = obj_.document.getElementsByTagName(tagname);  \/\/test for multiple frame case\n    var tag_coll_length = tag_coll.length;\n    for (var i = 0; i &lt; tag_coll_length; i++) {\n        var child = tag_coll.item(i);\n        if (obj_ == child) {\n            str = 'eep_elem_index=\"' + i + '\";eep_elem_tag=\"' + tagname + '\";';\n            break;\n        }\n    }\n    return str;\n}\n\nfunction Eep_getPathString(obj_, options_) {\n    var options = options_ || 0;\n\n    if (options &amp; 4 \/*top-down*\/) {\n        return Eep_getPathString2_(obj_, options);\n    }\n\n    var er = '';    \/\/ datango simple element reference\n    var x = obj_;   \/\/ element\n    var i, ii, p, children, kk, child;\n\n    if (x.nodeType == 3 \/*text*\/ ||\n        (x.tagName &amp;&amp; x.tagName != 'APPLET' &amp;&amp; x.tagName != 'EMBED' &amp;&amp;\n         (x.tagName != x.tagName.toUpperCase() \/*XUL*\/ ||\n          x.toString().indexOf('XUL') &gt;= 0)))\n    {\n        x = x.parentNode;\n    }\n\n    while (x &amp;&amp; (p = x.parentNode) != null &amp;&amp;\n           typeof(x.tagName) == 'string' &amp;&amp;\n           x.tagName != 'BODY' &amp;&amp; x.tagName != 'FRAMESET')\n    {\n        children = (options &amp; 1\n            ? p.childNodes \/*W3C Std*\/\n            : p.children \/*IE*\/ || p.childNodes \/*W3C Std*\/);\n        kk = -1;\n\n        for (ii = 0; child != x &amp;&amp; ii &lt; children.length; ++ii) {\n            child = children[ii];\n\n            if (options &amp; 1) {\n                if (child.nodeType == 1  &amp;&amp;  child.tagName != '!') {\n                    ++kk;\n                }\n            }\n            else {  \/\/ Producer compatible\n                if (child.nodeType != 3) {  \/\/ DOM Text Node\n                    ++kk;\n                }\n            }\n        }\n\n        if (child != x) {\n            \/\/alert('Simple EP generation error (child not found) at\\n\"' +\n            \/\/    er + '\", ' + ii + ',' + kk + ':\\n' + Eep_getNodeHtml(obj_));\n            return '';\n        }\n\n        if (er)\n            er = ':' + er;\n\n        er = kk + er;\n        x = p;\n    }\n    return er;\n}\n\nvar Eep_attrNames_ = ['id', 'name', 'tagName', 'type'];\n\nfunction Eep_generateAttsString_(\n    obj_, frame_, options_, tags4text_, text_truncation_)\n{\n    var str = '';\n    var i, att, v, t;\n    var multiple_names = false;\n    for (i = 0; i &lt; Eep_attrNames_.length; ++i) {\n        att =  Eep_attrNames_[i];\n        v =  obj_[att];\n        t = typeof(v);\n\n        if (v &amp;&amp; t == 'string') {\n            if (att == 'id') {\n                var el;\n                if (frame_.document.all &amp;&amp;\n                    (el = frame_.document.all[v]) &amp;&amp;\n                    typeof(el.length) == 'number' &amp;&amp;\n                    el.length != 1)\n                {   \/\/ mySAP, i.e., has lots of duplicate IDs\n                    v = '';\n                    t = 'string';  \/\/ this makes the following ignore the ID\n                }\n            }\n\n            if (att == 'name') {\n                if (frame_.document.getElementsByName(v).length != 1) {\n                    multiple_names = true;\n                    v = '';\n                    t = 'string';  \/\/ this makes the following ignore the ID\n                }\n            }\n        }\n\n        if (v || (t != 'undefined' &amp;&amp; t != 'unknown' &amp;&amp; t != 'string')) {\n\n            if (str != '')\n                str += ',';\n\n            if (att == 'type' &amp;&amp; v == 'radio') {\n                str += ('value:' + obj_.value.asJSstring() + ',');\n            }\n\n            if (t == 'number') {\n                str += (att + ':' + v);\n            } else {\n                if (att == 'tagName' &amp;&amp; v == 'FRAME') {\n                    v = 'BODY';\n                }\n                str += (att + ':\"' + v + '\"');\n            }\n        }\n    }\n\n    if (obj_.tagName &amp;&amp; tags4text_ &amp;&amp;\n        tags4text_.indexOf(':' + obj_.tagName + ':') &gt;= 0)\n    {\n        var t = Eep_getFirstTextNodeValue_(\n            obj_, text_truncation_, true \/*with delimiter*\/);\n        if (t) {\n            str += (text_truncation_ &gt; 0\n                ? ',L:' + text_truncation_ + ',firstText:' + t.asJSstring()\n                : ',firstText:' + t.asJSstring());\n        }\n    }\n\n    if (multiple_names) {\n        str += (',mnames' + ':\"' + obj_.name + '\"');\n    }\n\n    return str;\n}\n\nfunction Eep_getFirstTextNodeValue_(obj_, text_truncation_, flagDelimiter_) {\n    var node = Eep_getFirstTextNode_(obj_);\n\n    if (!node || typeof(node.nodeValue) != 'string') {\n        return '';\n    }\n\n    var ret_val = (new String(node.nodeValue)).alltrim();\n\n    return text_truncation_ &gt; 0 &amp;&amp; ret_val.length &gt; text_truncation_\n        ? ret_val.substr(0, text_truncation_) + (flagDelimiter_ ? '^' : '')\n        : ret_val;\n}\n\nvar Eep_getFirstTextNodeRE_ = \/[']?[^ \\r\\n\\t][']?\/;\n\nfunction Eep_getFirstTextNode_(obj_) {\n    var children = obj_.childNodes || [];  \/\/ DOM child collection with text nodes\n    var node;\n\n    for (var i = 0; i &lt; children.length; ++i) {\n        node = children[i];\n        if (node.nodeType &amp;&amp; node.nodeType == 3  &amp;&amp;\n            node.nodeValue.search(Eep_getFirstTextNodeRE_) &gt;= 0)\n        {\n            return node;\n        }\n    }\n\n    return null;\n}\n\nfunction Eep_generateParentsString_(obj_, frame_, options_, tags4text_) {\n    return '';  \/\/ Now we don't require parent info as ReRecognition doesn't have top down approach\n    if (!obj_ || obj_.tagName == 'BODY' ||\n        obj_.tagName == 'FRAME' || !obj_.parentNode)\n    {\n        return '';\n    }\n\n    var str = '';\n    var p = obj_.parentNode;\n\n    while (p &amp;&amp; p.tagName != 'BODY' &amp;&amp; p.tagName != 'FRAME') {\n        str += (',\\r\\n{' + Eep_generateAttsString_(\n            p, frame_, options_, '', 0) + '}');\n        p = p.parentNode;\n    }\n\n    return str.substr(3);\n}\n\nfunction Eep_generateSiblingsString_(obj_) {\n    if (!obj_ || !obj_.parentNode ||\n        obj_.tagName == 'BODY' || obj_.tagName == 'FRAME')\n    {\n        return '';\n    }\n\n    var str = '';\n    var children = obj_.parentNode.childNodes;\n    var child;\n\n    for (var i = 0; i &lt; children.length; ++i) {\n        child = children[i];\n\n        if (child.nodeType == 1  &amp;&amp;  child.tagName != '!') {  \/*exclude comments*\/\n            if (child.tagName.substr(0, 1) != '\/') {\n                if (child == obj_) {\n                    str += (':_' + children[i].tagName + '_');\n                }\n                else {\n                    str += (':' + children[i].tagName);\n                }\n            }\n        }\n    }\n\n    return str.substr(1);\n}\n\nfunction Eep_generateCollectionString_(x_, frame_) {\n    var ret_val = Eep_generateCollectionObject_(x_, frame_);\n    return (ret_val ?\n        'n:\"' + ret_val.n + '\",i:' + ret_val.i + ',ii:' + ret_val.ii :\n        'n:\"\",i:0,ii:-1');\n}\n\nfunction Eep_generateCollectionObject_(x_, frame_) {\n    if (!x_) {\n        return null;\n    }\n\n    var ret_val = null;\n\n    switch (x_.tagName) {\n    case 'INPUT':\n    case 'TEXTAREA':\n    case 'SELECT':\n    case 'OPTION':\n    case 'BUTTON':\n    case 'FORM':\n        ret_val = Eep_getElementCollection_('forms', x_, frame_);\n        break;\n\n    case 'IMG':\n        ret_val = Eep_getElementCollection_('images', x_, frame_);\n        break;\n\n    case 'A':\n        ret_val = Eep_getElementCollection_(\n            (x_.name ? 'anchors' : 'links'), x_, frame_);\n        break;\n\n    case 'DIV':\n        ret_val = Eep_getElementCollection_('layers', x_, frame_);\n        break;\n\n    case 'APPLET':\n        ret_val = Eep_getElementCollection_('applets', x_, frame_);\n        break;\n\n    case 'EMBED':\n        ret_val = Eep_getElementCollection_('embeds', x_, frame_);\n        break;\n\n    default:\n        break;\n    }\n\n    return ret_val;\n}\n\nfunction Eep_getElementCollection_(collName_, x_, frame_) {\n    var coll = (frame_ ? frame_.document[collName_] : null);\n\n    if (typeof(coll) == 'object' &amp;&amp; coll &amp;&amp; typeof(coll.length) == 'number') {\n        var cmp;\n        var ii;\n        for (var i = 0; i &lt; coll.length; ++i) {\n            cmp = coll[i];\n\n            if (cmp == x_) {\n                return {n: collName_, i: '' + i, ii: '-1'};\n            }\n            else if (typeof(cmp) == 'object' &amp;&amp; typeof(cmp.length) == 'number') {\n                for (ii = 0; ii &lt; cmp.length; ++ii) {\n                    if (cmp[ii] == x_) {\n                        return {n: collName_,\n                            i: '' + i, ii: '' + ii};\n                    }\n                }\n            }\n        }\n    }\n\n    return {n: '', i: '0', ii: '-1'};\n}\n\nfunction Eep_getElementRef(obj_, frame_) {\n    var coll = Eep_generateCollectionObject_(obj_, frame_) ||\n               {n: '', i: '0', ii: '-1'};\n    return new ElementRef(\n        Eep_getPathString(obj_), \/* Producer compatible *\/\n        coll.n, coll.i, coll.ii,\n        Eep_generate(obj_, frame_));\n}\n\nfunction Eep_resolveId_(frame_, id_, flagForceDgoID_) {\n    if (!id_)\n        return null;\n\n    if (!flagForceDgoID_ &amp;&amp; Eep_isDgoId_(id_)) {\n        return 'dgo';\n    }\n\n    if (frame_.document.all &amp;&amp;\n        frame_.document.all[id_] &amp;&amp;\n        typeof(frame_.document.all[id_].length) == 'number' &amp;&amp;\n        frame_.document.all[id_].length != 1)\n    {\n        return frame_.document.all[id_].length;\n    }\n\n    return frame_.document.getElementById(id_);\n}\n\nfunction Eep_resolveName_(frame_, name_, tagname_ \/*NC4 only*\/, flagUnique_) {\n    if (!name_)\n        return null;\n\n    var objs = frame_.document.getElementsByName(name_);\n    if (objs.length == 0 || flagUnique_ &amp;&amp; objs.length &gt; 1) {\n        return null;\n    }\n\n    return objs[0];\n}\n\nfunction Eep_resolveInputValue_(frame_, tagname_, type_, name_, value_) {\n    if (tagname_ != 'INPUT' &amp;&amp; type_ != 'radio') {\n        return null;\n    }\n\n    var objs = frame_.document.getElementsByName(name_);\n    if (objs.length == 0) {\n        return null;\n    }\n\n    var obj;\n    for (var i = 0; i &lt; objs.length; ++i) {\n        obj = objs[i];\n\n        if (obj.type == 'radio' &amp;&amp; obj.value == value_) {\n            return obj;\n        }\n    }\n\n    return null;\n}\n\nfunction Eep_resolveFirstText_(\n    frame_, tagname_, first_text_, options_, text_truncation_)\n{\n    if (!first_text_) {\n        return null;\n    }\n\n    if (text_truncation_ &gt; 0 &amp;&amp; first_text_.length == text_truncation_ + 1 &amp;&amp;\n        first_text_.charAt(text_truncation_) == '^')\n    {\n        first_text_ = first_text_.substr(0, text_truncation_);\n    }\n\n    var objs_hit = [];\n    var objs = frame_.document.getElementsByTagName(tagname_);\n    var cmp1 = Eep_getRe4FirstText_(first_text_, options_);\n    var i, obj, cmp2;\n\n    if (cmp1) {\n        for (i = 0; i &lt; objs.length; ++i) {\n            obj = objs[i];\n            cmp2 = Eep_getFirstTextNodeValue_(obj, text_truncation_);\n\n            if (cmp1 == Eep_getRe4FirstText_(cmp2, options_)) {\n                objs_hit[objs_hit.length] = obj;\n            }\n        }\n    }\n    else {\n        for (i = 0; i &lt; objs.length; ++i) {\n            obj = objs[i];\n            cmp2 = Eep_getFirstTextNodeValue_(obj, text_truncation_);\n\n            if (first_text_ == cmp2) {\n                objs_hit[objs_hit.length] = obj;\n            }\n        }\n    }\n\n    return (objs_hit.length == 1 ? objs_hit[0] : null);\n}\n\nfunction Eep_resolveCollection_(frame_, tagname_, coll_) {\n    return null;\n}\n\nfunction Eep_qaElementText_(obj_, atts_, options_) {\n    if (atts_.firstText) {\n       var newtext = Eep_getFirstTextNodeValue_(\n                    obj_, 50, true \/*with delimiter*\/);\n        var firstText = atts_.firstText;\n        var textTruncation = atts_.L || 0;\n\n        if (textTruncation &gt; 0 &amp;&amp; firstText.length == textTruncation + 1 &amp;&amp;\n            firstText.charAt(textTruncation) == '^')\n        {\n            firstText = firstText.substr(0, textTruncation);\n        }\n        if (textTruncation &gt; 0 &amp;&amp; newtext.length == textTruncation + 1 &amp;&amp;\n            newtext.charAt(textTruncation) == '^')\n        {\n            newtext = newtext.substr(0, textTruncation);\n        }\n        if (firstText != newtext) {\n            return '!=TextTRIM';\n        }\n    }\n    return true;\n}\n\nfunction Eep_getPathString2_(obj_, options_) {\n    var options = options_ || 0;\n    var er = '';\n    var x = obj_;\n    var i, ii, p, children, kk, child;\n\n    if (x.nodeType == 3 \/*text*\/ ||\n        (x.tagName &amp;&amp; x.tagName != 'APPLET' &amp;&amp; x.tagName != 'EMBED' &amp;&amp;\n         (x.tagName != x.tagName.toUpperCase() \/*XUL*\/ ||\n          x.toString().indexOf('XUL') &gt;= 0)))\n    {\n        x = x.parentNode;\n    }\n\n    var body;\n\n    if (x &amp;&amp; x.ownerDocument) {\n        body = x.ownerDocument.body;\n    }\n    else {\n        var p = x;\n\n        while(p &amp;&amp; p.tagName != 'BODY') {\n            p = p.parentNode;\n        }\n\n        if (!p) {\n            return 'EPerr:above_body';\n        }\n\n        body = p;\n    }\n\n    var ret_val = Eep_getPathString2_rek_(body, x, options_);\n    return ret_val === false ? 'EPerr:not_found' : ret_val;\n}\n\n\nfunction Eep_getPathString2_rek_(parent_, obj_, options_) {\n    if (parent_ == obj_) {\n        return '';\n    }\n\n    var children = (options_ &amp; 1\n            ? parent_.childNodes \/*W3C Std*\/\n            : parent_.children \/*IE*\/ || parent_.childNodes \/*W3C Std*\/);\n\n    var kk = -1;\n    var i, child, rc;\n\n    for (i = 0; i &lt; children.length; ++i) {\n        child = children[i];\n\n        if (options_ &amp; 1) {\n            if (child.nodeType == 1  &amp;&amp;  child.tagName != '!') {\n                ++kk;\n            }\n        }\n        else {\n            if (child.nodeType != 3) {\n                ++kk;\n            }\n        }\n\n        if (child.nodeType == 1  &amp;&amp;  child.tagName != '!' &amp;&amp;\n            false !== (rc = Eep_getPathString2_rek_(child, obj_, options_)))\n        {\n            return rc ? kk + ':' + rc : '' + kk;\n        }\n    }\n\n    return false;\n}\n\nfunction Eep_getNodeHtml(obj_) {\n    if (typeof(DHtml_getNodeHtml) == 'function') {\n        return DHtml_getNodeHtml(obj_);\n    }\n\n    if (!obj_)\n        return '(null)';\n\n    if (typeof(obj_) != 'object') {\n        return '\"' + obj_ + '\" [' + typeof(obj_) + ']';\n    }\n\n    if (obj_.tagName)\n        return obj_.tagName;\n\n    if (obj_.nodeType)\n        return '(nodetype=' + obj_.nodeType + ')';\n\n    return '(?)';\n}\n\nfunction eep_standard_init_() {\n\nEep.prototype.qaCollection_ = function(frame_, obj_) {\n    var collection = Eep_generateCollectionObject_(obj_, frame_);\n\n    if (!collection || !collection.n || !this.eep_coll.n) {\n        return true;\n    }\n\n    return (collection.n == this.eep_coll.n &amp;&amp;\n            collection.i == this.eep_coll.i &amp;&amp;\n            collection.ii == this.eep_coll.ii ? true : '!=COLL');\n}\n\nEep.prototype.qaPath_ = function(obj_) {\n    if (!obj_)\n        return false;\n\n    if (obj_.tagName == 'BODY' || obj_.tagName == 'FRAME')\n        return true;\n\n    var i = 0;\n    var p = obj_.parentNode;\n    var parent, atts;\n\n    while (p &amp;&amp; p.tagName != 'BODY' &amp;&amp; p.tagName != 'FRAME' &amp;&amp;\n           typeof(this.eep_parents[i]) == 'object')\n    {\n        parent = this.eep_parents[i];\n        atts = parent.eep_atts \/*before 5.2.4*\/ || parent;\n\n        if (!Eep_qaElement_(p, atts)) {\n            return '!=PATH(' + i + ')';\n        }\n        p = p.parentNode;\n        ++i;\n    }\n\n    return true;\n}\n\nEep.prototype.qaSiblings_ = function(obj_) {\n    if (typeof (this.eep_siblingTags2) != 'string') {\n        return true;\n    }\n\n    return (Eep_generateSiblingsString_(obj_) ==\n        this.eep_siblingTags2 ? true : '!=SIBL');\n}\n\nEep.prototype.correctPathTopDown_ = function(frame_) {\n    var new_parent = null;\n    var path = this.eep_path;\n    var old_parent, old_atts, msg;\n\n    for (var i = 0; new_parent == null &amp;&amp; i &lt; this.eep_parents.length; ++i) {\n        path = path.substr(0, path.lastIndexOf(':'));\n        old_parent = this.eep_parents[i];\n        old_atts = old_parent.eep_atts \/*until 5.2.4*\/ || old_parent;\n\n        if (old_atts.id) {\n            new_parent = Eep_resolveId_(frame_, old_atts.id, false);\n            msg = 'corr id \"' + old_atts.id + '\": ' + Eep_getNodeHtml(new_parent);\n\n            if (typeof(new_parent) != 'object') {\n                new_parent = null;\n            }\n        }\n        else if(old_atts.name) {\n            new_parent = Eep_resolveName_(\n                frame_, old_atts.name, true \/*unique*\/);\n            msg = 'corr name \"' + old_atts.name + '\": ' +\n                Eep_getNodeHtml(new_parent);\n        }\n    }\n\n    if (!new_parent) {\n        return false;\n    }\n\n    var newpath = Eep_getPathString(new_parent, this.eep_options);\n    this.path_ = newpath + this.path_.substr(path.length);\n    this.log_(msg + '; corrEP \"' + path + '\" =&gt; \"' +\n        newpath + '\" =&gt; \"' + this.path_ + '\"');\n\n    return true;\n}\n\n}\n\nif (self.dynLoader) {  \/\/ paths relative to dynloader.html\n    dynLoader.scriptLoaded(new DynScript(\n        '..\/eep_standard.js', ['..\/eep.js'], eep_standard_init_));\n}\nelse {\n    eep_standard_init_();\n}\n\nvar elem_index_within_frame = -1;\nvar current_rerecognition_elem_index = -1;\nvar rerecognized_frame = null;\n\nfunction dgo_check_handler(type) {\n    if (\n        \"BODY\"    == type ||\n        \"INPUTsubmit\"    == type ||\n        \"INPUTpassword\"    == type ||\n        \"INPUTbutton\"    == type ||\n        \"A\"    == type ||\n        \"DIV\"    == type ||\n        \"SPAN\" == type ||\n        \"SELECT\"    == type ||\n        \"INPUTtext\"    == type ||\n        \"TEXTAREA\"    == type ||\n        \"INPUTradio\"    == type ||\n        \"INPUTcheckbox\"    == type ||\n        \"INPUTcheckboxOn\"    == type ||\n        \"INPUTcheckboxOff\"    == type ||\n        \"TDListItem\"    == type ||\n        \"TDalvc\"    == type ||\n        \"TDCalM\"    == type ||\n        \"INPUTimage\/\/closeButton\"    == type ||\n        \"INPUTimage\/\/\"    == type ||\n        \"AurBtnStd\"    == type ||\n        \"SPANbutton_inner\" == type ||\n        \"SPANcheckbox\" == type ||\n        \"IMGA:\" == type ||\n        \"IMGSPAN:\"    == type ||\n        \"IMGTDINPUTX\"     == type ||\n        \"IMGTDTX_XS\"   == type ||\n        \"IMGTDINPUT\"     == type ||\n        \"INPUTfile\"    == type ||\n        \/\/ ================================ scrollers =============================\n        \"hscroll\" == type ||\n        \"vscroll\" == type ||\n        \/\/ ================================ scrollers from c++ ==============================\n        \"BODYHScrollBar\" == type ||\n        \"BODYHScrollBtnL\" == type ||\n        \"BODYHScrollBtnR\" == type ||\n        \"BODYHScrollAreaL\" == type ||\n        \"BODYHScrollAreaR\" == type ||\n        \"BODYVScrollBar\" == type ||\n        \"BODYVScrollBtnT\" == type ||\n        \"BODYVScrollBtnB\" == type ||\n        \"BODYVScrollAreaT\" == type ||\n        \"BODYVScrollAreaB\" == type ||\n        \"HTMLHScrollBar\" == type ||\n        \"HTMLHScrollBtnL\" == type ||\n        \"HTMLHScrollBtnR\" == type ||\n        \"HTMLHScrollAreaL\" == type ||\n        \"HTMLHScrollAreaR\" == type ||\n        \"HTMLVScrollBar\" == type ||\n        \"HTMLVScrollBtnT\" == type ||\n        \"HTMLVScrollBtnB\" == type ||\n        \"HTMLVScrollAreaT\" == type ||\n        \"HTMLVScrollAreaB\" == type ||\n        \"DIVHScrollBar\" == type ||\n        \"DIVHScrollBtnL\" == type ||\n        \"DIVHScrollBtnR\" == type ||\n        \"DIVHScrollAreaL\" == type ||\n        \"DIVHScrollAreaR\" == type ||\n        \"DIVVScrollBar\" == type ||\n        \"DIVVScrollBtnT\" == type ||\n        \"DIVVScrollBtnB\" == type ||\n        \"DIVVScrollAreaT\" == type ||\n        \"DIVVScrollAreaB\" == type||\n        \"SELECTVScrollBtnB\" == type ||\n        \"SELECTVScrollBtnT\" == type ||\n        \"SELECTVScrollAreaB\" == type ||\n        \"SELECTVScrollAreaT\" == type ||\n        \"SELECTVScrollBar\" == type ||\n        \"SELECTHScrollAreaL\" == type ||\n        \"SELECTHScrollAreaR\" == type ||\n        \"SELECTHScrollBar\" == type ||\n        \"SELECTHScrollBtnL\" == type ||\n        \"SELECTHScrollBtnR\" == type)\n    {\n        return true;\n    }\n\n    return false;\n}\n\nfunction dgo_convert_to_compat(type) {\n\n    var my_type = type;\n    if (type == \"INPUTsubmit\") {\n        my_type = \"INPUTbutton\";\n    } else if (type == \"SPAN\") {\n        my_type = \"A\";\n    }  else if (type == \"HScroll\") {\n        my_type = \"hscroll\";\n    } else if (type == \"VScroll\") {\n        my_type = \"vscroll\";\n    } else if (type == \"SPANbutton_inner\" || type == \"H2\") {\n        my_type = \"AurBtnStd\";\n    }\n    return my_type;\n}\n\nfunction dgo_elem_xtype(e) {\n    var elem = e;\n    var tagname = elem.tagName;\n    var type = tagname;\n\n    if (type == \"B\"|| type == \"U\" || type == \"NOBR\" || type == \"STRONG\" || type == \"FONT\") {\n\n        if (elem.parentNode != null) {\n            elem = elem.parentNode;\n            type = elem.tagName;\n        }\n    }\n\n    if (type == \"INPUT\") {\n        type = type + elem.type;\n        tagname = type;\n        if (type == \"INPUTimage\") {\n            var ntype = type + \"\/\" + elem.id;\n            if (dgo_check_handler(ntype)) {\n                type = ntype;\n            } else {\n                type = type + \"\/\";\n            }\n        }\n        if (type == \"INPUTimage\/\") {\n            var ntype = type + \"\/\" + elem.parentNode.id;\n            if (dgo_check_handler(ntype)) {\n                type = ntype;\n            } else {\n                type = type + \"\/\";\n            }\n        }\n        if (type == \"INPUTtext\") {\n            type = type + elem.className;\n        }\n    } else if (type == \"IMG\") {\n        type = type + elem.parentNode.tagName;\n\n        if (type == \"IMGA\" || type == \"IMGSPAN\") {\n            type = type + elem.className + \":\" + elem.parentNode.className;\n\n        } else if (type == \"IMGTD\") {\n            type = type + elem.className;\n\n            if (type == \"IMGTD\") {\n                type = type + elem.parentNode.className;\n            }\n            if (type == \"IMGTD\") {\n                if (elem.previousSibling != null) {\n                    type = type + elem.previousSibling.tagName;\n                }\n            }\n            if (type == \"IMGTDINPUT\") {\n                if (elem.previousSibling != null) {\n                    type = type + elem.previousSibling.value;\n                }\n            }\n            if (type.match(\"IMGTDListItem*\")) {\n                type = \"IMGTDListItem\";\n                var img = elem.href;\n                if (img.match(\"list.*2_5.*\")) {\n                    type = type + \"-open\";\n                } else if (img.match(\"list.*2_4.*\")) {\n                    type = type + \"-closed\";\n                } else if (img.match(\"list.*1_0.*\")) {\n                    type = type + \"-leaf\";\n                }\n\n                \/\/ assume leaf for everything else\n                if (type == \"IMGTDListItem\") {\n                    type = \"IMGTDListItem-leaf\";\n                }\n            }\n\n        } else if (type == \"IMGDIV\") {\n\n            if (type == \"IMGDIV\") {\n                type = type + elem.className;\n            }\n            if (type == \"IMGDIV\") {\n                type = type + elem.parentNode.className;\n            }\n            if (type == \"IMGDIV\") {\n                type = type + elem.parentNode.id;\n            }\n        } else if (type == \"IMGLABEL\") {\n            type = type + elem.className;\n            if (type == \"IMGLABEL\") {\n                type = type + elem.parentNode.className;\n            }\n        }\n    } else if (type == \"TD\") {\n        type = type + elem.className;\n\n        if (type.match(\"TDListItem*\")) {\n            type = \"TDListItem\";\n        } else if (type.match(\"TDalvc.*\")) {\n            type = \"TDalvc\";\n        } else if (type.match(\"TDCalM.*\")) {\n            type = \"TDCalM\";\n        }\n    } else if (type == \"A\") {\n        if(is_button_class(elem)) {\n             type = \"INPUTbutton\";\n        } else {\n             type = type + elem.className;\n        }\n    } else if (type == \"BUTTON\") {\n        type = type + elem.className;\n    } else if (type == \"DIV\") {\n          if (elem.parentNode &amp;&amp; elem.parentNode.tagName == \"SPAN\") {\n                if(elem.parentNode.role == \"checkbox\") {\n                    elem = elem.parentNode;\n                        type = elem.tagName;\n                    type = type + elem.role;\n                 }\n            }\n        if ((elem.parentNode &amp;&amp; elem.parentNode.id == \"psyButtons\") || elem.className == \"drag-button\" || elem.role == \"button\") {\n                  type = \"INPUTbutton\";\n              }\n              if(elem.className == \"goog-inline-block jfk-button jfk-button-action\" &amp;&amp; elem.role == \"button\" ) {\n                  type = \"INPUTbutton\";\n              }\n              if(is_button_class(elem)) {\n                  elem = elem.parentNode;\n                  type = \"INPUTbutton\";\n              }\n        if(type == \"DIV\") {\n                  type = type + elem.className;\n                  if (type == \"DIV\") {\n                      type = type + elem.currentStyle.overflow;\n                   }\n              }\n    } else if (type == \"SPAN\") {\n        var parent = elem.parentNode;\n        if (parent &amp;&amp; parent.tagName == \"DIV\" &amp;&amp; parent.role == \"button\") {\n                  type = \"INPUTbutton\";\n              }else if(parent &amp;&amp; parent.tagName == \"DIV\" &amp;&amp; parent.role == \"radio\") {\n                type = \"INPUTradio\";\n        }\n    } else if (type == \"LABEL\") {\n        type = type + elem.className;\n    }\n\n \/\/alert(type);\n    \/\/ fallback to tagname if no special type found\n    if (!dgo_check_handler(type)) {\n        \/\/alert();\n        if (tagname == \"A\" || tagname == \"BUTTON\" || tagname == \"OPTION\") {\n            type = tagname;\n        } else if (tagname == \"INPUTtext\" || tagname == \"TEXTAREA\") {\n            type = tagname;\n        } else if (tagname == \"IMG\") {\n            type = \"IMGA:\";\n        } else if (tagname == \"DIV\") {\n            type = \"DIV\";\n        } else if (tagname == \"SPAN\") {\n            type = \"A\";\n        } else if (tagname != \"BODY\" &amp;&amp; tagname != \"HTML\") {\n            type = \"A\";\n        }\n    }\n\n    type = dgo_convert_to_compat(type);\n \/\/alert(type);\n \/\/alert(e.outerHTML);\n \/\/alert(e.parentElement.outerHTML);\n\n    return type;\n}\n\nfunction is_button_class(elem) {\n    if(elem.className == \"kd-button kd-button-submit\" ||\n       elem.className == \"kd-button dir-button\" ||\n       elem.className == \"kd-button print-button left small\" ||\n       elem.className == \"kd-button print-button left small\" ||\n       elem.className == \"kd-button permalink-button right small\" ||\n       elem.className == \"kd-button anchor-selected\"||\n       elem.className == \"goog-inline-block goog-flat-menu-button-caption\" ||\n       elem.className == \"goog-inline-block goog-flat-menu-button-dropdown\")\n     {\n             return true;\n     }\n     return false;\n}\n\nfunction dgo_get_info(e) {\n    var l = 0;\n    var t = 0;\n    var c = e;\n    var txt = '';\n\n    if (e.tagName!='SELECT') txt = e.innerText;\n\n    while (c &amp;&amp; typeof(c.offsetLeft) != 'undefined') {\n        l += c.offsetLeft;\n        t += c.offsetTop;\n        c = c.offsetParent;\n    }\n\n    return { l:l, t:t, w:e.offsetWidth, tag:e.tagName, text:txt};\n}\n\nfunction dgo_get_fn(e, x_item, y_item, w_item, flag) {\n    if (e == null) return null;\n\n    var s_label = dgo_get_info(e);\n    var x_label = s_label.l;\n    var y_label = s_label.t;\n    var fn = s_label.text;\n    var tag = s_label.tag;\n\n    if (fn == \"\" || fn == \"undefined\" || fn == \" \") {\n        return null;\n    }\n    if ((typeof(flag) != \"undefined\") &amp;&amp; (flag == \"right\")) {\n        if(x_item &gt; x_label) {\n           return null;\n        }\n    } else if (x_item &lt; x_label) {\n        return null;\n    }\n\n    if (x_label &gt; 10 + x_item + w_item) {\n        return null;\n    }\n\n    if (y_label &gt; y_item + 7) {\n        return null;\n    }\n\n    \/*if (tag == \"SELECT\") {\n        return null;\n    }*\/\n\n    if (fn.substr(0, 1) == '*') {\n        fn = fn.substr(1);\n    }\n\n    if (fn.substr(fn.length - 1, 1) == ':') {\n        fn = fn.substr(0, fn.length - 1);\n    }\n\n    while (fn.length &gt; 0 &amp;&amp; fn.substr(0, 1) == ' ') {\n        fn = fn.substr(1);\n    }\n\n    while (fn.length &gt; 0 &amp;&amp; fn.substr(fn.length - 1, 1) == ' ') {\n        fn = fn.substr(0, fn.length - 1);\n    }\n\n    return fn;\n}\n\nfunction check_rect_boundry_conditions(e, fn_e, flag) {\n    try{\n        if(!check_element(fn_e)) {\n            return false;\n        }\n        var r_e =  e.getBoundingClientRect();\n        var r_fn_e =  fn_e.getBoundingClientRect();\n        var h_e =(r_e.bottom - r_e.top);\n        var h_fn_e = (r_fn_e.bottom - r_fn_e.top);\n\n        if (flag == \"left\" &amp;&amp; (r_fn_e.right &lt;= r_e.right) &amp;&amp;\n            (( h_e * 3) &gt; h_fn_e)) {\n            return true;\n        }\n        if (flag == \"top\" &amp;&amp; (r_fn_e.bottom &lt;= r_e.top)) {\n            return true;\n        }\n        if (flag == \"right\" &amp;&amp; (r_e.right &lt;= r_fn_e.left) &amp;&amp;\n            (( h_e * 3) &gt; h_fn_e)) {\n            return true;\n        }\n    } catch(err) {\n    }\n    return false;\n}\n\nfunction dgo_get_fn_from_pos(doc, start_x, start_y, delta_x, delta_y, iterations,\n         s_item, e, flag) {\n    var fn = null;\n\n    if (doc == null) return null;\n\n    var it = 0;\n    var fn_e = null;\n    var x_item = s_item.l;\n    var y_item = s_item.t;\n    var w_item = s_item.w;\n\n    do {\n        fn_e = doc.elementFromPoint(start_x, start_y);\n        if(fn_e &amp;&amp; !is_valid_control_tagname(fn_e) &amp;&amp;\n            is_valid_fn_element(fn_e, flag)) {\n            if(check_rect_boundry_conditions(e, fn_e, flag)) {\n                fn = dgo_get_fn(fn_e, x_item, y_item, w_item, flag);\n                if(!is_valid_fieldname(fn)) {\n                    fn = \"\";\n                }\n            }\n        }\n        start_x += delta_x;\n        start_y += delta_y;\n\n        it++;\n    } while (fn_e != null &amp;&amp; !dgo_valid_string(fn) &amp;&amp;\n         start_x &gt; 0 &amp;&amp; start_y &gt; 0 &amp;&amp; it &lt; iterations);\n    if (!dgo_valid_string(fn)) fn = null;\n    return fn;\n}\n\nfunction dgo_get_elem_offset(e) {\n    var l = 0;\n    var t = 0;\n    var my_e = e;\n    var doc = e.document;\n    \/*\n    while (my_e &amp;&amp; typeof(my_e.offsetLeft) != 'undefined' &amp;&amp; my_e != doc) {\n        l += my_e.offsetLeft;\n        t += my_e.offsetTop;\n        my_e = my_e.offsetParent;\n    }\n    *\/\n\n    var r = e.getBoundingClientRect();\n\n    l = r.left;\n    t = r.top;\n\n    return { l:l, t:t};\n}\n\nfunction dgo_get_fn_from_left_if_cnlt_present(e, no_of_times_travers) {\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var fn = \"\";\n    if (e == null || typeof(e.document) == 'undefined') {\n        return fn;\n    }\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n    var s_item = dgo_get_info(e);\n    var it = 0;\n    var fn_e = null;\n    var x_item = s_item.l;\n    var y_item = s_item.t;\n    var w_item = s_item.w; \n    var start_x =  elem_offset.l - 10;\n    var start_y = elem_offset.t + e.offsetHeight\/2\n    var delta_x = -10;\n    var delta_y = 0;             \n    do {\n        fn_e = doc.elementFromPoint(start_x, start_y);\n        if(fn_e &amp;&amp; fn_e.tagName == \"INPUT\" &amp;&amp; fn_e.type == \"text\") {\n            var rect =fn_e.getBoundingClientRect();\n            start_x = rect.left;\n            start_y = rect.top + (rect.bottom - rect.top)\/2;\n        }              \n        if(fn_e &amp;&amp; check_rect_boundry_conditions(e, fn_e, \"left\")) {\n            fn = dgo_get_fn(fn_e, x_item, y_item, w_item, \"left\");\n            if(!is_valid_fieldname(fn)) {\n                fn = \"\";\n            }\n        }\n        start_x += delta_x;\n        start_y += delta_y;\n        it++;\n    } while (fn_e != null &amp;&amp;\n             !dgo_valid_string(fn) &amp;&amp; \n             (start_x &gt; 0) &amp;&amp;\n             (start_y &gt; 0) &amp;&amp;\n             (it &lt; no_of_times_travers));\n    if (!dgo_valid_string(fn) || !isNaN(fn)) {\n         fn = \"\";\n    }\n    return fn;\n}\n\nfunction dgo_get_fn_left(e, no_of_times_travers, no_of_travers_done) {\n\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var temp = 0;\n\n    if(typeof(no_of_travers_done) != \"undefined\") {\n        temp = no_of_travers_done * 10;\n    }\n\n    var fn = \"\";\n\n    if (e == null || typeof(e.document) == 'undefined') return fn;\n\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n\n    fn = dgo_get_fn_from_pos(doc, elem_offset.l - 10 -temp, elem_offset.t + e.offsetHeight\/2, -10,\n         0, no_of_times_travers, dgo_get_info(e), e , \"left\");\n\n    if(!isNaN(fn)) {\n        fn = \"\";\n    }\n\n    return fn;\n\n}\n\nfunction dgo_get_fn_right(e, no_of_times_travers, no_of_travers_done) {\n\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var temp = 0;\n\n    if(typeof(no_of_travers_done) != \"undefined\") {\n        temp = no_of_travers_done * 10;\n    }\n\n    var fn = \"\";\n\n    if (e == null || typeof(e.document) == 'undefined') return fn;\n\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n\n    fn = dgo_get_fn_from_pos(doc, elem_offset.l + e.offsetWidth + 10,\n         elem_offset.t + e.offsetHeight\/2, 10, 0, no_of_times_travers, dgo_get_info(e), e , \"right\");   \/\/10\n\n    if(!isNaN(fn)) {\n        fn = \"\";\n    }\n\n    return fn;\n\n}\n\nfunction dgo_get_fn_top(e, no_of_times_travers, no_of_travers_done) {\n\n    if(typeof(no_of_times_travers) == \"undefined\") {\n        no_of_times_travers = 5;\n    }\n    var temp = 0;\n\n    if(typeof(no_of_travers_done) != \"undefined\") {\n        temp = no_of_travers_done * 10;\n    }\n    var fn = \"\";\n\n    if (e == null || typeof(e.document) == 'undefined') return fn;\n\n    var doc = e.document;\n    var elem_offset = dgo_get_elem_offset(e);\n    fn = dgo_get_fn_from_pos(doc, elem_offset.l, elem_offset.t - 10, 0, -10, no_of_times_travers,\n         dgo_get_info(e), e, \"top\");\n\n    if(!isNaN(fn)) {\n        fn = \"\";\n    }\n\n    return fn;\n\n}\n\nfunction dgo_get_elem_index(e) {\n    if (e == null || e.parentElement == null) return -1;\n\n    for (var i = 0; i &lt; e.parentElement.children.length; i++) {\n\n        if (e.parentElement.children(i) == e) {\n            return i;\n        }\n    }\n\n    return -1;\n}\n\nfunction dgo_get_distant_child(root, r3, r2, r1) {\n    if (root == null || r3 &lt; 0 || r2 &lt; 0 || r1 &lt; 0) return null;\n\n    if (root.children.length &lt;= r3) return null;\n\n    var e = root.children(r3);\n\n    if (e.children.length &lt;= r2) return null;\n\n    e = e.children(r2);\n\n    if (e.children.length &lt;= r1) return null;\n\n    return e.children(r1);\n}\n\n                                         \/\/=============BUG FIXING=====================\/\/\n\nfunction get_control_fn_from_point_traverse(e) {\n    var fn = \"\";\n    if(\"radio\" == e.type || \"checkbox\" == e.type) {\n         if (!(fn = dgo_get_fn_right(e, 15))) {\n            fn = dgo_get_fn_left(e, 5);\n            return fn;\n        }\n    } else {\n        if (fn = dgo_get_fn_left(e, 12)) return fn;\n        if (fn = dgo_get_fn_top(e, 5)) return fn;\n        if (fn = dgo_get_fn_left(e, 20, 12)) return fn;\n    }\n    return \"\";\n}\n\nfunction dgo_get_control_fieldname(e) {\n    var field_name = \"\";\n    try {\n        if(!check_element(e)) {\n            return false;\n        }\n        switch(e.tagName) {\n            case \"INPUT\":\n                if(\"radio\" == e.type || \"checkbox\" == e.type) {\n                    field_name = dgo_get_INPUTradio_or_INPUTcheckbox_fieldname(e);\n                } else if (\"text\" == e.type || \"textarea\" == e.type || \"password\" == e.type || \"file\" == e.type) {\n                    field_name = dgo_get_INPUTtext_or_INPUTpassword_fieldname(e);\n                }\n                break;\n            case \"SELECT\":\n                field_name = dgo_get_SELECT_fieldname(e);\n                break;\n            case \"TEXTAREA\":\n                field_name = dgo_get_INPUTtext_or_INPUTpassword_fieldname(e);\n                break;\n            default:\n        }\n        if(null == field_name || \" \" == field_name || \"\" == field_name) {\n            field_name = get_control_parent_caption(e);\n        }\n        if(!is_valid_fieldname(field_name)) {\n            field_name = \"\";\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return field_name;\n}\n\nfunction dgo_get_INPUTradio_or_INPUTcheckbox_fieldname(e) {\n    var res_text = \"\";\n    try {\n        if((\"\" != (res_text = dgo_get_sibling_inner_text(e))) ||\n           (\"\" != (res_text = get_control_fn_from_point_traverse(e))) ||\n           (\"\" != (res_text = dgo_get_text_from_child(e))) ||\n           (\"\" != (res_text = (e.nextSibling.data || e.nextSibling.nodeValue))))\n        {\n            return res_text;\n        }\n    } catch(err) {\n        return \"\";\n    }\n    return res_text;\n}\n\nfunction dgo_get_INPUTtext_or_INPUTpassword_fieldname(e) {\n    var res_text = \"\";\n    var sibling = \"\";\n    try {\n        if((\"\" != (res_text = dgo_get_text_from_child(e))) ||\n           (\"\" != (res_text = get_control_fn_from_point_traverse(e))))\n        {\n            return res_text;\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return res_text;\n}\n\n\nfunction dgo_get_SELECT_fieldname (e) {\n    try {\n        var res_text = \"\";\n        if( (\"\" != (res_text = dgo_get_sibling_inner_text(e))) ||\n            (\"\" != (res_text = dgo_get_text_from_child (e))) ||\n            (\"\" != (res_text = get_control_fn_from_point_traverse(e))) ||\n            (\"\" != (res_text = dgo_get_fn_right(e))))\n        {\n            return res_text;\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return res_text;\n}\n\nfunction check_element(e) {\n    try {\n        if (typeof(e.document) == 'undefined' || e == null) {\n            return false;\n        }\n    } catch(err) {\n        return false;\n    }\n    return true;\n}\n\nfunction check_id(e) {\n    try {\n        if (typeof(e.id) == \"undefined\" || e.id == \"\" || e.id == \" \") {\n            return false;\n        }\n    } catch(err) {\n        return false;\n    }\n    return true;\n}\n\nfunction check_name(e) {\n    try {\n        if (typeof(e.name) == \"undefined\" || e.name == \"\" || e.name == \" \") {\n            return false;\n        }\n    } catch(err) {\n        return false;\n    }\n    return true;\n}\n\nfunction dgo_get_sibling_inner_text(e) {\n    try {\n        var sibling = e.nextSibling;\n        var id = e.id;\n        if((sibling != null) &amp;&amp; check_id(e)) {\n            var sibling_tag = sibling.tagName;\n            var sibling_id = sibling.htmlFor;\n            if(typeof(sibling_tag) == \"undefined\" || typeof(sibling_id) == \"undefined\") {\n                 return \"\";\n            }\n            if ((\"LABEL\" == sibling_tag) &amp;&amp; (id == sibling_id)) {\n                 return sibling.innerText;\n            }\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return \"\";\n}\n\nfunction dgo_get_text_from_child(e) {\n    try {\n        var parent = e.parentNode;\n        if(!parent) {\n            return \"\";\n        }\n        var label_coll = parent.getElementsByTagName(\"LABEL\");\n        var count = label_coll.length;\n        if( 0 == count) {\n            if(!parent.parentElement) {\n                return \"\";\n            }\n            label_coll = parent.parentElement.getElementsByTagName(\"LABEL\");\n            count = label_coll.length;\n            if( 0 == count)return \"\";\n        }\n        for(var i = 0; i &lt; count; i++) {\n            var child_elem = label_coll[i];\n            var child_id = child_elem.htmlFor;\n            if(child_id == e.id || child_id == e.name) {\n                return child_elem.innerText;\n            }\n        }\n    } catch (err) {\n        return \"\";\n    }\n    return \"\";\n}\n\nfunction get_control_parent_caption(e) {\n    var elem = e;\n    var it = 0;\n    var r_elem = elem.getBoundingClientRect();\n    try {\n        do {\n            var parent = elem.parentNode;\n            if(!parent) {\n                return \"\";\n            }\n            var label_coll = parent.getElementsByTagName(\"LABEL\");\n            if(!label_coll) {\n                return \"\";\n            }\n            var label_child = label_coll.length;\n            if(1 == label_child) {\n                var r_label = label_coll[0].getBoundingClientRect();\n                if(r_elem.bottom &gt; r_label.top) {\n                     return label_coll[0].innerText;\n                }\n                return \"\";\n            } else if(label_child &gt; 1) {\n                break;\n            }\n            elem = parent;\n            it++;\n        } while(it &lt; 3);\n    } catch (err) {\n    }\n    return \"\";\n}\n\nfunction is_valid_fieldname(field_name) {\n    if(isNaN(field_name) &amp;&amp;\n       (field_name != \":\") &amp;&amp;\n       (field_name != \" \") &amp;&amp;\n       (field_name != \"*\") &amp;&amp;\n       (field_name != \"—\") &amp;&amp;\n       (field_name.search(\"&gt;\") == -1) &amp;&amp;\n       (field_name.search(\"&lt;\") == -1))\n    {\n        return true;\n    }\n    return false;\n}\n\nfunction dgo_check_accessKey(e) {\n    try {\n        var inner_txt = e.innerText;\n        if(inner_txt.length == 1) {\n            p_e = e.parentElement;\n            if(!check_element(p_e)) {\n                return e;\n            }\n            var accessKy = p_e.accessKey;\n            if(typeof(accessKy) == \"undefined\") {\n                return e;\n            }\n            if(inner_txt == accessKy) {\n                return p_e;\n            }\n        }\n    } catch(err) {\n    }\n    return e;\n}\n\nfunction is_valid_control_tagname(e) {\n    try {\n        switch(e.tagName) {\n            case \"INPUT\":\n            case \"TEXTAREA\":\n            case \"SELECT\":\n            case \"A\":\n                return true;\n            default:\n                return false;\n        }\n    } catch(err) {\n    }\n    return false;\n}\n\nfunction is_valid_fn_element(e, flag) {\n    try {\n        if(flag == \"left\" &amp;&amp; (e.getElementsByTagName(\"INPUT\").length ||\n           e.getElementsByTagName(\"SELECT\").length || e.getElementsByTagName(\"IMG\").length ||\n           e.getElementsByTagName(\"TEXTAREA\").length)) {\n            return false;\n        }\n        if(flag == \"top\" &amp;&amp; (e.getElementsByTagName(\"TABLE\").length ||\n           e.getElementsByTagName(\"IMG\").length ||  e.getElementsByTagName(\"A\").length)) {\n           return false;\n        }\n        return true;\n    } catch(err) {\n    }\n    return false;\n}\n\/\/==================== GENERAL FUNCTIONS==============\/\/\n\nvar dgo_webcompat = false;\nvar dgo_zoomlevel = 100;\nvar dgo_ie_version = \"-1\";\n\nfunction get_ie_zoom_level() {\n    try {\n        if(\"-1\" == dgo_ie_version) {\n            dgo_ie_version = navigator.appVersion.match(\/MSIE (\\d+)\/)[1];\n        }\n        if (dgo_ie_version == \"7\") {\n            var rect = document.body.getBoundingClientRect();\n            dgo_zoomlevel = Math.ceil((rect.right-rect.left)\/document.body.clientWidth * 100);\n        } else if (dgo_ie_version &gt;= \"8\"){\n            dgo_zoomlevel = Math.ceil(window.screen.deviceXDPI\/window.screen.logicalXDPI*100);\n        }\n    } catch (e) {\n        dgo_zoomlevel = 100;\n    }\n}\n\nfunction dgo_set_ie_info(ie_info) {\n    try {\n        ie_info = extract_info_from_string(ie_info, \"IEinfo\", \"={\", \";\");\n        var ie_info_map = convert_from_string_to_map(ie_info, \",\")\n        if(ie_info_map.IEversion) {\n            dgo_ie_version = ie_info_map.IEversion;\n        }\n        if(ie_info_map.Webcompat) {\n            if (\"true\" == ie_info_map.Webcompat) {\n                dgo_webcompat = true;\n            }\n        }\n        return true;\n    } catch(err) {\n        return false;\n    }\n}\n\nfunction dgo_page_attr_url() {\n    return document.URL;\n}\n\nfunction offset_rect (source_rect, left, top) {\n    source_rect.left += left;\n    source_rect.top += top;\n    source_rect.right += left;\n    source_rect.bottom += top;\n    return source_rect;\n}\n\nfunction convert_from_string_to_map(string, delimiter) {\n    try {\n        var params = string.split(delimiter);\n        var map = {};\n        for (var i = 0; i &lt; params.length; i++) {\n            var parts = params[i].split(':');\n            map[parts[0]] = parts[1].substr(1, parts[1].length - 2);\n        }\n        return map;\n    } catch(err) {\n        throw err;\n    }\n}\n\nfunction extract_info_from_string(str, startToken, middleToken, endToken) {\n    try {\n        var start_pos = str.search(startToken);\n        if(-1 == start_pos){\n            return \"\";\n        }\n        start_pos = str.indexOf(middleToken, start_pos);\n        var end_pos = str.indexOf(endToken, start_pos);\n        var res = str.substring(start_pos+2 , end_pos-1);\n        if(!isNaN(res)) {\n            return Number(res);\n        }\n        return res;\n    } catch(err) {\n        throw err;\n    }\n}\n\n\/\/======================================Enable or disable controls========================\/\/\n\nfunction dgo_get_state(element) {\n   try {\n        if(typeof(element.disabled) != 'undefined') {\n            if(element.disabled) {\n                return 1;  \/\/true\n            }\n        }\n   } catch(err) {\n       return -1   \/\/\"exception\";\n   }\n   return 0; \/\/false\n}\n\nfunction dgo_set_state(element, state) {\n    try {\n        if(typeof(element.disabled) != 'undefined') {\n            element.disabled = state;\n            return 1; \/\/true\n        }\n      } catch(err) {\n            return -1\/\/\"exception\";\n    }\n   return 0; \/\/false\n}\n\n\n\/\/================================RECOGNITION================================\/\/\n\nvar delimiter = \"|##|\";\nvar rerecognition_frame_offset_x = 0;\nvar rerecognition_frame_offset_y = 0;\nvar elem_with_frame_path = \"window\";\n\nfunction HTMLElementRecognition() {\n\n}\n\nHTMLElementRecognition.prototype.element_path = \"\";\nHTMLElementRecognition.prototype.element_index_path = \"\";\nHTMLElementRecognition.prototype.element_rect = null;\nHTMLElementRecognition.prototype.bc_rect = null;\nHTMLElementRecognition.prototype.element = null;\nHTMLElementRecognition.prototype.window_frame = null;\nHTMLElementRecognition.prototype.doc = null;\nHTMLElementRecognition.prototype.current_doc = null;\nHTMLElementRecognition.prototype.eep = \"\";\nHTMLElementRecognition.prototype.object_type = \"\";\nHTMLElementRecognition.prototype.object_sub_type = \"\";\nHTMLElementRecognition.prototype.element_rect_str = \"\";\nHTMLElementRecognition.prototype.client_x = null;\nHTMLElementRecognition.prototype.client_y = null;\nHTMLElementRecognition.prototype.frame_offset_x = 0;\nHTMLElementRecognition.prototype.frame_offset_y = 0;\nHTMLElementRecognition.prototype.frame_path = \"\";\nHTMLElementRecognition.prototype.gen_path = 1;\nfunction dgo_element_recognition_process (point_x, point_y,\n         top_frame_left, top_frame_top,gen_path, win_frame) {\n    try {\n        var html_rec_obj = new HTMLElementRecognition();\n        html_rec_obj.check_input(point_x, point_y, top_frame_left, top_frame_top,win_frame);\n        html_rec_obj.init(point_x, point_y, top_frame_left, top_frame_top,gen_path, win_frame);\n        html_rec_obj.get_element_from_point(point_x, point_y, top_frame_left, top_frame_top);\n        html_rec_obj.get_element_path();\n        html_rec_obj.get_bc_rect();\n         if (html_rec_obj.gen_path == 1) {html_rec_obj.get_element_eep();}\n        html_rec_obj.element_rect_str = html_rec_obj.execute_self_handler(point_x-top_frame_left,\n                                               point_y-top_frame_top, html_rec_obj.element);\n        html_rec_obj.get_element_object_type();\n        return html_rec_obj.recognition_output();\n    } catch (err) {\n        if(err == false) {\n            return false;\n        }\n        return err.name + \",\" + err.description+ \",\"+ err.number ;\n    }\n}\n\nHTMLElementRecognition.prototype.check_input = function(point_x, point_y, top_frame_left,\n                                                        top_frame_top, win_frame) {\n    if(win_frame == null || win_frame.document == null) {\n        throw false;\n    }\n}\n\nHTMLElementRecognition.prototype.init = function(point_x, point_y, top_frame_left,\n                                                 top_frame_top,gen_path, win_frame) {\n    this.window_frame = win_frame;\n    this.doc = win_frame.document;\n    this.gen_path = gen_path;\n    this.element_rect = new Object();\n    this.bc_rect = new Object();\n    this.client_x = point_x - top_frame_left;\n    this.client_y = point_y - top_frame_top;\n    get_ie_zoom_level();\n}\n\nHTMLElementRecognition.prototype.get_element_from_point = function(point_x, point_y,\n                                                               top_frame_left, top_frame_top) {\n    var last_doc = this.doc;\n    point_x -= top_frame_left;\n    point_y -= top_frame_top;\n    this.frame_offset_x = 0;\n    this.frame_offset_y = 0;\n    var found = false;\n    do {\n        found = true;\n        this.current_doc = last_doc;\n        var client_x = point_x - this.frame_offset_x;\n        var client_y = point_y - this.frame_offset_y;\n        if(!this.current_doc) {\n            throw false;\n        }\n        if (Math.abs(dgo_zoomlevel - 100) &gt; 4) {\n            client_x = Math.ceil(client_x * 100 \/ dgo_zoomlevel);\n            client_y = Math.ceil(client_y * 100 \/ dgo_zoomlevel);\n        }\n        if (!(this.element = this.current_doc.elementFromPoint(client_x, client_y))) {\n            throw false;\n        }\n        var tagname = this.element.tagName;\n        if (tagname == \"FRAME\" || tagname == \"IFRAME\") {\n            this.element_rect = this.element.getBoundingClientRect();\n            this.frame_offset_x += this.element_rect.left;\n            this.frame_offset_y += this.element_rect.top;\n            var contDoc = (this.element.contentWindow || this.element.contentDocument);\n            if (!contDoc.document) {\n                throw false;\n            }\n            contDoc =contDoc.document;\n            last_doc = contDoc;\n            found = false;\n        }\n    } while(!found);\n    this.element = dgo_check_accessKey(this.element);\n    if(this.element.tagName == \"B\") {\n        this.element = this.element.parentElement;\n    }\n}\n\nHTMLElementRecognition.prototype.get_element_path = function() {\n    var tagname = this.element.tagName;\n    var tag_coll = this.current_doc.getElementsByTagName(tagname);\n    var tag_coll_length = tag_coll.length;\n    for (var i = 0; i &lt; tag_coll_length; i++) {\n        var child = tag_coll.item(i);\n        if(this.element == child) {\n            this.element_path = \"document.all.tags(\\\"\" + tagname + \"\\\")\" + \"[\" + i + \"]\";\n            return true;\n         }\n    }\n    throw false;\n}\n\nHTMLElementRecognition.prototype.get_bc_rect = function() {\n    this.element_rect = this.element.getBoundingClientRect();\n    var node = this.element;\n    if (node &amp;&amp; node.parentNode) {\n        var p_node = node.parentNode;\n        var p_elem = p_node;\n        if (p_elem &amp;&amp;  \"clipper\" ==  p_elem.tagName) {\n            if (p_node.parentNode) {\n                p_node = p_node.parentNode;\n            }\n            this.element_rect = p_node.getBoundingClientRect();\n        }\n    }\n    this.element_rect = offset_rect(this.element_rect, this.frame_offset_x, this.frame_offset_y);\n}\n\nHTMLElementRecognition.prototype.get_element_object_type = function() {\n    this.object_type = dgo_elem_xtype(this.element) + this.object_sub_type;\n}\n\nHTMLElementRecognition.prototype.execute_self_handler = function(clickptx, clickpty, elem) {\n    \/\/these points are wrt client co-ordinate i.e. after offsetting loff_\n    \/\/Call dgo_self_handler and update type and rect if applicable\n    var ret_val = \"nonscrollable\";\n    if (dgo_isscrollable_element(elem)) {\n        ret_val = \"scrollable\";\n        var client_h = elem.clientHeight;\n        var client_w = elem.clientWidth;\n        if (client_w &lt; 30 || client_h &lt; 30) {\n            return ret_val;  \/\/ insanity check, found collapsed dd lists matching scrollbar\n        }\n        var b_rect = elem.getBoundingClientRect();\n        b_rect = offset_rect(b_rect, this.frame_offset_x, this.frame_offset_y);\n        var client_l = elem.clientLeft;\n        var client_t = elem.clientTop;\n        var scroll_w = elem.scrollWidth;\n        var scroll_h = elem.scrollHeight;\n        var scroll_l = elem.scrollLeft;\n        var scroll_t = elem.scrollTop;\n        if (scroll_w &gt; client_w) {\n            var hb_rect = new Object();\n\n            hb_rect.left = b_rect.left;\n            hb_rect.top = b_rect.top + client_h;\n            hb_rect.right = hb_rect.left + client_w;\n            hb_rect.bottom = b_rect.bottom;\n\n            \/\/ if click point falls in scroll area, do the processing otherwise return it\n            if (clickpty &gt; hb_rect.top &amp;&amp; clickpty &lt; hb_rect.bottom ) {\n                var fac = 0.0;\n                if (clickptx &gt; hb_rect.left &amp;&amp; clickptx &lt; (hb_rect.left + 16)) {\n                    this.object_sub_type = \"HScrollBtnL\";\n                    return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left+15) + \",\" +\n                     hb_rect.bottom;\n                }\n                if (clickptx &gt; (hb_rect.right - 16) &amp;&amp;\n                    clickptx &lt; hb_rect.right) {\n                    this.object_sub_type = \"HScrollBtnR\";\n                    return (hb_rect.right - 16) + \",\" + hb_rect.top + \",\" + hb_rect.right +\n                             \",\" + hb_rect.bottom;\n                }\n                hb_rect.left += 16;\n                hb_rect.right -= 16;\n                if (scroll_h &gt; 0) {\n                    fac = (client_w - 16)\/scroll_w;\n                } else {\n                    fac = 1;\n                }\n                var hb_wdth = Math.round(fac * (client_w - 16));\n                if (scroll_l &gt; 0 &amp;&amp; clickptx &gt; hb_rect.left &amp;&amp;\n                    clickptx &lt; (hb_rect.left + Math.ceil(scroll_l * fac))) {\n                    this.object_sub_type = \"HScrollAreaL\";\n                    return hb_rect.left + \",\" + hb_rect.top + \",\" +\n                           (hb_rect.left + Math.round(scroll_l * fac)) + \",\" + hb_rect.bottom;\n                }\n                hb_rect.left += Math.round(scroll_l * fac);\n                if (hb_rect.right &gt; (hb_rect.left + hb_wdth) &amp;&amp;\n                    clickptx &gt; (hb_rect.left + hb_wdth) &amp;&amp;\n                    clickptx &lt; hb_rect.right) {\n                    this.object_sub_type = \"HScrollAreaR\";\n                    return (hb_rect.left + hb_wdth) + \",\" + hb_rect.top + \",\" +\n                            hb_rect.right + \",\" + hb_rect.bottom;\n                }\n                else if (clickptx &gt; hb_rect.left &amp;&amp;\n                         clickptx &lt; (hb_rect.left + hb_wdth)) {\n                    this.object_sub_type = \"HScrollBar\";\n                    return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left + hb_wdth) +\n                           \",\" + hb_rect.bottom;\n                }\n            }\n        }\n        if (scroll_h &gt; client_h) {\n            var vb_rect = new Object();\n            vb_rect.left = b_rect.left + client_w;\n            vb_rect.top = b_rect.top;\n            vb_rect.right = b_rect.right;\n            vb_rect.bottom = vb_rect.top + client_h;\n\n            \/\/ if click point falls in scroll area, do the processing otherwise return it\n            if ((clickptx &gt; vb_rect.left) &amp;&amp; (vb_rect.right &gt; clickptx) ) {\n\n                var fac = 0.0;\n                if (clickpty &gt; vb_rect.top &amp;&amp; clickpty &lt; (vb_rect.top + 16)) {\n                    this.object_sub_type = \"VScrollBtnT\";\n                    return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                           (vb_rect.top + 15);\n                }\n                if (clickpty &gt; (vb_rect.bottom - 16) &amp;&amp;\n                    clickpty &lt; vb_rect.bottom) {\n                    this.object_sub_type = \"VScrollBtnB\";\n                    return vb_rect.left + \",\" + (vb_rect.bottom - 15) + \",\" +\n                           vb_rect.right + \",\" + vb_rect.bottom;\n                }\n                vb_rect.top += 16;\n                vb_rect.bottom -= 16;\n                if (scroll_h &gt; 0) {\n                    fac = (client_h - 16)\/scroll_h;\n                } else {\n                    fac = 1;\n                }\n                var vb_hght = Math.round(fac * (client_h - 16));\n                if (scroll_t &gt; 0 &amp;&amp; clickpty &gt; vb_rect.top &amp;&amp;\n                    clickpty &lt; (vb_rect.top + Math.ceil(scroll_t * fac))) {\n                    this.object_sub_type = \"VScrollAreaT\";\n                    return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                           (vb_rect.top + Math.round(scroll_t * fac));\n                }\n                vb_rect.top += Math.round(scroll_t * fac);\n                if (vb_rect.bottom &gt; (vb_rect.top + vb_hght) &amp;&amp;\n                    clickpty &gt; (vb_rect.top + vb_hght) &amp;&amp;\n                    clickpty &lt; vb_rect.bottom) {\n                    this.object_sub_type = \"VScrollAreaB\";\n                    return vb_rect.left + \",\" + (vb_rect.top + vb_hght) + \",\" +\n                           vb_rect.right + \",\" + vb_rect.bottom;\n                }\n                else if (clickpty &gt; vb_rect.top &amp;&amp;\n                         clickpty &lt; (vb_rect.top + vb_hght)) {\n                    this.object_sub_type = \"VScrollBar\";\n                    return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                           (vb_rect.top + vb_hght);\n                }\n            }\n        }\n    }\n    return ret_val;\n}\n\nHTMLElementRecognition.prototype.get_element_eep = function() {\n    var elem_path_webcompat = \"\";\n    if(dgo_webcompat) {\n        this.get_element_index_path();\n        elem_path_webcompat = this.element_index_path;\n    }\n    this.frame_path = Eep_getFramePathString(this.current_doc.parentWindow,\n                                            this.current_doc.parentWindow.top);\n    this.eep = 'eep_frame=\\\"' + this.frame_path\n                + '\\\";eep_simple_path=\\\"' + elem_path_webcompat\n                + '\\\";' + Eep_generate(this.element, this.current_doc.parentWindow)\n                + 'client_x=\\\"' + this.client_x\n                + '\\\";client_y=\\\"' + this.client_y + '\\\";';\n    if (this.frame_path == \"\") {\n        this.frame_path = \"-1\";\n    }\n}\n\nHTMLElementRecognition.prototype.recognition_output = function() {\n    var obj_rect = \"\";\n    if (this.object_sub_type == \"\") {\n        obj_rect = this.element_rect.left + \",\" + this.element_rect.top + \",\" +\n                  this.element_rect.right + \",\" + this.element_rect.bottom;\n    } else {\n        obj_rect = this.element_rect_str;\n    }\n    return ( this.element_path + delimiter + this.object_type + delimiter +\n             obj_rect + delimiter + this.eep + delimiter + this.get_element_with_frame_path());\n}\n\nHTMLElementRecognition.prototype.get_element_with_frame_path = function() {\n    if(elem_with_frame_path) {\n        return (elem_with_frame_path + \".\" + this.element_path);\n\t}\n\treturn \"\";\n}\n\nHTMLElementRecognition.prototype.get_element_index_path = function() {\n    var element_path = [];\n    var delimiter = \":\";\n    this.get_index_path_recursive(this.element, this.window_frame.document.body, element_path);\n    var length = element_path.length;\n    for(var i = 0; i &lt; length; i++){\n        if(i == length-1) {\n            delimiter = \"\";\n        }\n        this.element_index_path = this.element_index_path + element_path[i] + delimiter;\n    }\n}\n\nHTMLElementRecognition.prototype.get_index_path_recursive = function(element, root, path) {\n    if (root == 0) return false;\n    if (element == root) return true;\n    var collection = root.children;\n    if (collection == 0) return false;\n    var length = collection.length;\n    for (var i = 0; i &lt; length; i++) {\n        path.push(i);\n        var item = collection.item(i);\n        if (this.get_index_path_recursive(element, item, path)) return true;\n        path.pop(i);\n    }\n    return false;\n}\n\nfunction string_to_map_of_map(string, outer_dlm, inner_dlm) {\n    try {\n        var params = string.split(outer_dlm);\n        var map = new Array();\n        for (var i = 0; i &lt; params.length; i++) {\n            var parts = params[i].split(inner_dlm);\n            map[i] = new Array();\n            for (var j = 0; j &lt; parts.length; j++) {\n                map[i].push(parts[j]);\n            }\n        }\n        return map;\n    } catch (err) {\n        throw err;\n    }\n}\n\n\/\/============================RERECOGNITION==============================\/\/\n\n\/\/ret_status = -1 exception\n\/\/ret_status = 0 false\n\/\/ret_status = 1 true\n\/\/ret_status = 2 hidden\n\nfunction dgo_element_batch_rerecognition_process(multipaths, check_names, win_frame) {\n    \/\/ First get the map of delimited paths\n    var elements = string_to_map_of_map(multipaths,\"|PP|\",\"|PT|\");\n    var ret_val = '';\n    var count = elements.length;\n    for (var iter = 0; iter &lt; count; iter++) {\n        var ret_status = dgo_element_rerecognition_process(elements[iter][0],\n                                                   elements[iter][1],check_names,win_frame);\n        if (ret_status != -1 &amp;&amp; ret_status != 0) {\n            if(ret_status == 2) {\n                ret_val +=\"HIDDEN\";\n            } else {\n                ret_val += ret_status;\n            }\n        } else {\n            ret_val +=\"FAILED\";\n        }\n        if(iter+1 != count) {\n            ret_val += \"|+|\";\n        }\n    }\n    return ret_val;\n}\n\nfunction HTMLElementRerecognition () {\n}\n\nHTMLElementRerecognition.prototype.recording_element_type = \"\";\nHTMLElementRerecognition.prototype.element_path = \"\";\nHTMLElementRerecognition.prototype.element_index_path = \"\";\nHTMLElementRerecognition.prototype.eep = \"\";\nHTMLElementRerecognition.prototype.element_rect = null;\nHTMLElementRerecognition.prototype.element_rect_str = \"\";\nHTMLElementRerecognition.prototype.element = null;\nHTMLElementRerecognition.prototype.window_frame = null;\nHTMLElementRerecognition.prototype.doc = null;\nHTMLElementRerecognition.prototype.object_type = \"\";\nHTMLElementRerecognition.prototype.object_sub_type = \"\";\nHTMLElementRerecognition.prototype.client_x = null;\nHTMLElementRerecognition.prototype.client_y = null;\nHTMLElementRerecognition.prototype.check_names = \"\";\nHTMLElementRerecognition.prototype.recording_element_info_map = null;\nHTMLElementRerecognition.prototype.rerecognition_eep_frame = \"\";\n\nfunction dgo_element_rerecognition_process(eepInput, obj_type, check_names, win_frame) {\n    try {\n        var html_rerec_obj = new HTMLElementRerecognition();\n        html_rerec_obj.check_input(eepInput, win_frame);\n        html_rerec_obj.init(eepInput, obj_type, check_names, win_frame);\n        if(!html_rerec_obj.get_elem_from_index_path()) {\n            if(!html_rerec_obj.get_element_by_client_pt() ||\n               !html_rerec_obj.check_element_info()) {\n                throw false;\n            }\n        }\n        if(IsObjectHidden(html_rerec_obj.element)) {\n            return 2;\n        }\n        if (html_rerec_obj.element_path == \"\") {\n            html_rerec_obj.get_element_path();\n        }\n        html_rerec_obj.get_rerecognition_eep_frame();\n        html_rerec_obj.get_element_object_type();\n        html_rerec_obj.get_rect();\n        return html_rerec_obj.rerecognition_output();\n    } catch(err) {\n        if(err == false) {\n            return 0;\n        }\n        return -1;\n    }\n}\n\nHTMLElementRerecognition.prototype.check_input = function(eepInput, win_frame) {\n    if(win_frame == null || eepInput == null || win_frame.document == null) {\n        throw false;\n    }\n}\n\nHTMLElementRerecognition.prototype.init = function(eepInput, obj_type, check_names, win_frame) {\n    this.window_frame = win_frame;\n    this.doc = win_frame.document;\n    this.recording_element_type = obj_type;\n    elem_index_within_frame = -1;\n    rerecognized_frame = null;\n    this.element_path = extract_info_from_string(eepInput, \"element_path\", \"=\", \";\");\n    this.client_x = extract_info_from_string(eepInput, \"client_x\", \"=\", \";\");\n    this.client_y = extract_info_from_string(eepInput, \"client_y\", \"=\", \";\");\n\n    var start_pos = eepInput.search(\"element_path\");\n    if (-1 == start_pos) {\n        this.eep = eepInput;\n    } else {\n        this.eep = eepInput.substring(0,start_pos);\n    }\n    this.element_rect = new Object();\n    this.check_names = check_names;\n    this.recording_element_info_map = {};\n}\n\nHTMLElementRerecognition.prototype.get_element_by_client_pt = function() {\n    if (this.client_x == \"\" || this.client_y == \"\") {\n        return false;\n    }\n    try {\n        this.element = this.doc.elementFromPoint(Number(this.client_x), Number(this.client_y));\n        if(this.element) {\n            this.element_rect_str = this.execute_self_handler(this.recording_element_type,\n                                                            this.element);\n            return true;\n        }\n    } catch (err) {\n        return false;\n    }\n    return false;\n}\n\nHTMLElementRerecognition.prototype.get_element_path = function() {\n    var tagname = this.element.tagName;\n    if (-1 == elem_index_within_frame) {\n        var tag_coll = null;\n        if(rerecognized_frame &amp;&amp; rerecognized_frame.document) {\n             tag_coll = rerecognized_frame.document.getElementsByTagName(tagname);\n        } else {\n             tag_coll = this.doc.getElementsByTagName(tagname);\n        }\n        var tag_coll_length = tag_coll.length;\n        for (var i = 0; i &lt; tag_coll_length; i++) {\n            var child = tag_coll.item(i);\n            if(this.element == child) {\n                this.element_path = \"document.all.tags(\\\"\" + tagname +\n                                   \"\\\")\" + \"[\" + i + \"]\";\n                return true;\n             }\n        }\n        this.element_path = \"document.all.tags(\\\"\" + tagname + \"\\\")\" + \"[0]\";\n    } else {\n        this.element_path = \"document.all.tags(\\\"\" + tagname + \"\\\")[\" +\n                            elem_index_within_frame + \"]\";\n    }\n    return true;\n}\n\nHTMLElementRerecognition.prototype.get_rerecognition_eep_frame = function() {\n    if (rerecognized_frame) {\n        this.rerecognition_eep_frame = Eep_getFramePathString(rerecognized_frame,\n                                                              rerecognized_frame.top)\n    }\n    if (this.rerecognition_eep_frame == '') {\n        this.rerecognition_eep_frame = \"-1\";\n    }\n}\n\nHTMLElementRerecognition.prototype.execute_self_handler = function(obj_type, elem) {\n    var ret_val = \"\";\n    if (dgo_isscrollable_element(elem)) {\n        var sub_type = this.recording_element_type.substr(elem.tagName.length);\n        var client_h = elem.clientHeight;\n        var client_w = elem.clientWidth;\n        var b_rect = elem.getBoundingClientRect();\n        var client_l = elem.clientLeft;\n        var client_t = elem.clientTop;\n        var scroll_w = elem.scrollWidth;\n        var scroll_h = elem.scrollHeight;\n        var scroll_l = elem.scrollLeft;\n        var scroll_t = elem.scrollTop;\n\n        if (sub_type.charAt(0) == 'H') {\n            this.object_sub_type = sub_type;\n            var hb_rect = new Object();\n\n            hb_rect.left = b_rect.left;\n            hb_rect.top = b_rect.top + client_h;\n            hb_rect.right = hb_rect.left + client_w;\n            hb_rect.bottom = b_rect.bottom;\n\n            var fac = 0.0;\n            if (sub_type == \"HScrollBtnL\") {\n                return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left+15) + \",\" +\n                       hb_rect.bottom;\n            }\n            if (sub_type == \"HScrollBtnR\") {\n                return (hb_rect.right - 16) + \",\" + hb_rect.top + \",\" + hb_rect.right +\n                        \",\" + hb_rect.bottom;\n            }\n            var temp_rect = b_rect;\n            hb_rect.left += 16;\n            hb_rect.right -= 16;\n            if (scroll_h &gt; 0) {\n                fac = (client_w - 16)\/scroll_w;\n            } else {\n                fac = 1;\n            }\n            var hb_wdth = Math.round(fac * (client_w - 16));\n            if (sub_type == \"HScrollAreaL\") {\n                return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left +\n                       Math.round(scroll_l * fac)) + \",\" + hb_rect.bottom;\n            }\n            hb_rect.left += Math.round(scroll_l * fac);\n            if (sub_type == \"HScrollAreaR\") {\n                return (hb_rect.left + hb_wdth) + \",\" + hb_rect.top + \",\" +\n                        hb_rect.right + \",\" + hb_rect.bottom;\n            }\n            if (sub_type == \"HScrollBar\") {\n                return hb_rect.left + \",\" + hb_rect.top + \",\" + (hb_rect.left + hb_wdth) +\n                       \",\" + hb_rect.bottom;\n            }\n        }\n        if (sub_type.charAt(0) == 'V') {\n            this.object_sub_type = sub_type;\n            var vb_rect = new Object();\n            vb_rect.left = b_rect.left + client_w;\n            vb_rect.top = b_rect.top;\n            vb_rect.right = b_rect.right;\n            vb_rect.bottom = vb_rect.top + client_h;\n\n            var fac = 0.0;\n            if (sub_type == \"VScrollBtnT\") {\n                return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                       (vb_rect.top + 15);\n            }\n            if (sub_type == \"VScrollBtnB\") {\n                return vb_rect.left + \",\" + (vb_rect.bottom - 15) + \",\" + vb_rect.right +\n                       \",\" + vb_rect.bottom;\n            }\n            var temp_rect = b_rect;\n            vb_rect.top += 16;\n            vb_rect.bottom -= 16;\n            if (scroll_h &gt; 0) {\n                fac = (client_h - 16)\/scroll_h;\n            } else {\n                fac = 1;\n            }\n            var vb_hght = Math.round(fac * (client_h - 16));\n            if (sub_type == \"VScrollAreaT\") {\n                return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                       (vb_rect.top + Math.round(scroll_t * fac));\n            }\n            vb_rect.top += Math.round(scroll_t * fac);\n            if (sub_type == \"VScrollAreaB\") {\n                return vb_rect.left + \",\" + (vb_rect.top + vb_hght) + \",\" + vb_rect.right +\n                       \",\" + vb_rect.bottom;\n            }\n            if (sub_type == \"VScrollBar\") {\n                return vb_rect.left + \",\" + vb_rect.top + \",\" + vb_rect.right + \",\" +\n                       (vb_rect.top + vb_hght);\n            }\n        }\n    }\n    return ret_val;\n}\n\nHTMLElementRerecognition.prototype.check_element_info = function () {\n    try {\n        var eep_resolveOptions = {\n              eep_first_text_re: null\n            , eep_use_text: this.check_names\n            , eep_version: '6.1.1'\n        };\n        if(true == Eep_qaElement_(this.element, this.recording_element_info_map,\n                                  eep_resolveOptions)) {\n           return true;\n        }\n    }catch(err) {\n    }\n    return false;\n}\n\nHTMLElementRerecognition.prototype.get_frame_index = function() {\n    var frame_path = \"\";\n    var frame_path_pos = this.eep.search(\"eep_frame=\\\"\");\n    if (frame_path_pos == -1) {\n         throw false;\n    }\n    var frame_path_endpos = this.eep.search(\";\", frame_path_pos+1);\n    if (frame_path_endpos &gt; frame_path_pos) {\n        frame_path = this.eep.substr(frame_path_pos, frame_path_endpos - frame_path_pos);\n        frame_path_pos = frame_path.search(\"\\\"\");\n        frame_path = frame_path.substr(frame_path_pos+1, frame_path.length - frame_path_pos - 2);\n    }\n    if (frame_path.length &gt; 0) {\n        var start_pos = 0;\n        while (start_pos &lt; frame_path.length) {\n            var pos = frame_path.search(\":\", start_pos);\n            var num_chars = 0;\n            if (pos != -1) {\n                num_chars = pos - start_pos;\n            } else {\n                num_chars = frame_path.length - start_pos;\n            }\n            var frame_index =frame_path.substr(start_pos, num_chars);\n            \/\/push_frame(frame_index);\n            start_pos += (num_chars+1);\n        }\n    }\n}\n\nHTMLElementRerecognition.prototype.get_elem_from_index_path = function() {\n    try {\n        this.element = Eep_resolve2simpleelement(this.eep, '', 0, 0, 0, this.check_names);\n        if (this.element) {\n            this.element_rect_str = this.execute_self_handler(this.recording_element_type,\n                                                            this.element);\n            return true;\n        }\n    } catch (err) {\n    }\n    return false;\n}\n\nHTMLElementRerecognition.prototype.get_rect = function() {\n    try {\n        this.element_rect.left = this.element.getBoundingClientRect().left +\n                                rerecognition_frame_offset_x;\n        this.element_rect.right = this.element.getBoundingClientRect().right +\n                                 rerecognition_frame_offset_x;\n        this.element_rect.top = this.element.getBoundingClientRect().top +\n                               rerecognition_frame_offset_y;\n        this.element_rect.bottom = this.element.getBoundingClientRect().bottom +\n                                  rerecognition_frame_offset_y;\n    } catch (err) {\n        return false;\n    }\n}\n\nHTMLElementRerecognition.prototype.get_element_object_type = function() {\n    this.object_type = dgo_elem_xtype(this.element) + this.object_sub_type;\n}\n\nHTMLElementRerecognition.prototype.rerecognition_output = function() {\n    var obj_rect = \"\";\n    if (this.object_sub_type == \"\") {\n        obj_rect = this.element_rect.left + \",\" + this.element_rect.top + \",\" +\n                  this.element_rect.right + \",\" + this.element_rect.bottom;\n    } else {\n        obj_rect = this.element_rect_str;\n    }\n    return (this.object_type + delimiter + obj_rect + delimiter + this.element_path +\n            delimiter + this.rerecognition_eep_frame);\n}\n\n\nfunction dgo_isscrollable_element(element) {\n    var scrollable = false;\n    if(element != null) {\n        \/\/Need to add combo also (only multi select)\n        if (element.tagName == \"BODY\" ||\n            element.tagName == \"HTML\" ||\n            element.tagName == \"DIV\" ||\n            element.tagName == \"TEXTAREA\" ||\n           (element.tagName == \"SELECT\" &amp;&amp; element.type == \"select-multiple\" ))\n        {\n            scrollable = true;\n        }\n    }\n    return scrollable;\n}\n\nfunction dgo_standard_fieldname(e) {\n    var fn = \"\";\n    if (fn = dgo_get_control_fieldname(e)) return fn;\n    if (is_valid_control_tagname(e)) return \"\";\n    if (e == null || e.parentElement == null || e.parentElement.parentElement == null ||\n        e.parentElement.parentElement.parentElement == null) return '';\n\n    \/\/alert(e.tagName + \" - \" + dgo_elem_xtype(e));\n    var s_item = dgo_get_info(e);\n    var x_item = s_item.l;\n    var y_item = s_item.t;\n    var w_item = s_item.w;\n\n    var root = e.parentElement.parentElement.parentElement;\n    var r3 = dgo_get_elem_index(e.parentElement.parentElement);\n    var r2 = dgo_get_elem_index(e.parentElement);\n    var r1 = dgo_get_elem_index(e);\n\n    if (r3 == -1 || r2 == -1 || r1 == -1) return fn;\n\n\n    var f_e = dgo_get_distant_child(root, r3 + 2, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 - 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 - 2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 2, r2 - 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 2, r2 - 2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 3, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 + 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2 + 2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2 - 1, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2 - 1, r1 - 1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 + 1, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3 - 1, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2, r1 - 2);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2, r1 - 1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    f_e = dgo_get_distant_child(root, r3, r2, r1);\n    if (f_e != null) {\n        if (fn = dgo_get_fn(f_e, x_item, y_item, w_item)) return fn;\n    }\n\n    return \"\";\n}\n\nfunction dgo_valid_string(str) {\n    if (!str || str == \"\" || str == \"undefined\" || str == \" \" || str == \"  \" ||\n        str == \"   \" || str == \"    \" || str.length &gt; 80) {\n        return false;\n    }\n    return true;\n}\n\nfunction dgo_inner_text(e) {\n    if (e != null) {\n        if(e.tagName == \"B\" &amp;&amp; e.parentElement) {\n            return e.parentElement.innerText;\n        }\n        return e.innerText;\n    }\n    return \"\";\n}\n\nfunction dgo_RADIO_fieldname(e, type) {\n    \/\/alert(\"calling radio\");\n    var fn = \"\";\n    if (fn = dgo_get_control_fieldname(e)) return fn;\n   \/\/ if (fn = dgo_get_fn_right(e)) return fn;\n\n    if (type == \"INPUTradio\") {\n        if (e.nextSibling != null) {\n            if (e.nextSibling.nextSibling != null) {\n                fn = e.nextSibling.nextSibling.innerText;\n            } else {\n                fn = e.parentNode.innerText;\n            }\n        } else {\n            fn = e.parentNode.innerText;\n        }\n    } else {\n        fn = e.parentNode.innerText;\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.previousSibling != null) {\n            fn = e.parentNode.previousSibling.innerText;\n        }\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.nextSibling != null) {\n            fn = e.parentNode.nextSibling.innerText;\n        }\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.nextSibling != null) {\n            if (e.parentNode.nextSibling.nextSibling != null) {\n                fn = e.parentNode.nextSibling.nextSibling.innerText;\n            }\n        }\n    }\n    if (!dgo_valid_string(fn)) {\n        if (e.parentNode.parentNode != null) {\n          if (e.parentNode.parentNode.parentNode != null) {\n            if (e.parentNode.parentNode.parentNode.previousSibling != null) {\n              if (e.parentNode.parentNode.parentNode.previousSibling.children.length &gt; 0) {\n                fn = e.parentNode.parentNode.parentNode.previousSibling.children(0).innerText;\n                if (fn.substr(fn.length - 1, 1) == ':') {\n                  fn = fn.substr(0, fn.length - 1);\n                }\n              }\n            }\n          }\n        }\n    }\n\n    if (fn == \"undefined\" || fn.length &gt; 80) {\n        fn = \"\";\n    }\n    return fn;\n}\n\nfunction dgo_set_value(e, val) {\n\/\/alert(\"dgo_set_value\");\n    var res = \"&lt;error&gt;\";\n\n    if (e) {\n\n        if (e.tagName == \"SELECT\" &amp;&amp; e.options) {\n            for (var i = 0; i &lt; e.options.length; i++) {\n\n                if (e.options(i).text == val) {\n                    e.options(i).selected = true;\n                    e.onchange();\n                    res = \"ok\";\n                    break;\n                }\n            }\n        } else if (e.tagName == \"INPUT\") {\n            if (e.type == \"radio\" || e.type == \"checkbox\") {\n\n                if (val == \"checked\") {\n                    e.checked = true;\n                } else if (val == \"unchecked\") {\n                    e.checked = false;\n                }\n            } else \/*if (e.value)*\/ {\n                e.value = val;\n            }\n            res = \"ok\";\n        }\n    }\n    \/\/alert(\"dgo_set_value 6\" + res);\n\n    return res;\n}\n\nfunction dgo_get_value(e) {\n    var res = \"\";\n\n    if (e) {\n        if (e.tagName == \"SELECT\" &amp;&amp; e.options) {\n\n            for (var i = 0; i &lt; e.options.length; i++) {\n\n                if (e.options(i).selected) {\n                    res += \"{*}\";\n                }\n\n                res = res + e.options(i).text + \"\\n\";\n            }\n        } else if (e.tagName == \"INPUT\" &amp;&amp; e.value) {\n            res = e.value;\n        }\n    }\n\n    return res;\n}\n\nfunction dgo_font_weight(e) {\n    if(e &amp;&amp; e.currentStyle &amp;&amp; e.currentStyle.fontWeight &gt;= 600) {\n        return 1;\n    }\n    return 0;\n}\n\n\nfunction dgo_font_size(e) {\n    try {\n        if(!check_element(e)) {\n            return -1;\n        }\n        var fn_size = \"\";\n        if (e.currentStyle &amp;&amp; e.currentStyle.fontSize) {\n            fn_size = get_font_size(e.currentStyle.fontSize, false);\n        }\n        if((-1 == fn_size) &amp;&amp; e.runtimeStyle &amp;&amp; e.runtimeStyle.fontSize) {\n            fn_size = get_font_size(e.runtimeStyle.fontSize, false);\n        }\n        return fn_size;\n    } catch (err) {\n    }\n    return -1;\n}\n\n\/* pt: points — the points used by CSS are equal to 1\/72nd of 1in.\npc: picas — 1pc is equal to 12pt.\npx: pixel units — 1px is equal to 0.75pt.\n*\/\n\nfunction get_absolute_font_size(size) {\n     try {\n          if (size.indexOf(\"pt\") != -1) {\n              return parseInt(size);\n          } else if(size.indexOf(\"px\") != -1) {\n              return Math.round(parseInt(size)* 0.75);\n          }\n      }catch (e) {\n      }\n      return -1;\n}\n\nfunction get_relative_font_size(size) {\n    try {\n        if(size.indexOf(\"em\") != -1) {\n            return parseFloat(size);\n        } else if(size.indexOf(\"%\") != -1) {\n            return parseFloat(size)\/100;\n        }\n    }catch (e) {\n    }\n    return 1;\n}\n\nfunction get_font_size(size, body_elm) {\n    try {\n        if(size.length &lt;= 0) {\n            return -1;\n        }\n        var abs_font = get_absolute_font_size(size);\n        if (abs_font != -1) {\n            return abs_font;\n        } else {\n            var rel_font = get_relative_font_size(size);\n            var base_font = 0;\n            if (body_elm) {\n                if (window.document.documentElement.currentStyle &amp;&amp; window.document.documentElement.currentStyle.fontSize) {\n                    base_font = parseInt(window.document.documentElement.currentStyle.fontSize);\n                }\n            } else {\n                base_font = get_font_size(window.document.body.currentStyle.fontSize, true);\n            }\n            return Math.round(base_font * rel_font);\n        }\n    }catch (e) {\n    }\n    return -1;\n}\n\nfunction dgo_font_family(e) {\n    if (e &amp;&amp; e.currentStyle) {\n        return \"\" + e.currentStyle.fontFamily;\n    } else if(e &amp;&amp; e.runtimeStyle) {\n        return \"\" + e.runtimeStyle.fontFamily;\n    }\n\n    return \"\";\n}\n\nfunction to_hex(n) {\n    try {\n        n = parseInt(n,10);\n        if (isNaN(n)) return \"00\";\n        n = Math.max(0,Math.min(n,255));\n        return \"0123456789ABCDEF\".charAt((n-n%16)\/16) + \"0123456789ABCDEF\".charAt(n%16);\n    } catch (err) {\n    }\n    return \"00\";\n}\n\nfunction rgb_to_hex(str) {\n    try {\n        var font_color = \"#\"\n        var start = str.indexOf(\"(\");\n        var end = str.indexOf(\",\");\n        var i = 0;\n        while(i &lt; 3) {\n            var r = str.substring(start+1,end);\n            font_color = font_color + to_hex(r);\n            start = end;\n            str = str.replace(\",\", \";\");\n            end = str.indexOf(\",\");\n            if(end == -1) {\n                end = str.indexOf(\")\");\n            }\n            i++;\n        }\n        return font_color;\n    } catch (err) {\n    }\n    return \"\";\n}\n\nfunction dgo_font_color(e) {\n    if (e &amp;&amp; e.currentStyle) {\n        var font_color = e.currentStyle.color;\n        if (-1 == font_color.search(\/rgb\/i)) {\n            return \"\" + e.currentStyle.color;\n        } else {\n            return rgb_to_hex(font_color);\n        }\n    }\n    return \"\";\n}\n\nfunction dgo_bg_color(e) {\n\n    if (e &amp;&amp; e.currentStyle &amp;&amp; e.currentStyle.backgroundColor != \"\") {\n        return \"#\" + e.currentStyle.backgroundColor;\n    } else {\n        return \"#ffffff\";\n    }\n\n    return \"\";\n}\n\nfunction dgo_get_state(e) {\n    var state = \"unchecked\";\n    if (e != null &amp;&amp; e.tagName == \"INPUT\" &amp;&amp; (e.type == \"radio\" || e.type == \"checkbox\")) {\n\n        if (e.checked) {\n            state = \"checked\";\n        }\n    }\n\n    var p_e = e.parentNode;\n    if (p_e &amp;&amp; p_e.tagName == \"SPAN\" &amp;&amp; p_e.role == \"checkbox\") {\n        if (p_e.getAttribute(\"aria-checked\")== \"true\") {\n            state = \"checked\";\n        }\n    }\n\n    return state;\n}\n\nfunction IsObjectHidden(obj) {\n    var hidden = false;\n    if (typeof (obj) == 'object') {\n        var frame_rect = new Object();\n        if(document &amp;&amp; document.documentElement) {\n            frame_rect = document.documentElement.getBoundingClientRect();\n        } else {\n            frame_rect = obj.document.body.getBoundingClientRect();\n        }\n        var obj_rect = obj.getBoundingClientRect();\n        if((obj_rect.right &lt;= obj_rect.left) || (obj_rect.bottom &lt;= obj_rect.top)){\n            hidden = true;\n        }\n        if ((obj_rect.bottom &lt; frame_rect.top) || (obj_rect.right &lt; frame_rect.left) ||\n            (obj_rect.top &gt; frame_rect.bottom) || (obj_rect.left &gt; frame_rect.right))\n        {\n            hidden = true;\n        }\n    }\n    return hidden;\n}\n\nfunction Eep_resolve2simple(eepString_, frame_path_, win_, options_, log_obj_, check_names) {\n    if(!win_) {\n        win_ = window;\n    }\n    var eep_resolveOptions = {\n          eep_first_text_re: null\n        , eep_use_text: check_names\n        , eep_version: '6.1.1'\n    };\n    var eep = new Eep(eepString_, eep_resolveOptions);\n    rerecognition_frame_offset_x = 0;\n    rerecognition_frame_offset_y = 0;\n    var frame = Eep_resolveFrameSimple(eep.eep_frame, win_.top);\n    if (!frame) {\n        return -1;\n    }\n    var obj = eep.eep_resolve(frame, log_obj_);\n\n    if (typeof(obj) == 'object' &amp;&amp; IsObjectHidden(obj)) {\n        return -1;\n    }\n\n    return (typeof(obj) == 'object' ? Eep_getPathString(obj, options_) : obj);\n}\n\nfunction Eep_resolve2simpleelement(eepString_, frame_path_, win_, options_, log_obj_, check_names) {\n    var eep_resolveOptions = {\n        eep_first_text_re: null\n        , eep_use_text: check_names\n        , eep_version: '6.1.1'\n    };\n    var eep = new Eep(eepString_, eep_resolveOptions);\n    rerecognition_frame_offset_x = 0;\n    rerecognition_frame_offset_y = 0;\n    var frame = Eep_resolveFrameSimple(eep.eep_frame, win_);\n    if (!frame) {\n        return -1;\n    }\n    var obj = eep.eep_resolve(frame, log_obj_);\n\n    if (typeof (obj) != 'object' &amp;&amp; (eep.eep_frame != '')) {\n        var frame_rect = frame.frameElement.getBoundingClientRect();\n        rerecognition_frame_offset_x -= frame_rect.left;\n        rerecognition_frame_offset_y -= frame_rect.top;\n        var path = eep.eep_frame.split(':');\n        var coll_length = frame.parent.frames.length;\n        if (path.length &lt; 1) {\n            return null;\n        }\n        var orig_index = path[path.length-1] - 0;\n        var iter = 1;\n        var keep_checking = true;\n        while (keep_checking) {\n            var trial_index = orig_index - iter;\n            if (trial_index &gt;= 0) {\n                frame = frame.parent.frames[trial_index];\n                if (frame) {\n                    obj = eep.eep_resolve(frame, log_obj_);\n                    if (typeof (obj) == 'object') {\n                        break;\n                    }\n                }\n            }\n            trial_index = orig_index + iter;\n            if (trial_index &lt; coll_length) {\n                frame = frame.parent.frames[trial_index];\n                if (frame) {\n                    obj = eep.eep_resolve(frame, log_obj_);\n                    if (typeof (obj) == 'object') {\n                        break;\n                    }\n                }\n            } else if (iter &gt; orig_index) {\n                keep_checking = false;\n            }\n            iter++;\n        }\n        var frame_rect = frame.frameElement.getBoundingClientRect();\n        rerecognition_frame_offset_x += frame_rect.left;\n        rerecognition_frame_offset_y += frame_rect.top;\n    }\n    rerecognized_frame = frame;\n\n    return (typeof (obj) == 'object' ? obj : null);\n}\n\nvar Eep_resolve;\nvar eep_resolveOptions = {\n      eep_first_text_re: null\n    , eep_use_text: true\n    , eep_version: '6.1.1'\n};\nEep_resolve = function(eepString_, frame_, log_obj_) {\n    var eep = new Eep(eepString_, eep_resolveOptions);\n    return eep.eep_resolve(frame_, log_obj_);\n}\n\nfunction Eep_getWinAndFramePathString(agent_, frame_) {\n    if (!agent_) {\n        return null;\n    }\n\n    if (typeof(frame_) != 'object' || !frame_ || frame_ != frame_.self) {\n        return null;\n    }\n\n    if (frame_ == agent_.getGuiWindow()) {\n        return '-1';\n    }\n\n    var top_frame = agent_.getTop4Frame(frame_);\n    var window_no = agent_.getWindowContainer().getWindowNo4Window(top_frame);\n    var fp = Eep_getFramePathString(frame_, top_frame);\n\n    if (typeof(fp) != 'string') {\n        return null;\n    }\n\n    if (window_no) {\n        return window_no + (fp ? ':' + fp : '');\n    }\n\n    return false;\n}\n\nfunction Eep_getFramePathString(frame_, top_) {\n\n    var i = 1;\n    var path = '';\n    var frame = frame_;\n    var parent = frame_.parent;\n    var frame_path = \"\";\n    while (parent &amp;&amp; frame != parent &amp;&amp; frame != top_ &amp;&amp;\n           (!frame.window || frame.window != top_ \/*.window*\/))\n    {\n        var searching = true;\n        for (var ii = 0;\n             ii &lt; parent.frames.length &amp;&amp; searching;\n             ++ii)\n        {\n            try {\n                if (frame == parent.frames[ii] ||\n                    (frame.window &amp;&amp; (frame.window == parent.frames[ii].window)))\n                {\n                    searching = false;\n\t\t\t\t\t\n\t\t\t\t\tframe_path = \".\" + \"frames\" + \"[\" + ii + \"]\" + frame_path;\n\t\t\t\t\t\n                    path = ':' + ii + path;\n                }\n            } catch (exc_) {\n            }\n        }\n        frame = parent;\n        parent = frame.parent;\n        ++i;\n    }\n\telem_with_frame_path = elem_with_frame_path  + frame_path;\n    return path.substr(1);\n}\n\nfunction Eep_getRe4FirstText_(first_text_, options_) {\n    if (!options_ ||\n        !options_.eep_first_text_re ||\n        typeof(options_.eep_first_text_re.exec) != 'function')\n    {\n        return null;\n    }\n\n    var rc = options_.eep_first_text_re.exec(first_text_);\n\n    if (!rc || rc.length &lt;= 1) {\n        return '';\n    }\n\n    var ret_val = '';\n\n    for (var i = 1; i &lt; rc.length; ++i) {\n        ret_val += rc[i];\n    }\n\n    return ret_val;\n}\n\nfunction Eep_qaInputElement_(obj_, atts_) {\n    if (!obj_)\n        return false;\n\n    if (atts_.type) {\n        if (!obj_.type || (obj_.type &amp;&amp; obj_.type != atts_.type)) {\n            return '!=TYPE';\n        }\n    } else if (obj_.type) {\n        return '!=TYPE';\n    }\n    return true;\n}\n\nfunction Eep_qaElement_(obj_, atts_, options_) {\n    var rc;\n    try {\n            if (true !== (rc = Eep_qaInputElement_(obj_, atts_))) {\n                return rc;\n            }\n\n            if (atts_.id) {\n                if ((obj_.id &amp;&amp; !Eep_isDgoId_(atts_.id) &amp;&amp; obj_.id != atts_.id) || !obj_.id) {\n                    return '!=ID';\n                }\n            } else if (obj_.id) {\n                    if(obj_.document) {\n                            var coll = obj_.document.all[obj_.id];\n                            if(coll &amp;&amp; coll.length == 0) {\n                                return '!=ID';\n                            }\n                        }\n             }\n\n            if (atts_.name) {\n                if ((obj_.name &amp;&amp; obj_.name != atts_.name) || !obj_.name) {\n                    return '!=NAME';\n                }\n            } else if (obj_.name) {\n                          if(obj_.document) {\n                            var coll = obj_.document.all[obj_.name];\n                            if(coll &amp;&amp; coll.length == 0) {\n                                return '!=NAME';\n                            }\n                        }\n            }\n\n              if (!options_ || options_ &amp;&amp; options_.eep_use_text == true) {\n                if (true !== (rc = Eep_qaElementText_(obj_, atts_, options_))) {\n                    return rc;\n                }\n            }\n\n            if (atts_.mnames) {\n              if(obj_.name &amp;&amp; atts_.mnames != obj_.name) {\n                  return false;\n              } else if (!obj_.name){\n                  return false;\n              }\n         }\n        } catch (err) {\n        }\n\n    return true;\n}\n\nfunction Eep(eepString_, resolveOptions_) {\n    with (this) {\n        options_ = resolveOptions_ || {};\n        eep_ori_ = eepString_;\n        eval(eepString_);\n        path_ = eep_path;\n        coll_ = (typeof(eep_coll) == 'object' &amp;&amp; eep_coll ?\n            {collection: eep_coll.n, index: eep_coll.i, subindex: eep_coll.ii} :\n            {collection: '', index: 0, subindex: -1});\n        ok = true;\n    }\n}\n\nvar Eep_dgoID1_ = 'dgo_##_id_';\nvar Eep_dgoID2_ = 'dgo_::_id_';\n\nfunction Eep_isDgoId_(id_) {\n    var id = id_.substr(0, Eep_dgoID1_.length);\n    return id == Eep_dgoID1_ || id == Eep_dgoID2_;\n}\n\nEep.prototype = {\n\nok: false,\neep_path: null,\neep_options: null,\neep_atts: null,\neep_coll: null,\neep_parents: null,\neep_siblingTags2: null,\neep_elem_index: null,\neep_elem_tag: null,\neep_frame: null,\n\neep_resolve: function(frame_, log_obj_) {\n    this.log_obj_ = log_obj_ || new Object;\n    this.log_obj_.log = '';\n\n    if (this.options_.eep_version) {\n        this.log_('Version \"' + this.options_.eep_version + '\"' +\n            (this.options_.eep_use_text ? '; use text' : '') +\n            (this.options_.eep_first_text_re ? ('; textRe ' +\n                this.options_.eep_first_text_re) : ''));\n    }\n\n    if (!this.eep_path) {\n        this.log_('Path \"\": BODY');\n        return frame_.document.body;\n    }\n\n    if (!this.eep_atts.tagName) {\n        this.log_('tagName \"\": BODY');\n        return frame_.document.body;\n    }\n\n    var obj, msg, rc;\n\n    if (this.eep_atts.id) {\n        obj = Eep_resolveId_(frame_, this.eep_atts.id, false\/*noforce*\/);\n        msg = 'ID: ' + Eep_getNodeHtml(obj);\n\n        if (typeof(obj) == 'number') {\n            this.log_(msg + ': ' + obj + ' DUP');\n        }\n        else if (typeof(obj) == 'string') {\n            this.log_(msg + ': warn \"' + obj + '\"');\n        }\n        else if (obj) {\n            if (true === (rc = this.qaInputElement_(obj))) {\n                this.log_(msg);\n                return obj;\n            }\n\n            this.log_(msg + ' rej \"' + rc + '\"');\n\n            obj = Eep_resolveInputValue_(frame_,\n                this.eep_atts.tagName, this.eep_atts.type,\n                this.eep_atts.name, this.eep_atts.value);\n\n            if (obj) {\n                this.log_('VALUE: ' + Eep_getNodeHtml(obj));\n                return obj;\n            }\n        }\n        else {\n            this.log_(msg);\n        }\n    }\n\n    obj = Eep_resolveName_(frame_,\n        this.eep_atts.name, this.eep_atts.tagName, true \/*unique*\/);\n\n    if (obj) {\n        this.log_('NAME: ' + Eep_getNodeHtml(obj));\n        return obj;\n    }\n\n    obj = Eep_resolveSimple(frame_, this.path_, this.eep_options);\n    msg = 'EP \"' + this.path_ + '\": ' + Eep_getNodeHtml(obj);\n\n    if (true === (rc = this.qaElementAndPath_(obj))) {\n        this.log_(msg);\n        return obj;\n    }\n\n    this.log_(msg + ' rej \"' + rc + '\"');\n\n    if (this.options_.eep_use_text) {\n        obj = Eep_resolveFirstText_(frame_, this.eep_atts.tagName,\n            this.eep_atts.firstText, this.options_, this.eep_atts.L || 0);\n        msg = 'TEXT \"' + this.eep_atts.firstText + '\"' +\n            (this.eep_atts.L || '') + ': ' + Eep_getNodeHtml(obj);\n\n        if (true === (rc = this.qaElement_(obj))) {\n            this.log_(msg);\n            return obj;\n        }\n\n        this.log_(msg + ' rej \"' + rc + '\"');\n    }\n\n    obj = Eep_resolveCollection_(frame_, this.eep_atts.tagName, this.coll_);\n\n    if (obj) {\n        this.log_('COLL: ' + Eep_getNodeHtml(obj));\n        return obj;\n    }\n\n    if (this.eep_elem_tag) {\n        obj = this.Eep_resolveTagIndex_(frame_);\n\n        if (obj) {\n            this.log_('TAG Index: ' + Eep_getNodeHtml(obj));\n            return obj;\n        }\n    }\n\n    if (this.correctPathTopDown_(frame_)) {\n        obj = Eep_resolveSimple(frame_, this.path_, this.eep_options);\n        msg = 'corrEP \"' + this.path_ + '\": ' + Eep_getNodeHtml(obj);\n\n        if (true === (rc = this.qaElement_(obj))) {\n            this.log_(msg);\n            return obj;\n        }\n\n        this.log_(msg + ' rej \"' + rc + '\"');\n    }\n\n    if (this.eep_atts.id &amp;&amp; Eep_isDgoId_(this.eep_atts.id)) {\n        obj = Eep_resolveId_(frame_, this.eep_atts.id, true\/*force dgo ID*\/);\n        msg = 'DGO ID ' + this.eep_atts.id + ': ' + Eep_getNodeHtml(obj);\n\n        if (typeof(obj) == 'object' &amp;&amp; obj) {\n            if (true === (rc = this.qaElement_(obj))) {\n                this.log_(msg);\n                return obj;\n            }\n\n            this.log_(msg + ' rej \"' + rc + '\"');\n        }\n        else {\n            this.log_(msg);\n        }\n    }\n\n    this.log_('(-1==cannot find) ' + this);\n    return -1;\n},\n\nEep_resolveTagIndex_: function(frame_) {\n    var obj = null;\n    var tag_coll = frame_.document.getElementsByTagName(this.eep_elem_tag);\n    if (tag_coll) {\n        var coll_length = tag_coll.length;\n        obj = tag_coll.item(Number(this.eep_elem_index));\n        msg = 'ID: ' + Eep_getNodeHtml(obj);\n        current_rerecognition_elem_index = Number(this.eep_elem_index);\n        if (true === (rc = this.qaElement_(obj))) {\n            this.log_(msg);\n            elem_index_within_frame = Number(this.eep_elem_index);\n            return obj;\n        } else {\n            var orig_index = Number(this.eep_elem_index);\n            var iter = 1;\n            var keep_checking = true;\n            while (keep_checking) {\n                var trial_index = orig_index - iter;\n                if (trial_index &gt;= 0) {\n                    obj = tag_coll.item(trial_index);\n                    msg = 'ID: ' + Eep_getNodeHtml(obj);\n                    current_rerecognition_elem_index = trial_index;\n                    if (true === (rc = this.qaElement_(obj))) {\n                        this.log_(msg);\n                        elem_index_within_frame = trial_index;\n                        return obj;\n                    }\n                }\n                trial_index = orig_index + iter;\n                if (trial_index &lt; coll_length) {\n                    obj = tag_coll.item(trial_index);\n                    msg = 'ID: ' + Eep_getNodeHtml(obj);\n                    current_rerecognition_elem_index = trial_index;\n                    if (true === (rc = this.qaElement_(obj))) {\n                        this.log_(msg);\n                        elem_index_within_frame = trial_index;\n                        return obj;\n                    }\n                } else if (iter &gt; orig_index) {\n                    keep_checking = false;\n                }\n                iter++;\n                if (iter &gt; 50) {\n                    keep_checking = false;\n                }\n            }\n        }\n    }\n    return obj;\n},\n\ntoString: function() {\n    if (this.eep_ori_) {\n        return 'Eep={path:\"' + this.path_ +\n               '\",opt:\"' + this.options_ +\n               '\",ori:\"' + this.eep_ori_ + '\"}';\n    }\n\n    return 'Eep=' + DHtml_dumpObj(this);\n},\n\nvalueOf: function() {\n    return this.toString();\n},\n\noptions_: null,\npath_: null,\ncoll_: null,\neep_ori_: null,\nlog_obj_: null,\n\nlog_: function(msg_, flagNoLF_) {\n    this.log_obj_.log += msg_;\n    if (flagNoLF_)\n        return;\n    this.log_obj_.log += '\\r\\n';\n},\n\nqaElement_: function(obj_) {\n    return Eep_qaElement_(obj_, this.eep_atts, this.options_);\n},\n\nqaInputElement_: function(obj_) {\n    return Eep_qaInputElement_(obj_, this.eep_atts);\n},\n\nqaElementAndPath_: function(obj_) {\n    var rc;\n\n    if (true !== (rc = this.qaElement_(obj_))) {\n        return rc;\n    }\n\n    return this.qaPath_(obj_);\n}\n\n}\n\nvar String_ltrimRE_ = \/^[ \\r\\n\\t\\xA0]*(.*$)\/m;\nvar String_rtrimRE_ = \/[ \\r\\n\\t\\xA0]*$\/m;\n\nString.prototype.ltrim = function() {\n    return String_ltrimRE_.exec(this)[1];\n}\n\nString.prototype.rtrim = function() {\n    var match = String_rtrimRE_.exec(this);\n    return this.substr(0, this.length - match[0].length);\n}\n\nString.prototype.alltrim = function() {\n    var ret_val = this.ltrim();\n    return ret_val.rtrim();\n}\n\nString.prototype.asJSstring = function() {\n    ret_val = new String(this);\n    ret_val = ret_val.replace(\/[\\\\]\/g, \"\\\\\\\\\");\n    ret_val = ret_val.replace(\/[\"\"]\/g, '\\\\\"');\n    ret_val = ret_val.replace(\/[\\n]\/g, '\\\\n');\n    ret_val = ret_val.replace(\/[\\r]\/g, '\\\\r');\n    ret_val = ret_val.replace(\/[\\t]\/g, '\\\\t');\n    ret_val = ret_val.replace(\"'\", '');\n    return '\"' + ret_val + '\"';\n}\n\nfunction Eep_resolveFrameSimple(path_, win_, options_) {\n    var frame = win_ || window.top;\n\n    if (path_ == '') {\n        return frame;\n    }\n\n    var options = options_ || 0;\n    var path = path_.split(':');\n\n    for (var i = 0; frame &amp;&amp; i &lt; path.length; ++i) {\n        var idx = path[i] - 0;\n        if (i == (path.length -1)) {\n            frame = (idx &lt; frame.frames.length ? frame.frames[idx] : frame.frames[frame.frames.length-1]);\n        } else {\n            frame = (idx &lt; frame.frames.length ? frame.frames[idx] : frame);\n        }\n        var frame_rect = frame.frameElement.getBoundingClientRect();\n        rerecognition_frame_offset_x += frame_rect.left;\n        rerecognition_frame_offset_y += frame_rect.top;\n    }\n    return frame;\n}\n\nfunction Eep_resolveSimple(frame_, path_, options_, log_obj_, base_el_) {\n    var el = frame_.document.body;\n\n    if (path_ == '')\n        return el;\n\n    el = base_el_ || el;\n\n    var options = options_ || 0;\n    var log_obj = log_obj_ || new Object;\n    log_obj.log = 'frame ' + frame_.name + ' = \"' + frame_.location.href + '\"; ';\n    var path = path_.split(':');\n    var i, idx, children, ii, child, type;\n\n    for (i = 0; el &amp;&amp; i &lt; path.length; ++i) {\n        idx = path[i] - 0;\n\n        children = (options &amp; 1\n            ? el.childNodes \/*W3C Std*\/\n            : el.children \/*IE*\/ || el.childNodes \/*W3C Std*\/);\n\n        el = null;\n        log_obj.log += (i + 1) + '.) ' + children.length + ' children.\\r\\n';\n\n        for (ii = 0; el == null &amp;&amp; ii &lt; children.length; ++ii) {\n            child = children[ii];\n            type = (options &amp; 1 &amp;&amp; child.tagName &amp;&amp; child.tagName == '!' ?\n                    8 \/*comment*\/ : child.nodeType);\n\n            log_obj.log += '  ' + ii + '\/' + idx + ': ' + Eep_getNodeHtml(child);\n\n            if (type == 1 &amp;&amp; idx == 0) {\n                log_obj.log += ' ok.';\n                el = child;\n            }\n            else {\n                if (options &amp; 1) {\n                    if (type == 1) {\n                        --idx;\n                    }\n                } else {\n                    if (type != 3) {\n                        --idx;\n                    }\n                }\n            }\n\n            log_obj.log += '\\r\\n';\n        }\n    }\n\n    return el;\n}\n\nfunction Eep_generate(obj_, frame_) {\n    var eep_useInnerText = ':A:TD:SPAN:NOBR:LABEL:STRONG:FONT:B:U:';\n    var eep_textTruncation = 50;\n    var obj = (obj_.nodeType == 3 ? obj_.parentNode : obj_);\n\n    var options = 1 + (eep_useInnerText ? 2 : 0);\n    var eepString = 'eep_path=\"' + Eep_getPathString(obj, 1) + '\";\\r\\n';\n    eepString += 'eep_options=' + options + ';eep_version=\"6.1.1\";\\r\\n';\n    eepString += ('eep_atts={' + Eep_generateAttsString_(\n        obj, frame_, options, eep_useInnerText, eep_textTruncation) + '};\\r\\n');\n    eepString += ('eep_coll={' + Eep_generateCollectionString_(\n        obj, frame_) + '};\\r\\n');\n    eepString += ('eep_parents=[' + Eep_generateParentsString_(\n        obj, frame_, options) + '];');\n    eepString += '\\r\\neep_siblingTags2=\"' +\n        Eep_generateSiblingsString_(obj) + '\";';\n    eepString += '\\r\\n' + Eep_generateExtraInfo_(obj);\n    return eepString;\n}\n\nfunction Eep_generateExtraInfo_(obj_) {\n    if (!obj_) {\n        return '';\n    }\n    var str = '';\n    var tagname = obj_.tagName;\n    var tag_coll = obj_.document.getElementsByTagName(tagname);  \/\/test for multiple frame case\n    var tag_coll_length = tag_coll.length;\n    for (var i = 0; i &lt; tag_coll_length; i++) {\n        var child = tag_coll.item(i);\n        if (obj_ == child) {\n            str = 'eep_elem_index=\"' + i + '\";eep_elem_tag=\"' + tagname + '\";';\n            break;\n        }\n    }\n    return str;\n}\n\nfunction Eep_getPathString(obj_, options_) {\n    var options = options_ || 0;\n\n    if (options &amp; 4 \/*top-down*\/) {\n        return Eep_getPathString2_(obj_, options);\n    }\n\n    var er = '';    \/\/ datango simple element reference\n    var x = obj_;   \/\/ element\n    var i, ii, p, children, kk, child;\n\n    if (x.nodeType == 3 \/*text*\/ ||\n        (x.tagName &amp;&amp; x.tagName != 'APPLET' &amp;&amp; x.tagName != 'EMBED' &amp;&amp;\n         (x.tagName != x.tagName.toUpperCase() \/*XUL*\/ ||\n          x.toString().indexOf('XUL') &gt;= 0)))\n    {\n        x = x.parentNode;\n    }\n\n    while (x &amp;&amp; (p = x.parentNode) != null &amp;&amp;\n           typeof(x.tagName) == 'string' &amp;&amp;\n           x.tagName != 'BODY' &amp;&amp; x.tagName != 'FRAMESET')\n    {\n        children = (options &amp; 1\n            ? p.childNodes \/*W3C Std*\/\n            : p.children \/*IE*\/ || p.childNodes \/*W3C Std*\/);\n        kk = -1;\n\n        for (ii = 0; child != x &amp;&amp; ii &lt; children.length; ++ii) {\n            child = children[ii];\n\n            if (options &amp; 1) {\n                if (child.nodeType == 1  &amp;&amp;  child.tagName != '!') {\n                    ++kk;\n                }\n            }\n            else {  \/\/ Producer compatible\n                if (child.nodeType != 3) {  \/\/ DOM Text Node\n                    ++kk;\n                }\n            }\n        }\n\n        if (child != x) {\n            \/\/alert('Simple EP generation error (child not found) at\\n\"' +\n            \/\/    er + '\", ' + ii + ',' + kk + ':\\n' + Eep_getNodeHtml(obj_));\n            return '';\n        }\n\n        if (er)\n            er = ':' + er;\n\n        er = kk + er;\n        x = p;\n    }\n    return er;\n}\n\nvar Eep_attrNames_ = ['id', 'name', 'tagName', 'type'];\n\nfunction Eep_generateAttsString_(\n    obj_, frame_, options_, tags4text_, text_truncation_)\n{\n    var str = '';\n    var i, att, v, t;\n    var multiple_names = false;\n    for (i = 0; i &lt; Eep_attrNames_.length; ++i) {\n        att =  Eep_attrNames_[i];\n        v =  obj_[att];\n        t = typeof(v);\n\n        if (v &amp;&amp; t == 'string') {\n            if (att == 'id') {\n                var el;\n                if (frame_.document.all &amp;&amp;\n                    (el = frame_.document.all[v]) &amp;&amp;\n                    typeof(el.length) == 'number' &amp;&amp;\n                    el.length != 1)\n                {   \/\/ mySAP, i.e., has lots of duplicate IDs\n                    v = '';\n                    t = 'string';  \/\/ this makes the following ignore the ID\n                }\n            }\n\n            if (att == 'name') {\n                if (frame_.document.getElementsByName(v).length != 1) {\n                    multiple_names = true;\n                    v = '';\n                    t = 'string';  \/\/ this makes the following ignore the ID\n                }\n            }\n        }\n\n        if (v || (t != 'undefined' &amp;&amp; t != 'unknown' &amp;&amp; t != 'string')) {\n\n            if (str != '')\n                str += ',';\n\n            if (att == 'type' &amp;&amp; v == 'radio') {\n                str += ('value:' + obj_.value.asJSstring() + ',');\n            }\n\n            if (t == 'number') {\n                str += (att + ':' + v);\n            } else {\n                if (att == 'tagName' &amp;&amp; v == 'FRAME') {\n                    v = 'BODY';\n                }\n                str += (att + ':\"' + v + '\"');\n            }\n        }\n    }\n\n    if (obj_.tagName &amp;&amp; tags4text_ &amp;&amp;\n        tags4text_.indexOf(':' + obj_.tagName + ':') &gt;= 0)\n    {\n        var t = Eep_getFirstTextNodeValue_(\n            obj_, text_truncation_, true \/*with delimiter*\/);\n        if (t) {\n            str += (text_truncation_ &gt; 0\n                ? ',L:' + text_truncation_ + ',firstText:' + t.asJSstring()\n                : ',firstText:' + t.asJSstring());\n        }\n    }\n\n    if (multiple_names) {\n        str += (',mnames' + ':\"' + obj_.name + '\"');\n    }\n\n    return str;\n}\n\nfunction Eep_getFirstTextNodeValue_(obj_, text_truncation_, flagDelimiter_) {\n    var node = Eep_getFirstTextNode_(obj_);\n\n    if (!node || typeof(node.nodeValue) != 'string') {\n        return '';\n    }\n\n    var ret_val = (new String(node.nodeValue)).alltrim();\n\n    return text_truncation_ &gt; 0 &amp;&amp; ret_val.length &gt; text_truncation_\n        ? ret_val.substr(0, text_truncation_) + (flagDelimiter_ ? '^' : '')\n        : ret_val;\n}\n\nvar Eep_getFirstTextNodeRE_ = \/[']?[^ \\r\\n\\t][']?\/;\n\nfunction Eep_getFirstTextNode_(obj_) {\n    var children = obj_.childNodes || [];  \/\/ DOM child collection with text nodes\n    var node;\n\n    for (var i = 0; i &lt; children.length; ++i) {\n        node = children[i];\n        if (node.nodeType &amp;&amp; node.nodeType == 3  &amp;&amp;\n            node.nodeValue.search(Eep_getFirstTextNodeRE_) &gt;= 0)\n        {\n            return node;\n        }\n    }\n\n    return null;\n}\n\nfunction Eep_generateParentsString_(obj_, frame_, options_, tags4text_) {\n    return '';  \/\/ Now we don't require parent info as ReRecognition doesn't have top down approach\n    if (!obj_ || obj_.tagName == 'BODY' ||\n        obj_.tagName == 'FRAME' || !obj_.parentNode)\n    {\n        return '';\n    }\n\n    var str = '';\n    var p = obj_.parentNode;\n\n    while (p &amp;&amp; p.tagName != 'BODY' &amp;&amp; p.tagName != 'FRAME') {\n        str += (',\\r\\n{' + Eep_generateAttsString_(\n            p, frame_, options_, '', 0) + '}');\n        p = p.parentNode;\n    }\n\n    return str.substr(3);\n}\n\nfunction Eep_generateSiblingsString_(obj_) {\n    if (!obj_ || !obj_.parentNode ||\n        obj_.tagName == 'BODY' || obj_.tagName == 'FRAME')\n    {\n        return '';\n    }\n\n    var str = '';\n    var children = obj_.parentNode.childNodes;\n    var child;\n\n    for (var i = 0; i &lt; children.length; ++i) {\n        child = children[i];\n\n        if (child.nodeType == 1  &amp;&amp;  child.tagName != '!') {  \/*exclude comments*\/\n            if (child.tagName.substr(0, 1) != '\/') {\n                if (child == obj_) {\n                    str += (':_' + children[i].tagName + '_');\n                }\n                else {\n                    str += (':' + children[i].tagName);\n                }\n            }\n        }\n    }\n\n    return str.substr(1);\n}\n\nfunction Eep_generateCollectionString_(x_, frame_) {\n    var ret_val = Eep_generateCollectionObject_(x_, frame_);\n    return (ret_val ?\n        'n:\"' + ret_val.n + '\",i:' + ret_val.i + ',ii:' + ret_val.ii :\n        'n:\"\",i:0,ii:-1');\n}\n\nfunction Eep_generateCollectionObject_(x_, frame_) {\n    if (!x_) {\n        return null;\n    }\n\n    var ret_val = null;\n\n    switch (x_.tagName) {\n    case 'INPUT':\n    case 'TEXTAREA':\n    case 'SELECT':\n    case 'OPTION':\n    case 'BUTTON':\n    case 'FORM':\n        ret_val = Eep_getElementCollection_('forms', x_, frame_);\n        break;\n\n    case 'IMG':\n        ret_val = Eep_getElementCollection_('images', x_, frame_);\n        break;\n\n    case 'A':\n        ret_val = Eep_getElementCollection_(\n            (x_.name ? 'anchors' : 'links'), x_, frame_);\n        break;\n\n    case 'DIV':\n        ret_val = Eep_getElementCollection_('layers', x_, frame_);\n        break;\n\n    case 'APPLET':\n        ret_val = Eep_getElementCollection_('applets', x_, frame_);\n        break;\n\n    case 'EMBED':\n        ret_val = Eep_getElementCollection_('embeds', x_, frame_);\n        break;\n\n    default:\n        break;\n    }\n\n    return ret_val;\n}\n\nfunction Eep_getElementCollection_(collName_, x_, frame_) {\n    var coll = (frame_ ? frame_.document[collName_] : null);\n\n    if (typeof(coll) == 'object' &amp;&amp; coll &amp;&amp; typeof(coll.length) == 'number') {\n        var cmp;\n        var ii;\n        for (var i = 0; i &lt; coll.length; ++i) {\n            cmp = coll[i];\n\n            if (cmp == x_) {\n                return {n: collName_, i: '' + i, ii: '-1'};\n            }\n            else if (typeof(cmp) == 'object' &amp;&amp; typeof(cmp.length) == 'number') {\n                for (ii = 0; ii &lt; cmp.length; ++ii) {\n                    if (cmp[ii] == x_) {\n                        return {n: collName_,\n                            i: '' + i, ii: '' + ii};\n                    }\n                }\n            }\n        }\n    }\n\n    return {n: '', i: '0', ii: '-1'};\n}\n\nfunction Eep_getElementRef(obj_, frame_) {\n    var coll = Eep_generateCollectionObject_(obj_, frame_) ||\n               {n: '', i: '0', ii: '-1'};\n    return new ElementRef(\n        Eep_getPathString(obj_), \/* Producer compatible *\/\n        coll.n, coll.i, coll.ii,\n        Eep_generate(obj_, frame_));\n}\n\nfunction Eep_resolveId_(frame_, id_, flagForceDgoID_) {\n    if (!id_)\n        return null;\n\n    if (!flagForceDgoID_ &amp;&amp; Eep_isDgoId_(id_)) {\n        return 'dgo';\n    }\n\n    if (frame_.document.all &amp;&amp;\n        frame_.document.all[id_] &amp;&amp;\n        typeof(frame_.document.all[id_].length) == 'number' &amp;&amp;\n        frame_.document.all[id_].length != 1)\n    {\n        return frame_.document.all[id_].length;\n    }\n\n    return frame_.document.getElementById(id_);\n}\n\nfunction Eep_resolveName_(frame_, name_, tagname_ \/*NC4 only*\/, flagUnique_) {\n    if (!name_)\n        return null;\n\n    var objs = frame_.document.getElementsByName(name_);\n    if (objs.length == 0 || flagUnique_ &amp;&amp; objs.length &gt; 1) {\n        return null;\n    }\n\n    return objs[0];\n}\n\nfunction Eep_resolveInputValue_(frame_, tagname_, type_, name_, value_) {\n    if (tagname_ != 'INPUT' &amp;&amp; type_ != 'radio') {\n        return null;\n    }\n\n    var objs = frame_.document.getElementsByName(name_);\n    if (objs.length == 0) {\n        return null;\n    }\n\n    var obj;\n    for (var i = 0; i &lt; objs.length; ++i) {\n        obj = objs[i];\n\n        if (obj.type == 'radio' &amp;&amp; obj.value == value_) {\n            return obj;\n        }\n    }\n\n    return null;\n}\n\nfunction Eep_resolveFirstText_(\n    frame_, tagname_, first_text_, options_, text_truncation_)\n{\n    if (!first_text_) {\n        return null;\n    }\n\n    if (text_truncation_ &gt; 0 &amp;&amp; first_text_.length == text_truncation_ + 1 &amp;&amp;\n        first_text_.charAt(text_truncation_) == '^')\n    {\n        first_text_ = first_text_.substr(0, text_truncation_);\n    }\n\n    var objs_hit = [];\n    var objs = frame_.document.getElementsByTagName(tagname_);\n    var cmp1 = Eep_getRe4FirstText_(first_text_, options_);\n    var i, obj, cmp2;\n\n    if (cmp1) {\n        for (i = 0; i &lt; objs.length; ++i) {\n            obj = objs[i];\n            cmp2 = Eep_getFirstTextNodeValue_(obj, text_truncation_);\n\n            if (cmp1 == Eep_getRe4FirstText_(cmp2, options_)) {\n                objs_hit[objs_hit.length] = obj;\n            }\n        }\n    }\n    else {\n        for (i = 0; i &lt; objs.length; ++i) {\n            obj = objs[i];\n            cmp2 = Eep_getFirstTextNodeValue_(obj, text_truncation_);\n\n            if (first_text_ == cmp2) {\n                objs_hit[objs_hit.length] = obj;\n            }\n        }\n    }\n\n    return (objs_hit.length == 1 ? objs_hit[0] : null);\n}\n\nfunction Eep_resolveCollection_(frame_, tagname_, coll_) {\n    return null;\n}\n\nfunction Eep_qaElementText_(obj_, atts_, options_) {\n    if (atts_.firstText) {\n       var newtext = Eep_getFirstTextNodeValue_(\n                    obj_, 50, true \/*with delimiter*\/);\n        var firstText = atts_.firstText;\n        var textTruncation = atts_.L || 0;\n\n        if (textTruncation &gt; 0 &amp;&amp; firstText.length == textTruncation + 1 &amp;&amp;\n            firstText.charAt(textTruncation) == '^')\n        {\n            firstText = firstText.substr(0, textTruncation);\n        }\n        if (textTruncation &gt; 0 &amp;&amp; newtext.length == textTruncation + 1 &amp;&amp;\n            newtext.charAt(textTruncation) == '^')\n        {\n            newtext = newtext.substr(0, textTruncation);\n        }\n        if (firstText != newtext) {\n            return '!=TextTRIM';\n        }\n    }\n    return true;\n}\n\nfunction Eep_getPathString2_(obj_, options_) {\n    var options = options_ || 0;\n    var er = '';\n    var x = obj_;\n    var i, ii, p, children, kk, child;\n\n    if (x.nodeType == 3 \/*text*\/ ||\n        (x.tagName &amp;&amp; x.tagName != 'APPLET' &amp;&amp; x.tagName != 'EMBED' &amp;&amp;\n         (x.tagName != x.tagName.toUpperCase() \/*XUL*\/ ||\n          x.toString().indexOf('XUL') &gt;= 0)))\n    {\n        x = x.parentNode;\n    }\n\n    var body;\n\n    if (x &amp;&amp; x.ownerDocument) {\n        body = x.ownerDocument.body;\n    }\n    else {\n        var p = x;\n\n        while(p &amp;&amp; p.tagName != 'BODY') {\n            p = p.parentNode;\n        }\n\n        if (!p) {\n            return 'EPerr:above_body';\n        }\n\n        body = p;\n    }\n\n    var ret_val = Eep_getPathString2_rek_(body, x, options_);\n    return ret_val === false ? 'EPerr:not_found' : ret_val;\n}\n\n\nfunction Eep_getPathString2_rek_(parent_, obj_, options_) {\n    if (parent_ == obj_) {\n        return '';\n    }\n\n    var children = (options_ &amp; 1\n            ? parent_.childNodes \/*W3C Std*\/\n            : parent_.children \/*IE*\/ || parent_.childNodes \/*W3C Std*\/);\n\n    var kk = -1;\n    var i, child, rc;\n\n    for (i = 0; i &lt; children.length; ++i) {\n        child = children[i];\n\n        if (options_ &amp; 1) {\n            if (child.nodeType == 1  &amp;&amp;  child.tagName != '!') {\n                ++kk;\n            }\n        }\n        else {\n            if (child.nodeType != 3) {\n                ++kk;\n            }\n        }\n\n        if (child.nodeType == 1  &amp;&amp;  child.tagName != '!' &amp;&amp;\n            false !== (rc = Eep_getPathString2_rek_(child, obj_, options_)))\n        {\n            return rc ? kk + ':' + rc : '' + kk;\n        }\n    }\n\n    return false;\n}\n\nfunction Eep_getNodeHtml(obj_) {\n    if (typeof(DHtml_getNodeHtml) == 'function') {\n        return DHtml_getNodeHtml(obj_);\n    }\n\n    if (!obj_)\n        return '(null)';\n\n    if (typeof(obj_) != 'object') {\n        return '\"' + obj_ + '\" [' + typeof(obj_) + ']';\n    }\n\n    if (obj_.tagName)\n        return obj_.tagName;\n\n    if (obj_.nodeType)\n        return '(nodetype=' + obj_.nodeType + ')';\n\n    return '(?)';\n}\n\nfunction eep_standard_init_() {\n\nEep.prototype.qaCollection_ = function(frame_, obj_) {\n    var collection = Eep_generateCollectionObject_(obj_, frame_);\n\n    if (!collection || !collection.n || !this.eep_coll.n) {\n        return true;\n    }\n\n    return (collection.n == this.eep_coll.n &amp;&amp;\n            collection.i == this.eep_coll.i &amp;&amp;\n            collection.ii == this.eep_coll.ii ? true : '!=COLL');\n}\n\nEep.prototype.qaPath_ = function(obj_) {\n    if (!obj_)\n        return false;\n\n    if (obj_.tagName == 'BODY' || obj_.tagName == 'FRAME')\n        return true;\n\n    var i = 0;\n    var p = obj_.parentNode;\n    var parent, atts;\n\n    while (p &amp;&amp; p.tagName != 'BODY' &amp;&amp; p.tagName != 'FRAME' &amp;&amp;\n           typeof(this.eep_parents[i]) == 'object')\n    {\n        parent = this.eep_parents[i];\n        atts = parent.eep_atts \/*before 5.2.4*\/ || parent;\n\n        if (!Eep_qaElement_(p, atts)) {\n            return '!=PATH(' + i + ')';\n        }\n        p = p.parentNode;\n        ++i;\n    }\n\n    return true;\n}\n\nEep.prototype.qaSiblings_ = function(obj_) {\n    if (typeof (this.eep_siblingTags2) != 'string') {\n        return true;\n    }\n\n    return (Eep_generateSiblingsString_(obj_) ==\n        this.eep_siblingTags2 ? true : '!=SIBL');\n}\n\nEep.prototype.correctPathTopDown_ = function(frame_) {\n    var new_parent = null;\n    var path = this.eep_path;\n    var old_parent, old_atts, msg;\n\n    for (var i = 0; new_parent == null &amp;&amp; i &lt; this.eep_parents.length; ++i) {\n        path = path.substr(0, path.lastIndexOf(':'));\n        old_parent = this.eep_parents[i];\n        old_atts = old_parent.eep_atts \/*until 5.2.4*\/ || old_parent;\n\n        if (old_atts.id) {\n            new_parent = Eep_resolveId_(frame_, old_atts.id, false);\n            msg = 'corr id \"' + old_atts.id + '\": ' + Eep_getNodeHtml(new_parent);\n\n            if (typeof(new_parent) != 'object') {\n                new_parent = null;\n            }\n        }\n        else if(old_atts.name) {\n            new_parent = Eep_resolveName_(\n                frame_, old_atts.name, true \/*unique*\/);\n            msg = 'corr name \"' + old_atts.name + '\": ' +\n                Eep_getNodeHtml(new_parent);\n        }\n    }\n\n    if (!new_parent) {\n        return false;\n    }\n\n    var newpath = Eep_getPathString(new_parent, this.eep_options);\n    this.path_ = newpath + this.path_.substr(path.length);\n    this.log_(msg + '; corrEP \"' + path + '\" =&gt; \"' +\n        newpath + '\" =&gt; \"' + this.path_ + '\"');\n\n    return true;\n}\n\n}\n\nif (self.dynLoader) {  \/\/ paths relative to dynloader.html\n    dynLoader.scriptLoaded(new DynScript(\n        '..\/eep_standard.js', ['..\/eep.js'], eep_standard_init_));\n}\nelse {\n    eep_standard_init_();\n}\n<\/GlobalScript>\r\n            <\/HTML>\r\n            <HTML3 handle_zoom=\"1\" has_context_info=\"0\" batch_rerecognition=\"0\" pgkey_fback=\"0\" set_attrb=\"0\" capture_multiple_dlg=\"0\" ignore_dynamic_ids=\"1\">\r\n                <GlobalScript><\/GlobalScript>\r\n            <\/HTML3>\r\n            <DIG generate_path=\"0\">\r\n                <Settings>\r\n                    <CParams min_object_height=\"8\" min_object_width=\"8\">\r\n                        <ClusterParams epsh=\"4\" epsv=\"6\" min_pts=\"2\" max_cl_size=\"20\"\/>\r\n                        <ClusterParams epsh=\"15\" epsv=\"1\" min_pts=\"1\" max_cl_size=\"20\"\/>\r\n                        <ClusterParams epsh=\"10\" epsv=\"1\" min_pts=\"10\" max_cl_size=\"20\"\/>\r\n                        <ClusterParams epsh=\"10\" epsv=\"1\" min_pts=\"11\" max_cl_size=\"16\"\/>\r\n                    <\/CParams>\r\n                    <RParams max_gap=\"2\" min_line_length=\"10\" threshold=\"30\"\/>\r\n                    <CiParams circle_threshold=\"0.700000\" inner_threshold=\"0.650000\" outer_threshold=\"0.670000\"\/>\r\n                <\/Settings>\r\n                <PointAnalyzing all=\"0\" analyze_width=\"100\" analyze_height=\"80\" merge_cross_objects=\"0\"\/>\r\n                <Contexts>\r\n                    <Context type=\"menubar\" max_hor_inter_obj_dist=\"30\" max_vert_inter_obj_dist=\"10\" top_min_dist=\"15\" top_max_dist=\"70\">\r\n                        <ObjectSize>\r\n                            <WidthRange min=\"9\" max=\"300\"\/>\r\n                            <HeightRange min=\"8\" max=\"25\"\/>\r\n                        <\/ObjectSize>\r\n                        <Alignment type=\"center\" direction=\"horizontal\" maxdiff=\"3\"\/>\r\n                        <Alignment type=\"left\" direction=\"vertical\" maxdiff=\"1\"\/>\r\n                    <\/Context>\r\n                <\/Contexts>\r\n            <\/DIG>\r\n            <SAPB1 generate_path=\"1\" analyze_point_timeout=\"3000\" get_pagekey_timeout=\"7000\"\/>\r\n            <GRAPHIC>\r\n                <SupportedDesigns\/>\r\n                <FontTemplateFiles>\r\n                    <FontTemplateFile file=\"glyphs_latin_Arial_size10.xml\"\/>\r\n                <\/FontTemplateFiles>\r\n            <\/GRAPHIC>\r\n        <\/Global>\r\n    <\/CTHeader>\r\n<\/ConfigurationTemplate><\/CTFile>\n<CTFile name=\"Standard\">\n<ConfigurationTemplate>\r\n    <CTHeader webcompat=\"0\" proc_error_correction=\"0\" revision=\"$Id: header.xml,v 1.14 2011-03-10 16:50:56 stefanh Exp $\" text_recognition_mode=\"3\" text_recognition_methods=\"\" profile_language=\"eng\">\r\n        <Header threshold=\"0.800000\">\r\n            <PageID>\r\n                <Attributes>\r\n                    <MSAA value=\"act_tabs,act_treeitem,desc,page_id,state,text,type,value\"\/>\r\n                    <WINDOWS value=\"class,ex_style,text\"\/>\r\n                <\/Attributes>\r\n            <\/PageID>\r\n            <ContextID object_attribute=\"\" context_attribute_name=\"\" rule=\"0\"\/>\r\n            <Ident classname=\"\" exename=\"\" urls=\"\" version=\"\" caption=\"\"\/>\r\n        <\/Header>\r\n        <Global min_w=\"-1\" min_h=\"-1\" max_w=\"-1\" max_h=\"-1\">\r\n            <SAP recursion_level=\"3\" has_context_info=\"0\" find_embedded=\"0\" access_check=\"0\"\/>\r\n            <JAVA use_jab_watcher=\"1\" jab_tab_lookuplevel=\"3\" jab_tree_lookuplevel=\"3\" enable_jab_button_handler=\"1\" jab_rerecognition_use_name=\"1\" max_sl_edit_jab_height=\"0\" init_with_setpage=\"0\" jab_generate_path=\"1\" java_rere_use_empty_name=\"1\" java_use_fast_path=\"1\" access_check=\"0\"\/>\r\n            <MSAA generate_path=\"1\" max_name_objs=\"0\" msaa_tab_lookuplevel=\"3\" msaa_tree_lookuplevel=\"3\" rerecognition_use_names=\"0\"\/>\r\n            <UIAutomation uia_tab_lookuplevel=\"3\" uia_tree_lookuplevel=\"3\" unique_ids=\"0\" rerecognition_use_names=\"0\" uia_generate_path=\"1\" max_name_objs=\"0\"\/>\r\n            <UIACOM caching=\"0\" generate_path=\"1\" max_name_objs=\"200\"\/>\r\n            <HTML handle_zoom=\"1\" has_context_info=\"0\" batch_rerecognition=\"0\" pgkey_fback=\"0\" set_attrb=\"0\" capture_multiple_dlg=\"0\" ignore_dynamic_ids=\"1\">\r\n                <GlobalScript\/>\r\n            <\/HTML>\r\n            <HTML3 handle_zoom=\"1\" has_context_info=\"0\" batch_rerecognition=\"0\" pgkey_fback=\"0\" set_attrb=\"0\" capture_multiple_dlg=\"0\" ignore_dynamic_ids=\"1\">\r\n                <GlobalScript\/>\r\n            <\/HTML3>\r\n            <DIG generate_path=\"0\">\r\n                <Settings>\r\n                    <CParams min_object_height=\"8\" min_object_width=\"8\">\r\n                        <ClusterParams epsh=\"4\" epsv=\"6\" min_pts=\"2\" max_cl_size=\"20\"\/>\r\n                        <ClusterParams epsh=\"15\" epsv=\"1\" min_pts=\"1\" max_cl_size=\"20\"\/>\r\n                        <ClusterParams epsh=\"10\" epsv=\"1\" min_pts=\"10\" max_cl_size=\"20\"\/>\r\n                        <ClusterParams epsh=\"10\" epsv=\"1\" min_pts=\"11\" max_cl_size=\"16\"\/>\r\n                    <\/CParams>\r\n                    <RParams max_gap=\"1\" min_line_length=\"10\" threshold=\"30\"\/>\r\n                    <CiParams circle_threshold=\"0.800000\" inner_threshold=\"0.950000\" outer_threshold=\"0.950000\">\r\n                        <RadiusRange min=\"6\" max=\"7\"\/>\r\n                    <\/CiParams>\r\n                <\/Settings>\r\n                <PointAnalyzing all=\"0\" analyze_width=\"50\" analyze_height=\"250\" merge_cross_objects=\"1\"\/>\r\n                <Contexts>\r\n                    <Context type=\"menubar\" max_hor_inter_obj_dist=\"30\" max_vert_inter_obj_dist=\"10\" top_min_dist=\"15\" top_max_dist=\"70\">\r\n                        <ObjectSize>\r\n                            <WidthRange min=\"9\" max=\"300\"\/>\r\n                            <HeightRange min=\"8\" max=\"25\"\/>\r\n                        <\/ObjectSize>\r\n                        <Alignment type=\"center\" direction=\"horizontal\" maxdiff=\"3\"\/>\r\n                        <Alignment type=\"left\" direction=\"vertical\" maxdiff=\"1\"\/>\r\n                    <\/Context>\r\n                <\/Contexts>\r\n            <\/DIG>\r\n            <SAPB1 generate_path=\"1\" analyze_point_timeout=\"3000\" get_pagekey_timeout=\"7000\"\/>\r\n            <GRAPHIC>\r\n                <SupportedDesigns\/>\r\n                <FontTemplateFiles>\r\n                    <FontTemplateFile file=\"glyphs_latin_MS_Sans_Serif_size8_incl_underlines.xml\"\/>\r\n                    <FontTemplateFile file=\"glyphs_latin_MS_Sans_Serif_size9_incl_underlines.xml\"\/>\r\n                    <FontTemplateFile file=\"glyphs_latin_Tahoma_size8_incl_underlines.xml\"\/>\r\n                    <FontTemplateFile file=\"glyphs_latin_Tahoma_size9_incl_underlines.xml\"\/>\r\n                    <FontTemplateFile file=\"glyphs_latin_Arial_size9_incl_underlines.xml\"\/>\r\n                    <FontTemplateFile file=\"glyphs_latin_Arial_size8_incl_underlines.xml\"\/>\r\n                <\/FontTemplateFiles>\r\n            <\/GRAPHIC>\r\n        <\/Global>\r\n    <\/CTHeader>\r\n<\/ConfigurationTemplate><\/CTFile>\n<\/CTRoot>\n"
        }]
    }, {
        "index": 1,
        "title": "SuccessFactors Log in - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_29839C30DD544F6794D90F0F210F10CF",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_3704038A9B2C32B0",
            "new_step": "SuccessFactors Log in - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1019,
                "height": 559
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_B7DE8F1033825899",
            "explanation_d": "<p><span style=\"font-weight:bold\">Log in<\/span> to the Instance. <\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 171,
            "b_height": 85,
            "orientation": "NW",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.393393",
                    "y": "0.588785"
                },
                "DocXY": {
                    "x": "0.393393",
                    "y": "0.588785"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.610376",
                    "y": "0.592874"
                },
                "DocXY": {
                    "x": "0.610376",
                    "y": "0.592874"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 788,
                "top": 458
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 618,
                "top": 440,
                "width": 341,
                "height": 38
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 2,
        "title": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_3277F5A51AB747529958ED1A72251BB1",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_FC315783C2C6B9A8",
            "new_step": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 985,
                "height": 200
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_5636F45F34851FA5",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 205,
            "b_height": 80,
            "orientation": "SW",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.447318",
                    "y": "0.061448"
                },
                "DocXY": {
                    "x": "0.447318",
                    "y": "0.061448"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "SE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.528527",
                    "y": "0.062837"
                },
                "DocXY": {
                    "x": "0.528527",
                    "y": "0.062837"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 822,
                "top": 33
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 700,
                "top": 19,
                "width": 130,
                "height": 21
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 3,
        "title": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_BCD66ED1DD5D45849A959C90AC3CF434",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_6547CD8F5AE7F593",
            "new_step": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 914,
                "height": 199
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_C4C12251135C5B83",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;<\/span><\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> <\/p>\n",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 181,
            "b_height": 60,
            "orientation": "SW",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.430198",
                    "y": "0.099718"
                },
                "DocXY": {
                    "x": "0.430198",
                    "y": "0.099718"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 213,
            "b_height_p": 40,
            "orientation_p": "SE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.527276",
                    "y": "0.103807"
                },
                "DocXY": {
                    "x": "0.527276",
                    "y": "0.103807"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 795,
                "top": 50
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 679,
                "top": 41,
                "width": 150,
                "height": 27
            },
            "ctl_button": false,
            "ctl_tooltip": "Proxy Now"
        }]
    }, {
        "index": 4,
        "title": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_E665A696B973447B918414F697EEA666",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_B00EAFF1FE7EC590",
            "new_step": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1114,
                "height": 421
            }
        }, {
            "macro_template": "input_text",
            "time": 9,
            "duration": 10,
            "uid": "MAC_2B61A4C74E1318AB",
            "explanation_d": "<p>Proxy as <span style=\"font-weight:bold\">Carla Grant.<\/span><\/p>\n",
            "explanation_p": "<p>Enter <span style=\"font-weight:bold\">$#{text_d}<\/span> in the <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> box.<\/p>\n",
            "fieldname": "",
            "fieldicon": "",
            "ctl_init_text": "",
            "text_d": "carla",
            "regexp": ".*",
            "confirmation_tab": false,
            "confirmation_enter": false,
            "affirmation_button": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "btn_rect": {
                "left": 20,
                "top": 20,
                "width": 24,
                "height": 24
            },
            "btn_cursor_hand": true,
            "btn_is_button": true,
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 180,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.428916",
                    "y": "0.419379"
                },
                "DocXY": {
                    "x": "0.428916",
                    "y": "0.419379"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.431449",
                    "y": "0.424857"
                },
                "DocXY": {
                    "x": "0.431449",
                    "y": "0.424857"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "set_focus": true,
            "animated": true,
            "screenshot_rect": {
                "left": 679,
                "top": 314,
                "width": 375,
                "height": 15
            },
            "exec_mouse": false,
            "ctl_rect": {
                "left": 679,
                "top": 314,
                "width": 375,
                "height": 15
            },
            "ctl_password": false,
            "is_textarea": false,
            "ctl_font_family": "Sans-Serif",
            "ctl_font_size": 9,
            "ctl_font_bold": false,
            "ctl_font_italic": false,
            "ctl_font_underline": false,
            "ctl_font_color": "#000000"
        }]
    }, {
        "index": 5,
        "title": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_7F89254D84504351B643D65AD3B979E1",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_CF29F9035DBB4D82",
            "new_step": "SuccessFactors: Admin Center - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1197,
                "height": 545
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_A17DCDF1794B5BD",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 167,
            "b_height": 63,
            "orientation": "NW",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.645289",
                    "y": "0.579217"
                },
                "DocXY": {
                    "x": "0.645289",
                    "y": "0.579217"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 177,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.644648",
                    "y": "0.580591"
                },
                "DocXY": {
                    "x": "0.644648",
                    "y": "0.580591"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1042,
                "top": 438
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 1014,
                "top": 429,
                "width": 46,
                "height": 32
            },
            "ctl_button": true,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 6,
        "title": "SuccessFactors: To-Dos - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_221294227B2949A48532C50C6FE342DA",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_21929DA071C9FBA8",
            "new_step": "SuccessFactors: To-Dos - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1392,
                "height": 200
            }
        }, {
            "macro_template": "input_text",
            "time": 9,
            "duration": 10,
            "uid": "MAC_C7CE04F70366D688",
            "explanation_d": "<p>Search for <span style=\"font-weight:bold\">Marcus Hoff<\/span><\/p>\n",
            "explanation_p": "<p>Enter <span style=\"font-weight:bold\">$#{text_d}<\/span> in the <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> box.<br\/>Confirm your entry by pressing the <span style=\"font-weight:bold\">Enter key<\/span>.<\/p>\n",
            "fieldname": "",
            "ctl_init_text": "",
            "text_d": "Marcus",
            "regexp": ".*",
            "confirmation_tab": false,
            "confirmation_enter": true,
            "affirmation_button": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "btn_rect": {
                "left": 20,
                "top": 20,
                "width": 24,
                "height": 24
            },
            "btn_cursor_hand": true,
            "btn_is_button": true,
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 180,
            "b_height": 40,
            "orientation": "SW",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.739193",
                    "y": "0.058732"
                },
                "DocXY": {
                    "x": "0.739193",
                    "y": "0.058732"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 238,
            "b_height_p": 104,
            "orientation_p": "SE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.825498",
                    "y": "0.064195"
                },
                "DocXY": {
                    "x": "0.825498",
                    "y": "0.064195"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "set_focus": true,
            "animated": true,
            "screenshot_rect": {
                "left": 1167,
                "top": 17,
                "width": 130,
                "height": 22
            },
            "exec_mouse": false,
            "ctl_rect": {
                "left": 1167,
                "top": 17,
                "width": 130,
                "height": 22
            },
            "ctl_no_edit_cursor": false,
            "ctl_password": false,
            "is_textarea": false,
            "ctl_disabled": false,
            "ctl_max_len": -1,
            "ctl_text_align": "align_left",
            "ctl_font_family": "Arial",
            "ctl_font_size": 9,
            "ctl_font_bold": false,
            "ctl_font_italic": false,
            "ctl_font_underline": false,
            "ctl_font_color": "#000000",
            "ctl_bg_color": "#ffffff"
        }]
    }, {
        "index": 7,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_3E76A63AE9E24A12B6B167EC63121B0A",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_FE780A402D46AFA7",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1576,
                "height": 235
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_166E8952025C87A0",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "SE",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "1.000000",
                    "y": "1.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "SW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.873091",
                    "y": "0.195331"
                },
                "DocXY": {
                    "x": "0.873091",
                    "y": "0.195331"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": -1,
                "top": -1
            },
            "click_count": 1,
            "ctl_rect": {
                "left": 1376,
                "top": 115,
                "width": 116,
                "height": 21
            }
        }]
    }, {
        "index": 8,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_29D7C8A15F104B38BC2529605FD4C6C5",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_CEC2B89DA7FDED9A",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1576,
                "height": 307
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_201EE96DF1680C80",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> <\/p>\n",
            "explanation_p": "<p>Select the entry <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> <\/p>\n",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "SW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "1.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": 4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.826139",
                    "y": "0.254078"
                },
                "DocXY": {
                    "x": "0.826139",
                    "y": "0.254078"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1401,
                "top": 218
            },
            "click_count": 1,
            "exec_mouse": false,
            "ctl_rect": {
                "left": 1304,
                "top": 191,
                "width": 255,
                "height": 32
            },
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 9,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_2D4AB5889E684F4CB3C23BC3910ADE1E",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_D5D857A70C2D5DB4",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1347,
                "height": 649
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_1F9F152802B50681",
            "explanation_d": "<p>Clicking in the <span style=\"font-weight:bold\">scroll area<\/span> makes the desired area appear.<\/p>\n",
            "explanation_p": "<p>Clicking in the <span style=\"font-weight:bold\">scroll area<\/span> makes the desired area appear.<\/p>\n",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "W",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.741726",
                    "y": "0.456260"
                },
                "DocXY": {
                    "x": "0.741726",
                    "y": "0.456260"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 220,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.748730",
                    "y": "0.356527"
                },
                "DocXY": {
                    "x": "0.748730",
                    "y": "0.356527"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1401,
                "top": 218
            },
            "click_count": 1,
            "exec_mouse": false,
            "ctl_rect": {
                "left": 1183,
                "top": 266,
                "width": 10,
                "height": 325
            },
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 10,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_A0C985A1981D46879B26F1BE74D40E85",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_88E7DDCD5729090",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 780,
                "height": 636
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_D48074A9FF2744AE",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "Edit",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.406714",
                    "y": "0.698085"
                },
                "DocXY": {
                    "x": "0.406714",
                    "y": "0.698085"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 609,
                "top": 534
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 602,
                "top": 518,
                "width": 36,
                "height": 36
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 11,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_D9DC8DAD99A9401597D060F1BB022391",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_EC736B71BE268A82",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1573,
                "height": 591
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_7E0EF3327654C798",
            "explanation_d": "<p>Clicking in the <span style=\"font-weight:bold\">scroll area<\/span> makes the desired area appear.<\/p>\n",
            "explanation_p": "<p>Clicking in the <span style=\"font-weight:bold\">scroll area<\/span> makes the desired area appear.<\/p>\n",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "W",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.741726",
                    "y": "0.456260"
                },
                "DocXY": {
                    "x": "0.741726",
                    "y": "0.456260"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 220,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.891478",
                    "y": "0.624308"
                },
                "DocXY": {
                    "x": "0.891478",
                    "y": "0.624308"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1401,
                "top": 218
            },
            "click_count": 1,
            "exec_mouse": false,
            "ctl_rect": {
                "left": 1408,
                "top": 466,
                "width": 10,
                "height": 126
            },
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 12,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_2E79C9DA1D8340A68E5BFF609A36EC8A",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_55FF3D5B34C2D880",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1156,
                "height": 346
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_95CEFB0B2D4B83BE",
            "explanation_d": "<p>Choose <span style=\"font-weight:bold\">EUR<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "Arrow Down",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 247,
            "b_height_p": 60,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.618647",
                    "y": "0.304616"
                },
                "DocXY": {
                    "x": "0.618647",
                    "y": "0.304616"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 988,
                "top": 243
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 976,
                "top": 227,
                "width": 40,
                "height": 38
            },
            "ctl_button": true,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 13,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_AD466916CBBC49C2BEC6D9C52432532F",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_7BF79DB1F9748BBB",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1446,
                "height": 730
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_76BD44272539C8B4",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "SE",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "1.000000",
                    "y": "1.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 173,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.480308",
                    "y": "0.960357"
                },
                "DocXY": {
                    "x": "0.480308",
                    "y": "0.960357"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": -1,
                "top": -1
            },
            "click_count": 1,
            "ctl_rect": {
                "left": 757,
                "top": 708,
                "width": 48,
                "height": 20
            }
        }]
    }, {
        "index": 14,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_13B5B116C5A54A0AA48E042C522E5AB3",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_7AE8D010419023BC",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 348,
                "height": 670
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_2744C8EE0D8169AA",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "SE",
            "position_b": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "1.000000",
                    "y": "1.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.159243",
                    "y": "0.759533"
                },
                "DocXY": {
                    "x": "0.159243",
                    "y": "0.759533"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": -1,
                "top": -1
            },
            "click_count": 1,
            "ctl_rect": {
                "left": 176,
                "top": 559,
                "width": 76,
                "height": 20
            }
        }]
    }, {
        "index": 15,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_17168B81FF7E40D9A0093BE4B120D653",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_190B24A8F77EC59E",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 526,
                "height": 673
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_1DA6615600AAD899",
            "explanation_d": "<p>Choose&nbsp;<span style=\"font-weight:bold\">$#{fieldname}&nbsp;.<\/span> <\/p>\n",
            "explanation_p": "<p>Select the entry <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> <\/p>\n",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NE",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "1.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": -6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 220,
            "b_height_p": 40,
            "orientation_p": "NE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.297566",
                    "y": "0.745892"
                },
                "DocXY": {
                    "x": "0.297566",
                    "y": "0.745892"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 326,
                "top": 571
            },
            "click_count": 1,
            "exec_mouse": false,
            "ctl_rect": {
                "left": 189,
                "top": 553,
                "width": 275,
                "height": 36
            },
            "ctl_button": false,
            "ctl_tooltip": "Bonus (BNS-USA)"
        }]
    }, {
        "index": 16,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_B5D39904D1C6401C86D55A4E5EF36A3C",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_88117CAFE12F9B81",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 791,
                "height": 633
            }
        }, {
            "macro_template": "input_text",
            "time": 9,
            "duration": 10,
            "uid": "MAC_2193B2804FF7A5AC",
            "explanation_d": "<p>Fill in <span style=\"font-weight:bold\">5,000.<\/span><\/p>\n",
            "explanation_p": "<p>Enter<span style=\"font-weight:bold\">&nbsp;5000 <\/span>in &nbsp;<span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span> field.<\/p>\n",
            "fieldname": "Amount",
            "fieldicon": "",
            "ctl_init_text": "",
            "text_d": "5,000",
            "regexp": ".*",
            "confirmation_tab": false,
            "confirmation_enter": false,
            "affirmation_button": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "btn_rect": {
                "left": 20,
                "top": 20,
                "width": 24,
                "height": 24
            },
            "btn_cursor_hand": true,
            "btn_is_button": true,
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 180,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 187,
            "b_height_p": 40,
            "orientation_p": "NE",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.462562",
                    "y": "0.692607"
                },
                "DocXY": {
                    "x": "0.462562",
                    "y": "0.692607"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "set_focus": true,
            "animated": true,
            "screenshot_rect": {
                "left": 477,
                "top": 514,
                "width": 254,
                "height": 38
            },
            "exec_mouse": false,
            "ctl_rect": {
                "left": 477,
                "top": 514,
                "width": 254,
                "height": 38
            },
            "ctl_password": false,
            "is_textarea": false,
            "ctl_font_family": "Sans-Serif",
            "ctl_font_size": 9,
            "ctl_font_bold": false,
            "ctl_font_italic": false,
            "ctl_font_underline": false,
            "ctl_font_color": "#000000"
        }]
    }, {
        "index": 17,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_D9FB834D7281416C8E3C186DB541107F",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_BBB817F46FA44FB8",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1440,
                "height": 635
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_2E6073FD3D3FCBA",
            "explanation_d": "<p>Choose <span style=\"font-weight:bold\">Quarterly.<\/span><\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "Arrow Down",
            "fieldicon": "fieldicon0000.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 245,
            "b_height_p": 64,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.796933",
                    "y": "0.693965"
                },
                "DocXY": {
                    "x": "0.796933",
                    "y": "0.693965"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1284,
                "top": 541
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 1260,
                "top": 516,
                "width": 40,
                "height": 38
            },
            "ctl_button": true,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 18,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_C9B022FA8AC94E278164C647D547A6F4",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_93B72A805778B18F",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1453,
                "height": 545
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_DBB9FDBEAE348A0",
            "explanation_d": "<p>Clicking in the <span style=\"font-weight:bold\">scroll area<\/span> displays the desired screen area.<\/p>\n",
            "explanation_p": "<p>Click in the <span style=\"font-weight:bold\">area above the scroll bar<\/span> to scroll down.<\/p>\n",
            "fieldname": "",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.817884",
                    "y": "0.528664"
                },
                "DocXY": {
                    "x": "0.817884",
                    "y": "0.528664"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1293,
                "top": 365
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 1289,
                "top": 395,
                "width": 10,
                "height": 86
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 19,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_CBAE4770898D4299A9BE54D266EF2ECA",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_463BF2E49AC55290",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1329,
                "height": 549
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_E30B8D99A36EDB86",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.654795",
                    "y": "0.577844"
                },
                "DocXY": {
                    "x": "0.654795",
                    "y": "0.577844"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1103,
                "top": 445
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 1036,
                "top": 429,
                "width": 245,
                "height": 40
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 20,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_72F085A028E54958B8A9261D67EEA8F4",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_635C9CBEB0FEFABD",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1548,
                "height": 732
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_AC622A308C09B3AC",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.862928",
                    "y": "0.851072"
                },
                "DocXY": {
                    "x": "0.862928",
                    "y": "0.851072"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1404,
                "top": 652
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 1361,
                "top": 630,
                "width": 54,
                "height": 36
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 21,
        "title": "SuccessFactors: People Profile - Microsoft Internet Explorer",
        "audio": "",
        "uid": "TS_48756AB5DCB84EB49F457B898E53DCF3",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 19,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "new_page",
            "time": 0,
            "duration": 10,
            "uid": "MAC_4EA92AE1A026FCB2",
            "new_step": "SuccessFactors: People Profile - Microsoft Internet Explorer",
            "dump_page": "dump_page\\",
            "dump_page_size": {
                "width": 1576,
                "height": 732
            },
            "screenshot_rect": {
                "left": 0,
                "top": 0,
                "width": 1206,
                "height": 562
            }
        }, {
            "macro_template": "click",
            "time": 9,
            "duration": 10,
            "uid": "MAC_5A6EB1BA0E46E3B0",
            "explanation_d": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "explanation_p": "<p>Click <span style=\"font-weight:bold\">$#{fieldname}&nbsp;$I{fieldicon}<\/span>.<\/p>\n",
            "fieldname": "",
            "fieldicon": "fieldicon.png",
            "action": "lclick",
            "ctrl_key": false,
            "alt_key": false,
            "shift_key": false,
            "position_h": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "XY2": {
                    "x": "1.000000",
                    "y": "1.000000"
                }
            },
            "bubblestyle_d": "gold_edge_bar",
            "b_width": 150,
            "b_height": 40,
            "orientation": "NW",
            "position_b": {
                "FP": "0",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": ""
                },
                "XY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "DocXY": {
                    "x": "0.000000",
                    "y": "0.000000"
                },
                "Off": {
                    "x": 6,
                    "y": -4
                }
            },
            "b_duration": 4,
            "bubblestyle_p": "gold_edge_bar",
            "b_width_p": 180,
            "b_height_p": 40,
            "orientation_p": "NW",
            "position_bu": {
                "FP": "",
                "elem": {
                    "EP": "",
                    "coll": "\"\"",
                    "idx": 0,
                    "subidx": 0,
                    "id": "page"
                },
                "XY": {
                    "x": "0.639582",
                    "y": "0.588785"
                },
                "DocXY": {
                    "x": "0.639582",
                    "y": "0.588785"
                }
            },
            "show_hl_d": true,
            "show_hl_p": true,
            "show_bubble_d": true,
            "show_bubble_p": true,
            "click_pos": {
                "left": 1041,
                "top": 465
            },
            "click_count": 1,
            "exec_mouse": false,
            "hotspot_client_rect": {
                "left": -2147483648,
                "top": -2147483648,
                "width": 0,
                "height": 0
            },
            "ctl_rect": {
                "left": 1011,
                "top": 444,
                "width": 71,
                "height": 36
            },
            "cursor_hand": false,
            "ctl_button": false,
            "ctl_tooltip": ""
        }]
    }, {
        "index": 22,
        "title": "End",
        "audio": "",
        "uid": "TS_720A32D241B04EF2BBD6B3BDC9C98BD1",
        "jumpable": true,
        "visible": true,
        "callable": false,
        "duration": 9,
        "audio_duration": 0,
        "macros": [{
            "macro_template": "end_unit",
            "time": 0,
            "duration": 10,
            "macro_comment": "",
            "uid": "MAC_87F6DF2703B78B9A"
        }]
    }]
}