import Content from "./Content.svelte";
import styles from "./Content.css";
import { withMount } from "../utils/withMount";

export const mount = withMount(Content, styles);
