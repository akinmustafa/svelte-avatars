# Svelte Avatars

A customizable avatar component for Svelte, improved version of the svelte-avatar component.

## Installation

`npm install svelte-avatars` or `yarn add svelte-avatars`

## Usage Example

```
<script>
  import Avatar from "svelte-avatar";
</script>

<Avatar name="Rich Harris" alt="A very cool guy." src="https://avatars.githubusercontent.com/u/1162160?v=4" />
```

## Properties

| Name  | Required | Type  | Default | Description |
| ------------- |:-------------| :------------- | :------------- | :-------------
| style      | No     | String | - | Style property for the avatar wrapper. |
| src      | No     | String | - | Path to the avatar image to display. |
| alt      | Recommended     | String | Avatar | Image alternate text. |
| name      | No     | String | Avatar | The name that will be used to compute user initial. |
| initials      | No     | String | - | Override the computed initials. |
| bgColor      | No    | String | Gainsboro | The avatar background color. |
| textColor      | No     | String | Black | Text color of the avatar initials. |
| size      | No     | String | 64px | The avatar size. |
| borderRadius      | No     | String | 50% | Border-radius of the avatar. |
| square      | No     | Boolean | False | If true, avatar will be a square |
| randomBgColor      | No     | Boolean | False | If true, avatar background will be colored randomly. |
| boxShadow      | No     | String | - | Add box-shadow to the avatar. |

## Supporting
Contributions are welcome, you can also leave a star.

## License
Released under MIT license.