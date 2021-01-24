local ws, err = http.websocket("ws://cc.nagon.fi:2021/ws")
local p = peripheral.wrap('left')

function sendEnergy(ws, energyValue, energyCapacity)
    local str = textutils.serializeJSON({ energy = energyValue, capacity = energyCapacity })
    ws.send(str)
end

while ws ~= nil do
    sendEnergy(ws, p.getEnergy(), p.getEnergyCapacity())
    os.sleep(10)
end

print(err)
print('Done')