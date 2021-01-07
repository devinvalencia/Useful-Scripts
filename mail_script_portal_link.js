// Type: Mail Script
// Obj: Creates button to portal where current record is opened in widget

(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

	var backgroundColor = 'background-color: #278efc;';
	var border = 'border: 1px solid #0368d4;';
	var color = 'color: #ffffff;';
	var fontSize = 'font-size: 16px;';
	var fontFamily = 'font-family: Helvetica, Arial, sans-serif;';
	var textDecoration = 'text-decoration: none; border-radius: 3px;';
	var webKitBorder = '-webkit-border-radius: 3px;';
	var mozBorder = '-moz-border-radius: 3px;';
	var display = 'display: inline-block;';
	var padding = 'padding: 5px;';

    var url = '<a href="' + gs.getProperty('glide.servlet.uri') + 'esc?id=ticket&table=' + current.sys_class_name + '&sys_id=' + current.sys_id + '" style="' + backgroundColor + border + color + fontSize + fontFamily + textDecoration + webKitBorder + mozBorder + display + padding +'">Spot portal</a>';
    // gs (GlideSystem) function gets instance url, class name gets table
    // css styling has to be done as tag attribute, each defined seperatley

    template.print(url);
    // Prints to email

})(current, template, email, email_action, event);