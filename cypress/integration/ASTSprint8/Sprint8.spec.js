/// <reference types = "Cypress" />

//import pages
import LoginPage from '../../support/pageObject/LoginPage'
import DashboardPage from '../../support/pageObject/DashboardPage'
import LeftNavMenu from '../../support/pageObject/LeftNavMenu'
import ReceiveGoods_StoreKeepingPage from '../../support/pageObject/ReceiveGoods_StoreKeepingPage'
import AttributesAddPage from '../../support/pageObject/AttributesAddPage'
import LeaseAreaPage from '../../support/pageObject/LeaseAreaPage'
import LeaseAttributeMapping from '../../support/pageObject/LeaseAttributeMapping'
import LeaseAbleAssetPage from '../../support/pageObject/LeaseAbleAssetPage'
import ContractList from '../../support/pageObject/ContractList'


import CommonPage from '../../support/Common Pages/CommonPage'

describe('AST Sprint 8 Full test suite', function(){
    beforeEach(function(){             //load all data befofe all Test Case 
        cy.fixture('AssetStaging').then(function(ast){
            this.ast = ast
        })
        cy.visit(Cypress.env('url'))      //got url from cypress.json 
    })

    //Create page object
    const loginPage = new LoginPage()
    const dashboardPage = new DashboardPage()
    const leftNavMenu = new LeftNavMenu()
    const attributesAddPage = new AttributesAddPage()
    const receiveGoodsPage = new ReceiveGoods_StoreKeepingPage()
    const leaseAreaPage= new LeaseAreaPage()
    const leaseAttributeMapping= new LeaseAttributeMapping()
    const leaseableassetpage= new LeaseAbleAssetPage()
    const contractList= new ContractList()


    const commonPage= new CommonPage()



    it('TC_1 : GRP Valid Login', function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

    })
    
    it('TC_2 :Lease Asset Type ', function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)


        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
        leftNavMenu.getAssetTypeSubMenu().contains('সম্পদের ধরণ').click()
        cy.wait(2000) 
     


    })
    
    it('TC_3 : Create Lease Attribute ',function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
        leftNavMenu.getleaseAttributeSubMenu().contains('বৈশিষ্টসমূহ').click()
        cy.wait(3000) 
        receiveGoodsPage.getCardHeader().should('include.text', 'বৈশিষ্টসমূহের তালিকা')
        attributesAddPage.getAddAttributesButton().click()
        cy.wait(2000)
        attributesAddPage.getAttNameFieldEn().type(this.ast.attNameFieldEn)
        cy.wait(2000)
        attributesAddPage.getAttNameFieldBn().type(this.ast.attNameFieldBn)
        cy.wait(2000)
        attributesAddPage.getAttDescription().type(this.ast.attDescription)
        cy.wait(2000)
        attributesAddPage.getAttSubmit().click()
        cy.wait(2000)


    })

    it('TC_4 : Lease Attribute Mapping  ',function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
        leftNavMenu.getleaseAttributeMapping().contains('বৈশিষ্ট্য নির্ধারণ').click()
        cy.wait(3000) 
        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত বৈশিষ্টের তালিকা')
        leaseAttributeMapping.getAddAttributesButton().click()
        cy.wait(2000)

        leaseAttributeMapping.getSelectLeaseType().should('have.attr', 'aria-label', 'ইজারার ধরন').click()
        leaseAttributeMapping.getDropDownItem().contains(this.ast.leasetype).click()
        cy.wait(2000)

        leaseAttributeMapping.getSelectAttributeType().should('have.attr', 'aria-label', 'বৈশিষ্ট্য').click()
        leaseAttributeMapping.getDropDownItem().contains(this.ast.attributetype).click()
        cy.wait(2000)

       // leaseAttributeMapping.getSelectMandatoryField().click()
        //cy.wait(2000)
        leaseAttributeMapping.getAttMappingSubmit().click()
        cy.get(2000)

        commonPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        commonPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)    
              
    })
    
    it('TC_5: Create Lease Area ',function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
        leftNavMenu.getLeaseArea().contains('ইজারা এলাকা').click()
        cy.wait(3000) 
        receiveGoodsPage.getCardHeader().should('include.text', 'ইজারার এলাকার তালিকা')
        leaseAreaPage.getLeaseNameAddButton().click()
        cy.wait(2000)
        leaseAreaPage.getLeaseNameFieldEn().type(this.ast.leaseNameFieldEn)
        cy.wait(2000)
        leaseAreaPage.getLeaseNameFieldBn().type(this.ast.leaseNameFieldBn)
        cy.wait(2000)
        leaseAreaPage.getLeaseNameDescription().type(this.ast.leaseDescription)
        cy.wait(2000)
        leaseAreaPage.getLeaseAreaSubmit().click()
        cy.wait(2000)


    })

    it('TC_6: Leaseable Asset ',function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
        leftNavMenu.getLeaseAbleAsset().contains('ইজারাযোগ্য সম্পদ').click()
        cy.wait(2000) 


        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.area).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.type).click()
        cy.wait(2000)
        commonPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(2000)

       //জমি
        commonPage.getPlusButton().click()
        cy.wait(2000)
        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.leasetype0).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.leasearea0).click()
        cy.wait(2000)
        commonPage.getNameFieldEn().click().type(this.ast.leasetype0En)
        cy.wait(2000)
        commonPage.getNameFieldBn().click().type(this.ast.leasetype0Bn)
        cy.wait(2000)
        leaseableassetpage.getOldRefNo().click().type(this.ast.oldrefno)
        cy.wait(2000)
        leaseableassetpage.getOverAllComment().click().type(this.ast.overallcomment)
        cy.wait(2000)

        leaseableassetpage.getJLNoEn().click().type(this.ast.JLno)
        cy.wait(2000)
        leaseableassetpage.getJLNoBn().click().type(this.ast.JLno)
        cy.wait(2000)
       /* leaseableassetpage.getMoujaEn().click().type(this.ast.mouja)
        cy.wait(2000)
        leaseableassetpage.getMoujaBn().click().type(this.ast.mouja)
        cy.wait(2000)
        leaseableassetpage.getKhotiyanNoEn().click().type(this.ast.khotyanno)
        cy.wait(2000)
        leaseableassetpage.getKhotiyanNoBn().click().type(this.ast.khotyanno)
        cy.wait(2000)
        leaseableassetpage.getJomirPorimanEn().click().type(this.ast.jomirporiman)
        cy.wait(2000)
        leaseableassetpage.getJomirPorimanBn().click().type(this.ast.jomirporiman)
        cy.wait(2000)
        leaseableassetpage.getJomirSreniEn().click().type(this.ast.jomirsreni)
        cy.wait(2000)
        leaseableassetpage.getJomirSreniBn().click().type(this.ast.jomirsreni)
        cy.wait(2000)
        leaseableassetpage.getDaagNoEn().click().type(this.ast.daagno)
        cy.wait(2000)
        leaseableassetpage.getDaagNoBn().click().type(this.ast.daagno)
        cy.wait(2000)
        leaseableassetpage.getDecimalEn().click().type(this.ast.decimalno)
        cy.wait(2000)
        leaseableassetpage.getDecimalBn().click().type(this.ast.decimalno)
        cy.wait(2000)
*/
        commonPage.getSubmit().should('include.text','দাখিল করুন').click()
        cy.wait(2000)
        
        commonPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        commonPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)

        //ভবন

        commonPage.getPlusButton().click()
        cy.wait(2000)
        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.leasetype1).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.leasearea1).click()
        cy.wait(2000)
        leaseableassetpage.getParent().click()
        commonPage.getDropDownItem().contains(this.ast.parent1).click()
        cy.wait(2000)
        commonPage.getNameFieldEn().click().type(this.ast.leasetype1En)
        cy.wait(2000)
        commonPage.getNameFieldBn().click().type(this.ast.leasetype1Bn)
        cy.wait(2000)
        leaseableassetpage.getOldRefNo().click().type(this.ast.oldrefno1)
        cy.wait(2000)
        leaseableassetpage.getOverAllComment().click().type(this.ast.overallcomment1)
        cy.wait(2000)

