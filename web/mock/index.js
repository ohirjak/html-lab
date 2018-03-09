$().ready(function() {
    init_menu();

    init_search();
});

var menu_items =
[
    { item : "menu_lists", page : "page_lists" },
    { item : "menu_movies", page : "page_movies" },
    { item : "menu_watchlist", page : "page_movies" },
    { item : "", page : "page_detail" },
    { item : "menu_tips", page : "page_tips" },
    { item : "menu_about", page : "page_about" },
    { item : "menu_profile", page : "page_profile" }
];

var menu_item_selected;

function init_menu() {
    for (i = 0; i < menu_items.length; i++) {
        $("#" + menu_items[i].page).hide();

        if (menu_items[i].item != "") {
            $("#" + menu_items[i].item).click(function() {
                select_menu_item($(this).attr("id"));
            });
            $("#" + menu_items[i].item).css({ "font-weight" : "", "font-style" : "italic" });
        }
    }

    menu_item_selected = 0;

    select_menu_item(menu_items[0].item);
}

function find_menu_item_index(item) {
    for (i = 0; i < menu_items.length; i++) {
        if (item == menu_items[i].item) {
            return i;
        }
    }

    return -1;
}

function select_menu_item(item) {
    var index = find_menu_item_index(item);

    if (index == -1) {
        return;
    }

    $("#" + menu_items[menu_item_selected].page).hide();
    $("#" + menu_items[menu_item_selected].item).css({ "font-weight" : "", "font-style" : "italic" });

    $("#" + menu_items[index].page).show();
    $("#" + menu_items[index].item).css({ "font-weight" : "bold", "font-style" : "" });

    menu_item_selected = index;
}

var search_filter_visible = false;

function init_search() {
    $("#search_results").hide();
    $("#search_options").hide();
    $("#search_filter").css({ "font-weight" : "", "font-style" : "italic" });

    $("#menu_search").focusin(function() {
        $("#search_results").show();
    });

    $("#menu_search").focusout(function() {
        $("#search_results").hide();
    });

    $("#search_filter").click(function() {
        if (search_filter_visible) {
            $("#search_options").hide();
            $("#search_filter").css({ "font-weight" : "", "font-style" : "italic" });
            search_filter_visible = false;
        } else {
            $("#search_options").show();
            $("#search_filter").css({ "font-weight" : "bold", "font-style" : "" });
            search_filter_visible = true;
        }
    });
}