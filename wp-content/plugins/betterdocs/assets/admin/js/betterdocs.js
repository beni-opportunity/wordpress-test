!function(){class e{constructor(e){this.config=e,this.initialize(),this.init()}init(){this.settingsTab(),this.sortable(),this.copyToClipboard(),this.enableDarkMode()}initialize(){var e=jQuery;this.body=e("body"),this.droppableUl=e(".betterdocs-single-listing ul"),this.copyBtn=e(".betterdocs-settings-input-text span"),this.darkModeBtn=e("#betterdocs-mode-toggle"),this.settingsMenu=e(".betterdocs-settings-menu li")}settingsTab(){this.settingsMenu.on("click",(function(e){var t=jQuery,o=t(this).data("tab");t(this).addClass("active").siblings().removeClass("active"),t("#betterdocs-"+o).addClass("active").siblings().removeClass("active")}))}get_query_vars(e){var t={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,((e,o,i)=>t[o]=i)),""!==e?t[e]:t}enableDarkMode(){var e=this;this.darkModeBtn.prop("checked",Boolean(this.config.dark_mode)),this.darkModeBtn.on("click",(function(t){e.body.toggleClass("betterdocs-dark-mode"),jQuery.ajax({type:"POST",url:e.config.ajaxurl,data:{action:"betterdocs_dark_mode",mode:t.currentTarget.checked?1:0,nonce:e.config.doc_cat_order_nonce},dataType:"JSON",success:function(t){0==t?.success&&e.body.toggleClass("betterdocs-dark-mode")}})}))}permalinkStructure(){var e=$("#multiple_kb"),t=$("#permalink_structure"),o=t.val();o&&!e.is(":checked")&&t.val(o.replace(/%knowledge_base%\/?/g,""))}copyToClipboard(){var e=this;this.copyBtn.on("click",(function(t){var o=this.previousSibling;o.select(),document.execCommand("copy"),this.firstChild.textContent=e.config.text,o.setSelectionRange(0,99999)}))}setView(){}sortable(){var e=this;this.droppableUl.each(((t,o)=>{var i=jQuery(o),s=i.data("category_id");i.hasClass("docs-droppable"),i.sortable({connectWith:"ul.docs-droppable",placeholder:"betterdocs-post-list-placeholder",start:function(e,t){const o=jQuery(t.item[0]);jQuery(".betterdocs-post-list-placeholder").css("height",o.css("height"))},receive:function(t,o){const i=o.item;if(i.siblings(".betterdocs-no-docs").remove(),null!=s){const t={action:"update_docs_term",object_id:i.data("id"),prev_term_id:o.sender.data("category_id"),list_term_id:s,doc_cat_order_nonce:e.config.doc_cat_order_nonce};jQuery.ajax({type:"POST",url:e.config.ajaxurl,data:t,dataType:"JSON",success:function(e){}})}},update:function(t,o){const a=[];if(i.find("li.ui-sortable-handle").each((function(){const e=jQuery(this);a.push(e.data("id"))})),null!=s){const t={action:"update_doc_order_by_category",docs_ordering_data:a,list_term_id:s,doc_cat_order_nonce:e.config.doc_cat_order_nonce};jQuery.ajax({type:"POST",url:e.config.ajaxurl,data:t,dataType:"JSON",success:function(e){}})}}})}))}}!function(t){"use strict";new e(window?.betterdocs_admin)}(jQuery)}();