/*
        leaseableassetpage.getJLNoEn().click().type(this.ast.upojogita)
        cy.wait(2000)
        leaseableassetpage.getJLNoBn().click().type(this.ast.upojogita)
        cy.wait(2000)
        leaseableassetpage.getMoujaEn().click().type(this.ast.apartmentno)
        cy.wait(2000)
        leaseableassetpage.getMoujaBn().click().type(this.ast.apartmentno)
        cy.wait(2000)

*/
        commonPage.getSubmit().should('include.text','দাখিল করুন').click()
        cy.wait(2000)       
        commonPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        commonPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)

       //তলা
        commonPage.getPlusButton().click()
        cy.wait(2000)
        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.leasetype2).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.leasearea2).click()
        cy.wait(2000)
        leaseableassetpage.getParent().click()
        commonPage.getDropDownItem().contains(this.ast.parent2).click()
        cy.wait(2000)
        commonPage.getNameFieldEn().click().type(this.ast.leasetype2En)
        cy.wait(2000)
        commonPage.getNameFieldBn().click().type(this.ast.leasetype2Bn)
        cy.wait(2000)
        leaseableassetpage.getOldRefNo().click().type(this.ast.oldrefno2)
        cy.wait(2000)
        leaseableassetpage.getOverAllComment().click().type(this.ast.overallcomment2)
        cy.wait(2000)

        commonPage.getSubmit().should('include.text','দাখিল করুন').click()
        cy.wait(2000)       
        commonPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        commonPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)

    // অ্যাপার্টমেন্ট
        commonPage.getPlusButton().click()
        cy.wait(2000)
        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.leasetype3).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.leasearea3).click()
        cy.wait(2000)
        leaseableassetpage.getParent().click()
        commonPage.getDropDownItem().contains(this.ast.parent3).click()
        cy.wait(2000)
        commonPage.getNameFieldEn().click().type(this.ast.leasetype3En)
        cy.wait(2000)
        commonPage.getNameFieldBn().click().type(this.ast.leasetype3Bn)
        cy.wait(2000)
        leaseableassetpage.getOldRefNo().click().type(this.ast.oldrefno3)
        cy.wait(2000)
        leaseableassetpage.getOverAllComment().click().type(this.ast.overallcomment3)
        cy.wait(2000)

        commonPage.getSubmit().should('include.text','দাখিল করুন').click()
        cy.wait(2000)       
        commonPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        commonPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)

  
          //কক্ষ
        commonPage.getPlusButton().click()
        cy.wait(2000)
        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.leasetype4).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.leasearea4).click()
        cy.wait(2000)
        leaseableassetpage.getParent().click()
        commonPage.getDropDownItem().contains(this.ast.parent4).click()
        cy.wait(2000)
        commonPage.getNameFieldEn().click().type(this.ast.leasetype4En)
        cy.wait(2000)
        commonPage.getNameFieldBn().click().type(this.ast.leasetype4Bn)
        cy.wait(2000)
        leaseableassetpage.getOldRefNo().click().type(this.ast.oldrefno4)
        cy.wait(2000)
        leaseableassetpage.getOverAllComment().click().type(this.ast.overallcomment4)
        cy.wait(2000)

        commonPage.getSubmit().should('include.text','দাখিল করুন').click()
        cy.wait(2000)       
        commonPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        commonPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)

        


    })

    it('TC_7 : New Contract Create ',function() {

        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
     //   leftNavMenu.getContractList().contains('চুক্তির তালিকা').click()  //for Staging 
        leftNavMenu.getContractList().contains('ইজারার চুক্তি').click()    //for SQA
        cy.wait(2000) 


        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.ijaradar).click()
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.area1).click()
        cy.wait(2000)
        commonPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(2000)

        commonPage.getPlusButton().click()
        cy.wait(2000)

        commonPage.getStartcalenderIcon().click()
        cy.wait(2000)

        cy.calendar(this.ast.StartYear, this.ast.StartMonth, this.ast.StartDay)
        cy.wait(2000)
        commonPage.getEndcalenderIcon().click()
        cy.wait(2000)
        cy.calendar(this.ast.StartYear, this.ast.StartMonth, this.ast.EndDay)
        cy.wait(2000)
        leaseableassetpage.getArea().click()
        commonPage.getDropDownItem().contains(this.ast.ijaradar).click()
        cy.wait(3000)
        contractList.getIjararPoriman().type(this.ast.ijaraporiman)
        cy.wait(2000)
        leaseableassetpage.getType().click()
        commonPage.getDropDownItem().contains(this.ast.durationtype).click()
        cy.wait(2000)
        contractList.getIjaraDhoron().type(this.ast.ijaradhoron)
        cy.wait(2000)
        contractList.getIjaraUddeshho().type(this.ast.ijarauddheshho)
        cy.wait(2000)
        
        contractList.getAddProperty().click()
        cy.wait(2000)

        contractList.getContractArea().click()
        commonPage.getDropDownItem().contains(this.ast.area).click()
        cy.wait(2000)
        //contractList.getRightArrow().click()
        //cy.wait(2000)
      //  contractList.getContactProperty().click()
       // commonPage.getDropDownItem().contains(this.ast.property).click()
       // cy.wait(2000)
        contractList.getContractPlusButton().click()
        cy.wait(2000)

        contractList.getContractAddButton().click()
        cy.wait(2000)

        contractList.getContractSaveButton().click()
        cy.wait(2000)

  
        
    })

    it.only('TC_8: Contract Renewal ',function(){
        loginPage.getUserNameField().should('have.attr', 'placeholder', 'ব্যবহারকারীর নাম').type(this.ast.username).should('have.value', this.ast.username)
        cy.wait(2000)
        loginPage.getPasswordField().type(this.ast.password)
        cy.wait(2000)
        loginPage.getEnterButton().click()
        cy.wait(2000)
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইজারা').click()
        cy.wait(1000)
        leftNavMenu.getContractRenewal().contains('চুক্তি নবায়ন').click()
        cy.wait(3000) 
       // receiveGoodsPage.getCardHeader().should('include.text', 'চুক্তির তালিকা')

       leaseableassetpage.getArea().click()
       commonPage.getDropDownItem().contains(this.ast.ijaradar).click()
       cy.wait(2000)

       commonPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
       cy.wait(2000)

       cy.pagination(this.ast.pagination)


       receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired পণ্যের নাম
        {
            const textItemGroup=$el.find('td.e-rowcell[aria-label]').text()
            //cy.log(textItemGroup)
            if(textItemGroup.includes(this.ast.ijaraporimanBn))                    
            {
                $el.find('td button mat-icon').click()
            }
        })

        cy.wait(3000)

        commonPage.getEndcalenderIcon().click()
        cy.wait(2000)
        cy.calendar(this.ast.StartYear, this.ast.EndMonth, this.ast.EndDay1)
        cy.wait(2000)
       
        contractList.getContractSaveButton().click()
        cy.wait(2000)

       

    })



    

})