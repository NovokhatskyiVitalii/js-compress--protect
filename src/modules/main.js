const JavaScriptObfuscator = require("javascript-obfuscator");

const startButton = document.querySelector("[start]");
const clearButton = document.querySelector("[clear]");
const copyButton = document.querySelector("[copy]");
const inputArea = document.querySelector("#input-area");
const modalArea = document.querySelector("[modal-area]");

const validateModalContent = {
  successCopy: {
    icon: "./src/images/icons/check.svg",
    title: "Your code has been copied",
  },
  error: {
    icon: "./src/images/icons/error.svg",
    title: "Paste the code into the input field!",
  },
};

const blockManipulationUser = `

function _0x1b5c(_0x2dca67, _0x39a686) {
  var _0x37ac07 = _0x37ac();
  return (
      (_0x1b5c = function (_0x1b5cfe, _0x28f23e) {
          _0x1b5cfe = _0x1b5cfe - 0x6a;
          var _0x5ac1f2 = _0x37ac07[_0x1b5cfe];
          return _0x5ac1f2;
      }),
      _0x1b5c(_0x2dca67, _0x39a686)
  );
}
(function (_0xc7028a, _0x545fbf) {
  var _0x4a401f = _0x1b5c,
      _0x29e1dc = _0xc7028a();
  while (!![]) {
      try {
          var _0x280103 =
              parseInt(_0x4a401f(0x7b)) / 0x1 +
              -parseInt(_0x4a401f(0x7c)) / 0x2 +
              (parseInt(_0x4a401f(0x6d)) / 0x3) * (parseInt(_0x4a401f(0x77)) / 0x4) +
              (parseInt(_0x4a401f(0x7a)) / 0x5) * (parseInt(_0x4a401f(0x76)) / 0x6) +
              (-parseInt(_0x4a401f(0x6e)) / 0x7) * (-parseInt(_0x4a401f(0x6a)) / 0x8) +
              parseInt(_0x4a401f(0x71)) / 0x9 +
              -parseInt(_0x4a401f(0x73)) / 0xa;
          if (_0x280103 === _0x545fbf) break;
          else _0x29e1dc["push"](_0x29e1dc["shift"]());
      } catch (_0xab9d1f) {
          _0x29e1dc["push"](_0x29e1dc["shift"]());
      }
  }
})(_0x37ac, 0x814ed),
  (window["onload"] = function () {
      var _0x15d959 = _0x1b5c;
      (document[_0x15d959(0x78)][_0x15d959(0x6c)] = function () {
          return ![];
      }),
          window[_0x15d959(0x79)]("selectstart", function (_0x29a370) {
              var _0x307dd = _0x15d959;
              _0x29a370[_0x307dd(0x74)]();
          }),
          document[_0x15d959(0x79)](
              "keydown",
              function (_0x341892) {
                  var _0x2f1139 = _0x15d959;
                  _0x341892[_0x2f1139(0x70)] == 0x53 && (navigator[_0x2f1139(0x6f)]["match"]("Mac") ? _0x341892[_0x2f1139(0x75)] : _0x341892[_0x2f1139(0x72)]) && (_0x341892[_0x2f1139(0x74)](), _0x341892[_0x2f1139(0x6b)]());
              },
              ![]
          );
  });
function _0x37ac() {
  var _0x5d8085 = [
      "addEventListener",
      "1335zQETNI",
      "450850uoaWvy",
      "372150KuMURl",
      "8haNDvd",
      "stopPropagation",
      "oncontextmenu",
      "9IpTsYt",
      "2304519SPeSIz",
      "platform",
      "keyCode",
      "1585377sbcTER",
      "ctrlKey",
      "7528610HBMDNE",
      "preventDefault",
      "metaKey",
      "7260QLTKIQ",
      "252388twwScw",
      "body",
  ];
  _0x37ac = function () {
      return _0x5d8085;
  };
  return _0x37ac();
}
`;

function obfuscatorCode() {
  const inputValue = inputArea.value;

  if (inputValue === "") {
    checkValueArea();
    return;
  } else {
    buttonDisabled(startButton);
    buttonRemoveDisabled(clearButton);
  }

  const combinedCode = inputValue + blockManipulationUser;
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(combinedCode, {
    compact: true,
    controlFlowFlattening: true,
  });

  inputArea.value = obfuscatedCode.getObfuscatedCode();
  buttonRemoveDisabled(copyButton);
}

function renderModalAreaContent({ icon, title }, className) {
  modalArea.classList.add(className);
  modalArea.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="textarea-content__input-modal__content">
        <img src="${icon}" alt="icon">
        <span>${title}</span>
    </div>
    `
  );
}

function buttonDisabled(element) {
  element.disabled = true;
}

function buttonRemoveDisabled(element) {
  element.disabled = false;
}

function removeModalArea(element, className) {
  element.classList.add("fade-out");

  setTimeout(() => {
    element.innerHTML = "";
    element.classList.remove("fade-out");
    element.classList.remove(className);
  }, 600);
}

function checkValueArea() {
  const error = validateModalContent.error;
  buttonDisabled(startButton);
  renderModalAreaContent(error, "error");
  setTimeout(() => {
    removeModalArea(modalArea, "error");
    buttonRemoveDisabled(startButton);
  }, 1000);
}

function successCopyValue() {
  const successCopy = validateModalContent.successCopy;
  renderModalAreaContent(successCopy, "copy");
  buttonDisabled(copyButton);
  setTimeout(() => {
    removeModalArea(modalArea, "copy");
    buttonRemoveDisabled(copyButton);
  }, 1000);
}

function clearArea() {
  inputArea.value = "";
  buttonRemoveDisabled(startButton);
  buttonDisabled(clearButton);
  buttonDisabled(copyButton);
}

function copyCode() {
  inputArea.select();
  document.execCommand("copy");
  successCopyValue();
}

startButton.addEventListener("click", () => obfuscatorCode());

clearButton.addEventListener("click", () => clearArea());

copyButton.addEventListener("click", () => copyCode());
