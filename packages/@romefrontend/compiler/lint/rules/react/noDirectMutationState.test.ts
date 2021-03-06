import {test} from "rome";
import {testLint} from "../../utils/testing";

test(
	"Prevent direct mutation of this.state",
	async (t) => {
		await testLint(
			t,
			{
				invalid: [
					`
          class Hello extends React.Component {
            testFunc() {
              this.state.foo++;
              return <div>Hello {this.props.name}</div>;
            }
          }
          `,
					`
          class Hello extends React.Component {
            testFunc() {
              --this.state.foo;
              return <div>Hello {this.props.name}</div>;
            }
          }
          `,
					`
          class Hello extends React.Component {
            testFunc() {
              this.state.foo += "bar";
              return <div>Hello {this.props.name}</div>;
            }
          }
          `,
					`
          class Hello extends React.Component {
            testFunc() {
              delete this.state.foo;
              return <div>Hello {this.props.name}</div>;
            }
          }
          `,
					`
            class Hello extends React.Component {
              testFunc() {
                this.state.person.name.first = "bar";
                return <div>Hello</div>;
              }
            }
          `,
					`
            class Hello extends React.Component {
              testFunc() {
                this.state.person.name.first = "bar";
                this.state.person.name.last = "baz";
                return <div>Hello</div>;
              }
            }
          `,
					`
            class Hello extends React.Component {
              constructor() {
                someFn()
              }
              someFn() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              constructor(props) {
                super(props)
                doSomethingAsync(() => {
                  this.state = "bad";
                });
              }
            }
          `,
					`
            class Hello extends React.Component {
              componentWillMount() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              componentDidMount() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              componentWillReceiveProps() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              shouldComponentUpdate() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              componentWillUpdate() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              componentDidUpdate() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.Component {
              componentWillUnmount() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends Component {
              componentWillUnmount() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.PureComponent {
              componentWillUnmount() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends PureComponent {
              componentWillUnmount() {
                this.state.foo = "bar";
              }
            }
          `,
				],
				valid: [
					`
            class Hello extends React.Component {
              testFunc() {
                var obj = {state: {}};
                obj.state.name = "foo";
                return <div>Hello {obj.state.name}</div>;
              }
            }
          `,
					`
            var Hello = "foo";
            module.exports = {};
          `,
					`
            class Hello {
              getFoo() {
                this.state.foo = \'bar\';
                return this.state.foo;
              }
            }
					`,
					`
            class Hello extends React.Component {
              constructor() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends Component {
              constructor() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends React.PureComponent {
              constructor() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class Hello extends PureComponent {
              constructor() {
                this.state.foo = "bar";
              }
            }
          `,
					`
            class OneComponent extends Component {
              constructor() {
                super();
                class AnotherComponent extends Component {
                  constructor() {
                    super();
                  }
                }
                this.state = {};
              }
            }
          `,
					`
            class Hello extends React.Component {
              testFunc() {
                typeof this.state.person.name;
                return <div>Hello {this.props.name}</div>;
              }
            }
          `,
					`
            class Example extends React.Component {
              constructor(props) {
                super(props);
                this.state = {
                  count: 0
                };
              }
            }
          `,
					`
            class Example {
              constructor(props) {
                super(props);
                this.state = {
                  count: 0
                };
              }
            }
          `,
					`
            class Example extends SuperExample {
              constructor(props) {
                super(props);
                this.state = {
                  count: 0
                };
              }
            }
          `,
					`
            class Example extends React.SuperExample {
              constructor(props) {
                super(props);
                this.state = {
                  count: 0
                };
              }
            }
          `,
					`
            class Example extends SuperExample.Component {
              constructor(props) {
                super(props);
                this.state = {
                  count: 0
                };
              }
            }
					`,
					`
            class Example extends SuperExample.Component {
              someOtherFunction(props) {
                this.state = {
                  count: 0
                };
              }
            }
          `,
				],
			},
			{category: "lint/react/noDirectMutationState"},
		);
	},
);
