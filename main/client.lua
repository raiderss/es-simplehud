Citizen.CreateThread(function()
 while true do
   Citizen.Wait(500)
   local playerPed = PlayerPedId()
   local health = GetEntityHealth(playerPed)
     SendNUIMessage({
       action = 'health',
       health = GetEntityHealth(playerPed) - 100,
       armor = GetPedArmour(playerPed)
   })
 end
end)

Citizen.CreateThread(function()
  while true do
      local ped = PlayerPedId()
      local vehicle = GetVehiclePedIsIn(ped) 
      if IsPedInVehicle(ped, vehicle, true) and GetPedInVehicleSeat(vehicle, -1) == ped then
          Citizen.Wait(175)-- 175
          SendNUIMessage({
              action = 'vehicle',
          })
      else
          SendNUIMessage({ action = 'notvehicle' })
          Citizen.Wait(500)
      end
 end
end)

Citizen.CreateThread(function()
      Citizen.Wait(500)
        TriggerEvent('esx_status:getStatus', 'hunger', function(hunger)
          TriggerEvent('esx_status:getStatus', 'thirst', function(thirst)
              SendNUIMessage({
                  action = "status",
                  hunger = hunger.getPercent(),
                  thirst = thirst.getPercent()
              })
          end)
      end)
  end)

  RegisterNetEvent("esx_status:onTick")
         AddEventHandler("esx_status:onTick", function(data)
             for _,v in pairs(data) do
                 if v.name == "hunger" then
                     SendNUIMessage({
                         action = "hunger",
                         hunger = v.percent
                     })
                 elseif v.name == "thirst" then
                    SendNUIMessage({
                      action = "thirst",
                      thirst = v.percent
                  })
                 end
             end
      end)
      
        RegisterNetEvent('esx_status:update')
        AddEventHandler('esx_status:update', function(data)
          for _,v in pairs(data) do
            if v.name == "hunger" then
              SendNUIMessage({
                action = "hunger",
                thirst = v.pencent
            })
            elseif v.name == "thirst" then
              SendNUIMessage({
                action = "thirst",
                thirst = v.pencent
            })
            end
        end
  end)