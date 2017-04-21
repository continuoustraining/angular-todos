import {browser, element, by, protractor} from 'protractor';
import {WebElement} from "selenium-webdriver";
let fs = require('fs');

export class TodosContext {
  public fillTodoInput(text) {
    const input = this.getElementTodoInput();
    input.clear();
    return input.sendKeys(text);
  }

  public getElementTodoInput(): WebElement {
    return element(by.css('input[formcontrolname="label"]'));
  }

  public getLabels() {
    /*return element.all(by.css('app-todo h3')).reduce((acc, elem) => {
      return elem.getText().then((text) => {
        acc.push(text);
        return acc;
      })
    }, []);*/

    return element.all(by.css('app-todo h3')).map(el => el.getText());
  }

  public screenshot(fileName) {
    return browser.takeScreenshot().then((file) => {
      const filename = fileName + '.png';
      console.log('Taking screenshot: ' + filename);

      const stream = fs.createWriteStream('e2e/screenshot/' + filename);
      stream.write(new Buffer(file, 'base64'));
      stream.end();
    })
  }
}
