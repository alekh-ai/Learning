// Action - Buttons
const _clear = document.querySelector("#clear");
const _delete = document.querySelector("#delete");
const _result = document.querySelector("#result");

const currentState = document.querySelector(".current");
const historyState = document.querySelector(".history");

// Operation Buttons
const _sub = document.querySelector("#sub");
const _mul = document.querySelector("#mul");
const _div = document.querySelector("#div");
const _add = document.querySelector("#add");

// Global Variables
let total = 0;
let newState = "";
let oldState = "";
onScreen = "";
lastOperation = "";
toSub = [];

const reset = () => {
	total = 0;
	newState = "";
	oldState = "";
	onScreen = "";
	toSub = [];
	lastOperation = "";
};

const renderOutput = (state) => {
	currentState.innerText = state;
};

// Operations
const onSubtraction = () => {
	lastOperation = "sub";
	if (toSub.length > 0) {
		toSub[0] = toSub[0] - Number(newState);
		newState = "";
		renderOutput(toSub[0]);
		return;
	}
	toSub.push(Number(newState));
	newState = "";
};

const onMultiplication = () => {
	lastOperation = "mul";
	if (toSub.length > 0) {
		toSub[0] = toSub[0] * Number(newState);
		newState = "";
		renderOutput(toSub[0]);
		return;
	}
	toSub.push(Number(newState));
	newState = "";
};

const onDivide = () => {
	lastOperation = "div";
	if (toSub.length > 0) {
		toSub[0] = toSub[0] / Number(newState);
		newState = "";
		renderOutput(toSub[0]);
		return;
	}
	toSub.push(Number(newState));
	newState = "";
};

const onAddition = () => {
	lastOperation = "add";
	if (toSub.length > 0) {
		toSub[0] = toSub[0] + Number(newState);
		newState = "";
		renderOutput(toSub[0]);
		return;
	}
	toSub.push(Number(newState));
	newState = "";
};

// Functions
function onClear() {
	reset();
	renderOutput(total);
	console.log("Erased Done!");
}

function onResult() {
	if (lastOperation == "sub") {
		let result = toSub[0] - Number(newState);
		renderOutput(result);
		reset();
	} else if (lastOperation == "mul") {
		let result = toSub[0] * Number(newState);
		renderOutput(result);
		reset();
	} else if (lastOperation == "div") {
		let result = toSub[0] / Number(newState);
		renderOutput(result);
		reset();
	} else if (lastOperation == "add") {
		let result = toSub[0] + Number(newState);
		renderOutput(result);
		reset();
	} else {
		renderOutput(total);
		reset();
	}
}

function sendNum(n) {
	newState += n;
	renderOutput(newState);
}

function calculate() {}

// Event Listeners
_clear.addEventListener("click", () => {
	onClear();
});
_result.addEventListener("click", () => {
	onResult();
});
_sub.addEventListener("click", () => {
	onSubtraction();
});
_mul.addEventListener("click", () => {
	onMultiplication();
});
_add.addEventListener("click", () => {
	onAddition();
});
_div.addEventListener("click", () => {
	onDivide();
});
