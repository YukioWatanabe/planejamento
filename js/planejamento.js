var Planejamento = (function(){
	
	var init = function(){

		$('#botaoBuscar').on('click', function(e){

			e.preventDefault();
            
            var Classificacao = function (sigla,nome){
                this.sigla = sigla;
                this.nome = nome;
                return this;
            }
            
            var classificacoes = {
                110 : new Classificacao("PSE","PSE"),
                120 : new Classificacao("CM","Comitê/Melhoria"),
                130 : new Classificacao("MI","Melhoria Interna"),
                140 : new Classificacao("NF","Novas Funcionalidades")
            }
            
			var registros = getRegistrosPorIterecaoLider();
            
            for(let registro of registros){
                registro.CLASSIFICACAOPROJETO = classificacoes[registro.CLASSIFICACAOPROJETO];
                registro.TEMPOPREVISTO = registro.TEMPOPREVISTO/3600;
            }

			escrevePostIts(registros);

		});
	};

	var getRegistrosPorIterecaoLider = function(){

		return [{"CODIGOSOLITACAO":"7406","TITULIATIVIDADE":"DOCUMENTAÇÃO: Implementar o módulo do eSocial para o evento S-2230 versão 2.2","CLASSIFICACAOPROJETO":"130","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"41","TIPOPROJETO":"1","TITULOSOLICITACAO":"Atendimento ao eSocial Versão 2.2 (17/08/2016) - Layout 2230","ETAPAPROJETO":"4","TEMPOPREVISTO":"0","NOME":"LG INFORMATICA S/A ","PRIORIDADESOLICITACAO":"4","LT_COLABORADOR":"20383"},{"CODIGOSOLITACAO":"7888","TITULIATIVIDADE":"DOCUMENTAÇÃO: Criar restrição para emissão de ASOs sem médico coordenador","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"5","TIPOPROJETO":"1","TITULOSOLICITACAO":"Responsabilidade (Médico Coordenador)","ETAPAPROJETO":"4","TEMPOPREVISTO":"0","NOME":"Maxipas - Franquia Ponta Grossa (Principal)","PRIORIDADESOLICITACAO":"4","LT_COLABORADOR":"20383"},{"CODIGOSOLITACAO":"7869","TITULIATIVIDADE":"DOCUMENTAÇÃO: Aplicar regra de limite de registros ao relatório de Listagem de Funcionários","CLASSIFICACAOPROJETO":"130","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"5","TIPOPROJETO":"1","TITULOSOLICITACAO":"Listagem de Funcionários Todas as empresas","ETAPAPROJETO":"4","TEMPOPREVISTO":"0","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"4","LT_COLABORADOR":"20383"},{"CODIGOSOLITACAO":"7280","TITULIATIVIDADE":"DOCUMENTAÇÃO: Bloquear alterações do mandato da CIPA","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"5","TIPOPROJETO":"1","TITULOSOLICITACAO":"Mandato","ETAPAPROJETO":"4","TEMPOPREVISTO":"0","NOME":"CENTRAL DE ATENDIMENTO SOC","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"20383"},{"CODIGOSOLITACAO":"7900","TITULIATIVIDADE":"Correção/ Ajustes no código - após analise do P.O e Scrum","CLASSIFICACAOPROJETO":"130","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"20","TIPOPROJETO":"1","TITULOSOLICITACAO":"Tela de Digitação Rápida - SOCNET","ETAPAPROJETO":"2","TEMPOPREVISTO":"0","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"4","LT_COLABORADOR":"108938"},{"CODIGOSOLITACAO":"7418","TITULIATIVIDADE":"Log de Ações - Mostrar quem fez \"Atualização dos riscos com PCMSO atual\"","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"3","TIPOPROJETO":"1","TITULOSOLICITACAO":"Log de Ações - Mostrar quem fez \"Atualização dos riscos com PCMSO atual\"","ETAPAPROJETO":"2","TEMPOPREVISTO":"10800","NOME":"Maxipas Saúde Ocupacional Ltda - Matriz (Principal)","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":""},{"CODIGOSOLITACAO":"7900","TITULIATIVIDADE":"Apresentação do projeto: Tela de Digitação Rápida - SOCNET","CLASSIFICACAOPROJETO":"130","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"15","TIPOPROJETO":"1","TITULOSOLICITACAO":"Tela de Digitação Rápida - SOCNET","ETAPAPROJETO":"1","TEMPOPREVISTO":"3600","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"4","LT_COLABORADOR":"192807,108938,39851,20391"},{"CODIGOSOLITACAO":"7725","TITULIATIVIDADE":"Analisar necessidade de aplicar a regra no relatório XLS","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"12","TIPOPROJETO":"1","TITULOSOLICITACAO":"Sigla de Conselho de Classe - Cadastro de Especialidades","ETAPAPROJETO":"1","TEMPOPREVISTO":"0","NOME":"CLINICA LIDER","PRIORIDADESOLICITACAO":"","LT_COLABORADOR":""},{"CODIGOSOLITACAO":"7955","TITULIATIVIDADE":"Acompanhamento dos testes no P-SOC - Novo Relatório de Exames Realizados - Santander Filtros GH´s","CLASSIFICACAOPROJETO":"110","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"13","TIPOPROJETO":"1","TITULOSOLICITACAO":"Relatório de Exames Realizados- Filtro GH´s","ETAPAPROJETO":"1","TEMPOPREVISTO":"21600","NOME":"SANTANDER SA","PRIORIDADESOLICITACAO":"5","LT_COLABORADOR":"39851"},{"CODIGOSOLITACAO":"8019","TITULIATIVIDADE":"Sugestão de Layout: Criar um recurso para melhorara gerenciar a tela de agenda mensal com recurso de transferir agendamento","CLASSIFICACAOPROJETO":"140","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"34","TIPOPROJETO":"1","TITULOSOLICITACAO":"SOC Assistencial - Novas melhorias Agenda","ETAPAPROJETO":"2","TEMPOPREVISTO":"64800","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"196182,196181"},{"CODIGOSOLITACAO":"7811","TITULIATIVIDADE":"Alterar na tela de Exames pra adequação da versão 2.2 eSocial","CLASSIFICACAOPROJETO":"130","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"10","TIPOPROJETO":"1","TITULOSOLICITACAO":"Adequação do SOC ao manual 2.2 do eSocial - Eventos: 1060, 2210, 2220","ETAPAPROJETO":"2","TEMPOPREVISTO":"43200","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":""},{"CODIGOSOLITACAO":"8019","TITULIATIVIDADE":"Análise do projeto piloto de integração da agenda SOC com a agenda google","CLASSIFICACAOPROJETO":"140","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"28","TIPOPROJETO":"1","TITULOSOLICITACAO":"SOC Assistencial - Novas melhorias Agenda","ETAPAPROJETO":"1","TEMPOPREVISTO":"7200","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"192807,20391"},{"CODIGOSOLITACAO":"8019","TITULIATIVIDADE":"Criar um projeto piloto de integração da agenda SOC x Calendar google","CLASSIFICACAOPROJETO":"140","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"37","TIPOPROJETO":"1","TITULOSOLICITACAO":"SOC Assistencial - Novas melhorias Agenda","ETAPAPROJETO":"2","TEMPOPREVISTO":"21600","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"192807"},{"CODIGOSOLITACAO":"6106","TITULIATIVIDADE":"Definição do escopo e criação das atividades, para atender ao MSO 2.2 - Relatório de inconsistência do eSocial","CLASSIFICACAOPROJETO":"140","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"31","TIPOPROJETO":"1","TITULOSOLICITACAO":"Relatório de Inconsistências do SOC / eSocial","ETAPAPROJETO":"1","TEMPOPREVISTO":"10800","NOME":"Administração AGE","PRIORIDADESOLICITACAO":"","LT_COLABORADOR":"20391"},{"CODIGOSOLITACAO":"7478","TITULIATIVIDADE":"Analise do projeto, definição do escopo e criação de atividades - Relatório de Listagem de Funcionario","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"1","TIPOPROJETO":"1","TITULOSOLICITACAO":"Relatório de Listagem de Funcionario","ETAPAPROJETO":"1","TEMPOPREVISTO":"0","NOME":"NEXUS MEDICINA OCUP. AUDIT. E GESTAO EM SAUDE LTDA","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":""},{"CODIGOSOLITACAO":"7277","TITULIATIVIDADE":"Gerência Projeto: Questionários CIPA - Funcionários inativos","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"2","TIPOPROJETO":"1","TITULOSOLICITACAO":"Questionários CIPA - Funcionários inativos","ETAPAPROJETO":"6","TEMPOPREVISTO":"900","NOME":"CENTRAL DE ATENDIMENTO SOC","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"20391"},{"CODIGOSOLITACAO":"7277","TITULIATIVIDADE":"Implementar regra no pop-up de funcionário do módulo de questionários","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"3","TIPOPROJETO":"1","TITULOSOLICITACAO":"Questionários CIPA - Funcionários inativos","ETAPAPROJETO":"2","TEMPOPREVISTO":"10800","NOME":"CENTRAL DE ATENDIMENTO SOC","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"108938"},{"CODIGOSOLITACAO":"7291","TITULIATIVIDADE":"Liberar o recurso de consultar log do Exporta Dados","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"3","TIPOPROJETO":"1","TITULOSOLICITACAO":"Log de Ações Exporta Dados","ETAPAPROJETO":"2","TEMPOPREVISTO":"5400","NOME":"Matriz - Grupo SOC (Corporativo)","PRIORIDADESOLICITACAO":"2","LT_COLABORADOR":""},{"CODIGOSOLITACAO":"7275","TITULIATIVIDADE":"TESTE: Tela Validade da característica do Risco (não ter opção \"em branco\")","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"4","TIPOPROJETO":"1","TITULOSOLICITACAO":"Tela Validade da característica do Risco (não ter opção \"em branco\")","ETAPAPROJETO":"3","TEMPOPREVISTO":"7200","NOME":"Maxipas Saúde Ocupacional Ltda - Matriz (Principal)","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"38976"},{"CODIGOSOLITACAO":"7347","TITULIATIVIDADE":"TESTE: Criar um pop-up das configurações dos Exporta Dados","CLASSIFICACAOPROJETO":"120","COMPLEXIDADEATIVIDADE":"","CODIGOATIVIDADE":"4","TIPOPROJETO":"1","TITULOSOLICITACAO":"Exporta Dados - Filtros","ETAPAPROJETO":"3","TEMPOPREVISTO":"7200","NOME":"CENTRAL DE ATENDIMENTO SOC","PRIORIDADESOLICITACAO":"3","LT_COLABORADOR":"38976"}];

	};

	var escrevePostIts = function(registros){
        
        

		var $divPostIts = $('#divPostIts');

		$divPostIts.find('.postit').remove();

		$.each(registros, function(i, registro){

			var novoPostIt = $('<div>').addClass('postit pequeno add');

			$('<span>', {text : registro.CODIGOSOLITACAO+':'+registro.CODIGOATIVIDADE}).addClass('atividade').appendTo(novoPostIt);
			$('<span>', {text : '['+registro.TEMPOPREVISTO+']'}).addClass('tempo').appendTo(novoPostIt);
			$('<span>', {text : registro.TITULIATIVIDADE}).addClass('descricao').appendTo(novoPostIt);
			$('<span>', {text : registro.CLASSIFICACAOPROJETO.sigla}).addClass('tipo').appendTo(novoPostIt);
			$('<span>', {text : registro.PRIORIDADESOLICITACAO}).addClass('prioridade').appendTo(novoPostIt);

			novoPostIt.data('objetodados', registro);

			$divPostIts.append(novoPostIt);

		});

		$("#divPostIts > .postit").draggable({
            revert: "invalid",
            connectToSortable: ".complexidade, .prioridade",
            cursor: "move",
            stop : function(event, ui){

                var classeComplexidade = ui.helper.parent().data('class_complexidade');
                var prioridade = ui.helper.parent().data('numero_prioridade');

                if(classeComplexidade){
                	$(this).removeClass('add comp-baixa comp-media comp-alta').addClass(classeComplexidade);
                }

                if(prioridade){
                	$(this).find('span.prioridade').html(prioridade).css({color : 'green'});
                }
            }
        });
	};

	return {

		init : init,
		getRegistrosPorIterecaoLider : getRegistrosPorIterecaoLider,
		escrevePostIts : escrevePostIts

	}

})();
