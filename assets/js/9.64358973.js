(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{160:function(e,t,i){},163:function(e,t,i){},170:function(e,t,i){"use strict";i(160)},175:function(e,t,i){"use strict";i(163)},176:function(e,t,i){"use strict";const o={autoIndent:!0,automaticLayout:!0,find:{autoFindInSelection:!0,seedSearchStringFromSelection:!0},minimap:{enabled:!1},renderControlCharacters:!0,renderIndentGuides:!0,renderValidationDecorations:"on",renderWhitespace:"boundary",scrollBeyondLastLine:!1};function n(e,t){return Math.max(1,0|(void 0!==e?e:t))}function s(e,t){const i=e.getModel();null!=i&&t!==i.getValue()&&i.setValue(t)}function r(e){null!=e&&(e.getOriginalEditor&&r(e.getOriginalEditor()),e.getModifiedEditor&&r(e.getModifiedEditor()),e.getModel&&r(e.getModel()),e.dispose&&e.dispose())}function a(e){const t=("string"==typeof e.code?e.code:e.code&&e.code.value)||"";return`[${e.startLineNumber},${e.startColumn},${e.endLineNumber},${e.endColumn}]-${t}`}function d(e,t,i,o){const n=i.getPositionAt(o.range[0]),s=i.getPositionAt(o.range[1]),r={startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:s.lineNumber,endColumn:s.column};return{title:e,diagnostics:[t],kind:"quickfix",edit:{edits:[{resource:i.uri,edit:{range:r,text:o.text}}]}}}var l={name:"ESLintEditor",model:{prop:"code",event:"input"},props:{linter:{type:Object,default:null},code:{type:String,default:""},config:{type:Object,default:()=>({})},dark:{type:Boolean},filename:{type:String,default:"a.js"},preprocess:{type:Function,default:null,required:!1},postprocess:{type:Function,default:null,required:!1},fix:{type:Boolean},format:{type:Object,default:()=>({insertSpaces:!0,tabSize:4})},language:{type:String,default:"javascript"}},data(){return{monaco:null,monacoLoadingError:null,loadLanguage:null,editor:null,editing:!1,messages:[],fixedCode:this.code,fixedMessages:[],previewFix:!1,requestFix:!1,editorMessageMap:new Map,codeActionProviderDisposable:null}},computed:{codeEditor(){const e=this.editor;return null!=e?null!=e.getOriginalEditor?e.getOriginalEditor():e:null},fixedCodeEditor(){const e=this.editor;return null!=e&&null!=e.getModifiedEditor?e.getModifiedEditor():null},codeActionProvider(){return{provideCodeActions:(e,t,i)=>{const{editorMessageMap:o}=this,n=o.get(e.uri);if("quickfix"!==i.only||!n)return{actions:[],dispose(){}};const s=[];for(const t of i.markers){const i=n.get(a(t));if(i&&(i.fix&&s.push(d(`Fix this ${i.ruleId} problem`,t,e,i.fix)),i.suggestions))for(const o of i.suggestions)s.push(d(`${o.desc} (${i.ruleId})`,t,e,o.fix))}return{actions:s,dispose(){}}}}}},watch:{linter(){this.invalidate()},code(e){this.updateCode(e)},previewFix(){this.initialize()},config:{handler(){this.invalidate()},deep:!0},filename(){this.invalidate()},fix(){this.initialize()},fixedCode(e){const t=this.fixedCodeEditor;null!=t&&s(t,e)},fixedMessages(e){const t=this.fixedCodeEditor;null!=t&&this.updateMarkers(t,e)},format(e){const t=this.codeEditor;null!=t&&t.getModel().updateOptions(e)},messages(e){const t=this.codeEditor;null!=t&&this.updateMarkers(t,e,!0)},language(e){const{monaco:t,loadLanguage:i}=this;null!=t&&(async()=>{if(await i(e),e===this.language){for(const i of[this.codeEditor,this.fixedCodeEditor])null!=i&&t.editor.setModelLanguage(i.getModel(),e);r(this.codeActionProviderDisposable),this.codeActionProviderDisposable=this.monaco.languages.registerCodeActionProvider(this.language,this.codeActionProvider)}})().catch(t=>{console.error("Failed to set the language '%s':",e,t)})}},mounted(){(async()=>{const{monaco:e,loadLanguage:t}=await Promise.all([i.e(0),i.e(17)]).then(i.bind(null,491));await t(this.language),this.monaco=e,this.loadLanguage=t,this.codeActionProviderDisposable=e.languages.registerCodeActionProvider(this.language,this.codeActionProvider)})().catch(e=>{console.error("Failed to load Monaco editor:",e),this.monacoLoadingError=e})},beforeDestroy(){r(this.editor),r(this.codeActionProviderDisposable),this.$refs.monaco.innerHTML="",this.editor=null},methods:{fadeIn(e){this.$refs.monaco&&this.$refs.monaco.parentNode===e&&this.initialize()},initialize(){null!=this.monaco&&(r(this.editor),this.$refs.monaco.innerHTML="",this.editor=this.previewFix?this.createTwoPaneEditor():this.createEditor(),this.lint())},createEditor(){const{code:e,dark:t,format:i,language:n,messages:s,monaco:r}=this,a=r.editor.createModel(e,n);a.updateOptions(i),a.onDidChangeContent(()=>{this.$emit("input",a.getValue()),this.invalidate()});const d=r.editor.create(this.$refs.monaco,{model:a,theme:t?"vs-dark":"vs",...o});return this.updateMarkers(d,s,!0),d},createTwoPaneEditor(){const{code:e,dark:t,fixedCode:i,fixedMessages:n,format:s,language:r,messages:a,monaco:d}=this,l=d.editor.createDiffEditor(this.$refs.monaco,{originalEditable:!0,theme:t?"vs-dark":"vs",...o}),c=d.editor.createModel(e,r),u=d.editor.createModel(i,r),g=l.getOriginalEditor(),f=l.getModifiedEditor();return f.updateOptions({readOnly:!0}),c.updateOptions(s),c.onDidChangeContent(()=>{const e=c.getValue();this.fixedCode=e,this.$emit("input",e),this.invalidate()}),l.setModel({original:c,modified:u}),this.updateMarkers(g,a,!0),this.updateMarkers(f,n),l},messageToMarker(e){const{monaco:t,linter:i}=this,o=e.ruleId&&i.getRules().get(e.ruleId),s=o&&o.meta&&o.meta.docs&&o.meta.docs.url,r=n(e.line,1),a=n(e.column,1),d=n(e.endLine,r),l=n(e.endColumn,a+1);return{code:s?{value:e.ruleId,link:s}:e.ruleId||"FATAL",severity:t.MarkerSeverity.Error,source:"ESLint",message:e.message,startLineNumber:r,startColumn:a,endLineNumber:d,endColumn:l}},updateMarkers(e,t,i){const{monaco:o,editorMessageMap:n}=this,s=e.getModel(),r=e.getId();n.delete(s.uri);const d=[];let l=null;i&&(l=new Map,n.set(s.uri,l));for(const e of t){const t=this.messageToMarker(e);d.push(t),i&&l.set(a(t),e)}o.editor.setModelMarkers(s,r,d)},updateCode(e){const t=this.codeEditor;null!=t&&s(t,e),this.invalidate()},invalidate(){null==this.editor||this.editing||(this.editing=!0,setTimeout(()=>{this.lint(),this.editing=!1},667))},lint(){const{codeEditor:e,config:t,filename:i,preprocess:o,postprocess:n,linter:s}=this;if(null==e||null==s)return;this.editorMessageMap.clear();const r=e.getModel().getValue();try{this.messages=s.verify(r,t,{filename:i,preprocess:o,postprocess:n})}catch(e){this.messages=[{fatal:!0,severity:2,message:e.message,line:1,column:0}]}try{const e=s.verifyAndFix(r,t,{filename:i});this.fixedCode=e.fixed?e.output:r,this.fixedMessages=e.messages}catch(e){this.fixedCode=r,this.fixedMessages=[{fatal:!0,severity:2,message:e.message,line:1,column:0}]}this.$emit("change",{code:r,messages:this.messages,fixedCode:this.fixedCode,fixedMessages:this.fixedMessages}),this.requestFix&&(this.requestFix=!1,this.fixedCode!==this.code&&(this.$emit("input",this.fixedCode),this.updateCode(this.fixedCode)))},applyAutofix(){const{code:e,fixedCode:t,editing:i}=this;i?this.requestFix=!0:t!==e&&(this.$emit("input",t),this.updateCode(t))}}},c=(i(170),i(6)),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"eslint-editor-root",class:{"eslint-editor-dark":e.dark}},[i("transition",{attrs:{name:"eslint-editor-fade"},on:{"before-enter":e.fadeIn}},[e.monaco?i("div",{key:"editor",staticClass:"eslint-editor-swap-container"},[i("div",{ref:"monaco",staticClass:"eslint-editor-monaco"}),e._v(" "),e.fix?i("div",{staticClass:"eslint-editor-actions"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.previewFix,expression:"previewFix"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.previewFix)?e._i(e.previewFix,null)>-1:e.previewFix},on:{change:function(t){var i=e.previewFix,o=t.target,n=!!o.checked;if(Array.isArray(i)){var s=e._i(i,null);o.checked?s<0&&(e.previewFix=i.concat([null])):s>-1&&(e.previewFix=i.slice(0,s).concat(i.slice(s+1)))}else e.previewFix=n}}}),e._v("\n                    Preview\n                ")]),e._v(" "),i("button",{on:{click:e.applyAutofix}},[e._v("\n                    Apply\n                ")])]):e._e()]):i("div",{key:"placeholder",staticClass:"eslint-editor-swap-container"},[i("code",{staticClass:"eslint-editor-placeholder-code"},[e._v(e._s(e.code))]),e._v(" "),i("transition",{attrs:{name:"eslint-editor-fade"}},[e.monacoLoadingError?i("div",{key:"error",staticClass:"eslint-editor-placeholder-error"},[e._v("\n                    Failed to load this editor\n                ")]):i("div",{key:"loading",staticClass:"eslint-editor-placeholder-loading"},[i("div",{staticClass:"eslint-editor-placeholder-loading-icon"},[i("div"),e._v(" "),i("div"),e._v(" "),i("div")]),e._v(" "),i("div",{staticClass:"eslint-editor-placeholder-loading-message"},[e._v("\n                        Now loading...\n                    ")])])])],1)])],1)}),[],!1,null,null,null);t.a=u.exports},181:function(e,t,i){"use strict";i.r(t);var o=i(176),n=i(167),s=i.n(n),r={name:"EslintPluginEditor",components:{EslintEditor:o.a},model:{prop:"code"},props:{code:{type:String,default:""},fix:{type:Boolean},rules:{type:Object,default:()=>({})},dark:{type:Boolean}},data:()=>({eslint4b:null,format:{insertSpaces:!0,tabSize:2}}),computed:{config(){return{globals:{ArrayBuffer:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1,WeakMap:!1,WeakSet:!1,Atomics:!1,SharedArrayBuffer:!1},rules:this.rules,parserOptions:{sourceType:"module",ecmaVersion:2019}}},fileName:()=>"a.js",language:()=>"javascript",linter(){if(!this.eslint4b)return null;const e=new(0,this.eslint4b);for(const t of Object.keys(s.a.rules)){const i=s.a.rules[t];e.defineRule(i.meta.docs.ruleId,i)}return e}},async mounted(){const{default:e}=await Promise.all([i.e(3),i.e(6)]).then(i.t.bind(null,490,7));this.eslint4b=e;const t=this.$refs.editor;t.$watch("monaco",()=>{const{monaco:e}=t;e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({validate:!1}),e.languages.typescript.javascriptDefaults.setDiagnosticsOptions({validate:!1})}),t.$watch("codeEditor",()=>{t.codeEditor&&t.codeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(t.codeEditor))}),t.$watch("fixedCodeEditor",()=>{t.fixedCodeEditor&&t.fixedCodeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(t.fixedCodeEditor))})},methods:{onDidChangeModelDecorations(e){const{monaco:t}=this.$refs.editor,i=e.getModel();t.editor.setModelMarkers(i,"javascript",[])}}},a=(i(175),i(6)),d=Object(a.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("eslint-editor",{ref:"editor",staticClass:"eslint-code-block",attrs:{linter:e.linter,config:e.config,code:e.code,language:e.language,filename:e.fileName,dark:e.dark,format:e.format,fix:e.fix},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,"0bd0b1ae",null);t.default=d.exports},351:function(e,t,i){"use strict";i.r(t);var o={name:"PgEditor",components:{EslintPluginEditor:i(181).default},props:{value:{type:String,default:""},rules:{type:Object,default:()=>({})},messages:{type:Array,default:()=>[]}}},n=i(6),s=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("eslint-plugin-editor",{ref:"editor",attrs:{code:e.value,rules:e.rules,fix:"",dark:""},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,null,null);t.default=s.exports}}]);