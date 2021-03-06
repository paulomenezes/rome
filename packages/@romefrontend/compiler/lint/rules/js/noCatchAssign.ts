/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Path} from "@romefrontend/compiler";
import {AnyNode} from "@romefrontend/ast";
import {descriptions} from "@romefrontend/diagnostics";

export default {
	name: "noCatchAssign",
	enter(path: Path): AnyNode {
		const {node, context, scope} = path;

		if (node.type === "JSAssignmentIdentifier") {
			const binding = scope.getBinding(node.name);

			if (binding !== undefined && binding.kind === "catch") {
				context.addNodeDiagnostic(node, descriptions.LINT.JS_NO_CATCH_ASSIGN);
			}
		}

		return node;
	},
};
