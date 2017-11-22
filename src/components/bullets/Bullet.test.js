import React from 'react'
import {shallow} from 'enzyme'
import Bullet from './Bullet'

describe("<Bullet />", () =>{
    let BulletWrapper;
    beforeEach(() => {
        BulletWrapper = shallow(<Bullet/>);
    });
    test("Components renders", () => {
        expect(BulletWrapper.find('.bullet')).toHaveLength(2);
    });

    test("render props", () => {
        expect(
            BulletWrapper.find("p")
            .first()
            .text()
        ).toEqual("prueba");
    });
});