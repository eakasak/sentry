export const PROMOTED_TAGS = [
  {name: 'tags[level]', type: 'string'},
  {name: 'tags[logger]', type: 'string'},
  {name: 'tags[server_name]', type: 'string'},
  {name: 'tags[transaction]', type: 'string'},
  {name: 'tags[environment]', type: 'string'},
  {name: 'tags[site]', type: 'string'},
  {name: 'tags[url]', type: 'string'},
  {name: 'tags[app_device]', type: 'string'},
  {name: 'tags[device]', type: 'string'},
  {name: 'tags[device_family]', type: 'string'},
  {name: 'tags[runtime]', type: 'string'},
  {name: 'tags[runtime_name]', type: 'string'},
  {name: 'tags[browser]', type: 'string'},
  {name: 'tags[browser_name]', type: 'string'},
  {name: 'tags[os]', type: 'string'},
  {name: 'tags[os_name]', type: 'string'},
  {name: 'tags[os_rooted]', type: 'boolean'},
  {name: 'tags[sentry:release]', type: 'string'},
];

export const COLUMNS = [
  {name: 'event_id', type: 'string'},
  {name: 'project_id', type: 'string'},
  {name: 'platform', type: 'string'},
  {name: 'message', type: 'string'},
  {name: 'primary_hash', type: 'string'},
  {name: 'timestamp', type: 'string'}, // TODO: handling datetime as string for now
  {name: 'received', type: 'string'}, // TODO: handling datetime as string for now

  {name: 'user_id', type: 'string'},
  {name: 'username', type: 'string'},
  {name: 'email', type: 'string'},
  {name: 'ip_address', type: 'string'},

  {name: 'sdk_name', type: 'string'},
  {name: 'sdk_version', type: 'string'},
  {name: 'tags_key', type: 'string'},
  {name: 'tags_value', type: 'string'},
  {name: 'contexts.key', type: 'string'},
  {name: 'contexts.value', type: 'string'},
  {name: 'http_method', type: 'string'},
  {name: 'http_referer', type: 'string'},
  {name: 'os_build', type: 'string'},
  {name: 'os_kernel_version', type: 'string'},
  {name: 'device_name', type: 'string'},
  {name: 'device_brand', type: 'string'},
  {name: 'device_locale', type: 'string'},
  {name: 'device_uuid', type: 'string'},
  {name: 'device_model_id', type: 'string'},
  {name: 'device_arch', type: 'string'},
  {name: 'device_battery_level', type: 'number'},
  {name: 'device_orientation', type: 'string'},
  {name: 'device_simulator', type: 'string'},
  {name: 'device_online', type: 'string'},
  {name: 'device_charging', type: 'string'},
  {name: 'exception_stacks.type', type: 'string'},
  {name: 'exception_stacks.value', type: 'string'},
  {name: 'exception_stacks.mechanism_type', type: 'string'},
  {name: 'exception_stacks.mechanism_handled', type: 'string'},
  {name: 'exception_frames.abs_path', type: 'string'},
  {name: 'exception_frames.filename', type: 'string'},
  {name: 'exception_frames.package', type: 'string'},
  {name: 'exception_frames.module', type: 'string'},
  {name: 'exception_frames.function', type: 'string'},
  {name: 'exception_frames.in_app', type: 'boolean'},
  {name: 'exception_frames.colno', type: 'string'},
  {name: 'exception_frames.lineno', type: 'string'},
  {name: 'exception_frames.stack_level', type: 'string'},
];

export const CONDITION_OPERATORS = [
  '>',
  '<',
  '>=',
  '<=',
  '=',
  '!=',
  // 'IN', commented out since condition input doesn't support arrays yet :(
  'IS NULL',
  'IS NOT NULL',
  'LIKE',
  'NOT LIKE',
];

export const ARRAY_FIELD_PREFIXES = ['exception_stacks', 'exception_frames'];

export const NUMBER_OF_SERIES_BY_DAY = 10;
