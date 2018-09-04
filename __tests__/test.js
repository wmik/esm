import test from "ava";
import pkg from "this";

test("pkg name", t => {
	t.is(pkg.name, "esm");
});
