/* Copyright (C) 2021, by Quzzar
  This code is licensed under MIT license (see LICENSE for details)
*/

LoadLoop();

function LoadLoop(){

  processChecks();
  processDamage();
  processGeneralText();

  setTimeout(LoadLoop, 1500);// 1.5 seconds
}


function processChecks() {

  $('.roll:not(.TSExtensionAttacksModified)').each(function() {
    
    let bonusText = '';
    let label = '';
    try {
      bonusText = $(this).find('.bonus').val();
      label = $(this).find('.tipo').val();
    } catch (err) {}

    $(this).html(linkGenerator(bonusText, true, $(this).text(), label));
    
    $(this).removeClass('roll');
    $(this).attr('data-toggle', '');
    $(this).attr('data-html', '');
    $(this).attr('data-original-title', '');
    $(this).addClass('TSExtensionAttacksModified');

  });

}


function processDamage() {

  $('.roll2:not(.TSExtensionAttacksModified)').each(function() {
    
    let damageText = $(this).find('.bonus').val();

    let label = '';
    try {
      label = $(this).find('.tipo').val();
    } catch (err) {}

    $(this).html(linkGenerator(damageText, false, '', label));
    
    $(this).removeClass('roll2');
    $(this).attr('data-toggle', '');
    $(this).attr('data-html', '');
    $(this).attr('data-original-title', '');
    $(this).addClass('TSExtensionAttacksModified');

  });

}


function processGeneralText(){

  $('p:not(.TSExtensionAttacksModified)').each(function() {

    let textHTML = $(this).html().replace(REGEX_DAMAGE, function(match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
      return startSpace+linkGenerator(match.substring(startSpace.length), false, '', '');
    });
    $(this).html(textHTML);
    $(this).addClass('TSExtensionAttacksModified');

  });

}