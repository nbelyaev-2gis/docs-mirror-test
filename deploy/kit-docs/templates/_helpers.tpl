{{- define "filteredReleaseName" -}}
{{- .Release.Name | trunc 47 | trimSuffix "-" }}
{{- end }}

{{- define "selectorLabels" -}}
app.kubernetes.io/name: {{ .Chart.Name }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{- define "labels" -}}
{{ include "selectorLabels" . }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
date: "{{ now | unixEpoch }}"
{{- end }}
