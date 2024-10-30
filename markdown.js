// Name: Markdown to HTML
// ID: markdownToHtml
// Description: Can convert Markdown to HTML.
// By: -Clickertale_2- <https://scratch.mit.edu/users/-Clickertale_2-/>
// License: MIT AND MPL-2.0

(function(Scratch) {
  'use strict';

  // Check if the extension is running unsandboxed
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Number to Hex extension must run unsandboxed');
  }

 const icon = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4IgogICBoZWlnaHQ9IjIyNS4zNTQ4IgogICB3aWR0aD0iMjI1LjM1NDgiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzE0IgogICBzb2RpcG9kaTpkb2NuYW1lPSJNYXJrZG93blR1cmJvV2FycEV4dGVuc2lvbi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTgiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0Njk1IgogICAgICAgaW5rc2NhcGU6c3dhdGNoPSJzb2xpZCI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjE7IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDY5MyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3MTYiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjMDAwMDAwIgogICAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMi4zMjk2NTk3IgogICAgIGlua3NjYXBlOmN4PSIxMDYuNjY3OTQiCiAgICAgaW5rc2NhcGU6Y3k9IjEwNC41MjE3IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM1MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MjgiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxNCIgLz4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMzIyNzQsLTY3LjMyMjYpIgogICAgIGlkPSJnMTIiPgogICAgPGcKICAgICAgIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbDojMGIxMzJiIgogICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiCiAgICAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBzdHJva2UtbGluZWpvaW49Im1pdGVyIgogICAgICAgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiCiAgICAgICBzdHJva2U9Im5vbmUiCiAgICAgICBmaWxsLXJ1bGU9Im5vbnplcm8iCiAgICAgICBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iCiAgICAgICBpZD0iZzEwIj4KICAgICAgPHBhdGgKICAgICAgICAgc3Ryb2tlLXdpZHRoPSIwIgogICAgICAgICBmaWxsPSIjMTQ2NjAwIgogICAgICAgICBkPSJNMTI3LjMyMjc1LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiCiAgICAgICAgIGlkPSJwYXRoMiIKICAgICAgICAgc3R5bGU9InBhaW50LW9yZGVyOm1hcmtlcnMgZmlsbCBzdHJva2U7ZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbDojMGIxMzJiIiAvPgogICAgICA8ZwogICAgICAgICBzdHJva2Utd2lkdGg9IjEiCiAgICAgICAgIGZpbGw9IiNmZmZmZmYiCiAgICAgICAgIGlkPSJnOCIKICAgICAgICAgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGwtb3BhY2l0eToxO2ZpbGw6IzBiMTMyYiIgLz4KICAgIDwvZz4KICA8L2c+CiAgPHBhdGgKICAgICBkPSJNIDc5LjE1NDkxNSwxMzQuMzAzMjEgViAxMjYuNTk2OSBMIDU2LjQyMTMxOSwxMTguMjE2MyA0MS45NzIsMTEyLjgyMTg5IHYgLTAuMzg1MzEgbCAxNC40NDkzMTksLTUuMzk0NDIgMjIuNzMzNTk2LC04LjM4MDYwMiBWIDkxLjA1MTU4MyBMIDMzLjAxMzQyMiwxMDkuMTYxNCB2IDcuMDMyIHoiCiAgICAgaWQ9InBhdGg2MTk2IgogICAgIHN0eWxlPSJmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZTo5Ni4zMjg4cHg7Zm9udC1mYW1pbHk6J05vdG8gU2FucyBDSksgVEMgUmVndWxhcic7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTm90byBTYW5zIENKSyBUQyBSZWd1bGFyLCAgQm9sZCc7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1hbmNob3I6bWlkZGxlO2ZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MTAuMzIxIiAvPgogIDxwYXRoCiAgICAgZD0ibSA5MS42Nzc2OSwxNTIuMzY0ODcgaCA4Ljc2NTkyIHYgLTE3LjcyNDUgbCAtMC4xOTI2NiwtOS4xNTEyNCBjIDQuNzIwMTEsMy44NTMxNSA5LjcyOTIxLDYuMDY4NzIgMTQuNDQ5MzIsNi4wNjg3MiAxMi4wNDExLDAgMjIuNzMzNiwtMTAuMzA3MTggMjIuNzMzNiwtMjguMjI0MzQgMCwtMTYuMDg2OTA5IC03LjMyMDk5LC0yNi42ODMwNzcgLTIwLjgwNzAyLC0yNi42ODMwNzcgLTYuMDY4NzIsMCAtMTEuOTQ0NzcsMy40Njc4MzcgLTE2LjY2NDg4NCw3LjMyMDk4OCBIIDk5LjY3Mjk4IGwgLTAuNzcwNjMsLTUuOTcyMzg1IGggLTcuMjI0NjYgeiBtIDIxLjU3NzY1LC0yOC4xMjgwMSBjIC0zLjQ2Nzg0LDAgLTguMDkxNjIsLTEuNDQ0OTMgLTEyLjgxMTczLC01LjQ5MDc0IFYgOTEuMjkyNDEgYyA1LjEwNTQzLC00LjcyMDExMSA5LjYzMjg4LC03LjIyNDY2IDE0LjA2NCwtNy4yMjQ2NiA5LjkyMTg3LDAgMTMuNzc1MDIsNy44MDI2MzMgMTMuNzc1MDIsMTkuMzYyMDkgMCwxMy4wMDQzOSAtNi4zNTc3LDIwLjgwNzAyIC0xNS4wMjcyOSwyMC44MDcwMiB6IgogICAgIGlkPSJwYXRoNjE5OCIKICAgICBzdHlsZT0iZm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6OTYuMzI4OHB4O2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgQ0pLIFRDIFJlZ3VsYXInOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J05vdG8gU2FucyBDSksgVEMgUmVndWxhciwgIEJvbGQnO3RleHQtYWxpZ246Y2VudGVyO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEwLjMyMSIgLz4KICA8cGF0aAogICAgIGQ9Im0gMTQ2LjE5OTg3LDEzNC4zMDMyMSA0Ni4xNDE0OSwtMTguMTA5ODEgdiAtNy4wMzIgTCAxNDYuMTk5ODcsOTEuMDUxNTgzIHYgNy42MDk5NzUgbCAyMi43MzM1OSw4LjM4MDYwMiAxNC40NDkzMiw1LjM5NDQyIHYgMC4zODUzMSBsIC0xNC40NDkzMiw1LjM5NDQxIC0yMi43MzM1OSw4LjM4MDYgeiIKICAgICBpZD0icGF0aDYyMDAiCiAgICAgc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjk2LjMyODhweDtmb250LWZhbWlseTonTm90byBTYW5zIENKSyBUQyBSZWd1bGFyJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidOb3RvIFNhbnMgQ0pLIFRDIFJlZ3VsYXIsICBCb2xkJzt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDoxMC4zMjEiIC8+Cjwvc3ZnPgo8IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzI1NToxMTIuNjc3NDA1LS0+Cgo=`;


	class MarkdownToHtml {
	  getInfo() {
		return {
		  id: 'markdownToHtml',
		  name: 'Markdown to HTML',
		  color1: '#00736b',  // Primary color
		  color2: '#a6a6a6',  // Secondary color
		  color3: '#404040',  // Tertiary color
		  menuIconURI: icon,
		  blocks: [
			{
			  opcode: 'convertMarkdownToHtml',
			  blockType: Scratch.BlockType.REPORTER,
			  text: 'convert [MARKDOWN] to HTML',
			  arguments: {
				MARKDOWN: {
				  type: Scratch.ArgumentType.STRING,
				  defaultValue: '# Hello world!'
				}
			  }
			},
			{
			  opcode: 'convertHtmlToMarkdown',
			  blockType: Scratch.BlockType.REPORTER,
			  text: 'convert [HTML] to Markdown',
			  arguments: {
				HTML: {
				  type: Scratch.ArgumentType.STRING,
				  defaultValue: '<h1>Hello world!</h1>'
				}
			  }
			}
		  ]
		};
	  }

	  convertMarkdownToHtml({ MARKDOWN }) {
		return markdownToHtml(MARKDOWN);
	  }

	  convertHtmlToMarkdown({ HTML }) {
		return htmlToMarkdown(HTML);
	  }
	}

	// Markdown to HTML conversion function
	function markdownToHtml(markdown) {
	  markdown = markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	  let html = markdown
		.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
		.replace(/^###### (.*$)/gim, '<h6>$1</h6>')
		.replace(/^##### (.*$)/gim, '<h5>$1</h5>')
		.replace(/^#### (.*$)/gim, '<h4>$1</h4>')
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*\*(.*)\*\*\*/gim, '<strong><em>$1</em></strong>')
		.replace(/___(.*)___/gim, '<strong><em>$1</em></strong>')
		.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
		.replace(/__(.*)__/gim, '<strong>$1</strong>')
		.replace(/\*(.*)\*/gim, '<em>$1</em>')
		.replace(/_(.*)_/gim, '<em>$1</em>')
		.replace(/~~(.*?)~~/gim, '<s>$1</s>')
		.replace(/^\s*\|(.+?)\|\s*$/gm, (match, p1) => {
		  const cells = p1.split('|').map(cell => cell.trim());
		  return '<tr>' + cells.map(cell => `<td>${cell}</td>`).join('') + '</tr>';
		})
		.replace(/(<tr>[\s\S]*?<\/tr>)/gim, '<table>$1</table>')
		.replace(/^\d+\.\s+(.*$)/gim, '<li>$1</li>')
		.replace(/^\*\s+(.*$)/gim, '<li>$1</li>')
		.replace(/<\/li>\n<li>/gim, '</li><li>')
		.replace(/(<li>[\s\S]*<\/li>)/gim, (match) => {
		  return match.includes('<li>') && !match.includes('</ol>') && !match.includes('</ul>') ? '<ul>' + match + '</ul>' : '<ol>' + match + '</ol>';
		})
		.replace(/`([^`]+)`/gim, '<code>$1</code>')
		.replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2">$1</a>')
		.replace(/\!\[([^\]]*)\]\(([^\)]+)\)/gim, '<img alt="$1" src="$2" />')
		.replace(/^\s*(\*\*\*|---|___)\s*$/gm, '<hr />')
		.replace(/\n$/gim, '<br />')
		.split('\n').map(line => {
		  return line.trim() && !/^<(h[1-6]|blockquote|pre|code|ol|ul|li|a|img|hr|tr|td|table)/i.test(line) 
			? `<p>${line.trim()}</p>` 
			: line;
		}).join('\n')
		.replace(/<\/p>\s*(<h[1-6]|<blockquote|<pre|<code|<ol|<ul|<li|<a|<img|<hr|<tr|<td|<table)/gi, (match) => match.replace(/<\/p>/g, ''))
		.replace(/<p>\s*<\/p>/g, '');
	  
	  return html.trim();
	}

	// HTML to Markdown conversion function
	function htmlToMarkdown(html) {
	  // Convert HTML to Markdown
	  let markdown = html
		.replace(/<h1>(.*?)<\/h1>/gim, '# $1\n')
		.replace(/<h2>(.*?)<\/h2>/gim, '## $1\n')
		.replace(/<h3>(.*?)<\/h3>/gim, '### $1\n')
		.replace(/<h4>(.*?)<\/h4>/gim, '#### $1\n')
		.replace(/<h5>(.*?)<\/h5>/gim, '##### $1\n')
		.replace(/<h6>(.*?)<\/h6>/gim, '###### $1\n')
		.replace(/<blockquote>(.*?)<\/blockquote>/gim, '> $1\n')
		.replace(/<strong><em>(.*?)<\/em><\/strong>/gim, '___$1___')
		.replace(/<strong>(.*?)<\/strong>/gim, '**$1**')
		.replace(/<em>(.*?)<\/em>/gim, '*$1*')
		.replace(/<s>(.*?)<\/s>/gim, '~~$1~~')
		.replace(/<code>(.*?)<\/code>/gim, '`$1`')
		.replace(/<a href="(.*?)">(.*?)<\/a>/gim, '[$2]($1)')
		.replace(/<img alt="(.*?)" src="(.*?)" \/>/gim, '![$1]($2)')
		.replace(/<hr \/>/gim, '---')
		.replace(/<br \/>/gim, '\n')
		.replace(/<li>(.*?)<\/li>/gim, '* $1')
		.replace(/<tr>(.*?)<\/tr>/gim, (match, p1) => {
		  const cells = p1.split(/<\/td>/).map(cell => cell.replace(/<td>/g, '').trim()).filter(cell => cell.length > 0);
		  return cells.join(' | ') + '\n';
		})
		.replace(/<\/?table>/gim, '') // Remove table tags
		.replace(/<\/?ul>/gim, '') // Remove unordered list tags
		.replace(/<\/?ol>/gim, '') // Remove ordered list tags
		.replace(/<\/p>/gim, '\n\n')
		.replace(/<p>/gim, '')
		.replace(/<\/?pre>/gim, '')
		.replace(/<\/?code>/gim, '```');
	  
	  // Remove redundant newlines
	  markdown = markdown.replace(/\n\s*\n/gim, '\n\n');

	  return markdown.trim();
	}

// Register the extension
Scratch.extensions.register(new MarkdownToHtml());
})(Scratch);
